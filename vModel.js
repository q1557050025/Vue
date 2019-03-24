var app = new Vue({
	el: "#app",
	data: {
		message: '',
		text: ''
	}
})

var radioSingle = new Vue({
	el: '#radioSingle',
	data: {
		picked: false
	}
})

var radio = new Vue({
	el: "#radio",
	data: {
		picked: 'js'
	}
})

var checkbox = new Vue({
	el: "#checkbox",
	data: {
		checked: ["css"]
	}
})

var select = new Vue({
	el: "#select",
	data: {
		selected: "css",
	}
})


var selectMultiple = new Vue({
	el: "#selectMultiple",
	data: {
		selected: ["css", "no value"],
	}
})

var optionVfo = new Vue({
	el: "#optionVfor",
	data: {
		options: [
			{value: "html"},
			{value: "javascript"},
			{value: "css"},
		],
		selected: "html"
	}
})

var checkboxVbind = new Vue({
	el: "#checkboxVbind",
	data: {
		toggle: "trueValue",
		trueValue: "trueValue",
		falseValue: "falseValue"
	}
})