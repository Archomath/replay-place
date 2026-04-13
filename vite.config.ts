import { sveltekit } from "@sveltejs/kit/vite";
import { vite as vidstack } from "vidstack/plugins";
import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [sveltekit(), vidstack()],
});
