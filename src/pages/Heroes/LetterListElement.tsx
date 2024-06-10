type LetterListElementProps = {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
};

const LetterListElement = ({ children, onClick, selected = false }: LetterListElementProps) => {
  let activeClassName = 'uppercase cursor-pointer font-semibold';
  if (selected) activeClassName += ' text-blue-600';
  return (
    <li className={activeClassName} onClick={onClick}>
      {children}
    </li>
  );
};

export default LetterListElement;
