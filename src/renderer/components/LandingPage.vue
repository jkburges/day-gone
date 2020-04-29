<template>
<div class="container">
  <div>
    <span
      class="work-category-heading">
      What are you doing?
    </span>
  </div>

  <div class="work-categories">
    <ul>
      <li
        class="work-category"
        v-for="workCategory in storeState.workCategories"
        @click="select(workCategory)"
        >{{workCategory}}</li>
    </ul>
    <form v-on:submit.prevent="noop">
      <input v-on:keyup="onNewWorkCategory" v-model="newWorkCategory" placeholder="something else">
    </form>
  </div>
</div>
</template>

<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            storeState: store.state
        }
    },

    methods: {
        select(workCategory) {
            console.log(`${workCategory} selected`);
        },

        onNewWorkCategory(e) {
            if (e.keyCode === 13) {
                store.addWorkCategory(e.target.value);
            }
        },

        noop() {
        }
    }
};
</script>

<style>
.container {
  font-family: system-ui;
  font-size: 24px;
  padding: 10px 0px;
  color: white;
  height: 100vh;
  text-align: center;
  background-color: #30336b;
}

ul {
  list-style: none;
}
</style>
