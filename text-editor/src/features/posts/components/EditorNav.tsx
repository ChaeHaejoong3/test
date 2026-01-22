import OrangeButton from "@/shared/ui/button/OrangeButton";

type EditorNavProps = {
  onPreviewClick: () => void;
};

export default function EditorNav({ onPreviewClick }: EditorNavProps) {
  return (
    <>
      <OrangeButton onClick={onPreviewClick}>미리보기</OrangeButton>
    </>
  );
}
