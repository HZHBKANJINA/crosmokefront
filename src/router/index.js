import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCigarette from '@/components/AddCigarette.vue'
import AddMember from '@/components/AddMember.vue'
import AddPool from '@/components/AddPool.vue'
import CigaretteView from '@/views/CigaretteView.vue'
import NovaPocetna from '@/views/NovaPocetna.vue'
import MemberView from '@/views/MemberView.vue'
import PoolView from '@/views/PoolView.vue'


const routes = [
  {
    path: '/oldhome',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'pocetna',
    component:NovaPocetna,
    props:true
  },
  {
    path:'/addcig',
    name:'addcig',
    component:AddCigarette,
    props:true
  },
  {
    path:'/addmember',
    name:'addmember',
    component:AddMember,
    props:true
  },
  {
    path:'/addpool',
    name:'addpool',
    component:AddPool,
    props:true
  },
  {
    path:'/sezone',
    name:'sezone',
    component:CigaretteView,
    props:true,
  },
  {
    path:'/clanovi',
    name:'clanovi',
    component:MemberView,
    props:true
  },
  {
    path:'/ankete',
    name:'ankete',
    component:PoolView,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
