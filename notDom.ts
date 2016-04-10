let html: any
// 目前不支持接收限定格式的子节点。。。例如限定格式为 (li>a)[]。。。
// 不过感觉限定格式的子节点本身并没有太大意义。。。因为这种限定格式的html往往仅表示数据，所以js对象作为属性更合适
// 至于子节点不限定格式，但是对子节点做一个包装，例如 margin: 20px，更正常的写法没有区别。。。
// 事实上，这个库仅仅是html的一层抽象，具体的至于限定或包装子节点等都是具体的使用这个库去创建函数，构建组建，由组建内在逻辑去控制。

let classListProcessor = (className: any, value: string = '') => {
    if (className instanceof Array) {
        Array(className).forEach(sub => { value = classListProcessor(sub, value) })
    }
    if (className instanceof Object) {
        for (var name in className) {
            className[name] ? value += ' ' + name.trim().replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()) : null
        }
    }
    if (className instanceof String) {
        value += ' ' + className
    }
    return value
}

let styleListProcessor = (style: any, value: string = '') => {
    if(style instanceof Array) {
        Array(style).forEach(sub => { value = styleListProcessor(sub, value) })
    }
    if (style instanceof Object) {
        for (var name in style) {
            value += ' ' + name.trim().replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()) + '=' + style[name]
        }
    }
    if (style instanceof String) {
        value += ' ' + style
    }
    return value
}

let attrPreprocessor = (name: string, value: any) => {
    name = name.trim()
    switch (name) {
        case 'className':
            return ['class', classListProcessor(value)]
        case 'class':
            return ['class', classListProcessor(value)]
        case 'style':
            return ['style', styleListProcessor(value)]
        case 'async':
        case 'autocomplete':
        case 'autofocus':
        case 'autoplay':
        case 'checked':
        case 'contenteditable':
        case 'controls':
        case 'default':
        case 'defer':
        case 'disabled':
        case 'download':
        case 'hidden':
        case 'ismap':
        case 'loop':
        case 'multiple':
        case 'novalidate':
        case 'readonly':
        case 'required':
        case 'reversed':
        case 'scoped':
        case 'seamless':
        case 'selected':
        case 'spellcheck':
            return value ? [name, true] : ['', '']
        default:
            return [name.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()), value]
    }
}

// merge with interface HTMLElement
// interface HTMLElement {
//     update: (attrs: Object, children: Node[]) => HTMLElement
// }


class DomJs {
    element: HTMLElement
    constructor(public tagName: string, public attrs: Object = {}, public children: DomJs[] = [], public key?: string) {
        // code...
    }
    updateAttrs(attrs: Object) {
        for (var name in attrs) {
            this.attrs[name] = attrs[name]
        }
    }
    clearAttrs() {
        this.attrs = {}
    }
    appendChildren(children: DomJs[]) {
        this.children.push(...children)
    }
    clearChildren() {
        this.children = []
    }
    render() {
        this.element = _appendChildNodes(_updateAttributes(_createElement(this.tagName), this.attrs), this.children.map(child => child.render()))
        return this.element
    }
}


let _createElement = (tagName: string) => {
    return document.createElement(tagName)
}
let _updateAttributes = (element: HTMLElement, attrs: Object) => {
    for (var name in attrs) {
        let value = attrs[name]
        if (typeof value === 'function') {
            // 先处理事件名 click, onclick, onClick, mouseOver, onMouseOver, on-click 都可以
            name.slice(0, 2) === 'on' ?
                element[name.toLowerCase().replace('-', '')] = value :
                element['on' + name.toLowerCase().replace('-', '')] = value
        } else {
            // 后处理属性名及属性值
            // class可以属性名是 className, class 值可以是 string, dict<string, bool>, array<string|dict<string, bool>>, 
            // bool属性如 disabled, 当值为 false 时不会被 setAttribute
            let [_name, _value] = attrPreprocessor(name, value)
            _name ? element.setAttribute(_name, _value) : null
        }
    }
    return element
}
let _cleanAttributes = (element: HTMLElement) => {
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        element.removeAttribute(element.attributes[i].name)
    }
    return element
}
let _appendChildNodes = (element: HTMLElement, childNodes: Node[]) => {
    childNodes.forEach(child => element.appendChild(child))
    return element
}
let _cleanChildNodes = (element: HTMLElement) => {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        element.removeChild(element.childNodes[i])
    }
    return element
}

let childNodes = (element: HTMLElement) => {
    let nodes: Node[] = []
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        nodes.push(element.childNodes[i])
    }
    return nodes
}


let createElement = (tagName: string, attrs: Object, childNodes: Node[]) => {
    return _appendChildNodes(_updateAttributes(_createElement(tagName), attrs), childNodes)
}

let updateElement = (element: HTMLElement, attrs: Object, childNodes: Node[]) => {
    return _appendChildNodes(_cleanChildNodes(_updateAttributes(element, attrs)), childNodes)
}

let text = (data: string) => document.createTextNode(data)
let div = (attrs: Object, children: Node[]) => createElement('div', attrs, children)
let img = (attrs: Object) => createElement('img', attrs, [])
let input = (attrs: Object) => createElement('input', attrs, [])
let button = (attr: Object, text: Text) => createElement('button', attr, [text])

// createElement('a', {}, [createElement('div', {}, []), text('adsf')])

// var bb: Text
// let node =
//     div({
//         'class': 'modal fade',
//         dataBackdrop: false,
//         dataKeyboard: false,
//         id: 'buyProductModal',
//         tabindex: -1,
//         role: 'dialog',
//         'aria-labelledby': 'buyProductModalLabel',
//     }, [
//             div({ className: 'modal-dialog', role: 'document' }, [
//                 div({ className: 'modal-content' }, [
//                     div({ className: 'modal-header' }, [
//                         button({ className: 'close', type: 'button', dataMiss: 'modal', ariaLabel: 'Close', click: () => { updateElement(node, { dataMiss: 'jiangui' }, childNodes(node)); bb.textContent += 'abc'; } }, bb = text('nihao'))
//                     ])
//                 ])
//             ])
//         ]
//     )


let benchmark = []
for (var i = 10000 - 1; i >= 0; i--) {
    benchmark.push(i)
}

let appChildren = () => {
    return [
        input({ type: 'text', value: flux.value, change: (e) => {
            flux.setValue(e.currentTarget.value)
        } }),
        div(
            {},
            benchmark.map(v => {
                return div({}, [text(flux.value)])
            })
        )
    ]
}

let app = div({}, [])
document.body.appendChild(app)

let flux = {
    value: '',
    setValue: (v) => {
        flux.value = v
        flux.dispatch()
    },
    // listener: [],
    // subscribe: (fn, params) => {
    //     flux.listener.push([fn, params])
    //     return fn(params)
    // },
    dispatch: () => {
        // flux.listener.forEach(v => v[0](v[1]))
        updateElement(app, {}, appChildren())
    }
}