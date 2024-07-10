import './App.css'

  const todos= [{
    id: 1,
    title:"Vai alle poste"
  },
  {
    id: 2,
    title:"Meccanico"
  },
];

function App() {
  return (<div>
    <ul>
      {todos.map((todo) => {
        return <Item key={todo.id} todo={todo}>
          <FirstSon>
            <button onClick={()=> console.log(todo.title)}>Delete</button>
          </FirstSon>
        </Item>
      })}
      </ul>
    </div>
  );
}

export default App
const Item = ({todo, children}) => {
  return 
  <li key={todo.id}>
    {todo.title}
    {children}
    </li>;
};

const FirstSon = ({children }) => {
  return (
  <div>
    <h2>Inner Son</h2>
    {children}
  </div>
}
