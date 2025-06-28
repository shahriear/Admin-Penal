// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// // https://vite.dev/config/

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 🔁 এখানে তোমার GitHub Repo name বসাও
const repoName = 'admin-penal';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
