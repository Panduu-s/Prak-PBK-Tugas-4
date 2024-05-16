<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/calculator" class="nav-link">Calculator</router-link>
    <router-link to="/clockcalendar" class="nav-link"
      >Clock&Calendar</router-link>
  </nav>
  <div class="clock-calendar-container">
    <div class="clock-calendar">
      <h1>Jam & Tanggal Hari Ini</h1>
      <div class="clock">
        <h1>{{ time }}</h1>
      </div>
      <div class="calendar">
        <div class="month-year">
          <button @click="prevMonth" class="month-btn">‹</button>
          <span>{{ currentMonthYear }}</span>
          <button @click="nextMonth" class="month-btn">›</button>
        </div>
        <div class="weekdays">
          <div v-for="weekday in weekdays" :key="weekday" class="weekday">
            {{ weekday }}
          </div>
        </div>
        <div class="days">
          <div
            v-for="day in daysInMonth"
            :key="day.date"
            :class="{ 'current-day': day.isCurrentDay }"
            class="day"
          >
            {{ day.date }}
          </div>
        </div>
      </div>
      <div class="description">
        <p>Jam dan Tanggal Hari ini.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";

export default {
  name: "ClockCalendar",
  setup() {
    const time = ref(new Date().toLocaleTimeString());
    const currentDate = ref(new Date());

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentMonthYear = computed(() => {
      const month = currentDate.value.toLocaleString("default", {
        month: "long",
      });
      const year = currentDate.value.getFullYear();
      return `${month} ${year}`;
    });

    const daysInMonth = computed(() => {
      const days = [];
      const lastDay = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        0
      );

      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(
          currentDate.value.getFullYear(),
          currentDate.value.getMonth(),
          i
        );
        const isCurrentDay = date.toDateString() === new Date().toDateString();
        days.push({ date: i, isCurrentDay });
      }

      return days;
    });

    const prevMonth = () => {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() - 1,
        1
      );
    };

    const nextMonth = () => {
      currentDate.value = new Date(
        currentDate.value.getFullYear(),
        currentDate.value.getMonth() + 1,
        1
      );
    };

    const updateTime = () => {
      const now = new Date();
      time.value = now.toLocaleTimeString();
    };

    let timer;
    onMounted(() => {
      timer = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      time,
      currentMonthYear,
      daysInMonth,
      weekdays,
      prevMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>
.clock-calendar-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  margin-top: 80px;
}

.clock,
.calendar {
  text-align: center;
}

.description {
  margin-top: 20px;
}

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

.month-year {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.month-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.month-btn:hover {
  background-color: #0056b3;
}

.month-year span {
  margin: 0 10px;
  font-size: 18px;
  font-weight: bold;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
}

.weekday {
  font-weight: bold;
  color: #007bff;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  color: #333;
}

.day:hover {
  background-color: #ddd;
}

.current-day {
  background-color: #007bff;
  color: #fff;
}
</style>
