
class VNode {
    element: any
    key: string
    constructor(public tagName: string, public attrs: any = {}, public children: VNode[] = []) {
        this.key = attrs.key
    }
    updateChildren(newChildren: VNode[]) {
        let oldChildren = this.children
        let oldMap = {}
        let oldList = []
        for (let oldChild in oldChildren) {
            oldChild.key ? oldMap[oldChild.key] = oldChild : oldList.push(oldChild)
        }
        let cur = []
        for (let newChild in newChildren) {
            if (newChild.key && oldMap[newChild.key] && newChild.tagName === oldMap[newChild.key].tagName) {
                // newChild.element = oldMap[newChild.key].element
                cur.push(oldMap[newChild.key].update(newChild))
            } else if (newChild.tagName === oldList.shift().tagName) {

            }
        }
    }
    update(vnode: VNode) {
        if(this.tagName !== vnode.tagName) {
        }
        vnode.element = this.element
        return vnode
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
