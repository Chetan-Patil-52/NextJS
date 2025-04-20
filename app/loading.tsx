import React from 'react';

const Doucment = async () => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <div>Loading Please wait until the timeout occurs</div>
    </>
  );
};

export default Doucment;