import { Notice, Plugin } from "obsidian";

export default class samplePlugin extends Plugin {
	onload(): void {
		new Notice("Sample plugin loaded");
	}

	unload(): void {
		new Notice("Sample plugin disabled");
	}
}
