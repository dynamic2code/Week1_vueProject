<template>
    <div class="form_holder">
        <form @submit.prevent="login">
            <input type="text" id="name" v-model="email" placeholder="Your name" required /> 
            <input type="email" id="email" v-model="email" placeholder="Your email" required />
            <input type="password" id="password" v-model="password" placeholder="Your password" required />
            <button class="call_to_action" type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
</script>

<style scoped>
.form_holder{
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blueviolet; */
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    text-align: center;
    color: white;
    width: 70vw;
    height: 50px;
    margin-bottom: 20px;
    background-color: #0D1116;
    border: 1px solid white;
    border-radius: 30px;
}
button{
    all: unset;
    cursor: pointer;
    width: 100px;
    background-color: #0188F3;
    margin-right: 20px;
    padding: 20px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>