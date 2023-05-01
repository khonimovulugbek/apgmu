import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Budjet from "@/views/Budjet.vue";
import Daaniy from "@/views/Daaniy.vue";
import Dokument from "@/views/Dokument.vue";
import Info from '@/views/Info.vue';
import Kontakt from '@/views/Kontakt.vue';
import Malumot from '@/views/Malumot.vue';
import Region from '@/views/Region.vue';
import Tashkilot from '@/views/Tashkilot.vue';
import Uslugi from '@/views/Uslugi.vue';
import Yangiliklarone from '@/views/Yangiliklarone.vue';
import Yangiliklartwoo from '@/views/Yangiliklartwoo.vue';
import Yangiliklarthre from '@/views/Yangiliklarthre.vue';
import Yangiliklarfor from '@/views/Yangiliklarfor.vue';
import Glavrachone from '@/views/Glavrachone.vue';
import Glavrachtwoo from '@/views/Glavrachtwoo.vue';
import Glavrachthre from '@/views/Glavrachthre.vue';
import Glavrachfor from '@/views/Glavrachfor.vue';
import Qibray from '@/views/Qibray.vue';
import Nachalnik from '@/views/Nachalnik.vue';
import Direktor from '@/views/Direktor.vue';
import Upravleniyone from '@/views/Upravleniyone.vue';
import Upravleniytwoo from '@/views/Upravleniytwoo.vue';
import Tendir from '@/views/Tendir.vue';


const router = createRouter({
  history: createWebHistory(),
  routes :[
      {
        path: '/',
        name: 'Home',
        component: Home
      }, {
        path: '/about',
        name: 'About',
        component: About
      }, {
        path: '/budjet',
        name: 'Budjet',
        component: Budjet
      }, {
        path: '/danniy',
        name: 'Daaniy',
        component: Daaniy
      }, {
        path: '/dokument',
        name: 'Dokument',
        component: Dokument
      }, {
        path: '/info',
        name: 'Info',
        component: Info
      }, {
        path: '/kontakt',
        name: 'Kontakt',
        component: Kontakt
      }, {
        path: '/malumot',
        name: 'Malumot',
        component: Malumot
      }, {
        path: '/region',
        name: 'Region',
        component: Region
      }, {
        path: '/tashkilot',
        name: 'Tashkilot',
        component: Tashkilot
      }, {
        path: '/uslugi',
        name: 'Uslugi',
        component: Uslugi
    }, 
      
    {
      path: '/yangiliklarone',
      name: 'Yangiliklarone',
      component: Yangiliklarone
    }, {
      path: '/yangiliklartwoo',
      name: 'Yangiliklartwoo',
      component: Yangiliklartwoo
    }, {
      path: '/yangiliklarthre',
      name: 'Yangiliklarthre',
      component: Yangiliklarthre
    }, {
      path: '/yangiliklarfor',
      name: 'Yangiliklarfor',
      component: Yangiliklarfor
    },
       {
        path: '/glavrachone',
        name: 'Glavrachone',
        component: Glavrachone
      },
       {
        path: '/glavrachtwoo',
        name: 'Glavrachtwoo',
        component: Glavrachtwoo
      },
       {
        path: '/glavrachthre',
        name: 'Glavrachthre',
        component: Glavrachthre
      },
       {
        path: '/glavrachfor',
        name: 'Glavrachfor',
        component: Glavrachfor
      },
       {
        path: '/qibray',
        name: 'Qibray',
        component: Qibray
      },
       {
        path: '/nachalnik',
        name: 'Nachalnik',
        component: Nachalnik
      },
       {
        path: '/direktor',
        name: 'Direktor',
        component: Direktor
      },
       {
        path: '/upravleniyone',
        name: 'Upravleniyone',
        component: Upravleniyone
      },
       {
        path: '/upravleniytwoo',
        name: 'Upravleniytwoo',
        component: Upravleniytwoo
      },
       {
        path: '/tendir',
        name: 'Tendir',
        component: Tendir
      },
  ]
})

export default router
