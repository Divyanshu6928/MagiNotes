'use client'

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from 'lucide-react'

import { Editor } from '@tiptap/react'
import { Toggle } from '../ui/toggle'

interface MenuBarProps {
  editor: Editor | null
}

export default function MenuBar({ editor }: MenuBarProps) {
  if (!editor) {
    return null
  }

  const options = [
    {
      label: 'Heading 1',
      icon: <Heading1 />,
      active: editor.isActive('heading', { level: 1 }),
      onClick: () =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },

    {
      label: 'Heading 2',
      icon: <Heading2 />,
      active: editor.isActive('heading', { level: 2 }),
      onClick: () =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },

    {
      label: 'Heading 3',
      icon: <Heading3 />,
      active: editor.isActive('heading', { level: 3 }),
      onClick: () =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },

    {
      label: 'Bold',
      icon: <Bold />,
      active: editor.isActive('bold'),
      onClick: () => editor.chain().focus().toggleBold().run(),
    },

    {
      label: 'Italic',
      icon: <Italic />,
      active: editor.isActive('italic'),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },

    {
      label: 'Strike',
      icon: <Strikethrough />,
      active: editor.isActive('strike'),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },

    {
      label: 'Highlight',
      icon: <Highlighter />,
      active: editor.isActive('highlight'),
      onClick: () =>
        editor.chain().focus().toggleHighlight().run(),
    },

    {
      label: 'Align left',
      icon: <AlignLeft />,
      active: editor.isActive({ textAlign: 'left' }),
      onClick: () =>
        editor.chain().focus().setTextAlign('left').run(),
    },

    {
      label: 'Align center',
      icon: <AlignCenter />,
      active: editor.isActive({ textAlign: 'center' }),
      onClick: () =>
        editor.chain().focus().setTextAlign('center').run(),
    },

    {
      label: 'Align right',
      icon: <AlignRight />,
      active: editor.isActive({ textAlign: 'right' }),
      onClick: () =>
        editor.chain().focus().setTextAlign('right').run(),
    },

    {
      label: 'Bullet list',
      icon: <List />,
      active: editor.isActive('bulletList'),
      onClick: () =>
        editor.chain().focus().toggleBulletList().run(),
    },

    {
      label: 'Ordered list',
      icon: <ListOrdered />,
      active: editor.isActive('orderedList'),
      onClick: () =>
        editor.chain().focus().toggleOrderedList().run(),
    },
  ]

  return (
  <div className="mb-3 w-full">
    <div className="flex w-full flex-wrap items-center gap-1 rounded-xl border border-[#263b58] bg-[#151c27] p-2 shadow-lg">
      
      {/* Headings */}
      <div className="flex items-center gap-1">
        {options.slice(0, 3).map((option, index) => (
          <Toggle
            key={index}
            pressed={option.active}
            onPressedChange={option.onClick}
            className="h-9 min-w-9 rounded-lg text-white hover:bg-[#263247] data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            {option.icon}
          </Toggle>
        ))}
      </div>

      <div className="mx-2 h-6 w-px bg-[#34445c]" />

      {/* Text formatting */}
      <div className="flex items-center gap-1">
        {options.slice(3, 6).map((option, index) => (
          <Toggle
            key={index}
            pressed={option.active}
            onPressedChange={option.onClick}
            className="h-9 min-w-9 rounded-lg text-white hover:bg-[#263247] data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            {option.icon}
          </Toggle>
        ))}
      </div>

      <div className="mx-2 h-6 w-px bg-[#34445c]" />

      {/* Alignment */}
      <div className="flex items-center gap-1">
        {options.slice(6, 9).map((option, index) => (
          <Toggle
            key={index}
            pressed={option.active}
            onPressedChange={option.onClick}
            className="h-9 min-w-9 rounded-lg text-white hover:bg-[#263247] data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            {option.icon}
          </Toggle>
        ))}
      </div>

      <div className="mx-2 h-6 w-px bg-[#34445c]" />

      {/* Lists */}
      <div className="flex items-center gap-1">
        {options.slice(9).map((option, index) => (
          <Toggle
            key={index}
            pressed={option.active}
            onPressedChange={option.onClick}
            className="h-9 min-w-9 rounded-lg text-white hover:bg-[#263247] data-[state=on]:bg-blue-600 data-[state=on]:text-white"
          >
            {option.icon}
          </Toggle>
        ))}
      </div>
    </div>
  </div>
);
}
