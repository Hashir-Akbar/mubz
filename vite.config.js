// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        product: resolve(__dirname, "pages/products.html"),
        product_page: resolve(__dirname, "pages/product_page.html"),
        additional_accessories: resolve(
          __dirname,
          "pages/additional_accessories.html"
        ),
      },
    },
  },
});
