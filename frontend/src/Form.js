import React,{useState, useEffect} from 'react';
import axios from 'axios';



const Form = () => {

	const [memoryName, setMemoryName] = useState("");
	const [details, setDetails] = useState("");
	const [importance, setImportance] = useState("");
	const [doe, setDoe] = useState("");
	const [personName, setPersonName] = useState("");

	const submitMemory = () => {


		axios.post("http://localhost:8000/api/diaries", {
			memory_name: memoryName,
			person_name: personName,
			details: details,
			importance: importance,
			doe: doe

		}).then(()=>
		{
			alert("success");
		});

	};


	return (
		<div className="container">



			<form method="Post" onSubmit={submitMemory}>
			





			<div className="form-group">
				Title: 
				<input type="text" name="memory_name" className="form-control" onChange={(e)=>{
						setMemoryName(e.target.value);
					}}/>
			</div> 	
			<div className="form-group">
				posted by: 
				<input type="text" name="person_name" className="form-control" onChange={(e)=>{
						setPersonName(e.target.value);
					}}/>
			</div> 	

			<div className="form-group">
				Description:
				<textarea className="form-control" name="details" rows="3" onChange={(e)=>{
						setDetails(e.target.value);
					}}/>
			</div> 


			<div className="form-group">
				<label for="dob">Date of event</label>
				<input type="date" class="form-control" placeholder="" name="doe" onChange={(e)=>{
						setDoe(e.target.value);
					}}/>
			</div>

			<div className="form-group">
				importance:
				<input type="text" className="form-control" name="importance" rows="3" onChange={(e)=>{
						setImportance(e.target.value);
					}}/>
			</div> 


			<button type="submit" className="btn btn-primary"> submit </button>

			</form>
			</div>
			)
}

export default Form;
