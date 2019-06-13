<template>
    <div>
        <!-- 搜索我有四种状态 -->
        <!-- 1.搜索之前 -->
        <h2 v-if="firstView">输入用户名搜索</h2>
        <!-- 2.搜索中.... -->
        <h2 v-if="loading">GitData...</h2>
        <!-- 4.没有搜索到 -->
        <h2 v-if="overNull">该关键字没有搜索到Data...</h2>
        <!-- 3.搜索失败error -->
        <h2 v-if="errorMsg">{{errorMsg}}</h2>
        <div v-else class="row" v-for="(user,index) in users" :key="index" :index="index">
            <div class="card">
                <a :href="user.url" target="_blank">
                    <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import PubSub from 'pubsub-js'
    import axios from 'axios'
    export default{
        data(){
            return {
                firstView: true,
                loading:false,
                overNull:false,
                errorMsg: '',
                users:null
                // [
                //     {url:'',avatar_url:'',name:''},
                // ]

            }
        },
        mounted(){
            // 是否在此发ajax消息  是点击search后
            // 订阅输入的搜索的消息   pubsub 前一个参数是发送方设置的名称  后面两个参数,第一个 msg 没啥用,第二个才是真实数据
            PubSub.subscribe('search',(msg,searchName)=>{
                const url = `https://api.github.com/search/users?q=${searchName}`;
                // 更新失败(请求中)
                this.firstView = false;
                this.loading = true;
                this.overNull = false;

                // alert('请求中');
                // 发送ajax请求
                axios.get(url).then(response=> {
                    // 获取数据 data
                    const result = response.data;
                    // data中的items 里面有图片的路径  名称
                    const users = result.items.map(item=>({
                        url:item.html_url,
                        avatar_url:item.avatar_url,
                        name: item.login
                    }))
                    if(users.length !== 0){
                        console.log(users)
                    }

                    // 成功更新状态(成功)
                    this.loading = false
                    this.users = users

                    if(users.length == 0){
                        this.overNull = true
                    }
                    // 失败更新状态(失败)
                }).catch(error=>{
                    this.loading = false
                    this.errorMsg = '请求失败'
                })


            })
        }

    };
</script>

<style type="stylus" rel="stylesheet/stylus">

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>