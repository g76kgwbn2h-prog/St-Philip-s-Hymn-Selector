// Ordered hymn data provided by the user. Titles are preserved exactly once.
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
  "Immortal Invisible",
  "I Need Thee Every Hour",
  "In The Garden",
  "I Stand Amazed",
  "I Surrender All",
  "It Is Well With My Soul",
  "I Will Sing The Wondrous Story",
  "Jerusalem (Forevermore)",
  "Jesus Keep Me Near The Cross",
  "Jesus We Love You",
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
  "O The Deep Deep Love Of Jesus",
  "O Thou Who Camest From Above",
  "O Worship The King",
  "O Worship The Lord In The Beauty Of Holiness",
  "Power In The Blood",
  "Praise God From Whom All Blessings Flow",
  "Praise My Soul The King Of Heaven",
  "O Praise Ye The Lord",
  "Rock Of Ages",
  "Softly And Tenderly",
  "Standing On The Promises",
  "Take My Life And Let It Be",
  "Tell Out My Soul",
  "The Church’s One Foundation",
  "The King Of Love",
  "The Lord’s My Shepherd",
  "The Old Rugged Cross",
  "There Is A Fountain",
  "There Is A Green Hill Far Away",
  "The Solid Rock",
  "Thine Be The Glory",
  "Thou Whose Almighty Word",
  "Thy Hand O God Has Guided",
  "’Tis So Sweet To Trust In Jesus",
  "To God Be The Glory",
  "When We Walk With The Lord (Trust And Obey)",
  "Turn Your Eyes Upon Jesus",
  "We Plough The Fields And Scatter",
  "We Rest On Thee",
  "Were You There",
  "What A Friend We Have In Jesus",
  "When I Survey The Wondrous Cross (Rockingham)",
  "When The Roll Is Called Up Yonder",
  "Will Your Anchor Hold"
];

