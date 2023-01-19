<template>
  <section class="default-layout">
    <router-view>
      <template #default="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </template>
    </router-view>
  </section>
</template>
