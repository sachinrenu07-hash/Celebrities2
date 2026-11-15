
/*
  FRAME CELEBRITY GALLERY
  Latest Indian celebrity entries appear FIRST.
  Images are searched on Wikimedia Commons.
  No API key is required.
*/

// =====================================================
// HEROINES — INDIAN FEMALE CELEBRITIES
// =====================================================

const LATEST_ENTRIES = [
  // Bollywood / Hindi
  "Alia Bhatt",
  "Deepika Padukone",
  "Katrina Kaif",
  "Kareena Kapoor Khan",
  "Priyanka Chopra",
  "Kiara Advani",
  "Kriti Sanon",
  "Shraddha Kapoor",
  "Disha Patani",
  "Ananya Panday",
  "Janhvi Kapoor",
  "Sara Ali Khan",
  "Triptii Dimri",
  "Rashmika Mandanna",
  "Taapsee Pannu",
  "Kangana Ranaut",
  "Vidya Balan",
  "Aishwarya Rai Bachchan",
  "Madhuri Dixit",
  "Kajol",
  "Rani Mukerji",
  "Shilpa Shetty",
  "Sushmita Sen",
  "Sonam Kapoor",
  "Sonakshi Sinha",
  "Parineeti Chopra",
  "Bhumi Pednekar",
  "Yami Gautam",
  "Mrunal Thakur",
  "Pooja Hegde",
  "Diana Penty",
  "Nora Fatehi",
  "Mouni Roy",
  "Rakul Preet Singh",
  "Tamannaah Bhatia",
  "Vaani Kapoor",
  "Kriti Kharbanda",
  "Aditi Rao Hydari",
  "Sanya Malhotra",
  "Fatima Sana Shaikh",
  "Radhika Apte",
  "Huma Qureshi",
  "Richa Chadha",
  "Amrita Rao",
  "Genelia D'Souza",
  "Ileana D'Cruz",
  "Neha Sharma",
  "Shriya Saran",
  "Ameesha Patel",
  "Bipasha Basu",
  "Urvashi Rautela",
  "Esha Gupta",
  "Nimrat Kaur",
  "Konkona Sen Sharma",
  "Ayesha Takia",
  "Dia Mirza",
  "Mahima Chaudhry",
  "Preity Zinta",
  "Tabu",
  "Dimple Kapadia",
  "Raveena Tandon",
  "Juhi Chawla",
  "Manisha Koirala",
  "Amrita Singh",

  // Telugu cinema
  "Samantha Ruth Prabhu",
  "Anushka Shetty",
  "Sai Pallavi",
  "Rashmika Mandanna",
  "Pooja Hegde",
  "Sreeleela",
  "Krithi Shetty",
  "Nivetha Thomas",
  "Ritu Varma",
  "Lavanya Tripathi",
  "Meenakshi Chaudhary",
  "Dimple Hayathi",
  "Eesha Rebba",
  "Faria Abdullah",
  "Anjali",
  "Catherine Tresa",
  "Raashi Khanna",
  "Nabha Natesh",
  "Shanvi Srivastava",
  "Payal Rajput",
  "Hebah Patel",
  "Rakul Preet Singh",
  "Kajal Aggarwal",
  "Tamannaah Bhatia",
  "Pranitha Subhash",
  "Nidhhi Agerwal",
  "Aishwarya Rajesh",
  "Sonal Chauhan",
  "Shruti Haasan",
  "Hansika Motwani",
  "Renu Desai",
  "Bhumika Chawla",

  // Tamil cinema
  "Nayanthara",
  "Trisha Krishnan",
  "Keerthy Suresh",
  "Jyothika",
  "Sai Pallavi",
  "Amala Paul",
  "Aishwarya Lekshmi",
  "Aishwarya Rajesh",
  "Andrea Jeremiah",
  "Ritika Singh",
  "Priya Bhavani Shankar",
  "Ivana",
  "Aparna Balamurali",
  "Malavika Mohanan",
  "Madonna Sebastian",
  "Manju Warrier",
  "Regina Cassandra",
  "Nivetha Pethuraj",
  "Varalaxmi Sarathkumar",
  "Ramya Krishnan",
  "Simran",
  "Sneha",
  "Laila",
  "Meena",
  "Devayani",
  "Gauthami",
  "Khushbu Sundar",
  "Radhika Sarathkumar",
  "Suhasini Maniratnam",
  "Revathi",
  "Rohini",
  "Abhirami",
  "Anu Emmanuel",
  "Priya Anand",
  "Shalini Pandey",
  "Anupama Parameswaran",

  // Malayalam cinema
  "Manju Warrier",
  "Parvathy Thiruvothu",
  "Nazriya Nazim",
  "Nimisha Sajayan",
  "Kalyani Priyadarshan",
  "Aishwarya Lekshmi",
  "Anna Ben",
  "Grace Antony",
  "Rajisha Vijayan",
  "Darshana Rajendran",
  "Mamta Mohandas",
  "Bhavana",
  "Samyuktha Menon",
  "Anaswara Rajan",
  "Shobana",
  "Urvashi",
  "Meera Jasmine",
  "Kavya Madhavan",
  "Nikhila Vimal",
  "Aparna Balamurali",
  "Lena",
  "Rima Kallingal",
  "Swasika",
  "Vincy Aloshious",
  "Ahaana Krishna",
  "Priya Prakash Varrier",

  // Kannada cinema
  "Rashmika Mandanna",
  "Rachita Ram",
  "Srinidhi Shetty",
  "Ashika Ranganath",
  "Krishi Thapanda",
  "Hariprriya",
  "Aindrita Ray",
  "Radhika Pandit",
  "Ramya",
  "Sanjana Anand",
  "Nabha Natesh",
  "Shanvi Srivastava",
  "Milana Nagaraj",
  "Sreeleela",
  "Amulya",
  "Bhavana Menon",
  "Priya Mani",
  "Pooja Gandhi",
  "Parul Yadav",
  "Meghana Raj",

  // Indian television and digital celebrities
  "Jennifer Winget",
  "Hina Khan",
  "Mouni Roy",
  "Divyanka Tripathi",
  "Surbhi Jyoti",
  "Sanaya Irani",
  "Drashti Dhami",
  "Shweta Tiwari",
  "Ankita Lokhande",
  "Tejasswi Prakash",
  "Rupali Ganguly",
  "Nia Sharma",
  "Avneet Kaur",
  "Jannat Zubair",
  "Shivangi Joshi",
  "Erica Fernandes",
  "Asha Negi",
  "Kritika Kamra",
  "Sakshi Tanwar",
  "Prachi Desai",
  "Mithila Palkar",
  "Shreya Dhanwanthary",
  "Ahsaas Channa",
  "Sriti Jha",
  "Aditi Sharma"
].map(name => ({
  name,
  categories: ["Heroines"]
}));


