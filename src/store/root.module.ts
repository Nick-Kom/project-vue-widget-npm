import { Module, State } from "vuex-simple"

import { ReviewsModule } from "@/store/reviews/reviews.module"

export class RootModule {
	@Module()
	reviewsModule = new ReviewsModule(this)

	@State()
	tenant: { name: string } = { name: "tenant name" }

	@State()
	user: { account: { uid: string } } = { account: { uid: "01" } }
}
