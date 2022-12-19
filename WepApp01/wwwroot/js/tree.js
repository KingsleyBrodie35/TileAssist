export class DirTree {
    constructor(name) {
        this.name = name
        children = new Array()
    }
    //methods
    createChild(n) {
        children.unshift(new tree(n))
    }
    addChild(t) {
        children.unshift(t)
    }
    //tree traversal
    directoryDown() {
        return children
    }
}