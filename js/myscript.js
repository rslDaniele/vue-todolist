// To-do list that prints tasks with a delete task button

var app = new Vue({
  el: "#app",
  data: {
    titolo: "Lista cose da fare",
    nuovaTask: '',
    tasks: []
  },

  methods: {
    // Function that adds task
    aggiungiAzione() {
      this.tasks.push({
        appunto: this.nuovaTask
      }),
      // input box clears
      this.nuovaTask = '';
    },

    // Function that deletes task
    rimuoviAzione(azione) {
      const azioneIndex = this.tasks.indexOf(azione);
      this.tasks.splice(azioneIndex, 1);
    }
  }
})
