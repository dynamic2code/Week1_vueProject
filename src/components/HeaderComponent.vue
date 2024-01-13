<template>
    <div class="holder" id="">
        <div class="container">
            <div id="navigate">
                <router-link to="/" class="navigate_item">
                    <img src="@/assets/images/logo.png" alt="">
                </router-link>  
                <div class="navigate_item">
                    <span>About the company</span>
                </div>
                <div class="navigate_item">
                    <span>Education</span>
                </div>
                <div class="navigate_item">
                    <span>Analytics</span>
                </div>                
            </div>

            <div id="buttons">
                <div class="secondary_button">
                    <span>Sign-in</span>
                </div>
                <div class="primary_button">
                    <span>Registration</span>
                </div>                
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.holder {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navigate_item{
    margin-left: 50px;
}
#navigate, #buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;  
}
  
@media (min-width: 1024px) {
}
</style>
