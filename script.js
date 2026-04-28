// Ordered hymn data provided by the user. Titles are preserved exactly once.
const hymns = [
  "A Mighty Fortress Is Our God (Ein Feste Burg)",
  "Abide With Me (Eventide)",
  "Alas And Did My Saviour Bleed (Hudson)",
  "All Creatures Of Our God And King (Lasst Uns Erfreuen)",
  "All Glory Laud And Honour (Saint Theodulph)",
  "All Hail The Power Of Jesus’ Name (Coronation)",
  "All My Hope On God Is Founded",
  "All People That On Earth Do Dwell (Old 100th)",
  "All The Way My Saviour Leads Me (All The Way)",
  "All Things Bright And Beautiful",
  "Amazing Grace",
  "And Can It Be (Sagina)",
  "Are You Washed In The Blood (Washed In The Blood)",
  "At The Name Of Jesus",
  "Be Still And Know That I Am God",
  "Be Thou My Vision (Slane)",
  "Before The Throne Of God Above",
  "Blessed Assurance",
  "Breathe On Me Breath Of God (Trentham)",
  "Christ The Lord Is Risen Today (Easter Hymn)",
  "Come Let Us Sing Of A Wonderful Love",
  "Come Thou Fount Of Every Blessing (Nettleton)",
  "Come Ye Thankful People Come (St. George’s Windsor)",
  "Count Your Blessings",
  "Crown Him With Many Crowns (Diademata)",
  "Dear Lord And Father Of Mankind (Repton)",
  "Eternal Father Strong To Save (Melita)",
  "Fairest Lord Jesus (Crusader’s Hymn)",
  "Father Hear The Prayer We Offer",
  "Fight The Good Fight",
  "For All The Saints",
  "Give Me Oil In My Lamp",
  "Glorious Things Of Thee Are Spoken (Austria)",
  "Grace Greater Than Our Sin",
  "Great Is Thy Faithfulness",
  "Guide Me O Thou Great Jehovah (Cwm Rhondda)",
  "Hail To The Lord’s Anointed (Crüger)",
  "Hallelujah What A Saviour (Gethsemane)",
  "Have Thine Own Way",
  "He Leadeth Me",
  "Here Is Love (Dim Ond Iesu)",
  "Holy Holy Holy (Nicaea)",
  "How Firm A Foundation (Foundation)",
  "How Sweet The Name Of Jesus Sounds (Saint Peter)",
  "I Cannot Tell (Londonderry Air)",
  "I Heard The Voice Of Jesus Say (Vox Dilecti)",
  "I Know Whom I Have Believed",
  "I Love To Tell The Story (Eaton Square)",
  "I Need Thee Every Hour (I Need Thee)",
  "I Saw The Light",
  "I Stand Amazed (My Saviour’s Love)",
  "I Surrender All",
  "I Will Sing The Wondrous Story (Hyfrydol)",
  "I’ll Fly Away",
  "Immortal Invisible God Only Wise (St. Denio)",
  "In The Garden",
  "It Is Well With My Soul",
  "Jerusalem (Forevermore) (Jerusalem)",
  "Jesus Keep Me Near The Cross (Near The Cross)",
  "Jesus Loves Me (This I Know)",
  "Jesus Paid It All (Christ I Owe)",
  "Jesus The Name High Over All (Lydia)",
  "Just As I Am (Woodworth)",
  "King Of My Life I Crown Thee Now (Duncannon)",
  "Leaning On The Everlasting Arms",
  "Let All The World",
  "Lord For The Years",
  "Love Divine (Blaenwern)",
  "Love Lifted Me",
  "Low In The Grave He Lay (Christ Arose)",
  "Mine Eyes Have Seen The Glory (Battle Hymn)",
  "My Jesus I Love Thee",
  "My Song Is Love Unknown",
  "Nothing But The Blood (Plainfield)",
  "Now Thank We All Our God (Nun Danket)",
  "O Breath Of Life",
  "O For A Thousand Tongues To Sing (Lyngham)",
  "O God Our Help In Ages Past (St. Anne)",
  "O Jesus I Have Promised (Day Of Rest)",
  "O Love That Wilt Not Let Me Go (St Margaret)",
  "O Praise Ye The Lord",
  "O The Deep Deep Love Of Jesus (Ebenezer)",
  "O Thou Who Camest From Above (Hereford)",
  "O Worship The King",
  "O Worship The Lord In The Beauty Of Holiness (Was Lebet Was Schwebet)",
  "Praise God From Whom All Blessings Flow",
  "Praise My Soul The King Of Heaven (Praise My Soul)",
  "Praise To The Holiest In The Height (Gerontius)",
  "Praise To The Lord The Almighty (Lobe den Herren)",
  "Ride On Ride On In Majesty",
  "Rock Of Ages (Toplady)",
  "Sing The Wondrous Love Of Jesus",
  "Softly And Tenderly",
  "Standing On The Promises (Promises)",
  "Sweet Hour Of Prayer (Hour Of Prayer)",
  "Take My Life And Let It Be (Nottingham)",
  "Tell Out My Soul",
  "The Church’s One Foundation (Aurelia)",
  "The God Of Abraham Praise (Leoni)",
  "The King Of Love (Dominus Regit Me)",
  "The Lord’s My Shepherd (Crimond)",
  "The Old Rugged Cross",
  "The Servant Song",
  "The Solid Rock",
  "There Is A Fountain",
  "There Is A Green Hill Far Away (Horsley)",
  "There Is Power In The Blood (Power In The Blood)",
  "Thine Be The Glory (Maccabaeus)",
  "Thou Whose Almighty Word",
  "Thy Hand O God Has Guided",
  "’Tis So Sweet To Trust In Jesus (Trust In Jesus)",
  "To God Be The Glory",
  "Turn Your Eyes Upon Jesus",
  "We Plough The Fields And Scatter (Wir Pflügen)",
  "We Rest On Thee Our Shield And Our Defender",
  "Were You There",
  "What A Friend We Have In Jesus (Converse)",
  "When I Survey The Wondrous Cross",
  "When The Roll Is Called Up Yonder",
  "When We Walk With The Lord (Trust And Obey)",
  "Will Your Anchor Hold"
];

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

