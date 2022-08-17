import React, { useContext } from "react";
import { Link } from "react-router-dom"
import MainContext from "../context/MainContext";

const Profile = () => {
    const {state, setState} = useContext(MainContext)

    return (
        <>
            <Link to="/">TO HOME</Link>
            <p>STATE IS EQUAL TO: {state}</p>
        </>
    )
}

export default Profile;