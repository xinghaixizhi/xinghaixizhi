<template>
    <div class="not-found">
        <h1 class="color-red">404 NOT FOUND</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NotFound',
    setup() {
        return {

        }
    },
})
</script>

<style scoped>
    .color-red {
        color: red;
    }
</style>