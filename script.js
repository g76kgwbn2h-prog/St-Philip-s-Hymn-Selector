// Ordered hymn data provided by the user. Titles are preserved exactly once.
const hymns = [
  "Abide",
  "Always",
  "Ancient Of Days (Blessing And Honour)",
  "Ancient Of Days (None Above Him)",
  "Ancient Words",
  "Another One",
  "As For Me And My House",
  "Awake My Soul",
  "Because He Lives (Amen)",
  "Behold The Lamb",
  "Better Is One Day",
  "Bless God",
  "Boldly I Approach",
  "Christ Is Mine Forevermore",
  "Come Jesus Come",
  "Egypt",
  "Every Promise",
  "Evidence",
  "Faithful Now",
  "Firm Foundation (He Won’t)",
  "Fresh Wind",
  "Glorify Thy Name",
  "God Really Loves Us",
  "God Turn It Around",
  "God You’re So Good",
  "Good Plans",
  "Goodbye Yesterday",
  "Gratitude",
  "He Has Done Great Things",
  "He Is Lord (He Is Love)",
  "Hear The Call Of The Kingdom",
  "Here Again",
  "His Glory And My Good",
  "Holy Forever",
  "Holy Song",
  "Holy Spirit (Living Breath Of God)",
  "Holy Water",
  "Honey In The Rock",
  "Hymn Of Heaven",
  "I Believe (All Praise To God The Father)",
  "I Believe (As I Bow Before You Lord)",
  "I Can Only Imagine",
  "I Exalt Thee",
  "I Know A Name",
  "I Love You Lord",
  "I Stand Amazed (How Marvelous)",
  "I Stand In Awe",
  "I Will Sing Your Praises",
  "If The Lord",
  "In Jesus Name",
  "Is He Worthy",
  "Jehovah",
  "Jesus All For Jesus",
  "Jesus Is The Name We Honour",
  "Jesus We Love You",
  "Joy (What The World Calls Foolish)",
  "King Of Glory",
  "Lead Me To The Cross",
  "Lost In Wonder",
  "Love Of God",
  "Made For More",
  "Majesty",
  "Make Room",
  "Meekness And Majesty",
  "Miracles",
  "My Testimony",
  "New Name Written Down In Glory",
  "No One Like The Lord (We Crown You)",
  "O Church Arise",
  "Only A Holy God",
  "Praise",
  "Praise You Anywhere",
  "Same God",
  "Show Your Power",
  "Son Of Heaven",
  "Spirit Of The Living God",
  "Still",
  "Take You At Your Word",
  "Thank You Jesus For The Blood",
  "That’s Who I Praise",
  "The Father’s Song",
  "The Joy",
  "The Lord Is My Salvation",
  "The Lord’s Prayer (It’s Yours)",
  "There’s Nothing That Our God Can’t Do",
  "This Is Our God",
  "Throne Room Song",
  "Trust In God",
  "Victory In Jesus",
  "We Believe",
  "We Fall Down",
  "What A Faithful God",
  "What He’s Done",
  "What I See",
  "Who Else",
  "Worthy",
  "Yahweh We Love You",
  "You Are Holy (Prince Of Peace)",
  "You Are My King (Amazing Love)",
  "You’ve Already Won"
];

// Use Hymnary search pages as reliable external lyric lookups without hosting lyrics locally.
const lyricLinks = Object.fromEntries(
  hymns.map((title) => [
    title,
    `https://hymnary.org/search?qu=${encodeURIComponent(title)}`
  ])
);

const listenLinks = Object.fromEntries(
  hymns.map((title) => [
    title,
    `https://songselect.ccli.com/Search/Results?SongContent=&PrimaryLanguage=&Keys=&Themes=&List=&Sort=&SEO=&SearchText=${encodeURIComponent(title)}`
  ])
);

const STORAGE_KEY = "st-philips-hymn-selection";
const TOTAL_HYMNS = hymns.length;

