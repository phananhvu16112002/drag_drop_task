// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // add
  css: ["bootstrap/dist/css/bootstrap.min.css"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    },
  },

  modules: ["@ant-design-vue/nuxt"]
})