import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import MainContext from "../context/MainContext";

const Translation = () => {
    const {state, setState} = useContext(MainContext)


    return (
        <>
            <Link to="/profile">TO PROFILE</Link>
            <p>STATE IS EQUAL TO: {state}</p>
        </>
    )
}

export default Translation;