const hymnList = document.querySelector("#hymnList");
const searchInput = document.querySelector("#searchInput");
const selectedOnlyInput = document.querySelector("#selectedOnly");
const showingCount = document.querySelector("#showingCount");
const selectedCount = document.querySelector("#selectedCount");
const copyButton = document.querySelector("#copyButton");
const emptyState = document.querySelector("#emptyState");

let hymnState = loadState();

function createDefaultEntry() {
  return {
    selected: false
  };
}

function loadState() {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    return hymns.reduce((accumulator, title) => {
      const entry = savedState[title] || {};
      accumulator[title] = {
        selected: Boolean(entry.selected)
      };
      return accumulator;
    }, {});
  } catch (error) {
    console.error("Unable to load hymn state from localStorage.", error);
    return hymns.reduce((accumulator, title) => {
      accumulator[title] = createDefaultEntry();
      return accumulator;
    }, {});
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(hymnState));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderList() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedOnly = selectedOnlyInput.checked;

  const visibleHymns = hymns.filter((title) => {
    const matchesSearch = title.toLowerCase().includes(searchTerm);
    const matchesSelection = !selectedOnly || hymnState[title].selected;
    return matchesSearch && matchesSelection;
  });

  hymnList.innerHTML = visibleHymns
    .map((title, index) => {
      const state = hymnState[title];
      const safeTitle = escapeHtml(title);
      const lyricsUrl = lyricLinks[title] || "#";
      const listenUrl = listenLinks[title] || "#";

      return `
        <article class="hymn-card" data-title="${safeTitle}">
          <div class="hymn-card__top">
            <div class="hymn-card__main">
              <input
                id="selected-${index}"
                type="checkbox"
                data-role="selected"
                data-title="${safeTitle}"
                ${state.selected ? "checked" : ""}
              />
              <div>
                <h2>${safeTitle}</h2>
              </div>
            </div>
            <div class="hymn-card__actions">
              <a
                class="hymn-action"
                href="${lyricsUrl}"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Lyrics
              </a>
              <a
                class="hymn-action hymn-action--secondary"
                href="${listenUrl}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = visibleHymns.length !== 0;
  refreshCounters(visibleHymns.length);
}

function countSelectedHymns() {
  return hymns.filter((title) => hymnState[title].selected).length;
}

function refreshCounters(visibleCount) {
  const resolvedVisibleCount =
    typeof visibleCount === "number"
      ? visibleCount
      : hymnList.querySelectorAll(".hymn-card").length;

  showingCount.textContent = `Showing ${resolvedVisibleCount} of ${TOTAL_HYMNS} hymns`;
  selectedCount.textContent = `Selected ${countSelectedHymns()} hymns`;
}

function updateEntry(title, field, value) {
  hymnState[title] = hymnState[title] || createDefaultEntry();
  hymnState[title][field] = value;
  saveState();
}

async function copySelectedHymns() {
  const selectedTitles = hymns.filter((title) => hymnState[title].selected);

  if (selectedTitles.length === 0) {
    copyButton.textContent = "No hymns selected";
    window.setTimeout(() => {
      copyButton.textContent = "Copy selected hymns";
    }, 1600);
    return;
  }

  const textToCopy = selectedTitles.join("\n");

  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (error) {
    // Fallback for environments where the Clipboard API is unavailable.
    const helper = document.createElement("textarea");
    helper.value = textToCopy;
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  copyButton.textContent = "Copied";
  window.setTimeout(() => {
    copyButton.textContent = "Copy selected hymns";
  }, 1600);
}

searchInput.addEventListener("input", renderList);
selectedOnlyInput.addEventListener("change", renderList);
copyButton.addEventListener("click", copySelectedHymns);

hymnList.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const title = target.dataset.title;
  const role = target.dataset.role;

  if (!title || role !== "selected") {
    return;
  }

  updateEntry(title, "selected", target.checked);
  if (selectedOnlyInput.checked) {
    renderList();
    return;
  }

  refreshCounters();
});

renderList();
