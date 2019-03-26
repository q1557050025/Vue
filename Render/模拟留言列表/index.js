var app = new Vue({
	el: '#app',
	data: {
		list: [],
		username: '',
		message: ''
	},
	methods: {
		handleSend: function() {
			if(this.username === '') {
				window.alert('请输入昵称');
				return;
			}
			if(this.message === ''){
				window.alert('请输入内容');
				return;
			}
			this.list.push({
				username: this.username,
				message: this.message
			});
		},
		handleReply(index) {
			var name = this.list[index].username;
			this.message = '回复@' + name + ':'; 
			this.$refs.message.focus();
		}
	}
})