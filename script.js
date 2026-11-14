// FRAME celebrity gallery
// Image provider: Wikimedia Commons API (no API key required).
// Images are loaded on demand as gallery cards appear.
// Wikimedia Commons may not contain a suitable image for every person.

const PEOPLE_DATA = [
  "Mia Malkova",
  "Lana Rhoades",
  "Abella Danger",
  "Nikki Benz",
  "Angela White",
  "Sophie Dee",
  "Nicole Aniston",
  "Kendra Sunderland",
  "Sara Jay",
  "Romi Rain",
  "Alexis Texas",
  "Valentina Nappi",
  "Elsa Jean",
  "Adriana Chechik",
  "Dani Daniels",
  "Kate Kuray",
  "Asa Akira",
  "Tori Black",
  "Madison Ivy",
  "Gina Valentina",
  "Julia Ann",
  "Brandi Love",
  "Veronica Rodriguez",
  "Rachel Starr",
  "Maitland Ward",
  "Karlee Grey",
  "Jayden Jaymes",
  "Teanna Trump",
  "Alina Lopez",
  "Kimmy Granger",
  "Aletta Ocean",
  "Eva Lovia",
  "Alexis Fawx",
  "Vicky Vette",
  "Emily Willis",
  "Autumn Falls",
  "Stormy Daniels",
  "Jessa Rhodes",
  "Cherie Deville",
  "Dillion Harper",
  "Gianna Dior",
  "Nikki Delano",
  "Jesse Jane",
  "Carter Cruise",
  "Kayden Kross",
  "Tanya Tate",
  "Ariana Marie",
  "Samantha Saint",
  "Kenzie Reeves",
  "Gabbie Carter",
  "Natalia Starr",
  "Jada Stevens",
  "Nina Hartley",
  "Piper Perri",
  "Vicki Chase",
  "Moriah Mills",
  "Kiara Mia",
  "Phoenix Marie",
  "Rose Monroe",
  "Eva Notty",
  "Kissa Sins",
  "Luna Star",
  "Kaylani Lei",
  "Whitney Wright",
  "Aaliyah Hadid",
  "Gianna Michaels",
  "Bonnie Rotten",
  "Joanna Angel",
  "Alura Jenson",
  "Bridgette B",
  "Lela Star",
  "Raven Bay",
  "Riley Steele",
  "Kali Roses",
  "Natasha Nice",
  "Sarah Vandella",
  "Jill Kassidy",
  "Tiffany Watson",
  "Kirsten Price",
  "Skyla Novea",
  "Richelle Ryan",
  "Janice Griffith",
  "Sheena Ryder",
  "Tina Kay",
  "Mandy Muse",
  "Sheila Ortega",
  "Blair Williams",
  "Eliza Ibarra",
  "Veronica Avluv",
  "Scarlett Sage",
  "Katrina Jade"
].map(name => ({ name, categories: ["Actors"] }));

