const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            newTodo: '',
            todos:[
                {testo : "studiare inglese",done :false},
                {testo : "passare in farmacia",done :false},
                {testo : "riordinare camera",done :false},
                {testo : "comprare regalo per l'anniversario",done :false},
                {testo : "scegliere la meta delle vacanze",done :false},
                {testo : "restituire il dvd al nolleggio",done :false},
                {testo : "comprare i cioccolatini per l'amante",done :false},
                {testo : "aperitivo con amici",done :false},
                {testo : "fare copia delle chiavi di casa",done :false}
            ],
            alarm: false,
            colors :['#ff000080','#ff870080','#ffd30080','#a1ff0a80','#0aff9980','#0aefff80','#147df580','#580aff80','#be0aff80'], //colori per i todo
            colorsCircle :['#ff0000','#ff8700','#ffd300','#a1ff0a','#0aff99','#0aefff','#147df5','#580aff','#be0aff'] //colori per i pallini iniziali
        }
    },
    methods:{
        taskDone(i){
            this.todos[i].done = !this.todos[i].done;
        },
        addTask(){
            if(this.newTodo.length >= 3){
                this.todos.unshift({testo : this.newTodo, done : false});
                this.newTodo = '';
                this.alarm = false;
            }else{
                this.alarm = true;
                setTimeout(()=> this.alarm=false,1500)
                this.newTodo = '';
            }
        },
        removeTask(todo){
            this.todos = this.todos.filter((element)=> element != todo);
        },
        mod(i){  //funzione per ciclare l'array dei colori 
            return i%this.colors.length
        }
    }
}).mount('#app');