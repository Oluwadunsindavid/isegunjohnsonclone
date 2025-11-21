import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
});


// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   // ✅ Add this block without touching existing config
//   tailwind: {
//     config: {
//       theme: {
//         extend: {
//           keyframes: {
//             pulseRing: {
//               "0%, 100%": { transform: "scale(1)" },
//               "50%": { transform: "scale(1.15)" },
//             },
//           },
//           animation: {
//             pulseRing: "pulseRing 2s ease-in-out infinite",
//           },
//         },
//       },
//     },
//   },
// });
