import { useContext } from "react";
import StartPage from "../components/StartPage";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      {
        user ? <Banner /> :<StartPage />
      }
    </div>
  );
};

export default Home;
