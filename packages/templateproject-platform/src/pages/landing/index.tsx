import { Pricing } from "./components/Pricing";
import {Testimonials} from "./components/Testimonials.tsx";
import './index.css'
const Landing = () => {
  return (
    <div>
      <>
        <Testimonials />
        <Pricing />
      </>
    </div>
  );
};

export default Landing;
