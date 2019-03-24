Vue.component('pane', {
	template: '#pane',
	props: {
		name: {
			type: [String, Number]
		},
		label: {
			type: String,
			default: '',
		}
	},
	methods: {
		updateNav() {
			this.$parent.updateNav();
		}
	},
	watch: {
		
	}
})