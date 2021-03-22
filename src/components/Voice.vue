<template>
  <section class='App-voice' :class="{'active': voice }">
    <button class="exit" type="button" @click="disableVoice()"><i class="icon icon-exit">X</i></button>
    <p>Fale agora</p>
    <button type="button" class='btn-voice' :class="{'active': animationButton}" @click="desactiveVoice">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M17 11.998c0 2.76-2.23 5-4.99 5l-.002.002a4.994 4.994 0 01-4.979-5h-2c0 3.52 2.59 6.433 5.98 6.92v3.078h.01V22h2v-3.08h-.01A6.982 6.982 0 0019 11.998z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/>
      </svg>
    </button>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VoiceApp',
  computed: mapState({
    voice: state => state.voice,
    search: state => state.search,
  }),
  data() {
    return {
      final_transcript: '',
      recognizing: false,
      ignore_onend: null,
      recognition: null,
      animationButton: false,
    }
  },
  mounted() {
    this.voiceSetup()
    this.voice ? this.activeVoice() : this.desactiveVoice()
  },
  updated() {
    this.voice ? this.activeVoice() : this.desactiveVoice()
  },
  methods: {
    disableVoice () {
      this.$store.commit("updateVoice", false)
      this.desactiveVoice()
    },
    activeVoice() {
      if(!this.recognizing) {
        this.recognizing = true;
        this.final_transcript = '';
        this.recognition.start();
      }
    },
    desactiveVoice() {
      if(this.recognizing) {
        this.recognizing = false;
        this.recognition.stop();
      }
    },
    voiceSetup () {
      let self = this;

      if (!('webkitSpeechRecognition' in window)) {
        console.log('atualize SpeechRecognition')
      } else {
        self.recognition = new window.webkitSpeechRecognition();

        self.recognition.continuous = false;
        self.recognition.interimResults = true;

        self.final_transcript = '';
        self.ignore_onend = false;
        document.querySelector('.App-voice p').textContent = 'Ative o microfone';

        self.recognition.onstart = function() {
          self.recognizing = true;
          document.querySelector('.App-voice p').textContent = 'Fale agora';
          self.animationButton = true;
          console.log('onstart voice');
        };

        self.recognition.onerror = function(event) {
          self.animationButton = false;
          if (event.error === 'no-speech') {
            console.log('onerror voice no-speech');
            self.ignore_onend = true;
          }
          if (event.error === 'audio-capture') {
            console.log('onerror audio-capture');
            self.ignore_onend = true;
          }
          if (event.error === 'not-allowed') {
            document.querySelector('.App-voice p').textContent = 'Ative o microfone';
            self.ignore_onend = true;
          }
        };

        self.recognition.onend = function() {
          self.recognizing = false;
          if (self.ignore_onend) {
            return;
          }
          if (!self.final_transcript) {
            return;
          }
          self.animationButton = false;
          self.$store.commit("updateVoice", false)
          document.querySelector('.App-voice p').textContent = '';
        };

        self.recognition.onresult = function(event) {
          var interim_transcript = '';
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              self.final_transcript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }
          if (interim_transcript) {
            document.querySelector('.App-voice p').textContent = interim_transcript;
          }
          if (self.final_transcript) {
            document.querySelector('body').removeAttribute('style');
            self.$store.commit("updateSearch", self.final_transcript)
            self.recognition.stop();
          }
        };
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.App-voice {
  align-items: center;
  background-color: var(--main-bg-color-primary);
  bottom: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  display: flex;
  font-family: arial,sans-serif;
  font-size: 14px;
  height: auto;
  justify-content: center;
  left: 0;
  opacity: 0;
  padding: 35px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: .5s all;
  user-select: none;
  z-index: 99;
  &.active {
    opacity: 1;
    pointer-events: all;
    p {
      opacity: 1;
      transform: translateX(0);
    }
    .btn-voice { transform: scale(1); }
  }
  p {
    font-size: 22px;
    margin: 0;
    opacity: 0;
    padding: 0;
    transform: translateX(100px);
    transition: 1s all;
  }
  .exit {
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}

.btn-voice {
  --mic-volume-size: 150px;
  align-items: center;
  background-color: rgba(var(--main-color-rgb), .05);
  border-radius: 50%;
  border: 0;
  box-shadow: 0 0 0 1px rgba(#fff, .6), 0 10px 20px rgba(var(--main-color-rgb), .1);
  cursor: pointer;
  display: flex;
  height: var(--mic-volume-size);
  justify-content: center;
  margin-left: 20px;
  opacity: .5;
  outline: none;
  transition: .4s all;
  transform: scale(0);
  user-select: none;
  width: var(--mic-volume-size);
  &.active {
    animation: 1s voiceAnimation infinite alternate;
    opacity: 1;
    svg { fill: #ea4335; }
  }
  &:hover {
    transform: scale(1.1);
  }
  svg {
    height: 50%;
    width: 50%;
    fill: var(--main-color)
  }
}

@keyframes voiceAnimation {
  0%   { box-shadow: 0 0 0 1px rgba(#fff, .6), 0 10px 20px rgba(var(--main-color-rgb), .1), 0 0 10px rgba(var(--main-color-rgb), .1); }
  100% { box-shadow: 0 0 0 1px rgba(#fff, .6), 0 10px 20px rgba(var(--main-color-rgb), .1), 0 0 0 30px rgba(var(--main-color-rgb), .1);}
}
</style>
