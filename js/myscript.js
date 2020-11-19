// To-do list that prints tasks with a delete task button

var app = new Vue({
  el: "#app",
  data: {
    titolo: "Lista cose da fare",
    nuovaTask: '',
    tasks: []
  },

  methods: {
    aggiungiAzione() {
      this.tasks.push({

      });
      // input box clears 
      this.nuovaTask = '';

    }
  }
})
