// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'video.js/dist/video-js.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from "jquery"
import VueI18n from 'vue-i18n'
import back from '@/components/back'


require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.component('back', back)

const i18n = new VueI18n({
    locale: 'Chinese', // 语言标识
    messages: {　　
        Chinese: require('./components/yuyan/Chinese'),
        English: require('./components/yuyan/English'),
        ry: require('./components/yuyan/ry'),
        hy: require('./components/yuyan/hy'),
    }

})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
})