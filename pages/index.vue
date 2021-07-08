<template>
	<div class="dashboard">
		<v-container mt-4>
			<v-layout row wrap>
				<v-flex sm6 xs12 md6 lg3>
					<v-card class="rounded-lg ma-3" width="160">
						<v-img center>
							<img src="~assets/images/imagedata.png" width="160" alt="" />
						</v-img>
					</v-card>
				</v-flex>

				<v-flex sm6 xs12 md6 lg3>
					<v-card class="rounded-lg ma-3" width="160" rounded>
						<v-img center>
							<img src="~assets/images/imageGraph.png" width="160" alt="" />
						</v-img>
					</v-card>
				</v-flex>

				<v-flex sm6 xs12 md6 lg3>
					<v-card class="rounded-lg ma-3" width="160" rounded>
						<v-img center>
							<img src="~assets/images/imageGraph.png" width="160" alt="" />
						</v-img>
					</v-card>
				</v-flex>
			</v-layout>

			<v-flex xs12 sm6 md4 lg3 mt-8>
				<v-btn small to="/actionhistory" class="ma-2" outlined color="#05A971">
					Action History
				</v-btn>
			</v-flex>
		</v-container>
	</div>
</template>

<script>
export default {
	layout: "dashboard",
	data() {
		return {};
	},
};
</script>
