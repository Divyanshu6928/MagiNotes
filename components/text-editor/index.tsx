'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'

import MenuBar from './MenuBar'

interface TextEditorProps {
  content: string
  onChange: (content: string) => void
}

export default function TextEditor({
  content,
  onChange,
}: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'editor-bullet-list',
          },
        },

        orderedList: {
          HTMLAttributes: {
            class: 'editor-ordered-list',
          },
        },
      }),

      Highlight.configure({
        multicolor: false,
      }),

      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class: 'tiptap-editor min-h-[460px] w-full rounded-xl bg-white px-7 py-6 text-zinc-900 outline-none',
        spellcheck: 'true',
      },
    },

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },

    immediatelyRender: false,
  })

  return (
    <div className="w-full">
      <MenuBar editor={editor} />

      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}