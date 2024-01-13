<template>
    <div class="holder">
        <div class="container">
            <span class="heading2">Smooth trading on ever platform</span>
            <span>Whether you prefer trading on your desk or on the go -olymp has got you covered</span>

            <div class="divided">
                <div class="half" id="right">
                    <img class="phone" src="@/assets/images/Mobile_.png" alt="">
                </div>
                <div class="half" id="left">
                    <div id="details_and_stars">
                        <span>The custom build has been updated to any device you may choose to use and the transition is 100% seamless</span>
                    </div>
                    <div id="shadowed">

                        <div id="first_row">
                            <span class="heading2" style="margin-right: 10%;">5.0</span>
                            <div>
                                <div id="stars">
                                    <span>
                                        <img class="icon" src="" alt="">
                                        <img src="@/assets/images/star-fill.png" alt="">
                                        <img src="@/assets/images/star-fill.png" alt="">
                                        <img src="@/assets/images/star-fill.png" alt="">
                                        <img src="@/assets/images/star-fill.png" alt="">
                                        <img src="@/assets/images/star-fill.png" alt="">
                                    </span>                                     
                                </div>
 
                                <div>
                                    <span>app rating</span>
                                </div>                             
                            </div>

                        </div>

                        <div>
                            <span>This is the best trading platform you'll ever use. We guarantee you that.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttons">
                <div class="downloads" id="desktop">
                    <span>Desktop</span>
                    <div class="holder_buttons">
                        <div class="platform">
                            <div>
                                <img src="@/assets/images/windows.png" alt="">
                            </div>
                            <div class="platform_text">
                                <span>available on</span>
                                <span>Meta trade</span>
                            </div>
                        </div>

                        <div class="platform">
                            <div>
                                <img src="@/assets/images/apple.png" alt="">
                            </div>
                            <div class="platform_text">
                                <span>download on</span>
                                <span>MacOS</span>
                            </div>
                        </div>                        
                    </div>


                </div>

                <div class="downloads" id="mobile">
                    <span>Mobile</span>
                    <div class="holder_buttons">
                        <div class="platform">
                            <img src="@/assets/images/apple.png" alt="">
                        </div>

                        <div class="platform">
                            <img src="@/assets/images/google-play.png" alt="">
                        </div>  
                        <div class="downloads">
                            <span>App downloads</span>
                            <div>
                                <span class="heading2">12M+</span>
                            </div>
                        </div>                                                 
                    </div>

                 
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
// import PhoneComponent from './PhoneComponent.vue';
</script>

<style scoped>
.holder{
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  /* background-color: aqua; */
}
.container{
    display: flex;
    flex-direction: column;
    height: auto;
  /* background-color: blueviolet; */
}
.container> *{
    margin-bottom: 20px;
}
.divided{
    display: flex;
    width: 100%;
    height: auto;
}
.half{
    width: 50%;
    height: auto;
    /* background-color: aquamarine; */
}
.buttons{
    width: 100%;
    height: 10%;
    background-color: black;
    display: flex;
    /* justify-content: space-around; */
}
.buttons img{
    cursor: pointer;
    height: 30px;
    width: 30px;
    margin: 10px;
}
.downloads{
    width: auto;
    display: flex;
    flex-direction: column;
    /* background-color: aquamarine; */
}
#desktop{
    width: 50%;
    /* background-color: aquamarine; */
    display: flex;
    
}
#mobile{
    display: flex;
    justify-content: space-between;
}
.holder_buttons{
    display: flex;
}

.holder_buttons> *{
    margin-right: 20px;
}
.platform{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #2B3440;
    padding: 1%;
    width: auto;
}
.platform_text{
    display: flex;
    flex-direction: column;
}
#left{
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#right{
    /* background-color: blueviolet; */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.divided{

}
#details_and_stars{
    width: 60%;
    height: auto;
    margin-bottom: 10%;
}
#shadowed{
    background-color: #2B3440;
    width: 60%;
    height: auto;
    padding: 30px;
    border-radius: 20px;
}

.phone{
    /* background-color: rgb(13, 146, 146); */
    display: block;
    height: auto;
    width: 300px;
}
#first_row{
    display: flex;
    /* background-color: aqua; */
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 2%;
}
#stars{
    /* margin-right:2%; */
    /* background-color: blue; */
}
</style>