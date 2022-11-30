const app = createApp({
    data(){
        return{
            newToDo : '',
            todos : []
        }
    },
    methods:{
        send(){
            axios.post('server.php',{'todo' : this.newToDo},{headers: {'Content-Type': 'multipart/form-data'}}).then(
                (response) => {
                    this.todos.unshift(response.data);
                }
            )
        },
        getList(){
            axios.get('server.php').then(
                (response) => {
                    this.todos=[...response.data];
                }
            )
        }
    },
    mounted() {
        this.getList();
    }
})

app.mount('#app')