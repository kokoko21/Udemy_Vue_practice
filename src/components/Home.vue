<template>
    <div>
        <h2>{{ title | upper }}</h2>
        <p>{{ subTitle | lower }}</p>
        <p>{{number}}</p>
        <button @click="number++">+1</button>
        <Count></Count>
    </div>
</template>

<script>
import Count from"./Count"

export default {
    data() {
        return {
            title: "Welcome to Tokyo",
            subTitle: "Tokyo is a great city",
            number: 0
        };
    },
    filters: {
        lower(value) {
            return value.toLowerCase();
        }
    },
  directives: {
    custom(el, binding) {
      el.style.border = "solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
      }
    },
  },
  components: {
      Count
  }
};
</script>