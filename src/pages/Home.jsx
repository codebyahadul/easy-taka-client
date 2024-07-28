import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import StartPage from "../components/StartPage";

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
