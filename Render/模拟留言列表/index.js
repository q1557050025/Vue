var app = new Vue({
	el: '#app',
	data: {
		list: [],
		username: '',
		message: ''
	},
	metods: {
		handleSend: function() {
			if(username === '') {
				window.alert('请输入昵称');
				return;
			}
			if(message === ''){
				window.alert('请输入内容');
				return;
			}
			this.list.push({
				username: this.usename,
				message: this.message
			});
		}
	}
})