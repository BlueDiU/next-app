type Props = {
  children: React.ReactNode
};

export function DarkLayout({ children }: Props) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <div>{children}</div>
    </div>
  );
}
