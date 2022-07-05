import React from "react";
import { useNavigate } from "react-router";


export default function Todo(props) {
    const navigate = useNavigate();

    const onClicked = (id) => {
      navigate('/detailToDo/' + id);
    }

    return (
        <div onClick={() => { onClicked(props.id) }}>
            <h2>{props.title}</h2>
        </div>
    )
}