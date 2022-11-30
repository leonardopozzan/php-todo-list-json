const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            message: 'Hello'
        }
    }
})

app.mount('#app')