const { createApp } = Vue

createApp({
  data() {
    return {
      todos:[],
      ciao:'ciao'
    }
  },
  methods:{

  },
  created(){
    axios.get('./api.php')
    .then((response) => {
 this.todos=response.data
    })
  }
}).mount('#app')