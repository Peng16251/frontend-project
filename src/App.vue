<template>
  <header class="header">
    <NavBar />
  </header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import "./assets/base.css";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped></style>
