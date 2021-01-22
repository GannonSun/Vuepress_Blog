/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { addLinkToHead, addScriptToHead } from '@theme/helpers/utils'
import { registerCodeThemeCss, interceptRouterError } from '@theme/helpers/other'
import VueCompositionAPI from '@vue/composition-api'

import Router from 'vue-router'

const router = new Router({
  mode: 'history'
})

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  Vue.use(VueCompositionAPI)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  if (!isServer) {
    addLinkToHead('//at.alicdn.com/t/font_1030519_2ciwdtb4x65.css')
    addScriptToHead('//kit.fontawesome.com/51b01de608.js')
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }

  router.beforeEach((to, from, next) => {
    // 解决非ASCII文件名的路由, 防止 404
    const decodedPath = decodeURIComponent(to.path)
    if (decodedPath !== to.path) {
      next(Object.assign({}, to, {
        fullPath: decodeURIComponent(to.fullPath),
        path: decodedPath
      }))
    } else {
      next()
    }
  })

  interceptRouterError(router)
}
