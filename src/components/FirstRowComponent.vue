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
        <img src="" alt="more">
      </div>
    </div>


  </div>
</template>

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
  background-color: blue;
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

</style>
