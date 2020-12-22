import { 
  ElButton, 
  ElContainer, 
  ElHeader, 
  ElMain, 
  ElFooter, 
  ElAside, 
  ElLoading, 
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElBacktop
} from 'element-plus'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

const components = [
  ElButton,
  ElContainer, 
  ElHeader, 
  ElMain, 
  ElFooter, 
  ElAside,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElBacktop,
]

const plugins = [ElLoading]

export default (app: any) => {
  locale.use(lang)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
