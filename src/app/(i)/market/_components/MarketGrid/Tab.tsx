interface TabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ title, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-2 rounded-t-md ${isActive ? 'bg-gray-200' : 'bg-gray-100'}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
