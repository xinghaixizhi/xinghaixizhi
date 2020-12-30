<template>
  <router-view/>
  <div style="text-align: center">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${{ secrets.beian }}" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <span style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">陕公网安备 ${{ secrets.beian }} 号</span>
      </a>
  </div>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
