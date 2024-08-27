/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-red': '#FF6F61',
                'custom-teal': '#1A3636',
                'login-button': '#D6BD98',
                'logout-button': '#D6BD98',
                'logout-button-hover': '#677D6A',
                'login-button-hover': '#677D6A',
                'custom-button': '#D6BD98',
                'custom-text': '#40534C',
                'search-button-bg': '#D6BD98',
                'profile-icon': '#D6BD98',
                'profile-menu-bg': '#F5F5F5',
                'profile-menu-hover': '#E0E0E0',
                'cart-icon': '#D6BD98',
                'cart-badge': '#D6BD98',
                'cart-text': '#40534C',
                'dropdown-background': '#FFFFFF',
                'dropdown-hover': '#F3F4F6',
                'icon-color': '#D6BD98',
                'signup-button': '#40534C',
                'signup-button-hover': '#B7A391',
                'signup-link': '#40534C',
                'signup-link-hover': '#B7A391',
                'dark-background': '#40534C',
                'custom-border': '#40534C',
                'beige': '#D6BD98',
            },
            // Custom utility for hiding scrollbars
            extend: {
                overflow: {
                    'hidden-y': 'hidden', // Hide vertical scrollbar
                    'hidden-x': 'hidden', // Hide horizontal scrollbar
                },
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.overflow-hidden': {
                    overflowY: 'hidden',
                    overflowX: 'hidden',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
}