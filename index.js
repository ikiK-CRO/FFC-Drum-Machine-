
// Create Vue application
const drumMachine = {
  data () {
    return {
      title: 'DRUM MACHINE',
      drumList: [
        { id: 'Q', text: 'Q' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
        { id: 'W', text: 'W' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
        { id: 'E', text: 'E' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
        { id: 'A', text: 'A' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
        { id: 'S', text: 'S' , src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
        { id: 'D', text: 'D' , src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
        { id: 'Z', text: 'Z' , src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
        { id: 'X', text: 'X' , src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
        { id: 'C', text: 'C' , src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
      ]
    }
  },
  methods: {
    playAudio(event) {
        const r = this.drumList.find(id => id.id == event.target.innerText)
        new Audio(r.src).play()
        event.target.style.boxShadow = 'inset 5px 5px 15px #bebebe, inset -5px -5px 15px #ffffff'
        setTimeout( function(){ event.target.style.boxShadow = '5px 5px 15px #bebebe, -5px -5px 15px #ffffff'}, 500 )
    }
  }
}

const app = Vue.createApp(drumMachine)

// Define a new component called todo-item
app.component('drum-pad', {
  props: ['drum'],
  template: `<div class="drum-pad" @click="$root.playAudio($event)"> {{ drum.text }}
    <audio controls style="display: none" class="clip">
    <source  v-bind:src="drum.src" v-bind:id="drum.id" type="audio/mpeg">
    </audio> 
  </div>`
})

// Mount Vue application
app.mount('#drum-machine')
