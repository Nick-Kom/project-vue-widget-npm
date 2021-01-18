module.exports = {
	root: true,

	globals: {
		dataLayer: "writable"
	},

	env: {
		node: true
	},

	parserOptions: {
		ecmaVersion: 2020
	},

	rules: {
		semi: "off",
		"no-console": "off",
		"no-debugger": "off",
		"no-useless-escape": "off",
		"vue/attributes-order": "error",
		"vue/order-in-components": "error",
		"vue/this-in-template": "error",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-empty-function": "off"
	},

	extends: [
		"plugin:vue/strongly-recommended",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint"
	]
}
