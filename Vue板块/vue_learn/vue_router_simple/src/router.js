// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: function () {
//         return import(/* webpackChunkName: "about" */ './views/About.vue')
//       }
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Child1 from './views/child1.vue'
import Child2 from './views/child2.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: '/about/child1',
                    component: Child1


                }, {
                    path: '/about/child2',
                    component: Child2
                }, {
                    path: '/',
                    redirect: '/about/child1'


                }


            ]
        },
        {
            path: '/',
            redirect: '/home'
        }


    ]


})