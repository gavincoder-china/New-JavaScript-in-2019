<template>

    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名" v-model="name">
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: "Add",
        data() {
            return {
                name: '',
                comment: ''
            }
        },
        props: {
            addComment: {
                type: Function,
                required: true
            }
        },
        methods: {
            add() {
                //先检查数据
                let name = this.name.trim();
                let comment = this.comment.trim();

                if (!name | !comment) {
                    alert("请不要为空");
                    return;

                }
                //检测完毕
                //根据传入的新数据,生成对象 content
                const content = {
                    name,
                    comment
                }
                //使用传过来的 addContent 方法
                this.addComment(content)
//清空输入框
                this.name = ''
                this.comment = ''
            }
        }
    }
</script>

<style scoped>

</style>