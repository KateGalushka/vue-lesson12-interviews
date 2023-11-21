import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkersView from '../views/WorkersView.vue'
import WorkerEditorView from '../views/WorkerEditorView.vue'
import CandidatesView from '../views/CandidatesView'
import CandidateEditorView from '../views/CandidateEditorView'
import InterviewsView from '../views/InterviewsView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
       path: '/workers',
		 name: 'workers',
		 component: WorkersView,
    },
    {
       path: '/workers/workerEditor/:id?',
		 name: 'workerEditor',
		 component: WorkerEditorView,
    },
    {
       path: '/candidates',
		 name: 'candidates',
		 component: CandidatesView,
    },
    {
       path: '/candidates/candidateEditor/:id?',
		 name: 'candidateEditor',
		 component: CandidateEditorView,
    },
    {
		 path: '/interviews',
		 name: 'interviews',
		 component: InterviewsView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
