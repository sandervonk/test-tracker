<template>
  <main class="home center-1000">
    <div id="home-main">
      <h2>Organize. Plan. Study.</h2>
      <h3 class="middle-text secondary_home_text">
        Test tracker provides an effective way to manage upcoming exams.
      </h3>
      <button class="action-btn auth-action can-login click-action" @click="tomain">
        {{ logged_in ? "Open App" : "Get Started" }}
      </button>
    </div>
    <div id="home-art" style="display: none"></div>
  </main>
</template>

<script>
// import store
import { useMainStore } from "@/store";

export default {
  name: "HomeView",
  computed: {
    store() {
      return useMainStore();
    },
    logged_in() {
      return this.store.user;
    },
  },
  methods: {
    tomain() {
      if (this.store.user) {
        this.$router.push("/portal");
      }
    },
  },
};
</script>

<style>
.home {
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: center;
  height: 100%;
}
#home-main > * {
  max-width: 600px;
}
.home .middle-text {
  margin: 25px 0;
}
@media (max-width: 450px) and (max-height: 900px) {
  .home .action-btn {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: calc(100% - 80px);
  }
}
</style>
