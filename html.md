### 最终效果
```javascript
let app = document.getElementById('app')

// 结合flux
let store = {
	data: {},
	dispatch: (action) => {
		store.actionHandler[action.type](action)
		refresh()
	},
	actionHandler: {
		inc: (v) => {
			store.data.num = store.data.num || 0 + 1
		}
	}
}

let refresh = () => {
	let application = div({}, [
		img({}),
		a({}, [text('whatever')]),
		pure_function(args),
		custom_component({}, [
			child_custom_components
		])
	])
	render(application, app)
}

refresh()
```

### 假设一
```javascript
div = (attrs, children) => {
	let ele = document.createElement('div')
	......
	return ele
}
img = ...
span = ...
a = ...
```
可是这样是不行的，因为：
1. 创建太多dom元素，速度很慢
2. 用新dom元素替换旧元素，会损失很多信息，例如input的focus状态
3. custom_component 没法设计，只能用简单的pure_function，可是pure_function没法截断刷新视图操作(flux中有)
3. 说到底，就是没有virtual dom

##### Virtual DOM
```javascript
div = (attrs, children) => {
	return {

	}
}
```
