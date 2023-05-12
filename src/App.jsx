import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <nav class="flex item-center border-b-2 border-black bg-gray-400 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1280px-Deloitte.svg.png" alt-="Deloitte LoGo" className="h-10" />
        
  <pre>                                                                                                                <a className="hover:text-green-400 bg-white border-solid rounded-md border-2 " href="#">HOME</a>  <a className="hover:text-green-400 bg-white border-solid rounded-md" href="#">ABOUT</a>  <a className="hover:text-green-400 bg-white border-solid rounded-md" href="#">CONTACT-US</a>  <a className="hover:text-green-400 bg-white border-solid rounded-md" href="#">BLOG</a>  </pre>

      
      </nav>
      <TodoList />
    </>
  );
}

export default App;
