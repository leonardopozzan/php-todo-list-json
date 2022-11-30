const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTodo: '',
            todos:[],
            alarm: false,
            colors :['#ff000080','#ff870080','#ffd30080','#a1ff0a80','#0aff9980','#0aefff80','#147df580','#580aff80','#be0aff80'], //colori per i todo
            colorsCircle :['#ff0000','#ff8700','#ffd300','#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff'] //colori per i pallini iniziali
        }
    },
    methods:{
        getList(){
            axios.get('server.php').then(
                (response) => {
                    this.todos=[...response.data];
                }
            )
        },
        addTask(){
            if(this.newTodo.length >= 3){
                const data = {newTodo : this.newTodo};
                axios.post('server.php',
                data,
                {headers : {'Content-Type': 'multipart/form-data'}}
                ).then(
                    (response) => {
                        // console.log(response.data)
                        this.getList();
                    }
                )
                this.newTodo = '';
                this.alarm = false;
            }else{
                this.alarm = true;
                setTimeout(()=> this.alarm=false,1500)
                this.newTodo = '';
            }
        },
        removeTask(todo){
            
        },
        taskDone(i){
            const data = {index : i};
            axios.post('server.php',
            data,
            {headers : {'Content-Type': 'multipart/form-data'}},
            ).then(
                (response) =>{
                    // console.log(response.data);
                    this.getList();
                }
            )
        },
        mod(i){  //funzione per ciclare l'array dei colori 
            return i%this.colors.length
        }
    },
    mounted() {
        this.getList();
    },
}).mount('#app');