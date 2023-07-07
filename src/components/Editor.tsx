import {
	useEditor,
	EditorContent,
	BubbleMenu,
	FloatingMenu
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { lowlight } from "lowlight/lib/core";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import js from "highlight.js/lib/languages/javascript";
import {
	RxFontBold,
	RxFontItalic,
	RxStrikethrough,
	RxCode,
	RxChevronDown,
	RxChatBubble
} from "react-icons/rx";

import "highlight.js/styles/night-owl.css";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("js", js);

export function Editor() {
	const editor = useEditor({
		extensions: [
			StarterKit,
			CodeBlockLowlight.configure({
				lowlight
			})
		],
		content: initialContent,
		editorProps: {
			attributes: {
				class: "outline-none"
			}
		}
	});

	return (
		<>
			<EditorContent
				editor={editor}
				className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
			/>
			{editor && (
				<>
					<FloatingMenu
						className={`
            bg-zinc-700 shadow-xl border border-zinc-600
            shadow-black/20 rounded-lg overflow-hidden flex
            flex-col py-2 px-1
          `}
						editor={editor}
						shouldShow={({ state }) => {
							const { $from } = state.selection;

							const currentLineText = $from.nodeBefore?.textContent;

							return currentLineText === "/";
						}}
					>
						<button
							className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
							onClick={() => {
								editor?.chain().focus().toggleBold().run();
							}}
						>
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/text/en-US.png"
								alt="Text"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Text</span>
								<span className="text-xs text-zinc-400">
									Just start writing with plain text.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/page.83b0bf31.png"
								alt="Page"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Page</span>
								<span className="text-xs text-zinc-400">
									Embed a sub-page inside this page.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/to-do.f8d20542.png"
								alt="To-do list"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">To-do list</span>
								<span className="text-xs text-zinc-400">
									Track tasks with a to-do list.
								</span>
							</div>
						</button>

						<button
							className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
							onClick={() => {
								editor?.chain().focus().toggleHeading({ level: 1 }).run();
							}}
						>
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/header.57a7576a.png"
								alt="Heading"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Heading</span>
								<span className="text-xs text-zinc-400">
									Organize content with headers.
								</span>
							</div>
						</button>

						<button
							className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
							onClick={() => {
								editor?.chain().focus().toggleHeading({ level: 2 }).run();
							}}
						>
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/subheader.9aab4769.png"
								alt="Sub-heading"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Sub-heading</span>
								<span className="text-xs text-zinc-400">
									Organize content with headers.
								</span>
							</div>
						</button>

						<button
							className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
							onClick={() => {
								editor?.chain().focus().toggleHeading({ level: 3 }).run();
							}}
						>
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
								alt="Sub-sub-heading"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Sub-sub-heading</span>
								<span className="text-xs text-zinc-400">
									Organize content with headers.
								</span>
							</div>
						</button>

						<button
							className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
							onClick={() => {
								editor?.chain().focus().toggleBlockquote().run();
							}}
						>
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
								alt="Bulleted list"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Bulleted list</span>
								<span className="text-xs text-zinc-400">
									Create a list with bullets.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/numbered-list.0406affe.png"
								alt="Numbered list"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Numbered list</span>
								<span className="text-xs text-zinc-400">
									Create a list with numbers.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/to-do.f8d20542.png"
								alt="To-do list"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">To-do list</span>
								<span className="text-xs text-zinc-400">
									Track tasks with a to-do list.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/quote/en-US.png"
								alt="Quote"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Quote</span>
								<span className="text-xs text-zinc-400">Call out quotes.</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/divider.210d0faf.png"
								alt="Divider"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Divider</span>
								<span className="text-xs text-zinc-400">
									Separate content with a line.
								</span>
							</div>
						</button>

						<button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
							<img
								className="w-12 border border-zinc-600 rounded"
								src="http://www.notion.so/images/blocks/callout.7b4c39c4.png"
								alt="Callout"
							/>
							<div className="flex flex-col text-left">
								<span className="text-sm">Callout</span>
								<span className="text-xs text-zinc-400">
									Highlight important information.
								</span>
							</div>
						</button>
					</FloatingMenu>

					<BubbleMenu
						className={`
            bg-zinc-700 shadow-xl border border-zinc-600
            shadow-black/20 rounded-lg overflow-hidden flex
            divide-x divide-zinc-600
          `}
						editor={editor}
					>
						<BubbleButton>
							<RxChevronDown className="w-4 h-4" />
							Heading
						</BubbleButton>
						<BubbleButton>
							<RxChatBubble className="w-4 h-4" />
							Comment
						</BubbleButton>
						<div className="flex items-center">
							<BubbleButton
								onClick={() => editor.chain().focus().toggleBold().run()}
								data-active={editor.isActive("bold")}
							>
								<RxFontBold className="w-4 h-4" />
							</BubbleButton>
							<BubbleButton
								onClick={() => editor.chain().focus().toggleItalic().run()}
								data-active={editor.isActive("italic")}
							>
								<RxFontItalic className="w-4 h-4" />
							</BubbleButton>
							<BubbleButton
								onClick={() => editor.chain().focus().toggleStrike().run()}
								data-active={editor.isActive("strike")}
							>
								<RxStrikethrough className="w-4 h-4" />
							</BubbleButton>
							<BubbleButton
								onClick={() => editor.chain().focus().toggleCodeBlock().run()}
								data-active={editor.isActive("codeBlock")}
							>
								<RxCode className="w-4 h-4" />
							</BubbleButton>
						</div>
					</BubbleMenu>
				</>
			)}
		</>
	);
}