if (TOTAL_HYMNS !== 123) {
  console.warn(`Expected 123 hymns, found ${TOTAL_HYMNS}.`);
}

function createDefaultEntry() {
  return {
    selected: false,
    notes: "",
    tags: ""
  };
}

function loadState() {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    return hymns.reduce((accumulator, title) => {
      const entry = savedState[title] || {};
      accumulator[title] = {
        selected: Boolean(entry.selected),
        notes: typeof entry.notes === "string" ? entry.notes : "",
        tags: typeof entry.tags === "string" ? entry.tags : ""
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
            <a
              class="lyrics-link"
              href="https://example.com/lyrics"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Lyrics
            </a>
          </div>
          <div class="hymn-card__fields">
            <div class="field">
              <label for="notes-${index}">Notes</label>
              <input
                id="notes-${index}"
                type="text"
                placeholder="Optional notes"
                data-role="notes"
                data-title="${safeTitle}"
                value="${escapeHtml(state.notes)}"
              />
            </div>
            <div class="field">
              <label for="tags-${index}">Tags</label>
              <input
                id="tags-${index}"
                type="text"
                placeholder="Optional tags"
                data-role="tags"
                data-title="${safeTitle}"
                value="${escapeHtml(state.tags)}"
              />
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = visibleHymns.length !== 0;
  showingCount.textContent = `Showing ${visibleHymns.length} of ${TOTAL_HYMNS} hymns`;
  selectedCount.textContent = `Selected ${countSelectedHymns()} hymns`;
}

function countSelectedHymns() {
  return hymns.filter((title) => hymnState[title].selected).length;
}

function updateEntry(title, field, value) {
  hymnState[title] = hymnState[title] || createDefaultEntry();
  hymnState[title][field] = value;
  saveState();
  renderList();
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

// Event delegation keeps the input wiring simple even as the list re-renders.
hymnList.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const title = target.dataset.title;
  const role = target.dataset.role;

  if (!title || !role) {
    return;
  }

  if (role === "notes" || role === "tags") {
    updateEntry(title, role, target.value);
  }
});

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
});

renderList();
