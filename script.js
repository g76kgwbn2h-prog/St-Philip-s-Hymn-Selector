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

const listenVideoIds = {
  "Abide With Me": "54160C92-7B92-F011-B3CE-000D3A3B66FA",
  "Alas And Did My Saviour Bleed": "23CCEF4F-DE72-F011-8DC9-000D3A36C11B",
  "All Creatures Of Our God And King": "6066BC35-789B-F011-B3CE-000D3A3B66FA",
  "All Glory Laud And Honour": "56829795-9677-F011-8DC9-000D3A5A1CFF",
  "All Hail The Power Of Jesus Name": "C3BF061B-9677-F011-8DC9-000D3A5A1CFF",
  "All My Hope On God Is Founded": "8192166F-DFB8-F011-8E61-000D3A332884",
  "All People That On Earth Do Dwell": "EB90166F-DFB8-F011-8E61-000D3A332884",
  "All The Way My Saviour Leads Me": "F190166F-DFB8-F011-8E61-000D3A332884",
  "All Things Bright And Beautiful": "F191166F-DFB8-F011-8E61-000D3A332884",
  "Amazing Grace": "BB92166F-DFB8-F011-8E61-000D3A332884",
  "And Can It Be": "DC61873C-B7DA-F011-8D4C-000D3A3158D4",
  "Are You Washed In The Blood": "210DE767-DB72-F011-8DC9-000D3A36C11B",
  "Be Still And Know That I Am God": "7EBFC11A-7A9B-F011-B3CE-000D3A3B66FA",
  "Blessed Assurance": "E20B2F51-DC72-F011-8DC9-000D3A36C11B",
  "Breathe On Me Breath Of God": "CB0417E9-8A92-F011-B3CE-000D3A3B66FA",
  "Christ The Lord Is Risen Today": "668C41FF-827C-F011-B482-6045BD024F72",
  "Come Let Us Sing Of A Wonderful Love": "A1F48544-799B-F011-B3CE-000D3A3B66FA",
  "Come Thou Fount Of Every Blessing": "0991166F-DFB8-F011-8E61-000D3A332884",
  "Come Ye Thankful People Come": "DA29F914-648E-F011-B3CE-000D3A3B66FA",
  "Count Your Blessings": "4D4DDBF5-898D-F011-B3CE-000D3A3B66FA",
  "Crown Him With Many Crowns": "DE4F8B56-9577-F011-8DC9-000D3A5A1CFF",
  "Dear Lord And Father Of Mankind": "03EA809C-7B9B-F011-B3CE-000D3A3B66FA",
  "Eternal Father Strong To Save": "928F9B33-CA93-F011-B3CE-000D3A3B66FA",
  "Father Hear The Prayer We Offer": "8992166F-DFB8-F011-8E61-000D3A332884",
  "For All The Saints": "8D92166F-DFB8-F011-8E61-000D3A332884",
  "Give Me Oil In My Lamp": "B593166F-DFB8-F011-8E61-000D3A332884",
  "Glorious Things Of Thee Are Spoken": "F990166F-DFB8-F011-8E61-000D3A332884",
  "Grace Greater Than Our Sin": "94556B97-7A92-F011-B3CE-000D3A3B66FA",
  "Great Is Thy Faithfulness": "2C727DF4-9477-F011-8DC9-000D3A5A1CFF",
  "Guide Me O Thou Great Jehovah": "87E57D88-DA72-F011-8DC9-000D3A36C11B",
  "Hallelujah What A Saviour": "1B6348B1-9677-F011-8DC9-000D3A5A1CFF",
  "He Leadeth Me": "3BD1C355-7A9B-F011-B3CE-000D3A3B66FA",
  "Here Is Love": "5C7A2288-93A3-F011-8E61-000D3A347EC9",
  "Holy Holy Holy": "0078F7BF-D972-F011-8DC9-000D3A36C11B",
  "How Firm A Foundation": "0391166F-DFB8-F011-8E61-000D3A332884",
  "How Sweet The Name Of Jesus Sounds": "AB90166F-DFB8-F011-8E61-000D3A332884",
  "I Know Whom I Have Believed": "5B90166F-DFB8-F011-8E61-000D3A332884",
  "I Need Thee Every Hour": "DF90166F-DFB8-F011-8E61-000D3A332884",
  "I Stand Amazed": "D69A2DC1-9577-F011-8DC9-000D3A5A1CFF",
  "I Surrender All": "496379E7-DC72-F011-8DC9-000D3A36C11B",
  "I Will Sing The Wondrous Story": "7B0FB508-799B-F011-B3CE-000D3A3B66FA",
  "Immortal Invisible": "2591166F-DFB8-F011-8E61-000D3A332884",
  "In The Garden": "D590166F-DFB8-F011-8E61-000D3A332884",
  "It Is Well With My Soul": "A131E6FD-9577-F011-8DC9-000D3A5A1CFF",
  "Jerusalem (Forevermore)": "1E40CFFC-5DBA-F011-8E61-000D3A332884",
  "Jesus Keep Me Near The Cross": "CAD749FA-7A92-F011-B3CE-000D3A3B66FA",
  "Jesus Paid It All": "32CD1A7F-DC72-F011-8DC9-000D3A36C11B",
  "Jesus The Name High Over All": "8F90166F-DFB8-F011-8E61-000D3A332884",
  "Just As I Am": "C70DC411-9577-F011-8DC9-000D3A5A1CFF",
  "King Of My Life I Crown Thee Now": "1CB5B2B8-DE72-F011-8DC9-000D3A36C11B",
  "Leaning On The Everlasting Arms": "6190166F-DFB8-F011-8E61-000D3A332884",
  "Lord For The Years": "E1A4E196-58BA-F011-8E61-000D3A332884",
  "Love Divine": "ED91166F-DFB8-F011-8E61-000D3A332884",
  "Love Lifted Me": "D790166F-DFB8-F011-8E61-000D3A332884",
  "Low In The Grave He Lay": "5817B729-827C-F011-B482-6045BD024F72",
  "My Jesus I Love Thee": "AF32EA4C-827C-F011-B482-6045BD024F72",
  "My Song Is Love Unknown": "A5D5122C-799B-F011-B3CE-000D3A3B66FA",
  "Nothing But The Blood": "DDF426A0-DB72-F011-8DC9-000D3A36C11B",
  "Now Thank We All Our God": "F590166F-DFB8-F011-8E61-000D3A332884",
  "O Breath Of Life": "79194978-799B-F011-B3CE-000D3A3B66FA",
  "O For A Thousand Tongues To Sing": "9F91166F-DFB8-F011-8E61-000D3A332884",
  "O God Our Help In Ages Past": "B990166F-DFB8-F011-8E61-000D3A332884",
  "O Jesus I Have Promised": "A61D8C54-789B-F011-B3CE-000D3A3B66FA",
  "O Love That Will Not Let Me Go": "477F0D40-7B92-F011-B3CE-000D3A3B66FA",
  "O Praise Ye The Lord": "7575BDC6-799B-F011-B3CE-000D3A3B66FA",
  "O The Deep Deep Love Of Jesus": "2991166F-DFB8-F011-8E61-000D3A332884",
  "O Thou Who Camest From Above": "9191166F-DFB8-F011-8E61-000D3A332884",
  "O Worship The King": "F40A36CD-7A9B-F011-B3CE-000D3A3B66FA",
  "O Worship The Lord In The Beauty Of Holiness": "0792166F-DFB8-F011-8E61-000D3A332884",
  "Power In The Blood": "12A96ECD-DB72-F011-8DC9-000D3A36C11B",
  "Praise God From Whom All Blessings Flow": "1A1EC6FF-6CA5-F011-8E60-6045BD05660B",
  "Praise My Soul The King Of Heaven": "8D91166F-DFB8-F011-8E61-000D3A332884",
  "Rock Of Ages": "9F90166F-DFB8-F011-8E61-000D3A332884",
  "Softly And Tenderly": "930FB033-837C-F011-B482-6045BD024F72",
  "Standing On The Promises": "6590166F-DFB8-F011-8E61-000D3A332884",
  "Take My Life And Let It Be": "E3EB4B7A-57BA-F011-8E61-000D3A332884",
  "Tell Out My Soul": "CD23D236-56BA-F011-8E61-000D3A332884",
  "The Church's One Foundation": "06F8DF86-7C92-F011-B3CE-000D3A3B66FA",
  "The King Of Love": "25867F57-7B92-F011-B3CE-000D3A3B66FA",
  "The Lord's My Shepherd": "6FE7432C-9577-F011-8DC9-000D3A5A1CFF",
  "The Old Rugged Cross": "888B4F20-DB72-F011-8DC9-000D3A36C11B",
  "The Solid Rock": "FAEC012F-9677-F011-8DC9-000D3A5A1CFF",
  "There Is A Fountain": "6C21E34A-9677-F011-8DC9-000D3A5A1CFF",
  "There Is A Green Hill Far Away": "8391166F-DFB8-F011-8E61-000D3A332884",
  "Thine Be The Glory": "ABB845F7-DB72-F011-8DC9-000D3A36C11B",
  "Thou Whose Almighty Word": "AB92166F-DFB8-F011-8E61-000D3A332884",
  "Thy Hand O God Has Guided": "8061873C-B7DA-F011-8D4C-000D3A3158D4",
  "Tis So Sweet To Trust In Jesus": "0AA828B5-DC72-F011-8DC9-000D3A36C11B",
  "To God Be The Glory": "111AFE1E-9577-F011-8DC9-000D3A5A1CFF",
  "Turn Your Eyes Upon Jesus": "932AE7DB-DA72-F011-8DC9-000D3A36C11B",
  "We Plough The Fields And Scatter": "50E7410B-638E-F011-B3CE-000D3A3B66FA",
  "We Rest On Thee": "AEB8F8DD-799B-F011-B3CE-000D3A3B66FA",
  "Were You There": "E6E60A76-DE72-F011-8DC9-000D3A36C11B",
  "What A Friend We Have In Jesus": "A065955F-9677-F011-8DC9-000D3A5A1CFF",
  "When I Survey The Wondrous Cross (Rockingham)": "7D91166F-DFB8-F011-8E61-000D3A332884",
  "When The Roll Is Called Up Yonder": "96E8DEE4-847C-F011-B482-6045BD024F72",
  "When We Walk With The Lord (Trust And Obey)": "04683226-DC72-F011-8DC9-000D3A36C11B",
  "Will Your Anchor Hold": "C590166F-DFB8-F011-8E61-000D3A332884"
};

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
  hymns.forEach((title) => { state[title] = { selected: selectedHymns.has(title) }; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function listenUrlFor(title) {
  const videoId = listenVideoIds[title];
  if (!videoId) {
    return `https://songselect.ccli.com/search/results?SearchText=${encodeURIComponent(title)}`;
  }
  return `https://songselect.ccli.com/lyric-videos/videos/${videoId}`;
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
  const visibleHymns = hymns.filter((title) => title.toLowerCase().includes(searchTerm) && (!selectedOnly || selectedHymns.has(title)));
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
      if (checkbox.checked) selectedHymns.add(title); else selectedHymns.delete(title);
      saveSelectedHymns();
      if (selectedOnlyInput.checked) renderList(); else refreshCounters(visibleHymns.length);
    });
    const titleWrap = document.createElement("div");
    const heading = document.createElement("h2");
    heading.textContent = title;
    titleWrap.append(heading);
    const actions = document.createElement("div");
    actions.className = "hymn-card__actions";
    actions.append(
      createLink("View Lyrics", `https://hymnary.org/search?qu=${encodeURIComponent(title)}`),
      createLink("Listen", listenUrlFor(title), true)
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
