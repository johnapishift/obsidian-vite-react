import { Notice, Plugin } from "obsidian";
import * as automerge from "@automerge/automerge"

export default class samplePlugin extends Plugin {
	onload(): void {
		new Notice("Sample plugin loaded");
        console.log("sdf")
        type DocType = {ideas: Array<automerge.Text>}
        let doc1 = automerge.init<DocType>()
        doc1 = automerge.change(doc1, d => {
            d.ideas = [new automerge.Text("an immutable document")]
        })
        console.log(doc1)
	}

	unload(): void {
		new Notice("Sample plugin disabled");
	}
}
