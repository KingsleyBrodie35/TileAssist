namespace WepApp01.Models
{
    public class DirTree
    {
        //fields
        private string _name;
        private List<DirTree> _children;
        //properties
        public string Name
        {
            get { return _name; }
        }
        //constructor
        public DirTree(string name)
        {
            _name = name;
            _children = new List<DirTree>();
        }
        //tree methods
        public void createChild(string name)
        {
            _children.Add(new DirTree(name));
        }
        public void addChild(DirTree t)
        {
            _children.Add(t);
        }
        //traversal methods
        public List<DirTree> directoryDown()
        {
            return _children;
        }

        //tree traversal
        public void NextOrderTraversal()
        {
            if (this == null)
            {
                return;
            }
            //create queue
            Queue<DirTree> q = new Queue<DirTree>();
            q.Enqueue(this);

            while (q.Count != 0)
            {
                int n = q.Count;
                //dequeue current Tree and Queue children
                while (n > 0)
                {
                    //dequeue current dirTree
                    DirTree next = q.Peek();
                    q.Dequeue();
                    Console.WriteLine(next.Name + " ");
                    for (int i = 1; i < next._children.Count; i++)
                    {
                        //enqueue children
                        q.Enqueue(next._children[i]);
                    }
                    n--;
                }
            }
        }
    }
}
