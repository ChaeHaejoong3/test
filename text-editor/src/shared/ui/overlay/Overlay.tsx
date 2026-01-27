type OverlayProps = {
  children: React.ReactNode;
};

export default function Overlay({ children }: OverlayProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      {children}
    </div>
  );
}
