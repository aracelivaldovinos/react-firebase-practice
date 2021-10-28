import React from "react";
import { useState } from "react";


const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) =>{
    e.preventDefault();
    let selected = e.target.files[0];
    console.log(selected)

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('')
    }else{
      setFile(null);
      setError('Please select an image file (png or jpeg)')

    }
  }

  return ( 
    <div className="upload-form">
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error"> {error}</div>}
          {file && <div className="file"> {file.name}</div>}
        </div>
      </form>
    </div>
   );
}
 
export default UploadForm;