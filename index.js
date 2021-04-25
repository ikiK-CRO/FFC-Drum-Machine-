
// Create Vue application
const drumMachine = {
  data () {
    return {
      title: 'DRUM MACHINE',
      display: "",
      drumList: [
        { id: 'Q', text: 'Q' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', keyCode: 81, audio: 'Heater-1'},
        { id: 'W', text: 'W' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', keyCode: 87, audio:'Heater-2'},
        { id: 'E', text: 'E' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', keyCode: 69, audio: 'Heater-3'},
        { id: 'A', text: 'A' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', keyCode: 65, audio: 'Heater-4'},
        { id: 'S', text: 'S' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', keyCode: 83, audio: 'Clap'},
        { id: 'D', text: 'D' , src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', keyCode: 68, audio: 'Open-HH'},
        { id: 'Z', text: 'Z' , src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', keyCode: 90, audio: "Kick-n'-Hat"},
        { id: 'X', text: 'X' , src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', keyCode: 88, audio: 'Kick'},
        { id: 'C', text: 'C' , src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', keyCode: 67, audio: 'Closed-HH'}
      ]
    }
  },
  methods: {
    playAudio(event) {
        const r = this.drumList.find(id => id.id == event.target.innerText)
        document.querySelector("#display").innerText=r.audio
        document.querySelector("#"+r.id).play()
        event.target.style.boxShadow = 'inset 5px 5px 15px #bebebe, inset -5px -5px 15px #ffffff'
        setTimeout( function(){ event.target.style.boxShadow = '5px 5px 15px #bebebe, -5px -5px 15px #ffffff'}, 500 )
    }
  },
  mounted() {
    const data = this.drumList
    window.addEventListener("keypress", function(e) {
      const pressedKey = String.fromCharCode(e.keyCode).toUpperCase()
      const r = data.find(id => id.id == pressedKey)
      document.querySelector("#"+r.id).play()
      document.querySelector("#display").innerText=r.audio
      document.querySelector("[data-key="+r.id+"]").style.boxShadow = 'inset 5px 5px 15px #bebebe, inset -5px -5px 15px #ffffff'
      setTimeout( function(){ document.querySelector("[data-key="+r.id+"]").style.boxShadow = '5px 5px 15px #bebebe, -5px -5px 15px #ffffff'}, 500 )
    });
  }
}


const app = Vue.createApp(drumMachine)

// Define a new component called todo-item
app.component('drum-pad', {
  props: ['drum'],
  template: `<div class="drum-pad" @click="$root.playAudio($event)"  v-bind:data-key="drum.id" v-bind:id="drum.audio"> {{ drum.text }}
    <audio controls style="display: none" v-bind:src="drum.src" class="clip" v-bind:id="drum.id">
    </audio> 
  </div>`
})

// Mount Vue application
app.mount('#drum-machine')