// Additional entries supplied for the FRAME gallery.
const ADDITIONAL_NAMES = [
  "Julie Cash",
  "Lisa Ann",
  "Anya Olsen",
  "Karmen Karma",
  "Nyomi Banxxx",
  "Naomi Woods",
  "Victoria June",
  "Gina Gerson",
  "Marley Brinx",
  "Francesca Le",
  "Zoey Monroe",
  "Jaclyn Taylor",
  "Molly Stewart",
  "Jelena Jensen",
  "Melody Marks",
  "Kesha Ortega",
  "Jayden Cole",
  "Shyla Jennings",
  "Kira Noir",
  "Kelly Divine",
  "Ella Hughes",
  "Misha Cross",
  "Stella Cox",
  "Noelle Easton",
  "Valentina Jewels",
  "Mia Melano",
  "Jessica Drake",
  "Sheridan Love",
  "AJ Applegate",
  "Kenna James",
  "Syren Demer",
  "Lauren Phillips",
  "Lady Dee",
  "Gabriella Paltrova",
  "Karla Kush",
  "Katie Morgan",
  "Kayla Kayden",
  "Skin Diamond",
  "Riley Reyes",
  "Misty Stone",
  "Khloe Kapri",
  "Jane Wilde",
  "Athena Faris",
  "Kelly Madison",
  "Kenzie Taylor",
  "Maddy O'Reilly",
  "Uma Jolie",
  "Joslyn James",
  "Penny Pax",
  "Ivy Lebelle",
  "Lena Nitro",
  "Anikka Albrite",
  "Krissy Lynn",
  "Darcie Dolce",
  "Kristina Rose",
  "Maya Bijou",
  "Aaliyah Love",
  "Jessie Volt",
  "Nina North",
  "Jordi Pollo",
  "Anny Aurora",
  "Jillian Janson",
  "Paige Owens",
  "Britney Amber",
  "Abigail Mac",
  "Lily LaBeau",
  "Georgia Jones",
  "Kendra Spade",
  "Gia Paige",
  "Sydney Cole",
  "Lana Rain",
  "Brooklyn Chase",
  "Rebecca Volpetti",
  "Morgan Lee",
  "Julia Roca",
  "Chanel Preston",
  "Jodi West",
  "Lacy Lennon",
  "Shooting Star",
  "Emma Hix",
  "Aidra Fox",
  "Sarah Jessie",
  "Alexis Monroe",
  "Rharri Rhound",
  "Samantha Rone",
  "Lena Paul",
  "Kimber James",
  "Holly Hendrix",
  "Nia Nacci",
  "Claudia Marie",
  "Canela Skin",
  "Jennifer White",
  "Brett Rossi",
  "Dana DeArmond",
  "Amirah Adara",
  "Jojo Kiss",
  "Elena Koshka",
  "Evelyn Claire",
  "Tia Cyrus",
  "Kenzie Madison",
  "Chloe Cherry",
  "Scarlit Scandal",
  "Casey Calvert",
  "Cali Carter",
  "Ella Knox",
  "Skylar Snow",
  "Charlotte Sartre",
  "Alex Grey",
  "Lyra Law",
  "Giselle Palmer",
  "Anissa Kate",
  "Ashley Adams",
  "Gracie Glam",
  "Cathy Heaven",
  "Zoe Bloom",
  "Riley Star",
  "Honey Gold",
  "Ana Foxxx",
  "Franceska Jaimes",
  "Naomi Swann",
  "Kate England",
  "Deauxma",
  "Stacy Cruz",
  "Joseline Kelly",
  "Katrina Moreno",
  "Reena Sky",
  "Kiki Minaj",
  "Dana Vespoli",
  "Lena Spanks",
  "Silvia Saige",
  "Cadence Lux",
  "Vienna Black",
  "Veronica Vain",
  "Arietta Adams",
  "Riley Nixon",
  "Kiara Cole",
  "Maggie Green",
  "Aiden Starr",
  "Kyler Quinn",
  "Savannah Sixx",
  "Texas Patti",
  "Proxy Paige",
  "Mona Wales",
  "Mia Khalifa",
  "Comattoze"
];

// Add names without duplicating entries already in PEOPLE_DATA.
const existingNames = new Set(
  PEOPLE_DATA.map(person => person.name.toLocaleLowerCase())
);

for (const name of ADDITIONAL_NAMES) {
  const key = name.toLocaleLowerCase();

  if (!existingNames.has(key)) {
    PEOPLE_DATA.push({
      name,
      categories: ["Actors"]
    });

    existingNames.add(key);
  }
}

const people = PEOPLE_DATA;
const PAGE_SIZE = 20;

const state = {
  query: "",
  category: "All",
  visible: PAGE_SIZE,
  imageCache: new Map(),
  pending: new Set()
};

const grid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const loadMore = document.getElementById("loadMore");
const apiNotice = document.getElementById("apiNotice");

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

function filteredPeople() {
  const q = state.query.trim().toLocaleLowerCase();

  return people.filter(person => {
    const matchesName =
      !q || person.name.toLocaleLowerCase().includes(q);

    const matchesCategory =
      state.category === "All" ||
      person.categories.includes(state.category);

    return matchesName && matchesCategory;
  });
}

function render() {
  const matches = filteredPeople();
  const visible = matches.slice(0, state.visible);

  grid.innerHTML = "";

  visible.forEach(person => {
    grid.appendChild(createCard(person));
  });

  resultCount.textContent =
    `${matches.length} ${matches.length === 1 ? "person" : "people"} in the collection`;

  emptyState.hidden = matches.length !== 0;
  loadMore.hidden = matches.length <= state.visible;

  if (apiNotice) {
    apiNotice.hidden = true;
  }

  loadVisibleImages();
}

function createCard(person) {
  const card = document.createElement("article");
  card.className = "person-card";

  const wrap = document.createElement("div");
  wrap.className = "photo-wrap";
  wrap.dataset.person = person.name;

  const fallback = document.createElement("div");
  fallback.className = "photo-fallback";
  fallback.textContent = initials(person.name);

  wrap.appendChild(fallback);

  const name = document.createElement("h3");
  name.className = "person-name";
  name.textContent = person.name;

  const meta = document.createElement("p");
  meta.className = "person-meta";
  meta.textContent = person.categories.join(" · ");

  card.append(wrap, name, meta);

  const cached = state.imageCache.get(person.name);

  if (cached) {
    showImage(wrap, cached);
  }

  return card;
}

