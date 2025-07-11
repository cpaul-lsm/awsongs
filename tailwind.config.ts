import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [typography, forms, containerQueries, daisyui],
    
    daisyui: {
        themes: [
            {
                custom: {
                    "primary": "#325a9b",
                    "secondary": "#666",
                    "accent": "#37cdbe",
                    "neutral": "#3d4451",
                    "base-100": "#ffffff",
                    "base-200": "#f8f9fa",
                    "base-300": "#e9ecef",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                }
            }
        ]
    }
} satisfies Config;