// ============================================================
//  Byte Buddies — Resource Data
//  To add a new resource, copy one object and fill it in!
//  See README.md for full instructions.
// ============================================================

const RESOURCES = [
  {
    id: "001",
    name: "Mr. Watson",
    fun_facts: "Plays the Viola, owns 2 'Violins', enjoys Karaoke, bought a new car recently, does part-time for a UT program.",
    resource_type: "image",
    url: "https://file.forms.app/sitefile/38.jpeg",
    nick_name: "Big Watt",
    major: "Computer Science MS",
    college: "Georgia Tech",
    tags: ["Python Wizard", "Java Junkie", "Stressed"],
    sibling: "oldest",
    grade_level: "Teacher",
    birth_date: "02-17"
  },
  {
    id: "002",
    name: "Mr. Garcia",
    fun_facts: "Ran multiple marathons, has flown a plane, went to Europe over the summer.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=BD8QLnsp5mo",
    nick_name: "Big G",
    major: "C.S. BS and Ed. Tech MS",
    college: "UT RGV",
    tags: ["Python Wizard", "Java Junkie", "Stressed"],
    sibling: "oldest",
    grade_level: "Teacher",
    birth_date: "08-23"
  }
];

// Tag color mapping for visual variety
const TAG_COLORS = {
  "Scratcher":      "#FF6B6B",
  "Python Wizard":  "#4ECDC4",
  "Java Junkie":    "#45B7D1",
  "C++ 4 U++":      "#96CEB4",
  "C# is Flat":     "#FFEAA7",
  "Stressed":       "#DDA0DD",
  "Had Watson": "#98D8C8",
  "Had Veenstra": "#F7DC6F",
  "Had Garcia":    "#FF8C94",
  "Had Staffel":     "#A8D8EA",
  "Had Le":         "#FF6B6B",
  "":      "#B8E0D2",
  "":    "#45B7D1",
  "":   "#FFD3B6",
  "": "#96CEB4",
  "":  "#FFAAA5",
  "": "#FFD3B6",
  "": "#D4A5A5",
  "":  "#FF8C94",
  "":  "#98D8C8",
  "":  "#A8D8EA"
};

function getTagColor(tag) {
  return TAG_COLORS[tag] || "#E0E0E0";
}

const SIBLING_ICONS = {
  "only-child": "👶",
  "youngest": "👼",
  "middle": "😶‍🌫️",
  "oldest": "🫠"
};

const SIBLING_LABELS = {
  "only-child": "Only-Child",
  "youngest": "Youngest Child",
  "middle": "Middle Child",
  "oldest": "Oldest Child"
};

const TYPE_ICONS = {
  "video": "▶️",
  "pdf": "📄",
  "doc": "📝",
  "link": "🔗"
};
