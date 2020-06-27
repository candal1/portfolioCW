import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Composition from '../views/Composition.vue'
import TankDrums from '../views/TankDrums.vue'
import FabProcess from '../views/FabProcess.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'
import Recordings from '../views/Recordings.vue'
import LiveSound from '../views/LiveSound.vue'
import SoundForVideo from '../views/SoundForVideo.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recordings',
    component: Recordings
  },
  {
    path: '/live-sound',
    component: LiveSound
  },
  {
    path: '/sound-for-video',
    component: SoundForVideo
  },
  {
    path: '/composition-projects',
    component: Composition
  },
  {
    path: '/tank-drums',
    component: TankDrums
  },
  {
    path: '/fabrication-process',
    component: FabProcess
  },
  {
    path: '/experience',
    component: Experience
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/resume',
    component: Resume
  }
]

const router = new VueRouter({
  routes
})

export default router
