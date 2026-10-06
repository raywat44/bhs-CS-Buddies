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
| `name` | Your name... | `"Mr. Watson"` |
| `fun_facts` | 2–4 fn facts about yourself | `"Learn what binary..."` |
| `resource_type` | One of: `"video"`, `"pdf"`, `"doc"`, `"link"` | `"video"` |
| `url` | The link to your resource, or the path to your uploaded file | `"https://youtube.com/..."` |
| `nick_name` | Your first name and last initial (or full name if you want!) | `"Maya C."` |
| `major` | Your potential major | `"Computer Science"` |
| `college` | Your potential college | `"Georgia Tech"` |
| `tags` | A list of tags that describe you or experience (you can add your own) | `["Python", "Loops"]` |
| `sibling` | One of: `"only-child"`, `"youngest"`, `"middle"`, `"oldest"` | `"youngest"` |
| `grade_level` | Junior or Senior | `"Senior"` |
| `birth_date` | Today's date in MM-DD format | `"03-01"` |

**A complete example:**

```js
{
  id: "102",
  name: "Mr. Garcia",
  fun_facts: "Ran multiple marathons, has flown a plane, went to Europe over the summer.",
  resource_type: "video",
  url: "https://www.youtube.com/watch?v=BD8QLnsp5mo",
  nick_name: "Big G",
  major: "Computer Science BS and Ed. Tech MS",
  college: "UT RGV",
  tags: ["Python Wizard", "Java Junkie", "Stressed"],
  sibling: "oldest",
  grade_level: "Teacher",
  birth_date: "08-23"
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
