
import './App.scss';

function App() {
  return (
    <div className="tranphuongnam-master">
        <nav className="navbar app">APP bar</nav>
        <nav className="navbar board">APP board</nav>
        <div className='board-columns'>
        <div className='column'>
          <header>Brainstorm</header>
        <ul>
          <li>
           <img src="https://www.queerscifi.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-27-at-7.12.03-AM.jpg" alt='anh cua ban'/>
          Title:Nam Tran Phuong
          </li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
         
        
        </ul>
        <footer>Add another card</footer>
        </div>
        <div className='column'>
          <header>Brainstorm</header>
        <ul>
          <li>
           <img src="https://www.queerscifi.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-27-at-7.12.03-AM.jpg" alt='anh cua ban'/>
          Title:Nam Tran Phuong
          </li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
          <li>Hello world</li>
        
        </ul>
        <footer>Add another card</footer>
       </div>
        </div>
    </div>
  );
}

export default App;
