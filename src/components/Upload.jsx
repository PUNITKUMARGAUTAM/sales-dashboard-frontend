import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('http://localhost:5000/api/sales/import', formData);
    alert('Upload successful');
  };

  return (
    <Box>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <Button variant="contained" onClick={handleUpload}>
        Upload Excel
      </Button>
    </Box>
  );
};

export default Upload;