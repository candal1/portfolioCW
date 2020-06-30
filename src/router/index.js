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
    component: Home,
    meta: {
      title: 'Home | Chris Wilson'
    }
  },
  {
    path: '/recordings',
    component: Recordings,
    meta: {
      title: 'Recordings | Chris Wilson'
    }
  },
  {
    path: '/live-sound',
    component: LiveSound,
    meta: {
      title: 'Live Sound | Chris Wilson'
    }
  },
  {
    path: '/sound-for-video',
    component: SoundForVideo,
    meta: {
      title: 'Sound for Video | Chris Wilson'
    }
  },
  {
    path: '/composition-projects',
    component: Composition,
    meta: {
      title: 'Composition Projects | Chris Wilson'
    }
  },
  {
    path: '/tank-drums',
    component: TankDrums,
    meta: {
      title: 'Tank Drums | Chris Wilson'
    }
  },
  {
    path: '/fabrication-process',
    component: FabProcess,
    meta: {
      title: 'Fabrication Process | Chris Wilson'
    }
  },
  {
    path: '/experience',
    component: Experience,
    meta: {
      title: 'Experience | Chris Wilson'
    }
  },
  {
    path: '/contact',
    component: Contact, 
    meta: {
      title: 'Contact | Chris Wilson'
    }
  },
  {
    path: '/resume',
    component: Resume,
    meta: {
      title: 'Resume | Chris Wilson'
    }
  }
];

const router = new VueRouter({
  routes
})

// Set document title based off of current route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
