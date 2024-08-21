function walkAndReplace(node) {
	const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, node=>{
		return node.matches("input,textarea,pre,.editor,*[contenteditable='true']") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
	})
	while(walker.nextNode()) {
		for (const node of walker.currentNode.childNodes) {
			if (node.nodeType === Node.TEXT_NODE && /\b(AI|[Aa]rtificial[- ][Ii]ntelligence|A.I.)\b/.test(node.data)) {
				handleText(node)
			}
		}
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	if (!v.trim()) {
		return
	}

	let y = 0
	let toks = v.trim().split(/\s+/)
	// Capitalize it if at least 4 of first 8 words in str are capitalized
	toks.slice(0,8).forEach(x => {
		y += x[0].toUpperCase() == x[0] ? 1 : -1;
	})
	let capitalize = y > 0
	v = v.replace(/\b[Gg]enerative AI\b/g, "AI");
	v = v.replace(/\b[Aa]rtificial[- ][Ii]ntelligence\b/g, "AI");
	v = v.replace(/\bA\.I\.\b/g, "AI"); // WHY ISN'T THIS WORKING?!
	v = v.replace(/\bAn AI\b/g, "A AI");
	v = v.replace(/\ban AI\b/g, "a AI");
	v = v.replace(/\bAI is\b/g, "AI are");
	v = v.replace(/\bAI Is\b/g, "AI Are");
	if (capitalize) {
		v = v.replace(/\bAI\b/g, "Thousands of Workers in India");
	} else {
		v = v.replace(/^AI\b/, "Thousands of workers in India");
		v = v.replace(/\bAI\b/g, "thousands of workers in India");
	}

	textNode.nodeValue = v;
}

walkAndReplace(document.body)
var observer = new MutationObserver(function(mutations) {
	var do_rescan = false
	mutations.forEach(function(mutation) {
		if (mutation.addedNodes.length) {
			do_rescan = true
		}
	})
	if (do_rescan) {
		walkAndReplace(document.body)
	}
});
observer.observe(document.body, { childList: true, subtree: true, characterData: true });
