<template>
  <section class="app-main">
    <slot />
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <div style="min-height: calc(100vh - 50px)">
          <router-view :key="key" />
        </div>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
// import Card from "@/components/atoms/Card";
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
