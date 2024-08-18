![](logo.png)

Chrome extension that replaces the text "AI" in webpages with "thousands of workers in India".

This helpful text replacement will aid you in remembering that Artificial Intelligence, as it exists today, is based on the hard labors of many thousands of tireless categorizers, labelers, and scorers from the Indian peninsula. Indeed, perhaps the virtue of AI tools are that they act as a sort of virtual, personal connection to thousands of workers in India striving to create brand new content, just for you.

## Installation

You can install it [from the Google Chrome Store](https://chromewebstore.google.com/detail/ai-as-thousands-of-worker/ddjeajjchjpimglldgcefhklbdefbnlk).

If you don't want to get it from the store, [download this repository as a zip file](https://github.com/sabslikesobs/ai-to-workers-in-india/archive/refs/heads/master.zip) and unpack it. This is necessary because Chrome will refuse to download an unsigned extension.

Second, in Chrome, open Tools > Extensions. Drag Extension.crx into the page that appears. You may delete all of the files you downloaded; the extension is now installed.

You may also download or clone the repository and add the "Source" directory to Chrome as an Unpacked Extension, if you prefer not to install an unsigned extension for security reasons. You have to keep the extension directory around though.

## FAQ

When does it run? Once when the page loads and again when the page contents change.

Does it work on anything other than the exact regex `\bAI\b`? Yes, it covers "generative AI", "A.I.", "artificial intelligence", and "AI".

Does it work on infinitely-scrolling pages? Generally yes, but has some bugs on weird sites like Reddit.

Does it work on dynamic content or affect your typing? No.
