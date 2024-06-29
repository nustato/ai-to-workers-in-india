const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, node=>{
	return node.matches("input,textarea,*[contenteditable='true']") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
})
while(walker.nextNode()) {
	for (const node of walker.currentNode.childNodes) {
		if (node.nodeType === Node.TEXT_NODE && /\bAI\b/.test(node.data)) {
			handleText(node)
		}
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	let y = 0
	let toks = v.trim().split(/\s+/)
	toks.slice(0,6).forEach(x => {
		y += x[0].toUpperCase() == x[0] ? 1 : -1;
	})
	let capitalize = y > 0
	if (capitalize) {
		v = v.replace(/\bAI is\b/g, "Thousands of Workers in India are");
		v = v.replace(/\bAI\b/g, "Thousands of Workers in India");
	} else {
		v = v.replace(/\bAI is\b/g, "thousands of workers in India are");
		v = v.replace(/\bAI\b/g, "thousands of workers in India");
		v = v.replace(/^thousands of workers in India/g, "Thousands of workers in India");
	}

	textNode.nodeValue = v;
}


