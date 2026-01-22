import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold mt-8 mb-4 text-title">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3 text-title">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-body leading-relaxed mb-4">{children}</p>
  ),
};

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
