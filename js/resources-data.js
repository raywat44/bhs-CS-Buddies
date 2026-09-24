// ============================================================
//  Byte Buddies — Resource Data
//  To add a new resource, copy one object and fill it in!
//  See README.md for full instructions.
// ============================================================

const RESOURCES = [
  {
    id: "001",
    name: "Mr. Watson",
    fun_facts: "Quick sort — but instead of numbers, we're sorting people. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "image",
    url: "https://file.forms.app/sitefile/38.jpeg",
    nick_name: "Big Watt",
    major: "Computer Science MS",
    college: "Georgia Tech",
    tags: ["Algorithms", "Sorting", "Visual"],
    sibling: "oldest",
    grade_level: "Teacher",
    birth_date: "02-17"
  },
  {
    id: "002",
    name: "Mr. Garcia",
    fun_facts: "Quick sort — but instead of numbers, we're sorting people. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=BD8QLnsp5mo",
    nick_name: "Big G",
    major: "Computer Science",
    college: "UT Rio Grande Valley",
    tags: ["Algorithms", "Sorting", "Visual"],
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
  "Watson": "#98D8C8",
  "Veenstra": "#F7DC6F",
  "Garcia":    "#FF8C94",
  "Staffel":     "#A8D8EA",
  "Le":         "#FF6B6B",
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
  "only-child": "🎓",
  "youngest": "🛠️",
  "middle": "✨",
  "oldest": ""
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
