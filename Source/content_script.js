walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;


	if (v.match(/\bAI\b/)) {
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

	}

	textNode.nodeValue = v;
}


