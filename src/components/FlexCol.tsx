import React from 'react';

const FlexCol = ({
  children,
  styles = '',
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <div
      className={`flex flex-col w-full h-full items-center justify-center gap-2 ${styles}`}
    >
      {children}
    </div>
  );
};

export default FlexCol;
