import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Jobs from '@/components/Jobs/Index'
import CreateJob from '@/components/CreateJob'
import EditJob from '@/components/EditJob'
import ViewJob from '@/components/ViewJob/Index'
import Information from '@/components/information/Information'
import More from '@/components/more'
import Company from '@/components/company/company'
import loginCompany from '@/components/company/loginCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/loginCompany',
      name: 'loginCompany',
      component: loginCompany
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/jobs/create',
      name: 'jobs-create',
      component: CreateJob
    },
    {
      path: '/jobs/:jobId',
      name: 'job',
      component: ViewJob
    },
    {
      path: '/Jobs/:jobId/edit',
      name: 'job-edit',
      component: EditJob
    },
    {
      path: '*',
      redirect: 'jobs'
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    }
  ]
})
