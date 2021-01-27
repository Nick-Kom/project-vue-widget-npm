<template>
	<div id="app"><Widget></Widget></div>
</template>

<script lang="ts">
import Widget from "@/components/widget.vue"
import { Component, Vue } from "vue-property-decorator"

import { useModule } from "vuex-simple"
import { ReviewsModule } from "@/store/reviews/reviews.module"

@Component({ components: { Widget } })
export default class App extends Vue {
	reviewsModule: ReviewsModule = useModule<ReviewsModule>(this.$store, ["reviewsModule"]) as ReviewsModule

	mounted() {
		this.reviewsModule.getReviewsInfo()
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
