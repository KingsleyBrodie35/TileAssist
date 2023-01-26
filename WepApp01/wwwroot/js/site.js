class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

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
        return this.children
    }
    //return level below parameter node
    breadthFirstSearch(n) {

        while (!QUEUE.isEmpty) {
            // check if front of queue equals parameter
            if (QUEUE.peek().name == n) {
                return QUEUE.peek().directoryDown()
            }
            
            //pop off visited node 
            let s = QUEUE.dequeue()
            
            //add children nodes
            if (s.children.length != 0) {
                for (let i = 0; i < s.children.length; i++) {
                    VISITED.enqueue(s.children[i])
                    QUEUE.enqueue(s.children[i])
                }
            }
        }
    }
}


//add nodes (pages) to working dirTree here
function createDirectory(dirTree) {

    let productDocs = new DirTree("product documentation") 
    productDocs.createChild("Travertine being used around pools")
    dirTree.addChild(productDocs)

    let cleartileDocs = new DirTree("clearTile documentation")
    cleartileDocs.createChild("importing items to clearTile from a csv")
    dirTree.addChild(cleartileDocs)

    let calculators = new DirTree("calculators")
    calculators.createChild("grout calculator")
    calculators.createChild("pool coping calculator")
    dirTree.addChild(calculators)
    
    return dirTree
}

function directoryDown(n) {
    let div = document.getElementById('navigation')
    div.innerHTML = ""
    //find nested directory level
    let level = HOME.breadthFirstSearch(n)
    //display level
    for (let i = 0; i < level.length; i++) {
        //if leaf create link input
        if (level[i].children.length == 0) {
            let tag = document.createElement("a")
            var tagTxt = document.createTextNode(level[i].name)
            tag.appendChild(tagTxt)
            tag.href = `./${level[i].name}`
            tag.className = 'dirTreeChild'
            div.appendChild(tag)
        } else {
            let btn = document.createElement("button")
            btn.innerText = level[i].name
            btn.addEventListener("click", function (e) {
                directoryDown(btn.innerText)
            })
            btn.className = 'dirTreeChild'
            div.appendChild(btn)
        }
    }
}

function directoryUp() {
    let div = document.getElementById('navigation')
    div.innerHTML = ""
    //find nested directory level
    let level = HOME.directoryUp()
    //display level
    for (let i = 0; i < level.length; i++) {
        //if leaf create link input
        if (level[i].children.length == 0) {
            let tag = document.createElement("a")
            var tagTxt = document.createTextNode(level[i].name)
            tag.appendChild(tagTxt)
            tag.href = `./${level[i].name}`
            tag.className = 'dirTreeChild'
            div.appendChild(tag)
        } else {
            let btn = document.createElement("button")
            btn.innerText = level[i].name
            btn.addEventListener("click", function (e) {
                directoryDown(btn.innerText)
            })
            btn.className = 'dirTreeChild'
            div.appendChild(btn)
        }
    }
}

let HOME = new DirTree("home")
HOME = createDirectory(HOME)
let VISITED = new Queue()
let QUEUE = new Queue()
//append home to queue
VISITED.enqueue(HOME)
QUEUE.enqueue(HOME)
