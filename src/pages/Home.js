import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation();
    const { username } = location.state || {};

    return <h1>Hello {username}</h1>;
};

export default Home;