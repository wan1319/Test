import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleInputPass = (e) => {
        setPassword(e.target.value);
    };

    const handleInputUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(username);
        navigate("/", { state: { username } });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input onChange={handleInputEmail} value={email || ""} type="text" name="email" id="email" />
                <label htmlFor="username">Username</label>
                <input onChange={handleInputUsername} value={username || ""} type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input onChange={handleInputPass} value={password || ""} type="password" name="password" id="password" />
                <button type="submit">Register</button>
            </form>
            <a href="/">Log In</a>
        </>
    );
};

export default RegisterPage;
