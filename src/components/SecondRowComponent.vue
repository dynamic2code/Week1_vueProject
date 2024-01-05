<template>
    <div class="holder">
        <div class="container">
            <span class="heading2">Latest from our brokers</span>
            <span>new features, latest webinars and more...</span>
            <div class="div_holder">
                <div class="division">
                    <div style="background-color: #2B3440;" class="small_box">

                    </div>

                    <div style="background-color: #0188F3" class="small_box">

                    </div>
                </div>

                <div class="division">
                    <div class="big_box">

                    </div>
                </div>

                <div class="division">
                    <div style="background-color: #71C7FE" class="small_box">

                    </div>
                    <div class="vertical_box">

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
</script>

<style scoped> 
.holder{
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}
.container {
    display: flex;
    flex-direction: column;
    height: 70%;
    /* background-color: blueviolet; */
}
.div_holder{
    /* background-color: blue; */
    width: 100%;
    height: 90%;
    display: flex;
    /* justify-content: space-between; */
}
.container> *{
    margin-bottom: 20px;
}
.div_holder> *{
  margin: 5px;
  /* background-color: brown; */
  width: auto;
} 
.small_box{
    width: 250px;
    height: 250px;
    border-radius: 20px;
    margin-bottom: 5px;
}
.big_box{
    width: 300px;
    height: 100%;
    border-radius: 20px;
    background-color: #1FBC75;
}
.vertical_box{
    width: 600px;
    height: 49%;
    border-radius: 20px;
    background-color: #776CF7;
}

</style>