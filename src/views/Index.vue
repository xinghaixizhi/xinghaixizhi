<template>
    <div class="index">
        <h1 style="color: skyblue;">星海昔织</h1>
        <div style="text-align: center; height: 500px;line-height:200px;">
            <h1>Comming soon ···</h1>
        </div>
        <router-link to="/about">about</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Index',
    setup() {
        async function test(val: number): Promise<string> {
            if (val > 2) {
                return Promise.reject('ge 2')
            }
            return Promise.resolve('le or qe 2')
        }
        return {

        }
    },
})
</script>

<style scoped>

</style>
