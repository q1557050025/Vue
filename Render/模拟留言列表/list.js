Vue.component('list', {
	props: {
		list: {
			type: Array,
			default: function() {
				return [];
			},
		}
	},
	render: function(h) {
		var _this = this;
		var list = [];
		this.list.forEach(function(item, index) {
			var render = h('div',{
				attrs: {
					class: 'list-item'
				},
			},[
				h('span', item.username + ':'),
				h('div',{
					attrs: {
						class: 'list-message'
					}
				},[
					h('p', item.message),
					h('a', {
						attrs: {
							class: 'list-reply'
						},
						on: {
							click: function() {
								_this.handleReply(index)
							}
						}
					},'回复')
				])
			]);
			list.push(render);
		})
		if(this.list.length) {
			return h('div', {
				attrs: {
					class: 'list'
				}
			},list)
		}else {
			return h('div','留言为空')
		}
	},
	methods: {
		handleReply(index){
			this.$emit('reply', index)
		}
	}
})