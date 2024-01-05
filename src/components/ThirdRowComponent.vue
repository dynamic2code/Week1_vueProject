<template>
    <div class="holder">
        <div class="container">
            <span class="heading2">Smooth trading on ever platform</span>
            <span>Whether you prefer trading on your desk or on the go -olymp has got you covered</span>

            <div class="divided">
                <div class="half">

                </div>
                <div class="half">

                </div>
            </div>

            <div class="buttons">
                <div class="downloads">
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

                <div class="downloads">
                    <span>Mobile</span>
                    <div class="holder_buttons">
                        <div class="platform">
                            <img src="@/assets/images/apple.png" alt="">
                        </div>

                        <div class="platform">
                            <img src="@/assets/images/google-play.png" alt="">
                        </div>                        
                    </div>


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
</template>

<script setup>
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
    height: 70%;
  /* background-color: blueviolet; */
}
.container> *{
    margin-bottom: 20px;
}
.divided{
    display: flex;
    width: 100%;
    height: 300px;
}
.half{
    width: 50%;
    height: 100%;
    /* background-color: aquamarine; */
}
.buttons{
    width: 100%;
    height: 10%;
    /* background-color: black; */
    display: flex;
    justify-content: space-around;
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
    border-radius: 20px;
    background-color: #2B3440;
    padding: 1%;
}
.platform_text{
    display: flex;
    flex-direction: column;
}
</style>