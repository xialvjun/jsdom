var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var VNode = (function () {
    function VNode(tagName, attrs, children) {
        if (attrs === void 0) { attrs = {}; }
        if (children === void 0) { children = []; }
        this.tagName = tagName;
        this.attrs = attrs;
        this.children = children;
        this.key = attrs.key;
    }
    VNode.prototype.updateChildren = function (newChildren) {
        var oldChildren = this.children;
        var oldMap = {};
        var oldList = [];
        for (var oldChild in oldChildren) {
            oldChild.key ? oldMap[oldChild.key] = oldChild : oldList.push(oldChild);
        }
        var cur = [];
        for (var newChild in newChildren) {
            if (newChild.key && oldMap[newChild.key] && newChild.tagName === oldMap[newChild.key].tagName) {
                cur.push(oldMap[newChild.key].update(newChild));
            }
            else if (newChild.tagName === oldList.shift().tagName) {
            }
        }
    };
    VNode.prototype.update = function (vnode) {
        if (this.tagName !== vnode.tagName) {
        }
        vnode.element = this.element;
        return vnode;
    };
    VNode.prototype.render = function () {
        this.element = this.element || document.createElement(this.tagName);
        this.children.map(function (child) { return child.render(); });
        return this.element;
    };
    return VNode;
}());
var div = (function (_super) {
    __extends(div, _super);
    function div(attrs, children, key) {
        if (attrs === void 0) { attrs = {}; }
        if (children === void 0) { children = []; }
        _super.call(this, 'div', attrs, children, key);
        this.attrs = attrs;
        this.children = children;
        this.key = key;
    }
    return div;
}(DOM));
//# sourceMappingURL=html1.js.map