// =====================================================
// ANGELS — ORIGINAL PEOPLE DATA
// =====================================================

const ORIGINAL_PEOPLE_DATA = [
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
].map(name => ({
  name,
  categories: ["Angels"]
}));


// =====================================================
// COMBINE DATA — LATEST ENTRIES FIRST + REMOVE DUPLICATES
// =====================================================

const PEOPLE_DATA = [
  ...new Map(
    [...LATEST_ENTRIES, ...ORIGINAL_PEOPLE_DATA].map(person => [
      person.name.toLocaleLowerCase().trim(),
      person
    ])
  ).values()
];


// =====================================================
// FRAME GALLERY — WIKIMEDIA COMMONS IMAGE SEARCH
// =====================================================

const COMMONS_API = "https://commons.wikimedia.org/w/api.php";
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


// =====================================================
// HELPER FUNCTIONS
// =====================================================

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


// =====================================================
// RENDER GALLERY
// =====================================================

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

  loadVisibleImages();
}


// =====================================================
// CREATE CELEBRITY CARD
// =====================================================

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


// =====================================================
// DISPLAY IMAGE
// =====================================================

function showImage(wrap, image) {
  const link = document.createElement("a");

  link.href = image.filePage;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "commons-image-link";

  link.setAttribute(
    "aria-label",
    `Open ${wrap.dataset.person} image source on Wikimedia Commons`
  );

  const img = document.createElement("img");

  img.alt = `${wrap.dataset.person} photograph`;
  img.loading = "lazy";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";
  img.src = image.thumb;

  img.onerror = () => {
    link.remove();

    if (!wrap.querySelector(".photo-fallback")) {
      const fallback = document.createElement("div");

      fallback.className = "photo-fallback";
      fallback.textContent = initials(wrap.dataset.person);

      wrap.prepend(fallback);
    }
  };

  const badge = document.createElement("span");

  badge.className = "photo-source";
  badge.textContent = "WIKIMEDIA COMMONS";

  link.append(img, badge);
  wrap.replaceChildren(link);
}


