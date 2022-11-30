const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTodo: '',
            todos:[],
            apiUrl: 'server.php',
            alarm: false,
            colors :['#ff000080','#ff870080','#ffd30080','#a1ff0a80','#0aff9980','#0aefff80','#147df580','#580aff80','#be0aff80'], //colori per i todo
            colorsCircle :['#ff0000','#ff8700','#ffd300','#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff'] //colori per i pallini iniziali
        }
    },
    methods:{
        getList(){
            const url = this.apiUrl;
            axios.get(url).then(
                (response) => {
                    this.todos=[...response.data];
                }
            )
        },
        addTask(){
            if(this.newTodo.length >= 3){
                const url = this.apiUrl + '?add';
                const data = {newTodo : this.newTodo};
                axios.post(url,
                data,
                {headers : {'Content-Type': 'multipart/form-data'}}
                ).then(
                    (response) => {
                        this.getList();
                    }
                )
                this.newTodo = '';
                this.alarm = false;
            }else{
                //variabile per far comparire il messaggio di errore
                this.alarm = true;
                setTimeout(()=> this.alarm=false,1500)
                this.newTodo = '';
            }
        },
        removeTask(i){
            const url = this.apiUrl + '?delete';
            const data = {index : i};
            //passo l'indice dell'elemento da togliere e nell'url specifico l'azione che faccio
            axios.post(url,
            data,
            {headers : {'Content-Type': 'multipart/form-data'}},
            ).then(
                (response) =>{
                    this.getList();
                }
            )
        },
        taskDone(i){
            const url = this.apiUrl + '?done';
            const data = {index : i};
            //passo l'indice dell'elemento da segnare fatto e nell'url specifico l'azione che faccio
            axios.post(url,
            data,
            {headers : {'Content-Type': 'multipart/form-data'}},
            ).then(
                (response) =>{
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