// Use Hymnary search pages with canonical hymn titles, without hosting lyrics locally.
const lyricSearchTitles = {
  "Abide With Me": "Abide With Me (Eventide)",
  "Alas And Did My Saviour Bleed": "Alas And Did My Saviour Bleed (Hudson)",
  "All Creatures Of Our God And King": "All Creatures Of Our God And King (Lasst Uns Erfreuen)",
  "All Glory Laud And Honour": "All Glory Laud And Honour (Saint Theodulph)",
  "All Hail The Power Of Jesus Name": "All Hail The Power Of Jesus' Name (Coronation)",
  "All People That On Earth Do Dwell": "All People That On Earth Do Dwell (Old 100th)",
  "All The Way My Saviour Leads Me": "All The Way My Savior Leads Me (All The Way)",
  "And Can It Be": "And Can It Be (Sagina)",
  "Are You Washed In The Blood": "Are You Washed In The Blood (Washed In The Blood)",
  "Breathe On Me Breath Of God": "Breathe On Me Breath Of God (Trentham)",
  "Christ The Lord Is Risen Today": "Christ The Lord Is Risen Today (Easter Hymn)",
  "Come Thou Fount Of Every Blessing": "Come Thou Fount Of Every Blessing (Nettleton)",
  "Come Ye Thankful People Come": "Come Ye Thankful People Come (St. George's Windsor)",
  "Crown Him With Many Crowns": "Crown Him With Many Crowns (Diademata)",
  "Dear Lord And Father Of Mankind": "Dear Lord And Father Of Mankind (Repton)",
  "Eternal Father Strong To Save": "Eternal Father Strong To Save (Melita)",
  "Glorious Things Of Thee Are Spoken": "Glorious Things Of Thee Are Spoken (Austria)",
  "Guide Me O Thou Great Jehovah": "Guide Me O Thou Great Jehovah (Cwm Rhondda)",
  "Hallelujah What A Saviour": "Hallelujah What A Savior (Gethsemane)",
  "Here Is Love": "Here Is Love (Dim Ond Iesu)",
  "Holy Holy Holy": "Holy Holy Holy (Nicaea)",
  "How Firm A Foundation": "How Firm A Foundation (Foundation)",
  "How Sweet The Name Of Jesus Sounds": "How Sweet The Name Of Jesus Sounds (Saint Peter)",
  "Immortal Invisible": "Immortal Invisible God Only Wise (St. Denio)",
  "I Need Thee Every Hour": "I Need Thee Every Hour (I Need Thee)",
  "I Stand Amazed": "I Stand Amazed (My Saviour's Love)",
  "I Will Sing The Wondrous Story": "I Will Sing The Wondrous Story (Hyfrydol)",
  "Jerusalem (Forevermore)": "Jerusalem (Forevermore) (Jerusalem)",
  "Jesus Keep Me Near The Cross": "Jesus Keep Me Near The Cross (Near The Cross)",
  "Jesus Paid It All": "Jesus Paid It All (Christ I Owe)",
  "Jesus The Name High Over All": "Jesus The Name High Over All (Lydia)",
  "Just As I Am": "Just As I Am (Woodworth)",
  "King Of My Life I Crown Thee Now": "King Of My Life I Crown Thee Now (Duncannon)",
  "Love Divine": "Love Divine (Blaenwern)",
  "Low In The Grave He Lay": "Low In The Grave He Lay (Christ Arose)",
  "Nothing But The Blood": "Nothing But The Blood (Plainfield)",
  "Now Thank We All Our God": "Now Thank We All Our God (Nun Danket)",
  "O For A Thousand Tongues To Sing": "O For A Thousand Tongues To Sing (Lyngham)",
  "O God Our Help In Ages Past": "O God Our Help In Ages Past (St. Anne)",
  "O Jesus I Have Promised": "O Jesus I Have Promised (Day Of Rest)",
  "O Love That Will Not Let Me Go": "O Love That Wilt Not Let Me Go (St Margaret)",
  "O The Deep Deep Love Of Jesus": "O The Deep Deep Love Of Jesus (Ebenezer)",
  "O Thou Who Camest From Above": "O Thou Who Camest From Above (Hereford)",
  "O Worship The Lord In The Beauty Of Holiness": "O Worship The Lord In The Beauty Of Holiness (Was Lebet Was Schwebet)",
  "Power In The Blood": "There Is Power In The Blood (Power In The Blood)",
  "Praise My Soul The King Of Heaven": "Praise My Soul The King Of Heaven (Praise My Soul)",
  "Rock Of Ages": "Rock Of Ages (Toplady)",
  "Standing On The Promises": "Standing On The Promises (Promises)",
  "Take My Life And Let It Be": "Take My Life And Let It Be (Nottingham)",
  "The Church’s One Foundation": "The Church's One Foundation (Aurelia)",
  "The King Of Love": "The King Of Love (Dominus Regit Me)",
  "The Lord’s My Shepherd": "The Lord's My Shepherd (Crimond)",
  "There Is A Green Hill Far Away": "There Is A Green Hill Far Away (Horsley)",
  "Thine Be The Glory": "Thine Be The Glory (Maccabaeus)",
  "’Tis So Sweet To Trust In Jesus": "'Tis So Sweet To Trust In Jesus (Trust In Jesus)",
  "We Plough The Fields And Scatter": "We Plough The Fields And Scatter (Wir Pflügen)",
  "We Rest On Thee": "We Rest On Thee Our Shield And Our Defender",
  "What A Friend We Have In Jesus": "What A Friend We Have In Jesus (Converse)"
};

const lyricLinks = Object.fromEntries(
  hymns.map((title) => [
    title,
    `https://hymnary.org/search?qu=${encodeURIComponent(lyricSearchTitles[title] || title)}`
  ])
);

