import BodyEditor from "../components/BodyEditor";
import EditorNav from "../components/EditorNav";
import PreviewModal from "../components/PreviewModal";
import TitleEditor from "../components/TitleEditor";
import usePostEditPage from "../hooks/usePostEditPage";

export default function PostEditPage() {
  const {
    title,
    body,
    onBodyChange,
    onTitleChange,
    reset,
    isPreviewModalOpen,
    onPreviewClick,
    onCloseModalClick,
  } = usePostEditPage();

  return (
    <>
      {isPreviewModalOpen && (
        <PreviewModal content={body} onClose={onCloseModalClick} />
      )}
      <TitleEditor title={title} onTitleChange={onTitleChange}></TitleEditor>
      <BodyEditor body={body} onBodyChange={onBodyChange}></BodyEditor>
      <EditorNav onPreviewClick={onPreviewClick} />
    </>
  );
}
