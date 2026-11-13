import React, { useState, useEffect } from 'react';

export default function ApiRandomImage() {
  const [imageUrl, setImageUrl] = useState('');

  const fetchRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random dog" style={{ maxWidth: '400px' }} />}
      <br />
      <button onClick={fetchRandomDog}>Next Random Image</button>
    </div>
  );
}