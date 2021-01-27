import { Action, Getter, Module, Mutation, State } from "vuex-simple"

import { ReviewsModule } from "@/store/reviews/reviews.module"

export class RootModule {
	@Module()
	reviewsModule = new ReviewsModule(this)

	@State()
	tenantName = "tenant name"

	@State()
	uid = "01"
}
