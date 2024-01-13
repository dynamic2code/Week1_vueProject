<template>
    <div id="main">
        <div id="first">
            <img  src="@/assets/images/Mobile_.png" alt="">
        </div>
        <!-- <div id="second" >
            <img src="@/assets/images/Photo_by.png" alt="">
        </div> -->
    </div>
</template>

<script setup>
</script>

<style scoped>
#main{
    /* position: absolute; */
    /* background-color: aqua; */
    height: 100%;
    width: 100%;
    /* right: 0; */
    display: flex;
}
img{
    /* background-color: rgb(13, 146, 146); */
    display: block;
    height: auto;
    width: 100%;
}
#first{
    /* position: absolute; */
    /* right: 0; */
    width: 100%;
    height: 100%;
    /* background-color: blue; */
    z-index: 3;
}
#second{
    /* position: absolute; */
    background-color: aquamarine;
    /* left: 0; */
}

</style>