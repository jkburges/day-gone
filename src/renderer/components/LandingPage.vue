<template>
<div class="container">
  <div>
    <span
      class="todo-heading">
      What are you doing?
    </span>
  </div>
  <div class="work-categories">
    <ul>
      <li
        class="work-category"
        v-for="workCategory in workCategories "
        :key="workCategory.id"
        @click="select(workCategory)"
        >{{workCategory.label}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            workCategories: [
                { id: 1, label: "cats" },
                { id: 2, label: "dogs" },
                { id: 3, label: "fish" },
            ]
        }
    },
    methods: {
        select(workCategory) {
            console.log(`${workCategory.label} selected`);
        }
    }
};
</script>

<style>
</style>
