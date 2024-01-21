<template>
    <div class="holder">
        <div class="container">
            <span class="heading2">Latest from our brokers</span>
            <span>new features, latest webinars and more...</span>
            <div class="div_holder">
                <div class="division">
                    <div style="background-color: #2B3440;"  class="small_box">
                        <span class="heading3" >CHF JYP</span>
                        <img src="@/assets/images/Data Trends-rafiki.png" alt="">
                    </div>

                    <div style="background-color: #0188F3" class="small_box">
                        <span class="heading3">EDUCATION</span>
                        <img src="@/assets/images/college project-rafiki.png" alt="">
                    </div>
                </div>

                <div class="division">
                    <div class="big_box">
                        <div>
                            <span class="heading3">SECURE ACCOUNT</span>
                            <span>You can use your fingerprint to access our android app</span>
                        </div>
                        
                        <div>
                            <img src="@/assets/images/Secure Server-amico.png" alt="">
                        </div>

                    </div>
                </div>

                <div class="division" id="third_division">
                    <div style="background-color: #71C7FE" class="small_box">
                        <span class="heading3">WEBINARS</span>
                        <img src="@/assets/images/Webinar-rafiki.png" alt="">
                    </div>
                    <div class="vertical_box">
                        <div>
                            <span class="heading3">ANNIVERSARY</span>
                            <span></span>
                        </div>
                        
                        <div>
                            <img src="@/assets/images/Work anniversary-rafiki.png" alt="">
                        </div>
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
.small_box span{
    margin: 20px;
}
.big_box{
    width: 300px;
    height: 100%;
    border-radius: 20px;
    background-color: #1FBC75;
}
.big_box span{
    margin: 20px;
}
.vertical_box{
    width: 600px;
    height: 250px;
    border-radius: 20px;
    background-color: #776CF7;
}
.vertical_box span{
    margin: 20px;
}
.vertical_box img{
    height: 250px;
    width: 50%;
}
img{
    display: block;
    width: 100%;
    height: 100%;
}
@media (max-width: 784px) {
    .div_holder{
        flex-direction: column;
    }
    .division{
        display: flex;
    }
    #third_division{
        flex-direction: column;
    }
    .big_box{
        width: 90vw;
    }
    .vertical_box{
        width: 90vw;
        height: 400px;
    }
    .vertical_box img{
        display: block;
        height: 100%;
        width: 100%;
    }

}
</style>