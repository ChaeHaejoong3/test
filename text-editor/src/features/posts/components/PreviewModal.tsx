import MarkdownRenderer from "@/shared/ui/MarkdownRenderer";
import ModalOverlay from "@/shared/ui/ModalOverlay";

type PreviewModal = {
  content: string;
  onClose: () => void;
};

export default function PreviewModal({ content, onClose }: PreviewModal) {
  return (
    <ModalOverlay onClose={onClose}>
      <div className="w-10/12 h-10/12 rounded-2xl p-4 bg-white">
        <MarkdownRenderer content={content} />
      </div>
    </ModalOverlay>
  );
}
