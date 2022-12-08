import softwareImageUrl from '../assets/images/project/software.png';
import websiteImageUrl from '../assets/images/project/website_project.png';
import webAppImageUrl from '../assets/images/project/web_app.png';

export const PROJECT_TYPES = [
    {
        type: 'software',
        label: 'Software',
        iconUrl: softwareImageUrl,
        categories: [
            {
                category: 'WEBSITE',
                label: 'Website',
                iconUrl: websiteImageUrl,
            },
            {
                category: 'WEB_APP',
                label: 'Web app',
                iconUrl: webAppImageUrl
            },
            // TODO C: add new categories
            // {
            //     category: 'WEB_GAME',
            //     label: 'Web game'
            // },
            // {
            //     category: 'WEB_SHOP',
            //     label: 'Web shop'
            // },
            // {
            //     category: 'MOBILE_APP',
            //     label: 'Mobile app'
            // },
            // {
            //     category: 'MOBILE_GAME',
            //     label: 'Mobile game'
            // },
            // {
            //     category: 'WEB_APP',
            //     label: 'Web app'
            // },
            // {
            //     category: 'SYSTEM_SOFTWARE',
            //     label: 'System software'
            // },
            // {
            //     category: 'UTILITY_SOFTWARE',
            //     label: 'Utility software'
            // },
            // {
            //     category: 'APPLICATION_SOFTWARE',
            //     label: 'Application software'
            // },
        ]
    }
]