import ResponsiveAppBar from "../components/Bar/ResponsiveAppBar";
import NumberCount from "../components/NumberCount/NumberCount";
import ObjectUse from "../components/ObjectHandle/ObjectUse";
import Todo from "../components/TodoUseSet/Todo";
import NewPage from "./NewPage";
const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <NumberCount/>
      <ObjectUse/>
      <Todo/>
      <NewPage/>
    </div>
  );
};

export default Home;
