const hymns = [
  "Abide With Me",
  "Alas And Did My Saviour Bleed",
  "All Creatures Of Our God And King",
  "All Glory Laud And Honour",
  "All Hail The Power Of Jesus Name",
  "All My Hope On God Is Founded",
  "All People That On Earth Do Dwell",
  "All The Way My Saviour Leads Me",
  "All Things Bright And Beautiful",
  "Amazing Grace",
  "And Can It Be",
  "Are You Washed In The Blood",
  "Be Still And Know That I Am God",
  "Blessed Assurance",
  "Breathe On Me Breath Of God",
  "Christ The Lord Is Risen Today",
  "Come Let Us Sing Of A Wonderful Love",
  "Come Thou Fount Of Every Blessing",
  "Come Ye Thankful People Come",
  "Count Your Blessings",
  "Crown Him With Many Crowns",
  "Dear Lord And Father Of Mankind",
  "Eternal Father Strong To Save",
  "Father Hear The Prayer We Offer",
  "For All The Saints",
  "Give Me Oil In My Lamp",
  "Glorious Things Of Thee Are Spoken",
  "Grace Greater Than Our Sin",
  "Great Is Thy Faithfulness",
  "Guide Me O Thou Great Jehovah",
  "Hallelujah What A Saviour",
  "He Leadeth Me",
  "Here Is Love",
  "Holy Holy Holy",
  "How Firm A Foundation",
  "How Sweet The Name Of Jesus Sounds",
  "I Know Whom I Have Believed",
  "I Need Thee Every Hour",
  "I Stand Amazed",
  "I Surrender All",
  "I Will Sing The Wondrous Story",
  "Immortal Invisible",
  "In The Garden",
  "It Is Well With My Soul",
  "Jerusalem (Forevermore)",
  "Jesus Keep Me Near The Cross",
  "Jesus Loves Me (This I Know)",
  "Jesus Paid It All",
  "Jesus The Name High Over All",
  "Just As I Am",
  "King Of My Life I Crown Thee Now",
  "Leaning On The Everlasting Arms",
  "Lord For The Years",
  "Love Divine",
  "Love Lifted Me",
  "Low In The Grave He Lay",
  "My Jesus I Love Thee",
  "My Song Is Love Unknown",
  "Nothing But The Blood",
  "Now Thank We All Our God",
  "O Breath Of Life",
  "O For A Thousand Tongues To Sing",
  "O God Our Help In Ages Past",
  "O Jesus I Have Promised",
  "O Love That Will Not Let Me Go",
  "O Praise Ye The Lord",
  "O The Deep Deep Love Of Jesus",
  "O Thou Who Camest From Above",
  "O Worship The King",
  "O Worship The Lord In The Beauty Of Holiness",
  "Power In The Blood",
  "Praise God From Whom All Blessings Flow",
  "Praise My Soul The King Of Heaven",
  "Praise To The Lord The Almighty",
  "Rock Of Ages",
  "Softly And Tenderly",
  "Standing On The Promises",
  "Take My Life And Let It Be",
  "Tell Out My Soul",
  "The Church's One Foundation",
  "The King Of Love",
  "The Lord's My Shepherd",
  "The Old Rugged Cross",
  "The Solid Rock",
  "There Is A Fountain",
  "There Is A Green Hill Far Away",
  "Thine Be The Glory",
  "Thou Whose Almighty Word",
  "Thy Hand O God Has Guided",
  "Tis So Sweet To Trust In Jesus",
  "To God Be The Glory",
  "Turn Your Eyes Upon Jesus",
  "We Plough The Fields And Scatter",
  "We Rest On Thee",
  "Were You There",
  "What A Friend We Have In Jesus",
  "When I Survey The Wondrous Cross (Rockingham)",
  "When The Roll Is Called Up Yonder",
  "When We Walk With The Lord (Trust And Obey)",
  "Will Your Anchor Hold"
];

const STORAGE_KEY = "st-philips-hymn-selection";
const hymnList = document.querySelector("#hymnList");
const searchInput = document.querySelector("#searchInput");
const selectedOnlyInput = document.querySelector("#selectedOnly");
const showingCount = document.querySelector("#showingCount");
const selectedCount = document.querySelector("#selectedCount");
const copyButton = document.querySelector("#copyButton");
const emptyState = document.querySelector("#emptyState");

let selectedHymns = loadSelectedHymns();

function loadSelectedHymns() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return new Set(Object.keys(saved).filter((title) => saved[title]?.selected));
  } catch {
    return new Set();
  }
}

function saveSelectedHymns() {
  const state = {};
  hymns.forEach((title) => {
    state[title] = { selected: selectedHymns.has(title) };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createLink(text, href, secondary = false) {
  const link = document.createElement("a");
  link.className = secondary ? "hymn-action hymn-action--secondary" : "hymn-action";
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text;
  return link;
}

function renderList() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedOnly = selectedOnlyInput.checked;
  const visibleHymns = hymns.filter((title) => {
    return title.toLowerCase().includes(searchTerm) && (!selectedOnly || selectedHymns.has(title));
  });

  hymnList.replaceChildren();

  visibleHymns.forEach((title, index) => {
    const card = document.createElement("article");
    card.className = "hymn-card";

    const top = document.createElement("div");
    top.className = "hymn-card__top";

    const main = document.createElement("div");
    main.className = "hymn-card__main";

    const checkbox = document.createElement("input");
    checkbox.id = `selected-${index}`;
    checkbox.type = "checkbox";
    checkbox.checked = selectedHymns.has(title);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) selectedHymns.add(title);
      else selectedHymns.delete(title);
      saveSelectedHymns();
      if (selectedOnlyInput.checked) renderList();
      else refreshCounters(visibleHymns.length);
    });

    const titleWrap = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = title;
    titleWrap.append(heading);

    const actions = document.createElement("div");
    actions.className = "hymn-card__actions";
    const encodedTitle = encodeURIComponent(title);
    actions.append(
      createLink("View Lyrics", `https://hymnary.org/search?qu=${encodedTitle}`),
      createLink("Listen", `https://songselect.ccli.com/search/results?SearchText=${encodedTitle}`, true)
    );

    main.append(checkbox, titleWrap);
    top.append(main, actions);
    card.append(top);
    hymnList.append(card);
  });

  emptyState.hidden = visibleHymns.length > 0;
  refreshCounters(visibleHymns.length);
}

function refreshCounters(visibleCount) {
  showingCount.textContent = `Showing ${visibleCount} of ${hymns.length} hymns`;
  selectedCount.textContent = `Selected ${selectedHymns.size} hymns`;
}

async function copySelectedHymns() {
  const selectedTitles = hymns.filter((title) => selectedHymns.has(title));
  if (selectedTitles.length === 0) {
    copyButton.textContent = "No hymns selected";
    window.setTimeout(() => (copyButton.textContent = "Copy selected hymns"), 1600);
    return;
  }

  await navigator.clipboard.writeText(selectedTitles.join("\n"));
  copyButton.textContent = "Copied";
  window.setTimeout(() => (copyButton.textContent = "Copy selected hymns"), 1600);
}

searchInput.addEventListener("input", renderList);
selectedOnlyInput.addEventListener("change", renderList);
copyButton.addEventListener("click", copySelectedHymns);

renderList();
