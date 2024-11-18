<template>
  <div class="menu">
    <RouterLink to="/" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-home"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
    <RouterLink to="/shop" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-shop"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
    <RouterLink to="/clans" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-shield"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
    <RouterLink to="/tasks" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-tasks"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
    <RouterLink to="/friends" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-users"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>
