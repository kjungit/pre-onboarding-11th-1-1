import React from 'react';

import { PulseLoader } from 'react-spinners';

function Loading() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <div className='my-8 text-lg font-bold text-gray-800'>
        잠시만 기다려주세요...
      </div>
      <PulseLoader color='black' size={15} margin={10} />
    </div>
  );
}

export default Loading;
