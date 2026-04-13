import { sveltekit } from "@sveltejs/kit/vite";
import { vite as vidstack } from "vidstack/plugins";
import { defineConfig } from "vite-plus";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	lint: { options: { typeAware: true, typeCheck: true } },
	fmt: {
		printWidth: 100,
		tabWidth: 4,
		useTabs: true,
		semi: true,
		singleQuote: false,
		trailingComma: "all",
		sortImports: true,
		sortPackageJson: true,
	},
	plugins: [sveltekit(), vidstack()],
});
