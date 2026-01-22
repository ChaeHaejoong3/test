import type { ChangeEvent } from "react";

type TitleEditorProps = {
  body: string;
  onBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function BodyEditor({ body, onBodyChange }: TitleEditorProps) {
  return (
    <textarea
      className="w-full h-120 resize-none overflow-y-auto p-2 border-none focus:outline-none text-body"
      value={body}
      onChange={onBodyChange}
    />
  );
}
