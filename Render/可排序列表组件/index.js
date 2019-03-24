var app = new Vue({
	el: '#app',
	data: {
		columns: [
			{
				title: '姓名',
				key: 'name'
			},
			{
				title: '年龄',
				key: 'age',
				sortable: true
			}
		],
		data: [
			{
				name: '王小明1',
				age: 181,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
			{
				name: '王小明2',
				age: 182,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
			{
				name: '王小明7',
				age: 187,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
			{
				name: '王小明4',
				age: 184,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
			{
				name: '王小明5',
				age: 185,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
			{
				name: '王小明6',
				age: 186,
				birthday: '1999-09-09',
				address: '北京朝阳区吃瓜群众'
			},
		]
	}
})