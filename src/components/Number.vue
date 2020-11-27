<template>
    <div>
        <p>aaaaa({{number / 2}})</p>
        <button @click="increament">+1</button>
    </div>
</template>

<script>
    export default {
        props: ['totalNumber'],
        data() {
            return {
                number: 8
            };
        },
        methods: {
            increament() {
                this.$emit("my-click", this.totalNumber + 1);
            }
        }
    };
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>