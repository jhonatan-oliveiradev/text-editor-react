import { Editor } from "./components/Editor";

export default function App() {
	return (
		<div className="min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
			<div className="bg-zinc-800 overflow-hidden grid grid-cols-[16rem_1fr] w-[1100px] mx-auto rounded-xl min-h-[200px] shadow-sm border border-black/20">
				<aside className="bg-zinc-900 border-r border-r-zinc-700 p-4">
					<div className="flex gap-2 group">
						<button className="w-3 h-3 rounded-full transition-all bg-zinc-300 hover:bg-red-400" />
						<button className="w-3 h-3 rounded-full transition-all bg-zinc-300 hover:bg-yellow-400" />
						<button className="w-3 h-3 rounded-full transition-all bg-zinc-300 hover:bg-green-400" />
					</div>
				</aside>
				<div className="p-4">
					<Editor />
				</div>
			</div>
		</div>
	);
}
