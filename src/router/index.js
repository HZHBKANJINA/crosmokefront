import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCigarette from '@/components/AddCigarette.vue'
import AddMember from '@/components/AddMember.vue'
import AddPool from '@/components/AddPool.vue'
import CigaretteView from '@/views/CigaretteView.vue'
import NovaPocetna from '@/views/NovaPocetna.vue'
import MemberView from '@/views/MemberView.vue'
import PoolView from '@/views/PoolView.vue'
import AddVipCig from '@/components/AddVipCig.vue'
import UpdateMember from '@/components/UpdateMember.vue'


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
    path:'/cigare',
    name:'cigare',
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
  {
    path:'/addvipcig',
    name:'addvipcig',
    component:AddVipCig
  },
  {
    path:'/update',
    name:'update',
    component:UpdateMember
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
