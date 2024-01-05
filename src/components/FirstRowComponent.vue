<template>
  <div class="holder">
    <div class="container">
      <div class="half left" id="">
        <span class="heading1">Profitability on the rise</span>
        <span>A Broker that supports your financial goals</span>

        <div class="primary_button" id="start_trading">
          <span>Start trading</span>
        </div>
      </div>

      <div class="half right" id="">
        <img id="laptop" src="@/assets/images/gh_-removebg-preview.png" alt="more">
        <PhoneComponent></PhoneComponent>
        <div id="message">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z" fill="currentColor"></path></svg>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import PhoneComponent from './PhoneComponent.vue';
</script>

<style scoped>
.holder {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aqua; */
}
.container{
  display: flex;
  justify-content: space-between;
  height: 70%;
  /* background-color: blueviolet; */
}
.left{
  display: flex;
  flex-direction: column;
  /* background-color: brown; */
}
.right{
  /* background-color: blue; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left > *{
  margin-bottom: 60px;
} 
#start_trading{
  width: 200px;
}
#laptop{
  height: 350px;
}
#message{
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #0188F3;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  border-radius: 50%;
}

</style>
