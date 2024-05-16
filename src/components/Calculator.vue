<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/calculator" class="nav-link">Calculator</router-link>
    <router-link to="/clockcalendar" class="nav-link"
      >Clock&Calendar</router-link>
  </nav>
  <h1>Calculator</h1>
  <div class="calculator">
    <div class="display">{{ current }}</div>
    <div class="buttons">
      <button class="button-clear" @click="clear">AC</button>
      <button @click="append('(')">(</button>
      <button @click="append(')')">)</button>
      <button @click="append('/')">/</button>
      <button class="button-backspace" @click="backspace">⌫</button>
      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('*')">*</button>
      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">-</button>
      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">+</button>
      <button @click="append('0')">0</button>
      <button @click="append('.')">.</button>
      <button class="button-equal" @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CalculatorComponent",
  setup() {
    const current = ref("");

    const append = (char) => {
      current.value += char;
    };

    const clear = () => {
      current.value = "";
    };

    const backspace = () => {
      current.value = current.value.slice(0, -1);
    };

    const calculate = () => {
      try {
        current.value = eval(current.value).toString();
      } catch (e) {
        current.value = "Error";
      }
    };

    return {
      current,
      append,
      clear,
      backspace,
      calculate,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.nav-link {
  color: #333;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #ddd;
}

.calculator {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
}

.display {
  grid-column: span 4;
  background: #ffffff;
  color: #333333;
  padding: 15px;
  text-align: right;
  font-size: 2em;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
  padding: 20px;
  font-size: 1.2em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #e0e0e0;
  transition: background 0.2s;
}

.buttons button:hover {
  background: #d0d0d0;
}

.buttons button:active {
  background: #c0c0c0;
}

.button-clear {
  background-color: #f44336;
  color: white;
}

.button-clear:hover {
  background-color: #d32f2f;
}

.button-backspace {
  background-color: #ffa000;
  color: white;
}

.button-backspace:hover {
  background-color: #ff8f00;
}

.button-equal {
  background-color: #4caf50;
  color: white;
}

.button-equal:hover {
  background-color: #388e3c;
}

</style>
