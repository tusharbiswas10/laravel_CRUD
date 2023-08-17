import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Submit = () => {

	const [input, setInput] = useState({

		memory_name: '',
		details: '',
		importance: '',
		doe: '',		
		person_name: '',
		
	})




	const handleOnchangeBlog = (event) => {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }





	const handleClickSubmit = (event) => {
		event.preventDefault();
		const newBlog = {
			
			memory_name: input.memory_name,
			details: input.details,
			importance: input.importance,
			doe: input.doe,
			person_name: input.person_name,

		}
		axios.post("http://localhost:8000/api/diaries", newBlog)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
		setInput({
			
			memory_name: '',
			details: '',
			importance: '',
			doe: '',
			person_name: '',
		});

		alert("Blog Added Successfully");

	}



	return (
		<div>
			

			<form className="my_input_form">
                    
                    <div className="form-group my_input_form-input">
                        <input value={input.memory_name} onChange={handleOnchangeBlog} autoComplete="off" name="memory_name" type="text" className="form-control" placeholder="Blog memory_name" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.person_name} onChange={handleOnchangeBlog} autoComplete="off" name="person_name" type="text" className="form-control" placeholder="person name" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <textarea value={input.details} onChange={handleOnchangeBlog} autoComplete="off" name="details" className="form-control" rows="3" placeholder="Details"></textarea>
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.doe} onChange={handleOnchangeBlog} autoComplete="off" name="doe" type="Date" className="form-control" placeholder="Date" />
                    </div>
                    <div className="form-group my_input_form-input">
                        <input value={input.importance} onChange={handleOnchangeBlog} autoComplete="off" name="importance" type="text" className="form-control" placeholder="importance" />
                    </div>



                    <button onClick={handleClickSubmit} type="submit" className=" my_input_form-btn">PUBLISH BLOG</button>
                </form>



		</div>
		)
}

export default Submit;