'use client'

import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'
import Image from 'next/image'

export default function Home() {
  const buttonStyle: React.CSSProperties = {
    padding: '10px',
    margin: '5px',
    border: '2px solid #007BFF', // You can change the border color
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleStartSC = () => {
    console.log('Start SC clicked');
    invoke('execute_star_citizen');
  };

  const handleSetSCPath = () => {
    console.log('Set SC Path clicked');
    // Add your logic for the "Set SC Path" button click event
  };

  return (
    <div>
      <h1>Welcome to Your App</h1>

      <button style={buttonStyle} onClick={handleStartSC} className="button flex center left"> 
        Start SC
      </button>
      <button style={buttonStyle} onClick={handleSetSCPath}>
        Set SC Path
      </button>
    </div>
  );
}
