import { useState, type ChangeEvent } from "react";

export default function usePostEditPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const reset = () => {
    setTitle("");
    setBody("");
  };

  const onPreviewClick = () => {
    setIsPreviewModalOpen(true);
  };

  const onCloseModalClick = () => {
    setIsPreviewModalOpen(false);
  };

  return {
    title,
    body,
    onTitleChange,
    onBodyChange,
    reset,
    isPreviewModalOpen,
    onPreviewClick,
    onCloseModalClick,
  };
}
