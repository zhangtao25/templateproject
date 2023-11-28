import { ConfigProvider } from "antd";
import { Suspense } from "react";

// import routes from '~react-pages';

import MainBox from "./layouts/MainBox.tsx";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8b5cf6",
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
        <MainBox />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
