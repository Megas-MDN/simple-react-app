interface IButton {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: string;
  textStyles?: string;
}

export const Button = ({
  text,
  onClick,
  styles = '',
  textStyles = '',
}: IButton) => {
  const defaultButtonStyles =
    'bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded';
  const defaultTextStyles = 'text-zinc-300 font-bold';

  return (
    <button onClick={onClick} className={`${defaultButtonStyles} ${styles}`}>
      <p className={`${defaultTextStyles} ${textStyles}`}>{text}</p>
    </button>
  );
};
