import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function DetailTodo(props) {
    

    const params = useParams();
    const [todoState,setTodoState]= useState({});

    const fetchTodo = async ()=>{
            const result = await axios.get('http://localhost:3000/todos/'+ params.id);
            setTodoState(result.data);
    }


    useEffect(()=>{

    },[params.id]);

    return (
            <div>
                    <h4>{todoState.title}</h4>
                    <h4>{todoState.description}</h4>
            </div>

    )
}