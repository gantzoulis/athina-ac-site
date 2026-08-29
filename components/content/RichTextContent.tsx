type RichTextContentProps = {
  html: string;
  className?: string;
};

export default function RichTextContent({
  html,
  className = "",
}: RichTextContentProps) {
  return (
    <div
      className={[
        "text-lg leading-9 text-zinc-700",
        "[&_p]:mb-6",
        "[&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-zinc-900",
        "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-zinc-900",
        "[&_strong]:font-bold [&_strong]:text-zinc-900",
        "[&_em]:italic",
        "[&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6",
        "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6",
        "[&_li]:pl-1",
        "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-primary",
        "[&_blockquote]:bg-zinc-100 [&_blockquote]:px-6 [&_blockquote]:py-4",
        "[&_blockquote]:italic [&_blockquote]:text-zinc-600",
        className,
      ].join(" ")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}