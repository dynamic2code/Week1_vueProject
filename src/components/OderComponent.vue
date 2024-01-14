<template>
    <div class="records">
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Direction</th>
            <th>Order Type</th>
            <th>Quantity</th>
            <th>Execution Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index" class="record">
            <td>{{ order.asset }}</td>
            <td>{{ order.direction }}</td>
            <td>{{ order.orderType }}</td>
            <td>{{ order.quantity }}</td>
            <td>{{ order.executionPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script setup>
defineProps({
    orders: Object
})
</script>

<style scoped>
.records{
    width: 100%;
}
table{
    width: 100%;
    border-collapse: collapse;
    /* background-color: aquamarine; */
}
th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 10px solid #0D1116;
}
td{
    cursor: pointer;
    /* background-color: aqua; */
}
.record{
    width: 100%;
    height: 100px;
    background-color: #2B3440;
    
}

</style>