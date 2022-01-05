import './App.css';
import AntdFrom from './pages/antdForm/index'
import WcyAntdForm from "./pages/wcyAntdForm/wcyAntdForm";
import ReduxDemo from './pages/reduxDemo/index'
import ReactReduxDemo from "./pages/reactReduxDemo";
import HooksPage from "./pages/hooksPage";
import ReactReduxHooksPage from "./pages/reactReduxHooksPage";

import {Tabs} from "antd";
const { TabPane } = Tabs;

function App() {
    const callback = (key) => {
        console.log(key);
    }
  return (
    <div className="App">
      <Tabs onChange={callback}>
          <TabPane tab={'react-redux hooks page'} key={6}>
              <ReactReduxHooksPage/>
          </TabPane>
          <TabPane tab={'hooks page'} key={5}>
              <HooksPage/>
          </TabPane>
          <TabPane tab={'react-redux实现'} key={4}>
              <ReactReduxDemo/>
          </TabPane>
          <TabPane tab='redux实现' key='3'>
              <ReduxDemo/>
          </TabPane>
          <TabPane tab="自定义form表单" key="2">
              <WcyAntdForm/>
          </TabPane>
          <TabPane tab="原生form表单" key="1">
              <AntdFrom/>
          </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
