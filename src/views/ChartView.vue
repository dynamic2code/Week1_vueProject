<script setup>
import MainHeaderComponent from '@/components/MainHeaderComponent.vue';
import SclorerComponent from '@/components/SclorerComponent.vue';
import ChartComponent from '@/components/ChartComponent.vue';

</script>
<template>
    <MainHeaderComponent></MainHeaderComponent>
    <SclorerComponent></SclorerComponent>
    <div class="holder">
        <div class="container" >
            <ChartComponent></ChartComponent>
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 120px;
    /* background-color: blueviolet; */
}
</style>
