var app = new Vue({
	el: "#app",
	data: {
		list: [
			{
				id:1,
				name: 'iphone 7',
				price: 6888,
				count: 3,
			},
			{
				id: 2,
				name:'ipad',
				price: 2888,
				count: 4,
			},
			{
				id: 3,
				name: 'mac',
				price: 12888,
				count: 6,
			}
		]
	},
	computed: {
		totalprice: function() {
			var total = 0;
			for(var i=0,item;item = this.list[i++];) {
					total += item.price * item.count; 
			}

			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods: {
		handleAdd: function(index) {
			this.list[index].count++;
		},
		handleReduce: function(index) {
			if (this.list[index].count === 1) return
			this.list[index].count--;
		},
		handleRemove: function(index) {
			this.list.splice(index, 1);
		}
	}
})