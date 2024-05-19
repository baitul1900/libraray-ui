import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./NumberCount.css";
import { useState } from "react";
import { Box } from "@mui/material";

const NumberCount = () => {
  let [number, setNumber] = useState(0);

  const handleChange = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <p className="typo">We are counting on : {number}</p>
  
        
        <Box component="section" sx={{ p: 2, display: 'flex', justifyContent: 'center'}}>
        <Button variant="contained" color="secondary" onClick={handleChange}>
          Success
        </Button>
    </Box>
  
      </Container>
    </div>
  );
};

export default NumberCount;
