// ============================================================
//  Byte Buddies — Resource Data
//  To add a new resource, copy one object and fill it in!
//  See README.md for full instructions.
// ============================================================

const RESOURCES = [
  {
    id: "001",
    name: "Mr. Watson",
    description: "Quick sort — but instead of numbers, we're sorting people. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "image",
    url: "https://file.forms.app/sitefile/38.jpeg",
    nick_name: "Big Watt",
    tags: ["Algorithms", "Sorting", "Visual"],
    format: "mini-lecture",
    grade_level: "Teacher",
    birth_date: "02-17"
  },
  {
    id: "002",
    name: "Mr. Garcia",
    description: "Quick sort — but instead of numbers, we're sorting people. This video makes a topic that sounds boring into something you'll actually remember.",
    resource_type: "video",
    url: "https://www.youtube.com/watch?v=BD8QLnsp5mo",
    nick_name: "Big G",
    tags: ["Algorithms", "Sorting", "Visual"],
    format: "mini-lecture",
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
  "": "#98D8C8",
  "": "#F7DC6F",
  "":    "#FF8C94",
  "":     "#A8D8EA",
  "":         "#FF6B6B",
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

const FORMAT_ICONS = {
  "mini-lecture": "🎓",
  "activity": "🛠️",
  "inspiration": "✨"
};

const FORMAT_LABELS = {
  "mini-lecture": "Mini-Lecture",
  "activity": "Activity",
  "inspiration": "Inspiration"
};

const TYPE_ICONS = {
  "video": "▶️",
  "pdf": "📄",
  "doc": "📝",
  "link": "🔗"
};
