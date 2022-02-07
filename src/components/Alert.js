import React from "react";
import { useSelector } from "react-redux";

export default function Alert () {
    const text = useSelector((state) => state.app.alert)
    if(text) {
        return (
            <div className="alert alert-danger" role="alert">{text}</div>
        );
    }
    return
}