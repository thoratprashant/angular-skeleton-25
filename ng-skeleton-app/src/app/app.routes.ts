import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./layouts/auth/auth.component').then(m => m.AuthComponent),
        children: [
            {
                path: 'login',
                loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
                title: 'Login'
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
                title: 'forgot Password'
            },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
