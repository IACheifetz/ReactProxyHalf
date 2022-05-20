import React from 'react';
import tibet from './loadingSpinner.png';
import './loading.css';

export default function LoadingSpinner() {
  return (
    <div className='Loader'>
      <img src={tibet} className="tsf" alt="logo" />
    </div>
  );
}
