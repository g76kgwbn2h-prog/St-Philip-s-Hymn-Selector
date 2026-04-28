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

// Verified SongSelect lyric-video targets. Songs without a current catalog match stay on "#".
const listenVideoIds = {
  "Abide": "DD97166F-DFB8-F011-8E61-000D3A332884",
  "Always": "6EC0103D-1988-F011-B3CD-6045BD074FAA",
  "Ancient Of Days (Blessing And Honour)": "679958E9-5EBA-F011-8E61-000D3A332884",
  "Ancient Of Days (None Above Him)": "1005A767-1588-F011-B3CD-6045BD074FAA",
  "Ancient Words": "2486F3EB-57BA-F011-8E61-000D3A332884",
  "Another One": "84217459-867C-F011-B482-6045BD024F72",
  "As For Me And My House": "59D31933-9777-F011-8DC9-000D3A5A1CFF",
  "Awake My Soul": "#",
  "Because He Lives (Amen)": "3C48862E-809B-F011-B3CE-000D3A3B66FA",
  "Behold The Lamb": "2D98166F-DFB8-F011-8E61-000D3A332884",
  "Better Is One Day": "62FD8FD5-54BA-F011-8E61-000D3A332884",
  "Bless God": "5875E7FA-817F-F011-B482-6045BD024F72",
  "Boldly I Approach": "62794C48-7F9B-F011-B3CE-000D3A3B66FA",
  "Christ Is Mine Forevermore": "CB97166F-DFB8-F011-8E61-000D3A332884",
  "Come Jesus Come": "BAEF4C70-8B8D-F011-B3CE-000D3A3B66FA",
  "Egypt": "8067DAA9-7B8A-F011-B3CD-000D3A35FB83",
  "Every Promise": "EF765B5B-7B9B-F011-B3CE-000D3A3B66FA",
  "Evidence": "8420F845-B98C-F011-B3CD-000D3A35FB83",
  "Faithful Now": "E7E6988E-7C8A-F011-B3CD-000D3A35FB83",
  "Firm Foundation (He Won’t)": "C0F3A06C-1888-F011-B3CD-6045BD074FAA",
  "Fresh Wind": "#",
  "Glorify Thy Name": "A1A11BF7-D972-F011-8DC9-000D3A36C11B",
  "God Really Loves Us": "50FB1744-1788-F011-B3CD-6045BD074FAA",
  "God Turn It Around": "3D98166F-DFB8-F011-8E61-000D3A332884",
  "God You’re So Good": "713D9C47-1388-F011-B3CD-6045BD074FAA",
  "Good Plans": "F17077CF-827F-F011-B482-6045BD024F72",
  "Goodbye Yesterday": "DF97166F-DFB8-F011-8E61-000D3A332884",
  "Gratitude": "42A42852-F41B-F111-832E-6045BD0564D3",
  "He Has Done Great Things": "136D0543-877C-F011-B482-6045BD024F72",
  "He Is Lord (He Is Love)": "6B41C6B9-5DBA-F011-8E61-000D3A332884",
  "Hear The Call Of The Kingdom": "F95E5877-1288-F011-B3CD-6045BD074FAA",
  "Here Again": "F00E9104-DA7D-F011-B482-6045BD024F72",
  "His Glory And My Good": "5A9801DC-867C-F011-B482-6045BD024F72",
  "Holy Forever": "B4C2B21A-1A88-F011-B3CD-6045BD074FAA",
  "Holy Song": "D997166F-DFB8-F011-8E61-000D3A332884",
  "Holy Spirit (Living Breath Of God)": "CB93166F-DFB8-F011-8E61-000D3A332884",
  "Holy Water": "412A5C7C-7C8A-F011-B3CD-000D3A35FB83",
  "Honey In The Rock": "C408BD29-1988-F011-B3CD-6045BD074FAA",
  "Hymn Of Heaven": "4C28D1B5-1688-F011-B3CD-6045BD074FAA",
  "I Believe (All Praise To God The Father)": "9CBA100C-867C-F011-B482-6045BD024F72",
  "I Believe (As I Bow Before You Lord)": "9950B771-1788-F011-B3CD-6045BD074FAA",
  "I Can Only Imagine": "AC2B1BBE-57BA-F011-8E61-000D3A332884",
  "I Exalt Thee": "A453CE8C-55BA-F011-8E61-000D3A332884",
  "I Know A Name": "1398166F-DFB8-F011-8E61-000D3A332884",
  "I Love You Lord": "585551B3-9577-F011-8DC9-000D3A5A1CFF",
  "I Stand Amazed (How Marvelous)": "A593166F-DFB8-F011-8E61-000D3A332884",
  "I Stand In Awe": "A40D58F7-55BA-F011-8E61-000D3A332884",
  "I Will Sing Your Praises": "9C7866A2-93A3-F011-8E61-000D3A347EC9",
  "If The Lord": "A89E24B6-877C-F011-B482-6045BD024F72",
  "In Jesus Name": "22FDF017-1888-F011-B3CD-6045BD074FAA",
  "Is He Worthy": "3E231B04-1488-F011-B3CD-6045BD074FAA",
  "Jehovah": "2B66CF60-1A88-F011-B3CD-6045BD074FAA",
  "Jesus All For Jesus": "39158A2F-5FBA-F011-8E61-000D3A332884",
  "Jesus Is The Name We Honour": "8519F612-5FBA-F011-8E61-000D3A332884",
  "Jesus We Love You": "CC28C3A0-809B-F011-B3CE-000D3A3B66FA",
  "Joy (What The World Calls Foolish)": "21DD5B91-867C-F011-B482-6045BD024F72",
  "King Of Glory": "FC4DB3E2-5CBA-F011-8E61-000D3A332884",
  "Lead Me To The Cross": "#",
  "Lost In Wonder": "B678AA1D-59BA-F011-8E61-000D3A332884",
  "Love Of God": "4C5904B4-847F-F011-B482-6045BD024F72",
  "Made For More": "1598166F-DFB8-F011-8E61-000D3A332884",
  "Majesty": "8FF63586-59BA-F011-8E61-000D3A332884",
  "Make Room": "#",
  "Meekness And Majesty": "158F166F-DFB8-F011-8E61-000D3A332884",
  "Miracles": "B2C80F60-829B-F011-B3CE-000D3A3B66FA",
  "My Testimony": "EB36D9F5-B78C-F011-B3CD-000D3A35FB83",
  "New Name Written Down In Glory": "42E1A096-5CBA-F011-8E61-000D3A332884",
  "No One Like The Lord (We Crown You)": "19C50D71-847F-F011-B482-6045BD024F72",
  "O Church Arise": "20D70630-7B9B-F011-B3CE-000D3A3B66FA",
  "Only A Holy God": "4339DE41-DD93-F011-B3CE-000D3A3B66FA",
  "Praise": "56A42852-F41B-F111-832E-6045BD0564D3",
  "Praise You Anywhere": "7CD83049-867C-F011-B482-6045BD024F72",
  "Same God": "64944701-1888-F011-B3CD-6045BD074FAA",
  "Show Your Power": "0B98166F-DFB8-F011-8E61-000D3A332884",
  "Son Of Heaven": "8E087680-8B8D-F011-B3CE-000D3A3B66FA",
  "Spirit Of The Living God": "818F2CC9-BA7C-F011-B482-6045BD024F72",
  "Still": "#",
  "Take You At Your Word": "B342B735-827F-F011-B482-6045BD024F72",
  "Thank You Jesus For The Blood": "CADAA42E-1788-F011-B3CD-6045BD074FAA",
  "That’s Who I Praise": "47D9685A-877C-F011-B482-6045BD024F72",
  "The Father’s Song": "E192166F-DFB8-F011-8E61-000D3A332884",
  "The Joy": "3F98166F-DFB8-F011-8E61-000D3A332884",
  "The Lord Is My Salvation": "75F85770-829B-F011-B3CE-000D3A3B66FA",
  "The Lord’s Prayer (It’s Yours)": "36C3B4DA-1988-F011-B3CD-6045BD074FAA",
  "There’s Nothing That Our God Can’t Do": "1B0A20C4-B88C-F011-B3CD-000D3A35FB83",
  "This Is Our God": "7DFB37B4-BF7C-F011-B482-6045BD024F72",
  "Throne Room Song": "FBE78D57-5CBA-F011-8E61-000D3A332884",
  "Trust In God": "C4149FA3-1A88-F011-B3CD-6045BD074FAA",
  "Victory In Jesus": "03B7D811-55BA-F011-8E61-000D3A332884",
  "We Believe": "F765CB42-F0BF-F011-8193-000D3A317EED",
  "We Fall Down": "A860FA44-56BA-F011-8E61-000D3A332884",
  "What A Faithful God": "A6B00B6E-5BBA-F011-8E61-000D3A332884",
  "What He’s Done": "251336A6-1888-F011-B3CD-6045BD074FAA",
  "What I See": "7FAEAB9D-1788-F011-B3CD-6045BD074FAA",
  "Who Else": "2798166F-DFB8-F011-8E61-000D3A332884",
  "Worthy": "C40AC4A1-1488-F011-B3CD-6045BD074FAA",
  "Yahweh We Love You": "95B97CE3-837F-F011-B482-6045BD024F72",
  "You Are Holy (Prince Of Peace)": "#",
  "You Are My King (Amazing Love)": "A24B3522-D293-F011-B3CE-000D3A3B66FA",
  "You’ve Already Won": "A1328F9F-1988-F011-B3CD-6045BD074FAA"
};

const listenLinks = Object.fromEntries(
  hymns.map((title) => {
    const videoId = listenVideoIds[title] || "#";
    return [
      title,
      videoId === "#"
        ? "#"
        : `https://songselect.ccli.com/lyric-videos/videos/${videoId}`
    ];
  })
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
