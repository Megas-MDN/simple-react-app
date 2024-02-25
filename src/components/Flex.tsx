import React from 'react';

const Flex = ({
  children,
  styles = '',
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <div
      className={`flex w-full h-full items-center justify-center gap-2 ${styles}`}
    >
      {children}
    </div>
  );
};

export default Flex;
