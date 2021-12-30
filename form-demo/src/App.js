import './App.css';
import AntdFrom from './pages/antdForm/index'
import WcyAntdForm from "./pages/wcyAntdForm/wcyAntdForm";
import ReduxDemo from './pages/reduxDemo/index'
import {Tabs} from "antd";
const { TabPane } = Tabs;

function App() {
    const callback = (key) => {
        console.log(key);
    }
  return (
    <div className="App">
        <ReduxDemo/>
      <Tabs defaultActiveKey="2" onChange={callback}>
          <TabPane tab="原生form表单" key="1">
              <AntdFrom/>
          </TabPane>
          <TabPane tab="自定义form表单" key="2">
              <WcyAntdForm/>
          </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
