
<template>
    <div>
        <span>这个是非slot</span><br/>
        
        <slot name="slotTest">

<!--          这个地方就是占位的,不需要写标签-->
            slot 1 默认显示 <br/>
        </slot>
        <slot name="slotTest2">
            slot 2 默认显示<br/>
        </slot>
        这个是非slot<br/>
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