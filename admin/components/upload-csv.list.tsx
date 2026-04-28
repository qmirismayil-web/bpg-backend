import React, { useState, useEffect } from 'react'
import { Box, BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
  const { record } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bpg-admin-panel.onrender.com/api/journal/categories');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


 const handleUploadCSV = async () => {
  if (data) {
    // Convert the data to CSV format
    const csvData = convertToCSV(data);

    // Create a Blob with the CSV data as plain text
    const blob = new Blob([csvData], { type: 'text/plain;charset=utf-8;' });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt'; // Change the file extension to .txt for plain text
    document.body.appendChild(a);
    a.click();

    // Clean up the temporary URL and anchor element
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
};

 const convertToCSV = (data) => {
   const header = `id,Category AZ,Category ENG,Category RU,Subcategory AZ,Subcategory ENG,Subcategory RU\n`
 
   const rows = data.map((entry) => {
     const categoryValues_eng = entry.category['ENG'];
     const categoryValues_az = entry.category['AZ'];
     const categoryValues_ru = entry.category['RU'];
     const subcategoryValues_az :any = []
     const subcategoryValues_eng :any = []
     const subcategoryValues_ru :any = []
     entry.subcategory.map((sub) => subcategoryValues_eng.push(sub['ENG']));
     entry.subcategory.map((sub) => subcategoryValues_az.push(sub['AZ']));
     entry.subcategory.map((sub) => subcategoryValues_ru.push(sub['RU']));
     const singleRow = `${entry._id},${categoryValues_az},${categoryValues_eng},${categoryValues_ru},${subcategoryValues_az.join('+')},${subcategoryValues_eng.join('+')},${subcategoryValues_ru.join('+')}`
     return singleRow;
   });
   return `${header}\n${rows.join('\n')}`;
 };

  return (
    <Box>
      {data ? (
        <button style={{position: 'fixed',bottom:20,right:20,background:'#4268F6',border:'none',height:'50px',color:'white',cursor:'pointer',borderRadius:'8px'}} onClick={handleUploadCSV}>Upload CSV</button>
      ) : (
        <p></p>
      )}
      
    </Box>
  );
};

export default Edit;