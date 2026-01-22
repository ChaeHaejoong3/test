import type { ChangeEvent } from "react";

type TitleEditorProps = {
  title: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TitleEditor({
  title,
  onTitleChange,
}: TitleEditorProps) {
  return (
    <input
      className="w-full p-2 h-15 text-3xl border-b border-gray-100 focus:outline-none text-title"
      value={title}
      onChange={onTitleChange}
    ></input>
  );
}
