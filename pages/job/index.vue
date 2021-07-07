<template>
	<div class="job">
		<v-container class="mr-6">
			<h4 class="ml-4 mt-2">Job</h4>
			<v-layout row wrap class="mb-4">
				<v-flex sm4 xs12 md6 lg2>
					<v-btn
						to="/newjob"
						width="100px"
						text-light
						small
						class="text ml-3 mt-4"
						color="success"
					>
						New Job
					</v-btn>
				</v-flex>

				<v-flex sm4 xs12 md6 lg3>
					<v-menu
						ref="menu"
						v-model="menu"
						:close-on-content-click="false"
						:return-value.sync="date"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="date"
								label="From"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="date" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="menu = false">
								Cancel
							</v-btn>
							<v-btn text color="primary" @click="$refs.menu.save(date)">
								OK
							</v-btn>
						</v-date-picker>
					</v-menu>
				</v-flex>

				<v-flex sm4 xs12 md6 lg3>
					<v-menu
						ref="menu"
						v-model="menu"
						:close-on-content-click="false"
						:return-value.sync="date"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="date"
								label="to"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="date" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="menu = false">
								Cancel
							</v-btn>
							<v-btn text color="primary" @click="$refs.menu.save(date)">
								OK
							</v-btn>
						</v-date-picker>
					</v-menu>
				</v-flex>
			</v-layout>

			<v-card class="rounded-lg ml-3">
				<v-card-title>
					<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Search"
						single-line
						hide-details
					></v-text-field>
				</v-card-title>
				<v-data-table
					:headers="headers"
					:items="fields"
					:search="search"
				></v-data-table>
			</v-card>
		</v-container>
	</div>
</template>

<script>
export default {
	layout: "dashboard",
	data() {
		return {
			search: "",
			headers: [
				{
					text: "Name",
					align: "start",
					filterable: false,
					value: "name",
				},
				{ text: "Created on", value: "calories" },
				{ text: "Type", value: "fat" },
				{ text: "Owner", value: "carbs" },
				{ text: "On Going", value: "protein" },
				{ text: "Actions", value: "iron" },
			],
			fields: [
				{
					name: "DV-attendances_features-v1_1620269575",
					calories: "May 6,2021 9:52:50 AM",
					fat: "SPARK",
					carbs: "AdminAdmin",
					protein: 0,
					iron: "(masih dipelajari)",
				},
			],
			date: new Date().toISOString().substr(0, 10),
			menu: false,
			modal: false,
			menu2: false,
		};
	},
};
</script>
