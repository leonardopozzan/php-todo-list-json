<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi' crossorigin='anonymous'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' integrity='sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==' crossorigin='anonymous' referrerpolicy='no-referrer' />
    <link rel='stylesheet' href='./css/style.css'>
    <script src='https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js'></script>
    <script src='https://unpkg.com/vue@3/dist/vue.global.js'></script>
    <script src='./js/script.js' defer></script>
    <title>Vue To Do List</title>
</head>
<body>
    <div id="app">
        <div class="my-container">
            <div class="text-center mb-4" :class="{'my-alarm' : alarm}">
                <h1 class="my-4 fst-italic">To do List</h1>
                <input type="text" v-model="newTodo" @keyup.enter="addTask()">
                <button class="btn btn-dark ms-2" @click="addTask()" >Add Task</button>
            </div>
            <div>
                <ul>
                    <li class="tasks mb-4">
                        <div class="my-flex mb-2">
                            <div class="my-flex">
                                <span class="text-capitalize fs-3 me-3">Generico</span>
                            </div>
                        </div>
                        <ul v-if="(todos.length != 0)">
                            <li v-for="(todo,i) in todos" :key="i" class="my-flex task" :class="{'li-done':todo.done}" :style="{backgroundColor : `${colors[mod(i)]}`}">
                                <div class="inner-task flex-grow-1" @click="taskDone(i)">
                                    <div v-if="todo.done" :class="{'x-done':todo.done}">&#10008;</div> 
                                    <div v-else :style="{backgroundColor : `${colorsCircle[mod(i)]}`}"></div>
                                    <div class="ms-2" :class="{'done':todo.done}">{{todo.testo}}</div>
                                </div>
                                <button @click="removeTask(i)" class="my-button"><i class="fa-solid fa-minus"></i></button>
                            </li>
                        </ul>
                        <div v-else class="message-empty">
                            Complimenti non hai Task
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>