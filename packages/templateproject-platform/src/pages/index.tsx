import MainBox from "../layouts/MainBox.tsx";
import {Outlet} from "react-router-dom";

const IndexPage = () => {
  return <div>
    <MainBox>
      <Outlet/>
    </MainBox>
  </div>
}

export default IndexPage
