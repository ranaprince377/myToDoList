import { useState } from "react";

const Input = ({addItem}) => {
    const [value, setValue] = useState("");

    const addTodoItem = () => {
        addItem(value);
        setValue("");
    }

    const onKeyUpHandler = (event) => {
        if(event.keyCode === 13) {
            addTodoItem();
        }
    }

    return (
        <>
            <div className="add-control">
                <div className="form-group has-feedback">
                    <input type="text" className="form-control" placeholder="✍️ Add item..." value={value}  onKeyUp={onKeyUpHandler} onChange={(e) => setValue(e.target.value)}/>
                    <i className="fa fa-plus form-control-feedback add-btn" title="Add item" onClick={addTodoItem}></i>
                </div>
            </div>
        </>
    );
}

export default Input