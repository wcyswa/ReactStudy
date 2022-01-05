
import Routes from './routes/index'
import store from "./store";
import {Provider} from 'react-redux'
function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Routes/>
          </div>
      </Provider>
  );
}

export default App;
