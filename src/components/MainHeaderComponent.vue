<template>
    <div class="holder">
        <div class="container">
            <div class="divided" id="first">
                <router-link to="/" id="logo">
                    <img src="@/assets/images/logo.png" alt="">
                </router-link>  
                <router-link to="/stocks">
                    <img src="@/assets/images/home.png" alt="">
                </router-link>
            </div> 

            <div class="divided" id="second">
                <router-link to="/oder-history">
                <span>Oder history</span>                
                </router-link>

                <div id="user_profile">
                    <img src="@/assets/images/user.png" alt="">
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>

<style scoped>
.holder {
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 2; 
    background-color: #0D1116;
    /* background-color: aquamarine; */
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#user_profile{
    width: 30px;
    height: auto;
    /* background-color: aliceblue; */
}
.divided{
    display: flex;
}
#first{
    /* background-color: blue; */
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
#second{
    /* background-color: blueviolet; */
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#second > *{
    margin-right: 2%;
}
</style>