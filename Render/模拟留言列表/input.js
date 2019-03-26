Vue.component('v-input', {
	props: {
		value: {
			type: [String, Number],
			default: ''
		}
	},
	render: function (h) {
		var _this = this;
		return h('div', {
				attrs: {
					class: 'input',
				}
			},
			[
				h('span', '昵称:'),
				h('input', {
					attrs: {
						type: 'text',
					},
					domProps: {
						value: this.value
					},
					on: {
						input: function (e) {
							this.value = e.target.value;
							_this.$emit('input', e.target.value);
						}
					}
				})
			]
		);
	}
});

Vue.component('v-textarea', {
	props: {
		value: {
			type: [String, Number],
			default: ''
		}
	},
	render: function (h) {
		var _this = this;
		return h('div', {
				attrs: {
					class: 'textarea',
				}
			},
			[
				h('span', '留言:'),
				h('textarea', {
					attrs: {
						placeholder: '请输入留言内容',
					},
					domProps: {
						value: this.value
					},
					ref: 'message',
					on: {
						input: function (e) {
							this.value = e.target.value;
							_this.$emit('input', e.target.value);
						}
					}
				})
			]
		);
	},
	methods: {
		focus: function() {
			this.$refs.message.focus()
		}
	}
})