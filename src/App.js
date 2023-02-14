import { React, useState } from "react";

function App() {
  const [notes, setnotes] = useState([]);
  const [note, setnote] = useState("");

  const handleMe = (e) => {
    if (note !== ""){
      setnotes(notes => [...notes, note]);
      setnote('');
    }else{
      alert("Write a note then create it!!")
    }
  }
  const handleRemoveItem = name => {
    setnotes( old => {
      return old.filter(y => y !== name)
    })
  }
  return (
    <div>
      <br />
      <div className="card" style={{maxWidth : '40rem', left : '25rem'}}>
        <h5 style={ {textAlign : 'center'} }>Create A note</h5>
        <input class="form-control"  aria-describedby="emailHelp" type="text" style={{maxWidth : '50rem', maxHeight : '20rem'}} onChange={(e) => { setnote(e.target.value) }}></input><br />
        <button placeholder="Create Note" onClick={handleMe} className="btn btn-primary" rows="3">Create Note</button>
      </div>
      <br />
      <div className="container" style={{left : '500rem'}}>
        <div className="row 3">
          {
            notes.map((eachnote, i) => {
              return (
                <div className="col-4 card" style={{ maxWidth: "20rem", minWidth: "20rem" }} key={i}>
                  <div className="card-body">
                    <p className="card-text">{eachnote}</p>
                    <button onClick={() =>handleRemoveItem(eachnote)}>delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div >
  );
}
export default App;