// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path according to your setup
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['"Roboto"', 'sans-serif'],
                poppins: ['"Poppins"', 'sans-serif'],
                montserrat: ['"Montserrat"', 'sans-serif'],
                lato: ['"Lato"', 'sans-serif'],
                raleway: ['"Raleway"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
