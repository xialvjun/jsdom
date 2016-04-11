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
    if (style instanceof Array) {
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
            return value ? [name, true] : [name, false]
        default:
            return [name.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()), value]
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
            switch (_name) {
              case 'value':
                element.value = _value;
                break;
              case 'checked':
                element.checked = _value;
                break;
              default:
                _value ? element.setAttribute(_name, _value) : element.removeAttribute(_name);
                break;
            }
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

class DOM {
    element: HTMLElement
    constructor(public tagName: string, public attrs: Object = {}, public children: DomJs[] = [], public key?: string) {
    }
    update(dom: DOM) {
        if(this.tagName !== dom.tagName) {
            // code...
        }
    }
    render() {
        this.element = this.element || document.createElement(this.tagName)
        this.children.map(child => child.render())
        return this.element
    }
}

class div extends DOM {
  constructor(public attrs: Object = {}, public children: DomJs[] = [], public key?: string) {
    super('div', attrs, children, key)
  }
}


let renderIn = (dom: DOM, app: HTMLElement) => {
    for (var i = app.childNodes.length - 1; i >= 0; i--) {
        app.children[i].remove()
    }
    app.appendChild(dom.render())
    return dom
}

renderIn(new DOM(''), document.getElementById('app'))


let abc = () => { return { a: () => 'abc', b: { c: 1 } } }



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
