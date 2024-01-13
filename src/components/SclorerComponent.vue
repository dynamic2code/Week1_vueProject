<template>
    <div class="" id="scorer">
        <CompanyOverViewComponent :companies="companies"></CompanyOverViewComponent>
    </div>
</template>

<script setup>
import CompanyOverViewComponent from './CompanyOverViewComponent.vue';

const companies = [
    { companyName: "Apple", stockPrice: 175.50, upOrDown: "up" },
    { companyName: "Google", stockPrice: 2937.46, upOrDown: "down" },
    { companyName: "Microsoft", stockPrice: 285.80, upOrDown: "up" },
    { companyName: "Tesla", stockPrice: 954.25, upOrDown: "down" },
    { companyName: "Meta", stockPrice: 185.15, upOrDown: "up" },
    { companyName: "Amazon", stockPrice: 115.75, upOrDown: "up" },
    { companyName: "NVIDIA", stockPrice: 195.60, upOrDown: "down" },
    { companyName: "Netflix", stockPrice: 205.10, upOrDown: "up" },
    { companyName: "Adobe", stockPrice: 425.95, upOrDown: "down" },
    { companyName: "PayPal", stockPrice: 95.20, upOrDown: "up" },
    { companyName: "Salesforce", stockPrice: 225.35, upOrDown: "down" },
    { companyName: "Twitter", stockPrice: 45.80, upOrDown: "up" },
    { companyName: "Spotify", stockPrice: 135.45, upOrDown: "down" },
    { companyName: "Uber", stockPrice: 35.90, upOrDown: "up" },
    { companyName: "Airbnb", stockPrice: 115.65, upOrDown: "down" },
    { companyName: "Intel", stockPrice: 45.10, upOrDown: "up" },
    { companyName: "AMD", stockPrice: 95.35, upOrDown: "down" },
    { companyName: "Visa", stockPrice: 235.70, upOrDown: "up" },
    { companyName: "Mastercard", stockPrice: 415.85, upOrDown: "down" },
    { companyName: "Disney", stockPrice: 105.90, upOrDown: "up" }
];
</script>

<style scoped>
#scorer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 50px;
    overflow: scroll;
    z-index: 2; 
    background-color: #2B3440;
}
</style>