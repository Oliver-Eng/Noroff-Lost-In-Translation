import React, { useContext } from "react";
import { Link } from "react-router-dom"
import MainContext from "../context/MainContext";

const Home = () => {
    const {state, setState} = useContext(MainContext)

    return (
        <>
            <Link to="/translation">TO TRANSLATION</Link>
            <p>STATE IS EQUAL TO: {state}</p>
        </>
    )
}

export default Home;