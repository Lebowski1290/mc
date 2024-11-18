<template>
    <div class="card" :class="{ 'flashing': flashing }">
      <h2>Товар</h2>
      <p>Цена: {{ price }}</p>
      <button @click="changePrice">Изменить цену</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        price: 100,
        flashing: false,
      };
    },
    methods: {
      async changePrice() {
        this.flashing = true; // Включаем мигание
  
        await new Promise(resolve => setTimeout(resolve, 500)); // Ждем полсекунды перед изменением цены
  
        this.price = Math.floor(Math.random() * (200 - 50 + 1) + 50); // Случайная цена от 50 до 200
  
        await new Promise(resolve => setTimeout(resolve, 1500)); // Ждем еще полторы секунды после изменения цены
  
        this.flashing = false; // Выключаем мигание
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    width: 300px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .flashing {
    animation: flash 1s linear infinite;
  }
  
  @keyframes flash {
    0% { background-color: white; }
    50% { background-color: yellow; }
    100% { background-color: white; }
  }
  </style>