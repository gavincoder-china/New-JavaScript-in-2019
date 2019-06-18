<template>
    <div>
        <span>test</span><br/>
        <slot name="slotTest">

<!--          这个地方就是占位的,不需要写标签-->
            slot 1 默认显示 <br/>
        </slot>
        <slot name="slotTest2">
            slot 2 默认显示<br/>
        </slot>
        test 5<br/>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>