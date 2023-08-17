import React, {useState, useEffect} from 'react';

const Diary = (props) => {

	const [data, setData] = useState([])

	const apiGet = () =>{
		const apiUrl = 'http://localhost:8000/api/diaries';
		fetch(apiUrl)
		.then((response) => response.json())
		.then((json) => {
			setData(json);
		});
      
	}

	useEffect(()=>{
		apiGet()
	}, []);


	return (
		<div>

			{data.map(item => (
				
				<div key={item.id} className="card p-2">
					
					<div>
						<h4>
							 
						{item.memory_name}	            	          		
						</h4>
					</div>
					<p className="small">
						posted on {item.doe} 
					</p>
					<div>
						{item.details}	            	          		
					</div>

				</div>

					))}
		</div>
)
}

export default Diary;