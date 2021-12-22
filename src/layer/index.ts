import NewLayer from "./new";
import OldLayer from "./old";

export interface CompatLayer {
	getWatchQuery(): string;
	getCommentsContainerQuery(): string;
	getVideoDescriptionQuery(): string;
}

let layer: CompatLayer;

export function getCurrentLayer(): CompatLayer {
	if (layer) return layer;

	// Only the new version uses custom elements.
	// This is the most reliable method I could find to detect versions.
	
	// if (document.querySelector("ytd-app")) {
	// 	layer = new NewLayer();
	// } else {
	// 	layer = new OldLayer();
	// }

	layer = new class implements CompatLayer {
		getWatchQuery(): string {
			return ".comment";
		}
		getCommentsContainerQuery(): string {
			return ".comments-section";
		}
		getVideoDescriptionQuery(): string {
			return ".video-details";
		}
		
	}

	return layer;
}
