<template>
	<v-app>
		<Navbar />
		<v-main class="ma-4">
			<nuxt />
		</v-main>
	</v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
	components: {
		Navbar,
	},
	data: () => ({
		dialog: false,
		drawer: null,
		menus: [],
	}),
	computed: {},
	mounted() {},
	methods: {},
};
</script>
