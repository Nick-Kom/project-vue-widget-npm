import vue from "rollup-plugin-vue"
import typescript from "rollup-plugin-typescript"

export default {
	input: "src/components/widget.vue",
	output: {
		format: "iife",
		file: "dist/widget.min.js"
	},
	external: ["vue"],
	plugins: [
		typescript({
			tsconfig: false,
			experimentalDecorators: true,
			module: "es2015"
		}),
		vue()
	]
}
