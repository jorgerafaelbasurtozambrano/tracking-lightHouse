import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['Inicio'],
    },
    {
        text: 'INTERFACE',
        // items: ['layouts', 'pages'],
        items: ['layouts'],

    },
    // {
    //     text: 'ADDONS',
    //     items: ['charts', 'tables'],
    // },
];

export const sideNavItems: SideNavItems = {
    Inicio: {
        icon: 'tachometer-alt',
        text: 'Inicio',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Seguimiento',
        submenu: [
            // {
            //     text: 'Static Navigation',
            //     link: '/dashboard/static',
            // },
            // {
            //     text: 'Light Sidenav',
            //     link: '/dashboard/light',
            // },
            {
                text: 'Nuevo Seguimiento',
                link: '/dashboard/Nuevo',
            },
            {
                text: 'Listar Seguimientos',
                link: '/dashboard/Seguimientos',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
