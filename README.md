# 🤖 Byte Buddies

**Free computer science resources for elementary and middle school kids — made by high schoolers like you.**

---

## What is Byte Buddies?

Byte Buddies is a website where high school students share videos, guides, and activities to help younger kids (grades K–8) learn about computer science. It's free, it's open source, and it's built by students for students.


### Step 1: Clone the repo

Click the **Clone** button at the top right of this page. This makes your own copy of Byte Buddies that you can edit.

### Step 2: Open the data file

In your cloned copy, find this file:

```
js/resources-data.js
```

This is where all the resources live. Open it.

### Step 3: Add your resource

Find the `RESOURCES` array near the top. Copy one of the existing resource objects, paste it at the bottom of the list (before the closing `]`), and fill in your info.

Here's what each field means:

| Field | What to put | Example |
|-------|-------------|---------|
| `id` | A unique 3-digit number (check what the last one is and add 1) | `"009"` |
| `title` | A short, catchy title | `"Binary Numbers for Beginners"` |
| `fun_facts` | 2–4 sentences about what the resource is and why it's cool | `"Learn what binary..."` |
| `resource_type` | One of: `"video"`, `"pdf"`, `"doc"`, `"link"` | `"video"` |
| `url` | The link to your resource, or the path to your uploaded file | `"https://youtube.com/..."` |
| `nick_name` | Your first name and last initial (or full name if you want!) | `"Maya C."` |
| `major` | Your potential college | `"Computer Science"` |
| `college` | Your potential major | `"Georgia Tech"` |
| `tags` | A list of topics your resource covers | `["Python", "Loops"]` |
| `sibling` | One of: `"only-child"`, `"youngest"`, `"middle"`, `"oldest"` | `"youngest"` |
| `grade_level` | Either `"K-5"` or `"6-8"` | `"6-8"` |
| `birth_date` | Today's date in YYYY-MM-DD format | `"2025-03-01"` |

**A complete example:**

```js
{
  id: "009",
  title: "Binary Numbers for Beginners",
  fun_facts: "Did you know computers only understand 0s and 1s? In this video I break down how binary numbers work using a fun card trick. By the end you'll be able to read binary! No experience needed.",
  resource_type: "video",
  url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  nick_name: "The Wats",
  major: "Computer Science",
  college: "Georgia Tech",
  tags: ["Binary", "How It Works", "Beginner"],
  sibling: "youngest",
  grade_level: "K-5",
  date_added: "2025-03-01"
},
```

> ⚠️ **Don't forget the comma** at the end of the `}` — it separates your resource from the next one in the list!

---

## Allowed tags

You can use any tags that make sense! 

---

## Project structure

Here's what's inside this repo:

```
byte-buddies/
├── index.html          ← The home page with search and resource cards
├── resource.html       ← The detail page for a single resource
├── css/
│   └── style.css       ← All the styles
├── js/
│   ├── resources-data.js  ← ⭐ THIS IS WHERE YOU ADD YOUR RESOURCE
│   └── app.js             ← Search and filter logic
└── resources/          ← Upload PDFs and docs here
    └── (your files)
```

---

*Byte Buddies is maintained by students and powered by GitHub Pages. All resources are reviewed before going live.*
