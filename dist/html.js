var html;
var classListProcessor = function (className, value) {
    if (value === void 0) { value = ''; }
    if (className instanceof Array) {
        Array(className).forEach(function (sub) { value = classListProcessor(sub, value); });
    }
    if (className instanceof Object) {
        for (var name in className) {
            className[name] ? value += ' ' + name.trim().replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); }) : null;
        }
    }
    if (className instanceof String) {
        value += ' ' + className;
    }
    return value;
};
var styleListProcessor = function (style, value) {
    if (value === void 0) { value = ''; }
    if (style instanceof Array) {
        Array(style).forEach(function (sub) { value = styleListProcessor(sub, value); });
    }
    if (style instanceof Object) {
        for (var name in style) {
            value += ' ' + name.trim().replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); }) + '=' + style[name];
        }
    }
    if (style instanceof String) {
        value += ' ' + style;
    }
    return value;
};
var attrPreprocessor = function (name, value) {
    name = name.trim();
    switch (name) {
        case 'className':
            return ['class', classListProcessor(value)];
        case 'class':
            return ['class', classListProcessor(value)];
        case 'style':
            return ['style', styleListProcessor(value)];
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
            return value ? [name, true] : ['', ''];
        default:
            return [name.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); }), value];
    }
};
var _createElement = function (tagName) {
    return document.createElement(tagName);
};
var _updateAttributes = function (element, attrs) {
    for (var name in attrs) {
        var value = attrs[name];
        if (typeof value === 'function') {
            name.slice(0, 2) === 'on' ?
                element[name.toLowerCase().replace('-', '')] = value :
                element['on' + name.toLowerCase().replace('-', '')] = value;
        }
        else {
            var _a = attrPreprocessor(name, value), _name = _a[0], _value = _a[1];
            _name ? element.setAttribute(_name, _value) : null;
        }
    }
    return element;
};
var _cleanAttributes = function (element) {
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        element.removeAttribute(element.attributes[i].name);
    }
    return element;
};
var _appendChildNodes = function (element, childNodes) {
    childNodes.forEach(function (child) { return element.appendChild(child); });
    return element;
};
var _cleanChildNodes = function (element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        element.removeChild(element.childNodes[i]);
    }
    return element;
};
var childNodes = function (element) {
    var nodes = [];
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        nodes.push(element.childNodes[i]);
    }
    return nodes;
};
var createElement = function (tagName, attrs, childNodes) {
    return _appendChildNodes(_updateAttributes(_createElement(tagName), attrs), childNodes);
};
var updateElement = function (element, attrs, childNodes) {
    return _appendChildNodes(_cleanChildNodes(_updateAttributes(element, attrs)), childNodes);
};
var text = function (data) { return document.createTextNode(data); };
var div = function (attrs, children) { return createElement('div', attrs, children); };
var img = function (attrs) { return createElement('img', attrs, []); };
var input = function (attrs) { return createElement('input', attrs, []); };
var button = function (attr, text) { return createElement('button', attr, [text]); };
var benchmark = [];
for (var i = 10000 - 1; i >= 0; i--) {
    benchmark.push(i);
}
var appChildren = function () {
    return [
        input({ type: 'text', value: flux.value, change: function (e) {
                flux.setValue(e.currentTarget.value);
            } }),
        div({}, benchmark.map(function (v) {
            return div({}, [text(flux.value)]);
        }))
    ];
};
var app = div({}, []);
document.body.appendChild(app);
var flux = {
    value: '',
    setValue: function (v) {
        flux.value = v;
        flux.dispatch();
    },
    dispatch: function () {
        updateElement(app, {}, appChildren());
    }
};
//# sourceMappingURL=html.js.map