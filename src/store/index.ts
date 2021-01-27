import { RootModule } from "./root.module"
import { createVuexStore } from "vuex-simple"

const instance = new RootModule()

export default createVuexStore(instance, {
	strict: true,
	modules: {},
	plugins: []
})
