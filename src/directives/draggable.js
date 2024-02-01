/*
Credits to Directive draggable-vue-directive vue 2
I'm Rewrite this directive for vue 3 with transform translate and widthout typescrpit
url: https://github.com/IsraelZablianov/draggable-vue-directive
*/

const ChangePositionType = {
	Start: 1,
	End: 2,
	Move: 3,
}

function extractHandle(handle) {
	return handle && (handle).$el || handle;
}

function getPosWithBoundaries(elementRect, boundingRect, left, top, boundingRectMargin = {}) {
	const adjustedPos = { left, top };
	const { height, width } = elementRect;
	const topRect = top,
		bottomRect = top + height,
		leftRect = left,
		rightRect = left + width;
	const marginTop = boundingRectMargin.top || 0,
		marginBottom = boundingRectMargin.bottom || 0,
		marginLeft = boundingRectMargin.left || 0,
		marginRight = boundingRectMargin.right || 0;
	const topBoundary = boundingRect.top + marginTop,
		bottomBoundary = boundingRect.bottom - marginBottom,
		leftBoundary = boundingRect.left + marginLeft,
		rightBoundary = boundingRect.right - marginRight;
	if (topRect < topBoundary) {
		adjustedPos.top = topBoundary;
	}
	else if (bottomRect > bottomBoundary) {
		adjustedPos.top = bottomBoundary - height;
	}
	if (leftRect < leftBoundary) {
		adjustedPos.left = leftBoundary;
	}
	else if (rightRect > rightBoundary) {
		adjustedPos.left = rightBoundary - width;
	}
	return adjustedPos;
}

export const Draggable = {
	beforeMount(el, binding) {
		Draggable.updated(el, binding);
	},
	updated(el, binding) {
		if (binding.value && binding.value.stopDragging) {
			return;
		}
		const handler = (binding.value && binding.value.handle && extractHandle(binding.value.handle)) || el;
		if (binding && binding.value && binding.value.resetInitialPos) {
			initializeState();
			handlePositionChanged();
		}
		if (!handler.getAttribute("draggable")) {
			el.removeEventListener("mousedown", (el)["listener"]);
			handler.addEventListener("mousedown", moveStart);
			el.removeEventListener("touchstart", (el)["listener"]);
			handler.addEventListener("touchstart", moveStart, { passive: false });
			handler.setAttribute("draggable", "true");
			(el)["listener"] = moveStart;
			initializeState();
			handlePositionChanged();
		}

		function move(event) {
			event.preventDefault();

			const stopDragging = binding.value && binding.value.stopDragging;
			if (stopDragging) {
				return;
			}

			let state = getState();
			if (!state.startDragPosition || !state.initialMousePos) {
				initializeState(event);
				state = getState();
			}

			const pos = getInitialMousePosition(event);
			let dx = pos.left - state.initialMousePos.left;
			let dy = pos.top - state.initialMousePos.top;

			let currentDragPosition = {
				left: state.startDragPosition.left + dx,
				top: state.startDragPosition.top + dy
			};

			const boundingRect = getBoundingRect();
			const elementRect = el.getBoundingClientRect();

			if (boundingRect && elementRect) {
				currentDragPosition = getPosWithBoundaries(
					elementRect,
					boundingRect,
					currentDragPosition.left,
					currentDragPosition.top,
					binding.value.boundingRectMargin
				);
			}

			setState({ currentDragPosition });
			updateElementStyle();
			handlePositionChanged(event);
		}

		function getBoundingRect() {
			if (!binding.value) {
				return;
			}

			return binding.value.boundingRect
				|| binding.value.boundingElement
				&& binding.value.boundingElement.getBoundingClientRect();
		}

		function updateElementStyle() {
			const state = getState();
			if (!state.currentDragPosition) {
				return;
			}

			el.style.touchAction = "none";
			el.style.transform = `translate(${state.currentDragPosition.left}px, ${state.currentDragPosition.top}px)`;
		}

		function moveEnd(event) {
			event.preventDefault();
			document.removeEventListener("mousemove", move);
			document.removeEventListener("mouseup", moveEnd);
			document.removeEventListener("touchmove", move);
			document.removeEventListener("touchend", moveEnd);

			const currentRectPosition = getRectPosition();
			setState({
				initialMousePos: undefined,
				startDragPosition: currentRectPosition,
				currentDragPosition: currentRectPosition
			});

			handlePositionChanged(event, ChangePositionType.End);
		}

		function moveStart(event) {
			setState({ initialMousePos: getInitialMousePosition(event) });
			handlePositionChanged(event, ChangePositionType.Start);
			document.addEventListener("mousemove", move);
			document.addEventListener("mouseup", moveEnd);
			document.addEventListener("touchmove", move);
			document.addEventListener("touchend", moveEnd);
		}

		function getInitialMousePosition(event) {
			if (window.MouseEvent && event instanceof MouseEvent) {
				return {
					left: event.clientX,
					top: event.clientY
				}
			}
			if (window.TouchEvent && event instanceof TouchEvent) {
				const touch = event.changedTouches[event.changedTouches.length - 1];
				return {
					left: touch.clientX,
					top: touch.clientY
				}
			}
		}

		function getRectPosition() {
			const clientRect = el.getBoundingClientRect();
			if (!clientRect.height || !clientRect.width) {
				return;
			}
			return { left: clientRect.left, top: clientRect.top };
		}

		function initializeState(event) {
			const state = getState();
			const initialRectPositionFromBinding = binding && binding.value && binding.value.initialPosition;
			const initialRectPositionFromState = state.initialPosition;
			const startingDragPosition = getRectPosition();
			const initialPosition = initialRectPositionFromBinding || initialRectPositionFromState || startingDragPosition;

			setState({
				initialPosition: initialPosition,
				startDragPosition: initialPosition,
				currentDragPosition: initialPosition,
				initialMousePos: getInitialMousePosition(event)
			});
			updateElementStyle();
		}

		function setState(partialState) {
			const prevState = getState();
			const state = {
				...prevState,
				...partialState
			};
			handler.setAttribute("draggable-state", JSON.stringify(state));
		}

		function handlePositionChanged(event, changePositionType) {
			const state = getState();
			const posDiff = { x: 0, y: 0 };
			if (state.currentDragPosition && state.startDragPosition) {
				posDiff.x = state.currentDragPosition.left - state.startDragPosition.left;
				posDiff.y = state.currentDragPosition.top - state.startDragPosition.top;
			}
			const currentPosition = state.currentDragPosition && { ...state.currentDragPosition };

			if (changePositionType === ChangePositionType.End) {
				binding.value && binding.value.onDragEnd && state && binding.value.onDragEnd(posDiff, currentPosition, event);
			}
			else if (changePositionType === ChangePositionType.Start) {
				binding.value && binding.value.onDragStart && state && binding.value.onDragStart(posDiff, currentPosition, event);
			}
			else {
				binding.value && binding.value.onPositionChange && state && binding.value.onPositionChange(posDiff, currentPosition, event);
			}
		}

		function getState() {
			return JSON.parse(handler.getAttribute("draggable-state")) || {};
		}
	}
};
