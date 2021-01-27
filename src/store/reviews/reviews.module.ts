import { Action, Getter, Mutation, State } from "vuex-simple"

import { RootModule } from "@/store/root.module"

export class ReviewsModule {
	constructor(public root: RootModule) {}

	@State()
	reviews = []

	@Action() getReviewsInfo() {
		this.getReviewsService
		/*		this.getReviewsService
			.getReviewsInfo()
			.then(data => this.setReviewsInfo(data))
			.catch(error => {
				console.log(error.message)
				this.setReviewsInfo([])
				return error
			})*/
	}

	@Mutation()
	setReviewsInfo(reviews: any) {
		this.reviews = reviews
	}

	@Getter()
	get getReviewsService() {
		console.log(this.root.uid, this.root.tenantName)
		//return new ReviewsService(this.root.uid, this.root.tenantName)
		return `${this.root.uid} ${this.root.tenantName}`
	}
}
