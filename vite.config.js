// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";
// import defaultTheme from "tailwindcss/defaultTheme";

// // https://vite.dev/config/
// export default defineConfig({
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Poppins", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [react(), tailwindcss()],
//   base: "/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
