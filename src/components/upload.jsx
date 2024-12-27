import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./upload.css"
import { useNavigate } from "react-router-dom";

export const Upload = () => {
  {/* --- Sending file to backend */ }
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(selectedFile);
    if (!selectedFile) {
      setError('Please select a file.');
      return;
    }

    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    const PUBLIC_BACKEND_API = import.meta.env.VITE_PUBLIC_BACKEND_API;
    try {
      const URL = `${PUBLIC_BACKEND_API}/upload`;
      const token = localStorage.getItem("authToken");
      const response = await fetch(URL, {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      // alert(data.message);
      // console.log('File uploaded successfully:', data);
      if (data.success) {
        toast.success(data.message, {
          position: 'top-right',
          autoClose: 2000,
        });
      } else {
        toast.error(data.message, {
          position: 'top-right',
          autoClose: 2000,
        });
      }
      navigate('/');
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="upload-files-container">
          <div className="drag-file-area">
            <h1> File Upload </h1>
            <h3 > Drag & drop any file here </h3>
            <input type="file" onChange={handleFileChange} />

          </div>
          <button type="submit" > Upload </button>
        </div>
      </form>
    </div>
  );
}