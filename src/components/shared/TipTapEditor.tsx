"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import ToolBar from "./TipTapToolbar";

function Tiptap({
  caption,
  onChange,
}: {
  caption: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: caption,
    editorProps: {
      attributes: {
        class:
          "shad-textarea",
        style: "",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default Tiptap;
