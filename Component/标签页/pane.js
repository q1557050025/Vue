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
	data: function() {
		return {
			show: true,
		}
	},
	methods: {
		updateNav() {
			this.$parent.updateNav();
		}
	},
	watch: {
		label: function() {
			this.updateNav()
		}
	},
	mounted: function() {
		this.updateNav();
	}
})