const getHeightElement = ({
  idElement,
}: {
  idElement?: string;
} = {}): { height?: number } => {
  const height = document.getElementById(
    idElement || 'main-nav-header'
  )?.clientHeight;

  return { height };
};

export default getHeightElement;
