const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            newToDo : '',
            todos : ['spesa','benzina']
        }
    },
    methods:{
        send(){
            axios.post('server.php',{'todo' : this.newToDo},{headers: {'Content-Type': 'multipart/form-data'}}).then(
                (response) => {
                    this.todos.unshift(response.data);
                }
            )
        }
    }
})

app.mount('#app')