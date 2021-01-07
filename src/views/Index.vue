<template>
    <div class="text-container">
        <div class="header">
            <router-link to='/'>
                <h1>星海昔织</h1>
            </router-link>
            <ul>
                <li v-for="item in menu" :key="item.title">
                    <router-link :to="item.url">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="main">
            青山不改，绿水长流
            <div>
                <button id="audioControl" @click="handleAudio" @ended="state.audioControlText = '>'">{{audioControlText}}</button>
                <audio id="audio" ref="audio" :src="audioSrc"></audio>
            </div>
        </div>
        <div class="footer">
            <a :href="bei.icp.url">{{bei.icp.title}}</a> | 
            <a :href="bei.gongan.url">{{bei.gongan.title}}</a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs} from 'vue'
interface State {
    audio: null | HTMLAudioElement;
    audioControlText: string;
}
export default defineComponent({
    name: 'Index',
    setup() {
        const state = reactive({
            audio: null,
            audioControlText: '>',
            menu: [
                {
                    title: '狗窝',
                    url: '/home' 
                },
                {
                    title: '工具',
                    url: '/tools' 
                },
                {
                    title: '文章',
                    url: '/articles' 
                },
                {
                    title: '关于我',
                    url: '/about' 
                },
            ],
            bei: {
                icp: {
                    title: '陕ICP备20011829号',
                    url: 'https://beian.miit.gov.cn/#/Integrated/index'
                },
                gongan: {
                    title: '陕公网安备 61019002001182号',
                    url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61019002001182'
                }
            }
        } as State)
        const audioSrc = 'http://cdn.xizhi.tech/%E5%A5%BD%E4%B9%85%E4%B8%8D%E8%A7%81.mp3'
        const handleAudio = () => {
            if((state.audio as HTMLAudioElement).paused) {
                (state.audio as HTMLAudioElement).play();
                state.audioControlText = '||'
            }
            else {
                (state.audio as HTMLAudioElement).pause()
                state.audioControlText = '>'
            }
        }
    
        return {
            ...toRefs(state),
            audioSrc,
            handleAudio
        }
    },
})
</script>

<style scoped>
        @font-face {
            font-family: '瘦金简体';
            src: url('http://cdn.xizhi.tech/%E7%98%A6%E9%87%91%E7%AE%80%E4%BD%93.ttf');
        }

        .text-container {
            font-family: '瘦金简体';
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
      

        .header {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            padding: 0 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
        }

        .header ul{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header li {
            margin: 0 20px;
        }

        .main {
            flex-grow: 1;
            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;
            font-size: 100px;
        }
        #audioControl {
            border: 1px solid #000;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
            background-color: black;
            color: #fff;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 20px;
            box-sizing: border-box;
            font: 400 13.3333px Arial
        }
        .footer {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            width: 100%;
            border-top: 1px solid #eee;
            line-height: 50px;
            text-align: center;
            color: #ccc;
        }
        .footer a {
            font-size: 14px;
            color: #ccc;
        }
</style>