function showImage(wrap, imageData) {
  const img = document.createElement("img");

  img.alt = `${wrap.dataset.person} photograph`;
  img.loading = "lazy";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";
  img.src = imageData.url;

  img.onerror = () => {
    img.remove();
  };

  const sourceLink = document.createElement("a");

  sourceLink.className = "photo-source";
  sourceLink.textContent = "WIKIMEDIA";
  sourceLink.href = imageData.pageUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";

  sourceLink.title = imageData.license
    ? `Source and license: ${imageData.license}`
    : "View image source and licensing information";

  wrap.replaceChildren(img, sourceLink);
}

function normalizeName(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function isStrongNameMatch(fileTitle, personName) {
  const title = normalizeName(
    fileTitle.replace(/^File:/i, "")
  );

  const target = normalizeName(personName);

  if (!target) return false;

  if (title.includes(target)) {
    return true;
  }

  const parts = target.split(" ");

  if (parts.length < 2) {
    return title.split(" ").includes(target);
  }

  const titleParts = title.split(" ");

  return (
    titleParts.includes(parts[parts.length - 1]) &&
    parts.slice(0, -1).some(part => titleParts.includes(part))
  );
}

async function searchCommonsImage(personName) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `"${personName}"`,
    gsrnamespace: "6",
    gsrlimit: "10",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "600",
    format: "json",
    origin: "*"
  });

  const endpoint =
    `https://commons.wikimedia.org/w/api.php?${params}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(
      `Wikimedia Commons returned HTTP ${response.status}`
    );
  }

  const data = await response.json();

  const pages = Object.values(
    data.query?.pages || {}
  );

  if (!pages.length) {
    return null;
  }

  // Only accept a strong name match.
  // Never display a loosely related image.
  const matchingPage = pages.find(page =>
    page.imageinfo?.[0] &&
    isStrongNameMatch(page.title || "", personName)
  );

  if (!matchingPage) {
    return null;
  }

  const info = matchingPage.imageinfo?.[0];

  const imageUrl = info?.thumburl || info?.url;

  if (!imageUrl) {
    return null;
  }

  const pageUrl =
    "https://commons.wikimedia.org/wiki/" +
    encodeURIComponent(
      matchingPage.title.replace(/ /g, "_")
    );

  return {
    url: imageUrl,
    pageUrl,
    title: matchingPage.title,
    license:
      info.extmetadata?.LicenseShortName?.value || ""
  };
}

async function loadVisibleImages() {
  const wraps = [
    ...grid.querySelectorAll(".photo-wrap")
  ];

  // Load images sequentially to avoid sending
  // too many requests to Wikimedia Commons.
  for (const wrap of wraps) {
    const name = wrap.dataset.person;

    if (
      state.imageCache.has(name) ||
      state.pending.has(name)
    ) {
      continue;
    }

    state.pending.add(name);

    try {
      const imageData =
        await searchCommonsImage(name);

      if (imageData) {
        state.imageCache.set(name, imageData);

        // Check whether the card is still visible.
        const currentWrap = [
          ...grid.querySelectorAll(".photo-wrap")
        ].find(el => el.dataset.person === name);

        if (currentWrap) {
          showImage(currentWrap, imageData);
        }
      }
    } catch (error) {
      console.warn(
        `Could not load Wikimedia image for ${name}:`,
        error
      );
    } finally {
      state.pending.delete(name);
    }
  }
}

// Search functionality
searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  state.visible = PAGE_SIZE;
  render();
});

// Clear search
document
  .getElementById("clearSearch")
  .addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    state.visible = PAGE_SIZE;

    render();
    searchInput.focus();
  });

// Category filters
document
  .querySelectorAll(".filter-chip")
  .forEach(button => {
    button.addEventListener("click", () => {
      document
        .querySelector(".filter-chip.selected")
        ?.classList.remove("selected");

      button.classList.add("selected");

      state.category = button.dataset.category;
      state.visible = PAGE_SIZE;

      render();
    });
  });

// Load more people
loadMore.addEventListener("click", () => {
  state.visible += PAGE_SIZE;
  render();
});

// Keyboard shortcut: Ctrl + K or Cmd + K
document.addEventListener("keydown", event => {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();
    searchInput.focus();
  }
});

// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Initial gallery render
render();

// All supplied entries are tagged Actors.
// Wikimedia Commons may not contain a correctly matched
// image for every person. In that case, initials are shown.
