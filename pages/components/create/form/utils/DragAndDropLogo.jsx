import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';



function Previews(props) {
  const [image, setImage] = useState(props.data ? props.data : '');
  const {getRootProps, getInputProps} = useDropzone({
    maxFiles:1,
    accept: 'image/*',
    onDrop: acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {        
          const imageData = {...acceptedFiles, ...{"base64":reader.result}}
          props.onChange(imageData)
          setImage(imageData)
        }
        reader.readAsDataURL(acceptedFiles[0])
    }
  });
  const Thumbs = () => {        
      if(image){        
        return(
          <div>
            <img src={image.base64} />
          </div>
        )
      }else{
        return null
      }
  };


  return (
    <section className="container upload-image-container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <aside>
          <Thumbs />
        </aside>        
        <p>Drag & drop logo here, or click to select from files</p>      
      </div>
      
    </section>
  );
}

export default Previews;


