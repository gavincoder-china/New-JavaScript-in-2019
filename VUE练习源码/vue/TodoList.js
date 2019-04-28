var tasks = [];
new Vue({
    el: '#app',
    data() {
        return {
            todo: "",
            content: tasks,
            editingtodo: "",
            count:0
        }
    },
    methods: {
        addtodo: function () {
            //input 默认为空。这种情况使用 v-model 最方便，通过 this.inputName 即可获取到对应的值。
            var task = { content: "", check: "" };
            task.content = this.todo;
            task.check = this.check;
            tasks.push(task);
            this.todo = "";
            console.log(tasks.length);
        },
        deletetodo: function (todo) {
            let index = this.content.indexOf(todo);
            tasks.splice(index, 1);
        },
        edittodo: function (todo) {
            this.editingtodo = todo
        }
    },
    watch: {
       content:function(){
            this.count=tasks.length;
            console.log(tasks.length);
       }
    },
    // computed: { 要找到是谁在发生变化
    //     content:function(){
    //         console.log(tasks.length);
    //         return tasks.length;
    //     }
    // }
})