import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <ul>
            <li>
                <Link to='/todos'>Todos</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
    )
}