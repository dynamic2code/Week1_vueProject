<template>
    <div id="holder">
        <div id="chart">
        </div>
        <div id="buttons">
            <button>
                <span>Buy</span>
            </button>
            <button>
                <span>Sell</span>
            </button>
        </div>        
    </div>

</template>

<script setup>
</script>

<style scoped>
#holder{
    width: 100%;
}
#chart{
    width: 100%;
    height: 400px;
    background-color: azure;
    margin-bottom: 20px;
}
#buttons{
    display: flex;
}
button{
    all: unset;
    cursor: pointer;
    width: 100px;
    background-color: #0188F3;
    margin-right: 20px;
    padding: 20px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>