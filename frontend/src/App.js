import Diary from './Diary';
// import Form from './Form';
import Submit from './Submit';


function App() {




  return (
    <div className="App">
      <div className="container pt-5">

        <div className="row">




          <div className="col">
            <div class="d-flex justify-content-center pb-5">
              <h1 class="font-weight-light">Your Memories</h1>  
            </div>
            

            <Diary />
            
          </div>
          <div className="col">
            
            <div class="d-flex justify-content-center pb-5">
              <h1 class="font-weight-light">Create new memories</h1>  
            </div>
            <Submit />

          </div>
        </div>


        
      </div>
      </div>
      );
}

export default App;
