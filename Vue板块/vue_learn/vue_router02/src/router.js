import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from "./views/About.vue"
import Child1 from "./views/child1.vue" 
import Child2 from "./views/child2.vue" 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
     
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children:[
         {
           path: "/about/child1",
           component: Child1
         },
         {
           path: "/about/child2",
           component: Child2
         },
         {
           path: "/",
           redirect:'/about/child2'

         }


      ]
 
    }
  ]
})
