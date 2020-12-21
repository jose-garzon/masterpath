//import component
import React, { useState } from 'react';

//import Style
import { ModalSelectProject } from './styles'

export const SelectProject = () => {
  const [project, setProjecte] = useState(true);
        
  const closeProjectSelector = () => {
    setProjecte(false);
  };
  
    return (
            <ModalSelectProject open={project}>
                <img onClick={closeProjectSelector} src='/Closebtn.svg' alt="Close icon" />
                <h1>Projects</h1>
                <button type="submit">Select</button>
            </ModalSelectProject>       
    )
  }

