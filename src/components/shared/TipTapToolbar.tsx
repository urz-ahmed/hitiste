"use client";
import React from "react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";
import {Bold, Heading1, Italic, StrikethroughIcon} from "lucide-react";

type Props = {
  editor: Editor | null;
};

function ToolBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-3 border border-input rounded-lg p-1 my-2" >
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() =>
          editor.chain().focus().toggleItalic().run()
        }
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() =>
          editor.chain().focus().toggleStrike().run()
        }
      >
        <StrikethroughIcon className="h-4 w-4" />
      </Toggle>
    </div>
  );
}

export default ToolBar;