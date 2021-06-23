import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Your Account</h1>
      <form className="form">
        <div>
          <label for=" username"  >username: </label>
          <input type="text" placeholder=" username"></input> 
        </div>
        <div>
          <label for=" password">password: </label>
          <input type="password" placeholder="password"></input>
        </div>
        <div>
          <label for=" gender">Gender: </label>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Open this select menu</option>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
        </div>
        <div>
          <input type="checkbox" ></input>
          <label for=" Accept-terms">Accept terms</label> 
        </div>
        <button type="submit" class="btn btn-default">Submit</button>

      </form>
    </div>
  );
}

export default App;