// =====================================================
// NORMALIZE NAMES FOR MATCHING
// =====================================================

function normalize(value) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}


// =====================================================
// CHECK WHETHER IMAGE NAME MATCHES CELEBRITY NAME
// =====================================================

function isStrongNameMatch(title, name) {
  const fileTitle = normalize(title.replace(/^File:/i, ""));
  const target = normalize(name);

  if (fileTitle.includes(target)) {
    return true;
  }

  const parts = target.split(" ");

  if (parts.length < 2) {
    return fileTitle.includes(target);
  }

  return (
    fileTitle.includes(parts[parts.length - 1]) &&
    parts.slice(0, -1).some(part => fileTitle.includes(part))
  );
}


// =====================================================
// SEARCH WIKIMEDIA COMMONS
// =====================================================

async function findCommonsImage(name) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `"${name}"`,
    gsrnamespace: "6",
    gsrlimit: "12",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "700",
    format: "json",
    origin: "*"
  });

  const response = await fetch(`${COMMONS_API}?${params}`);

  if (!response.ok) {
    throw new Error(
      `Wikimedia Commons returned ${response.status}`
    );
  }

  const data = await response.json();
  const pages = Object.values(data.query?.pages || {});

  const match = pages.find(page =>
    page.imageinfo?.[0]?.thumburl &&
    isStrongNameMatch(page.title || "", name)
  );

  if (!match) {
    return null;
  }

  const info = match.imageinfo[0];

  return {
    thumb: info.thumburl,
    filePage: `https://commons.wikimedia.org/wiki/${encodeURIComponent(
      (match.title || "").replace(/ /g, "_")
    )}`,
    license:
      info.extmetadata?.LicenseShortName?.value ||
      "See source page"
  };
}


// =====================================================
// LOAD IMAGES FOR VISIBLE CARDS
// =====================================================

async function loadVisibleImages() {
  const wraps = [...grid.querySelectorAll(".photo-wrap")];

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
      const image = await findCommonsImage(name);

      if (image) {
        state.imageCache.set(name, image);

        const currentWrap = [
          ...grid.querySelectorAll(".photo-wrap")
        ].find(el => el.dataset.person === name);

        if (currentWrap) {
          showImage(currentWrap, image);
        }
      }
    } catch (error) {
      console.warn(
        `Could not load Wikimedia Commons image for ${name}:`,
        error
      );
    } finally {
      state.pending.delete(name);
    }
  }
}


// =====================================================
// SEARCH INPUT
// =====================================================

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  state.visible = PAGE_SIZE;
  render();
});


// =====================================================
// CLEAR SEARCH
// =====================================================

document
  .getElementById("clearSearch")
  .addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    state.visible = PAGE_SIZE;

    render();
    searchInput.focus();
  });


// =====================================================
// CATEGORY FILTERS
// =====================================================

document.querySelectorAll(".filter-chip").forEach(button => {
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


// =====================================================
// LOAD MORE BUTTON
// =====================================================

loadMore.addEventListener("click", () => {
  state.visible += PAGE_SIZE;
  render();
});


// =====================================================
// KEYBOARD SHORTCUT — CTRL + K / CMD + K
// =====================================================

document.addEventListener("keydown", event => {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();
    searchInput.focus();
  }
});


// =====================================================
// INITIALIZE GALLERY
// =====================================================

document.getElementById("year").textContent =
  new Date().getFullYear();

if (apiNotice) {
  apiNotice.hidden = true;
}

render();


// Wikimedia Commons may not contain a correctly matched
// image for every person. In that case, the card keeps
// its initials placeholder.
