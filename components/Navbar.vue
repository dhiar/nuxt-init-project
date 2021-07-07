<template>
	<nav>
		<v-app-bar color="#05A971" dark flat height="50px" app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>

			<v-col cols="12" sm="4">
				<v-text-field class="mt-4" label="Search" prepend-icon="mdi-magnify">
				</v-text-field>
			</v-col>

			<v-spacer></v-spacer>

			<v-btn small class="ma-2" outlined color="white">
				<v-icon left>
					mdi-account-plus
				</v-icon>
				Add Member
			</v-btn>
		</v-app-bar>
	</nav>
</template>

<script>
export default {
	data: () => ({
		drawer: true,
		links: [
			{ icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
			{ icon: "mdi-briefcase-outline", text: "Job", route: "/job" },
			{ icon: "mdi-database-outline", text: "Dataset", route: "/dataset" },
			{ icon: "mdi-laptop", text: "Feature Store", route: "/featurestore" },
			{
				icon: "mdi-book-open-blank-variant",
				text: "Catalog",
				route: "/catalog",
			},
			{ icon: "mdi-file-document", text: "Workspace", route: "/workspace" },
			{ icon: "mdi-timer-sand", text: "Experiments", route: "/experiments" },
			{ icon: "mdi-puzzle", text: "Models", route: "/model" },
			{ icon: "mdi-clock", text: "Serving", route: "/serving" },
			{ icon: "mdi-wifi", text: "Stream", route: "/stream" },
			{ icon: "mdi-folder-cog", text: "File Browser", route: "/filebrowser" },
			{ icon: "mdi-cog-outline", text: "Setting", route: "/setting" },
			{ icon: "mdi-check-outline", text: "Environment", route: "/environment" },
		],
	}),
};
</script>

<style scoped>
html {
	font-family: "open-sans";
}
</style>
