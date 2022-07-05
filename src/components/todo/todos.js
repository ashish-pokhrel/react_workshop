import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import DetailTodo from "./detailTodo";
import Todo from "./todo";

const todos = [];

export default function Todos() {
    let [getTodosState, setTodosState] = useState(todos);

    const fetchTools = async () => {
        let result = await axios.get('http://localhost:8080/todos');
        console.log(result.data);
        setTodosState((await result).data);
    }
    useEffect(() => {
        fetchTools();
    }, []);

    return (
        <div>
            {
                getTodosState.map((item) => {
                    return <Todo
                        id={item.id}
                        title={item.title}
                        key={item.id}
                    />
                })
            }
        </div>
    )
}