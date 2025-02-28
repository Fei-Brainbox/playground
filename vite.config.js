import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),

        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false
                }
            }
        }),
    ],

    resolve: {
        alias: {
            '@comps': '/resources/js/components',
            '@css': '/resources/css'
        }
    },

    server: {
        host: 'laravel.test'
    },

});
