<template>
    <div>
        <h2>{{ title | upper }}</h2>
        <p>{{ subTitle | lower }}</p>
        <p>{{number}}</p>
        <button @click="number++">+1</button>
    </div>
</template>

<script>
import { countNumber } from "@/countNumber";

export default {
    mixins: [countNumber],
};
</script>