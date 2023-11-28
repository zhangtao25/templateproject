import { ConfigProvider } from "antd";
import { Suspense } from "react";
import {useRoutes} from "react-router-dom";
import routes from "~react-pages";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: "#8b5cf6",
        },
        components: {
          Slider: {
            // width:30
          },
          Menu: {
            collapsedWidth: 30,
          },
        },
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
