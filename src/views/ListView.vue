<script setup>
import MainHeaderComponent from '@/components/MainHeaderComponent.vue';
import SclorerComponent from '@/components/SclorerComponent.vue';
import OderComponent from '@/components/OderComponent.vue';

const orders = [
  {
    id: 12345,
    date: "2023-01-04T15:32:00Z",
    asset: "AAPL", // Apple stock
    direction: "buy",
    orderType: "market",
    executionPrice: 185.50,
    quantity: 100,
    totalValue: 18550,
    filledQuantity: 100, // Assuming full fill
    fees: 5.99,
    notes: "Bought on news of expected earnings beat"
  },
  {
    id: 67890,
    date: "2023-01-05T10:15:00Z",
    asset: "EUR/USD", // Currency pair
    direction: "sell",
    orderType: "limit",
    executionPrice: 1.1250,
    quantity: 50000,
    totalValue: 56250,
    filledQuantity: 40000, // Partial fill
    averageFilledPrice: 1.1245, // Adjusted for partial fill
    notes: "Selling to lock in profits"
  },
  {
    id: 23456,
    date: "2023-02-01T12:45:00Z",
    asset: "AMZN", // Amazon stock
    direction: "sell",
    orderType: "market",
    executionPrice: 3400.30,
    quantity: 10,
    totalValue: 34003,
    filledQuantity: 10,
    fees: 6.75,
    notes: "Selling Amazon shares"
  },
  {
    id: 34567,
    date: "2023-02-05T09:15:00Z",
    asset: "GOOGL", // Alphabet Inc. stock
    direction: "buy",
    orderType: "limit",
    executionPrice: 2800.50,
    quantity: 15,
    totalValue: 42007.50,
    filledQuantity: 15,
    fees: 5.80,
    notes: "Adding more Alphabet Inc. shares"
  },
  {
    id: 45678,
    date: "2023-02-10T14:30:00Z",
    asset: "TSLA", // Tesla stock
    direction: "sell",
    orderType: "market",
    executionPrice: 900.25,
    quantity: 5,
    totalValue: 4501.25,
    filledQuantity: 5,
    fees: 3.50,
    notes: "Profit-taking on Tesla"
  },
  {
    id: 56789,
    date: "2023-02-15T11:20:00Z",
    asset: "ETH/USD", // Ethereum
    direction: "buy",
    orderType: "market",
    executionPrice: 2500,
    quantity: 2,
    totalValue: 5000,
    filledQuantity: 2,
    fees: 8.20,
    notes: "Investing in Ethereum"
  },
  {
    id: 67890,
    date: "2023-02-20T10:45:00Z",
    asset: "MSFT", // Microsoft stock
    direction: "sell",
    orderType: "limit",
    executionPrice: 320.75,
    quantity: 8,
    totalValue: 2566,
    filledQuantity: 8,
    fees: 4.25,
    notes: "Selling Microsoft shares"
  },
];
</script>

<template>
    <MainHeaderComponent></MainHeaderComponent>
    <SclorerComponent></SclorerComponent>
    <div class="holder">
        <div class="container">
            <OderComponent :orders="orders"></OderComponent>
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