<template>
    <div id="main">
        <div>
            <img id="first" src="@/assets/images/Mobile_.png" alt="">
        </div>
        <div>
            <img id="second" src="@/assets/images/Photo_by.png" alt="">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
#main{
    position: absolute;
    /* background-color: aqua; */
    height: 100%;
    width: 50%;
    right: 0;
    display: flex;
}
img{
    /* background-color: rgb(13, 146, 146); */
    display: block;
    height: 100%;
}
#first{
    position: absolute;
    right: 0;
}

</style>