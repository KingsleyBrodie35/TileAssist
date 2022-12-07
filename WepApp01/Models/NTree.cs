namespace WepApp01.Models
{
    public class NTree
    {
        //fields
        private string _name;
        private LinkedList<NTree> _children;
        
        public string Name
        {
            get { return _name; }
        }
        //constructor
        public NTree(string name)
        {
            _name = name;
            _children = new LinkedList<NTree>();
        }
        //methods
        public void AddChild(string n)
        {
            _children.AddFirst(new NTree(n));
        }
        public NTree? GetChild(int i)
        {
            foreach (NTree n in _children)
                if (--i == 0)
                    return n;
            return null;
        }
    }
}
