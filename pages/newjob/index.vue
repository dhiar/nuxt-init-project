<template>
	<div id="app">
		<v-container>
			<h4 class="ml-4 mt-2">Job Definition</h4>
			<v-btn
				to="/newjob"
				text-light
				small
				class="text ml-3 mt-4 mb-4"
				color="success"
			>
				Import Job
			</v-btn>
			<v-layout row wrap>
				<v-flex sm12 xs12 md12 lg12>
					<v-card class="card rounded-lg ma-3">
						<v-list-item>
							<v-list-item-content>
								<div class="body-2">Job Name-Test</div>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>

				<v-flex sm12 xs12 md12 lg12>
					<v-card class="rounded-lg ma-3" rounded>
						<v-list-item>
							<v-list-item-content>
								<div class="body-2">Job Type-Spark</div>
							</v-list-item-content>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item>
							<v-list-item-content>
								<v-col cols="12" sm="6" class="py-4">
									<v-btn-toggle v-model="toggle_exclusive">
										<v-btn small>
											SPARK
										</v-btn>

										<v-btn small>
											FLINK
										</v-btn>
									</v-btn-toggle>
								</v-col>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>

				<v-flex sm12 xs12 md12 lg12>
					<v-card shaped class="rounded-lg ma-3" rounded>
						<v-list-item>
							<v-list-item-content>
								<div class="body-2">App file(.jar,.py, or.ipynb)</div>
							</v-list-item-content>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item>
							<v-list-item-content>
								<v-col cols="12" sm="6" class="py-4">
									<v-btn-toggle v-model="toggle_exclusive">
										<v-btn small>
											SELECT...
										</v-btn>
									</v-btn-toggle>
								</v-col>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>

				<v-flex sm12 xs12 md12 lg12>
					<v-card shaped class="rounded-lg ma-3" rounded>
						<v-list-item>
							<v-list-item-content>
								<div class="body-2">Job Details</div>
							</v-list-item-content>
						</v-list-item>
						<v-divider></v-divider>
						<v-list-item>
							<v-list-item-content>
								<v-row>
									<v-col cols="2">
										<v-subheader>Suffix for weight</v-subheader>
									</v-col>
									<v-col cols="4">
										<v-text-field
											label="Weight"
											value="28.00"
											suffix="lbs"
										></v-text-field>
									</v-col>
								</v-row>

								<v-row>
									<v-col cols="2">
										<v-subheader>Suffix for email domain</v-subheader>
									</v-col>
									<v-col cols="4">
										<v-text-field
											label="Email address"
											value="example"
											suffix="@gmail.com"
										></v-text-field>
									</v-col>
								</v-row>
							</v-list-item-content>
						</v-list-item>
					</v-card>
				</v-flex>

				<v-flex lg4 sm12> </v-flex>
			</v-layout>

			<v-flex>
				<v-spacer></v-spacer>
				<div class="d-block mt-6 mb-6">
					<v-pagination left v-model="page" :length="6"> </v-pagination>
				</div>
			</v-flex>
		</v-container>
	</div>
</template>

<script>
export default {
	layout: "dashboard",
	data() {
		return {
			page: 1,
		};
	},
};
</script>

<style>
#app {
	background-color: #f4f7fa;
}
html {
	font-size: 14px;
}
</style>
