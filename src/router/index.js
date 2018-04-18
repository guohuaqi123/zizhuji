import Vue from 'vue'
import Router from 'vue-router'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import secondLevel from '@/components/secondLevel'
import secondGanzhi from '@/components/secondGanzhi'
import secondRenwen from '@/components/secondRenwen'
import secondXianshang from '@/components/secondXianshang'
import secondZhuanti from '@/components/secondZhuanti'
import threeTu from '@/components/threeTu'
import threeYoulan from '@/components/threeYoulan'
import FourLevelPage from '@/components/FourLevelPage'
import FourLevelPageImg from '@/components/FourLevelPageImg'
import guanwang from '@/components/guanwang'
import baidu from '@/components/baidu'
import ElementUI from 'element-ui'

import $ from "jquery";
//import $ from "jquery"
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(ElementUI, { locale })

import VueVideoPlayer from 'vue-video-player'
//import 'video.js/dist/video-js.css'




Vue.use(Router);
Vue.use(VueVideoPlayer);
//Vue.use($);


export default new Router({
    routes: [{
            path: '/hell',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/secondLevel',
            name: 'secondLevel',
            component: secondLevel
        }, {
            path: '/secondGanzhi',
            name: 'secondGanzhi',
            component: secondGanzhi
        }, {
            path: '/secondRenwen',
            name: 'secondRenwen',
            component: secondRenwen
        }, {
            path: '/secondXianshang',
            name: 'secondXianshang',
            component: secondXianshang
        }, {
            path: '/secondZhuanti',
            name: 'secondZhuanti',
            component: secondZhuanti
        }, {
            path: '/threeTu', //三级页
            name: 'threeTu',
            component: threeTu
        }, {
            path: '/threeYoulan',
            name: 'threeYoulan',
            component: threeYoulan
        }, {
            path: '/FourLevelPage', //四级页
            name: 'FourLevelPage',
            component: FourLevelPage
        }, {
            path: '/FourLevelPageImg', //四级页img
            name: 'FourLevelPageImg',
            component: FourLevelPageImg
        }, {
            path: '/guanwang', //崂山官网
            name: 'guanwang',
            component: guanwang
        }, {
            path: '/baidu', //崂山官网
            name: 'baidu',
            component: baidu
        },
    ]
})