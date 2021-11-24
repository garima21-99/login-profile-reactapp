import react, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
const ImageUpload = () => {
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState("");
 
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDisplay(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setDisplay(null);
    }
  }, [image]);

  return (
    <>
    <div className="container">
    <center>
    <div className="imageuploader-container">
 <nav>   <NavLink className="loginbtn" to="/login"> Logout</NavLink></nav>
      <center>
      <div className="div-container">
        <img className="image" src={display} /><br/>
        <input
        className="input"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      /><br/>
    <label>Name:</label>    <input type="text" placeholder="Enter Your Name"/><br/>
    <label className="datelabel">Date of birth:</label>    <input className="date"type="date"/><br/>
    <label>Religion:</label>
    <select>
    <option>Hindu</option>
    <option>Sikh</option>
    <option>Muslim</option>
    <option>Christian</option>
    <option>Other</option>
    <option selected>Select</option>
    </select><br/>
    <label>Height:</label>    <input placeholder="Enter Your Height" type="tel"/>cm<br/>
        </div>
      </center>
      </div>
      </center>
      </div>
      
    </>
  );
};
export default ImageUpload;