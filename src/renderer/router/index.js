/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../components/Layout'
import WeekPlan from '../pages/weekPlan/index'
import DayPlan from '../components/DayPlan'
import MonthPlan from '../pages/MonthPlan'
import PlandeComposition from '../pages/planDecomposition/index'

const routes = [
    {
        path: "/",
        component: Layout,
        children: [{
            path: 'index',
            component: DayPlan
        }]
        
    },
    {
        path:"/dayplan",
        component: Layout,
        children: [{
            path: 'index',
            component: DayPlan
        }]
    },
    {
        path:"/weekplan",
        component: Layout,
        children: [{
            path: 'index',
            component: WeekPlan
        }]
    },
    {
        path:"/monthplan",
        component: Layout,
        children: [{
            path: 'index',
            component: MonthPlan
        }]
    },
    {
        path:"/plandecomposition",
        component: Layout,
        children: [{
            path: 'index',
            component: PlandeComposition
        }]
    }
]

let router =  new Router({
    routes
})
export default router;