// Verified SongSelect lyric-video targets. Songs without a current catalog match stay on "#".
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
  "Immortal Invisible": "2591166F-DFB8-F011-8E61-000D3A332884",
  "I Need Thee Every Hour": "DF90166F-DFB8-F011-8E61-000D3A332884",
  "In The Garden": "D590166F-DFB8-F011-8E61-000D3A332884",
  "I Stand Amazed": "D69A2DC1-9577-F011-8DC9-000D3A5A1CFF",
  "I Surrender All": "496379E7-DC72-F011-8DC9-000D3A36C11B",
  "It Is Well With My Soul": "A131E6FD-9577-F011-8DC9-000D3A5A1CFF",
  "I Will Sing The Wondrous Story": "7B0FB508-799B-F011-B3CE-000D3A3B66FA",
  "Jerusalem (Forevermore)": "1E40CFFC-5DBA-F011-8E61-000D3A332884",
  "Jesus Keep Me Near The Cross": "CAD749FA-7A92-F011-B3CE-000D3A3B66FA",
  "Jesus We Love You": "CC28C3A0-809B-F011-B3CE-000D3A3B66FA",
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
  "O The Deep Deep Love Of Jesus": "2991166F-DFB8-F011-8E61-000D3A332884",
  "O Thou Who Camest From Above": "9191166F-DFB8-F011-8E61-000D3A332884",
  "O Worship The King": "F40A36CD-7A9B-F011-B3CE-000D3A3B66FA",
  "O Worship The Lord In The Beauty Of Holiness": "0792166F-DFB8-F011-8E61-000D3A332884",
  "Power In The Blood": "12A96ECD-DB72-F011-8DC9-000D3A36C11B",
  "Praise God From Whom All Blessings Flow": "1A1EC6FF-6CA5-F011-8E60-6045BD05660B",
  "Praise My Soul The King Of Heaven": "8D91166F-DFB8-F011-8E61-000D3A332884",
  "O Praise Ye The Lord": "7575BDC6-799B-F011-B3CE-000D3A3B66FA",
  "Rock Of Ages": "9F90166F-DFB8-F011-8E61-000D3A332884",
  "Softly And Tenderly": "930FB033-837C-F011-B482-6045BD024F72",
  "Standing On The Promises": "6590166F-DFB8-F011-8E61-000D3A332884",
  "Take My Life And Let It Be": "E3EB4B7A-57BA-F011-8E61-000D3A332884",
  "Tell Out My Soul": "CD23D236-56BA-F011-8E61-000D3A332884",
  "The Church’s One Foundation": "06F8DF86-7C92-F011-B3CE-000D3A3B66FA",
  "The King Of Love": "25867F57-7B92-F011-B3CE-000D3A3B66FA",
  "The Lord’s My Shepherd": "6FE7432C-9577-F011-8DC9-000D3A5A1CFF",
  "The Old Rugged Cross": "888B4F20-DB72-F011-8DC9-000D3A36C11B",
  "There Is A Fountain": "6C21E34A-9677-F011-8DC9-000D3A5A1CFF",
  "There Is A Green Hill Far Away": "8391166F-DFB8-F011-8E61-000D3A332884",
  "The Solid Rock": "FAEC012F-9677-F011-8DC9-000D3A5A1CFF",
  "Thine Be The Glory": "ABB845F7-DB72-F011-8DC9-000D3A36C11B",
  "Thou Whose Almighty Word": "AB92166F-DFB8-F011-8E61-000D3A332884",
  "Thy Hand O God Has Guided": "8061873C-B7DA-F011-8D4C-000D3A3158D4",
  "’Tis So Sweet To Trust In Jesus": "0AA828B5-DC72-F011-8DC9-000D3A36C11B",
  "To God Be The Glory": "111AFE1E-9577-F011-8DC9-000D3A5A1CFF",
  "When We Walk With The Lord (Trust And Obey)": "04683226-DC72-F011-8DC9-000D3A36C11B",
  "Turn Your Eyes Upon Jesus": "932AE7DB-DA72-F011-8DC9-000D3A36C11B",
  "We Plough The Fields And Scatter": "50E7410B-638E-F011-B3CE-000D3A3B66FA",
  "We Rest On Thee": "AEB8F8DD-799B-F011-B3CE-000D3A3B66FA",
  "Were You There": "E6E60A76-DE72-F011-8DC9-000D3A36C11B",
  "What A Friend We Have In Jesus": "A065955F-9677-F011-8DC9-000D3A5A1CFF",
  "When I Survey The Wondrous Cross (Rockingham)": "7D91166F-DFB8-F011-8E61-000D3A332884",
  "When The Roll Is Called Up Yonder": "96E8DEE4-847C-F011-B482-6045BD024F72",
  "Will Your Anchor Hold": "C590166F-DFB8-F011-8E61-000D3A332884"
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
