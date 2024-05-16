<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/calculator" class="nav-link">Calculator</router-link>
    <router-link to="/clockcalendar" class="nav-link"
      >Clock&Calendar</router-link>
  </nav>
  <div class="container">
    <h1>Home Page</h1>
    <p class="large">Selamat datang Home Page!</p>
    <p class="large">Disini saya memiliki aplikasi Tampilan Kalkulator dan Jam&Kalender </p>
  </div>
</template>

<script>
export default {
  name: "MyHome",
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

.container {
  justify-content: center;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #ddd;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.large {
  font-size: 1.2rem;
}
</style>
