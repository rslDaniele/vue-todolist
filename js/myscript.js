// To-do list that prints tasks with a delete task button

var app = new Vue({
  el: "#app",
  data: {
    titolo: "Lista cose da fare",
    nuovaTask: '',
    task: []
  },

  methods: {
    aggiungiAzione() {
      this.task.push({

      });
      this.nuovaTask = '';

    }
  }
})
