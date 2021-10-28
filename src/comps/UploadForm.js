import React from "react";

const UploadForm = () => {
  const changeHandler = (e) =>{
    let selected = e.target.files[0];
    console.log(selected)
  }

  return ( 
    <div className="upload-form">
      <form>
        <input type="file" onChange={changeHandler}/>
      </form>
    </div>
   );
}
 
export default UploadForm;