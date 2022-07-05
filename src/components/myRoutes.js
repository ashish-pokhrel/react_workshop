import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./dashboard/dashboard";
import DetailTodo from "./todo/detailTodo";
import Todos from "./todo/todos";
import User from "./todo/user";


export default function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/users' element={<User />}></Route>
                <Route path='/todos' element={<Todos />}></Route>
                <Route path='/detailToDo' element={<DetailTodo />}></Route>
            </Routes>
        </>
    )
}