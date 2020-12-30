<template>
    <div class="index">
        <h1 style="color: skyblue;">星海昔织</h1>
        <div style="text-align: center; height: 500px;line-height:200px;">
            <h1>Comming soon ···</h1>
        </div>
        <router-link to="/about">about</router-link>
         <div style="text-align: center">
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode={{beian}}" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                <span style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">陕公网安备{{beian}}号</span>
            </a>
        </div>
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
            beian: '${{ secrets.BEIAN }}'
        }
    },
})
</script>

<style scoped>

</style>
