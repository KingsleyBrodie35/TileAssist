class DirTree {
    constructor(name) {
        this.name = name
        this.children = new Array();
    }
    //methods
    createChild(n) {
        this.children.unshift(new DirTree(n))
    }
    addChild(t) {
        this.children.unshift(t)
    }
    //tree traversal
    directoryDown() {
        return children
    }
}

function createDirectory() {
    home.createChild("product documentation")
    home.createChild("clearTile documentation")
    let calculators = new DirTree("calculators")
    calculators.createChild("grout calculator")
    calculators.createChild("pool coping calculator")
    return home
}

function directoryDown() {

}

HOME = new DirTree("home")
createDirectory()

//can we use a queue to keep track of where we are nested in directorytree
