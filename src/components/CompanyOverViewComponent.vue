<template>
    <div v-for="(company, index) in companies" :key="index"  class="company">
        <span>{{ company.companyName }}</span>
        <span>{{ company. stockPrice}}</span>
        <img
        v-if="company.upOrDown === 'up'"
        src="@/assets/images/arrow-up-line.png"
        alt="Arrow Up"
        >
        <img
        v-else
        src="@/assets/images/arrow-down-line.png"
        alt="Arrow Down"
        >
    </div>
</template>

<script setup>
defineProps({
    companies: Object
})
</script>

<style scoped>
.company{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #2B3440; */
    width: auto;
    margin-right: 20px;
    margin-left: 30px;
    /* padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    padding-bottom: 2%; */
}
.company > *{
    margin: 4%;
}
</style>