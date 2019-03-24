Vue.component('input-number', {
	template: '\
		<div class="input-number">\
			<input type="text" \
			@change="handleChange"\
			:value="currentValue">\
			<button \
			@click="handleBtn" value="1">+</button>\
			<button \
			@click="handleBtn">-</button>\
		</div>',
	data: function(){
		return {
			currentValue: this.value,
		}
	},
	props: {
		value: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: Infinity 
		},
		min: {
			type: Number,
			default: -Infinity
		}
	},
	watch: {
		currentValue:function(val) {
		},
		value: function(val) {
		}
	},
	methods: {
		handleBtn: function(e) {
			if(e.target.value == 1) {
				this.currentValue += 1;
			}else{
				this.currentValue -= 1;
			}
			if(this.currentValue > this.max){
				this.currentValue = this.max
			}else if(this.currentValue < this.min){
				this.currentValue = this.min
			}
		},
		handleChange: function(e) {
			var val = e.target.value.trim();
			var max = this.max;
			var min = this.min;
			if(!isNaN(val)){
				val = Number(val);
				if(val >= max) val = max;
				if(val <= min) val = min;
				this.currentValue = val;
			}else{
				e.target.value = this.currentValue;
			}
		}
	}
})