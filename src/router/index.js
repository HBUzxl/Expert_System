import { createRouter, createWebHistory } from 'vue-router';

import WorkBench from '../views/WorkBench/index.vue';
import PendingDiagnosisCases from '../views/PendingDiagnosisCases/index.vue';
import DiagnosedCases from '../views/DiagnosedCases/index.vue';
import ReturnedCases from '../views/ReturnedCases/index.vue';
import Appointment from '../views/Appointment/index.vue';
import StatisticsReport from '../views/StatisticsReport/index.vue';
import FavoritesCases from '../views/FavoritesCases/index.vue';
import WithdrawCases from '../views/WithdrawCases/index.vue';


const routes = [
    {
        path: '/workbench',
        name: 'WorkBench',
        component: WorkBench
    },
    {
        path: '/waiting',
        name: 'PendingDiagnosisCases',
        component: PendingDiagnosisCases
    },
    {
        path: '/diagnosed',
        name: 'DiagnosedCases',
        component: DiagnosedCases
    },
    {
        path: '/return',
        name: 'ReturnedCases',
        component: ReturnedCases
    },
    {
        path: '/appointment',
        name: 'Appointment',
        component: Appointment
    },
    {
        path: '/statistics',
        name: 'StatisticsReport',
        component: StatisticsReport
    },
    {
        path: '/favorites',
        name: 'FavoritesCases',
        component: FavoritesCases
    },
    {
        path: '/withdraw',
        name: 'WithdrawCases',
        component: WithdrawCases
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
