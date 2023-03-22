const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  configureWebpack: {},
  transpileDependencies: true,
  pwa: {
    themeColor: "",
    msTileColor: "#f5c14b",
    author: "Sander Vonk",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    display: "standalone",
    manifestOptions: {
      name: "MV Test Tracker",
      short_name: "MVTT",
      description:
        "MV Test tracker provides an effective way to manage your upcoming tests and exams.",
      screenshots: [
        // in ./img/ss/
        // narrow
        {
          src: "./img/ss/portal-narrow.jpeg",
          sizes: "360x844",
          type: "image/jpeg",
          label: "Portal (narrow)",
          discription: "The portal page on a narrow screen",
        },
        {
          src: "./img/ss/login-narrow.jpeg",
          sizes: "360x844",
          type: "image/jpeg",
          label: "Login (narrow)",
          discription: "The login page on a narrow screen",
        },
      ],
      shortcuts: [
        {
          name: "Home",
          short_name: "Home",
          description: "Go to the home page",
          url: "/",
          icons: [
            {
              src: "/img/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
        {
          name: "Portal",
          short_name: "Portal",
          description: "Open the portal",
          url: "/portal",
          icons: [
            {
              src: "/img/icons/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
        },
      ],
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "./img/icons/apple-touch-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "./img/icons/apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "./img/icons/apple-touch-icon-120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "./img/icons/apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "./img/icons/apple-touch-icon-180x180.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "./img/icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "./img/icons/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "./img/icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "./img/icons/msapplication-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "./img/icons/mstile-150x150.png",
          sizes: "150x150",
          type: "image/png",
        },
      ],
    },
  },
});
