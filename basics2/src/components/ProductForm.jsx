import { useState } from "react";

const ProductForm = (props) => {
    const {setProductsList, productsList} = props;
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        date: "",
    });
    const submitHandler = (event) => {
        event.preventDefault();
        const newProduct = {
            ...formData,
            id: productsList.length+1,
        }
        setProductsList((prev) => ([...prev, newProduct]))
        setFormData({
            id: "",
            title: "",
            date: "",
        })
    }
    const formDataChangeHandler = (event) => {
        let name = event.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name] : event.target.value,
        }))
    }
    return <div className="m-2">
        <form onSubmit={submitHandler} className="flex flex-col">
            <div>
                <label htmlFor="title-input">Enter Title: </label>
                <input name="title" value={formData.title} className="border-2" id="title-input" type="text" onChange={formDataChangeHandler}/> 
            </div>
            <div>
                <label htmlFor="date-input">Enter Date: </label>
                <input name="date" value={formData.date} id="date-input" type="date" onChange={formDataChangeHandler}/>   
            </div>
            <button className="bg-red-500 p-2 rounded-xl border-2">Submit</button>
        </form>
    </div>
}

export default ProductForm;