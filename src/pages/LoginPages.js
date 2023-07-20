import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { username } = location.state || {};

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleInputPass = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(username);
        navigate("/home", { state: { username } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={handleInputEmail} value={email || ""} type="text" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input onChange={handleInputPass} value={password || ""} type="password" name="password" id="password" />
                <button type="submit">Log In</button>
            </form>
            <a href="/register">Register</a>
        </>
    );
};

export default LoginPage;
