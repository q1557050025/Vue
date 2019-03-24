Vue.component('tabs', {
	template: '#tabs',
	props: {
		value: {
			type: [String, Number]
		},
	},
	data: function() {
		return {
			currentValue: this.value,
			navList: [],
		}
	},
	methods: {
		getTabs() {
			return this.$children.filter(function(item) {
				return item.$options.name === 'pane'
			})
		},
		updateNav() {
			this.navList = [];
			var _this = this;
			this.getTabs().forEach(function(pane, index) {
				_this.navList.push({
					name: pane.name || index,
					label: pane.label
				})

				if(!pane.name) {
					pane.name = index
				} 

				if(index === 0 ) {
					if(!_this.currentValue) {
						_this.currentValue = pane.name || index
					}
				}
			});
			this.updateStatus();
		},
		updateStatus() {
			var tabs = this.getTabs();
			var _this = this;
			//注意array.forEach() 函数需要return
			tabs.forEach(function(tab, index) {
				return tab.show = _this.currentValue === tab.name
			})
		},
		clsTab(item) {
			return [
				'tabs-tab',
				{
					'tabs-tab-active': item.name === this.currentValue
				}
			]
		},
		handleChange(index) {
			this.currentValue = this.navList[index].name;
		}
	},
	watch: {
		value(val) {
			this.currentValue = val;
		},
		currentValue(val) {
			this.updateStatus();
		}
	},
})