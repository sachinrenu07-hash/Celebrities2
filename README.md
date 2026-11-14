# FRAME — Celebrity Gallery

A responsive HTML/CSS/vanilla-JavaScript directory containing the original 91-name collection.

## Run

1. Extract the ZIP.
2. Open `celebrity-gallery/index.html` in a browser, or import the folder into Replit.
3. Press **Run** in Replit.

## Images — no API key required

The gallery searches the Wikimedia Commons public API directly from the browser. You do **not** need a Google API key, Google Search Engine ID, or any other key.

- Images are loaded as cards become visible.
- The script only displays files whose titles strongly match the person's name.
- If Commons has no suitable matching image, the card keeps its initials placeholder. It does not substitute stock or AI-generated images.
- Click an image to open its Wikimedia Commons file page and review the license, author, and attribution requirements before reuse.

## Important notes

- Wikimedia Commons is a volunteer-maintained media repository; it may not contain an appropriate image for every name. Search matches are not guaranteed to be portraits or to depict the intended person, so review each result before publishing.
- Image rights and license conditions vary by file. Linking to Commons does not itself grant permission for other uses.
- The supplied people are tagged `Actors`. Other category chips remain available; add verified category tags in `PEOPLE_DATA` if you want those filters populated.
- For production use, consider adding a backend cache and a clear image-review/attribution workflow.
