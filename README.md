# 🤖 Byte Buddies

**Free computer science resources for elementary and middle school kids — made by high schoolers like you.**

---

## What is Byte Buddies?

Byte Buddies is a website where high school students share videos, guides, and activities to help younger kids (grades K–8) learn about computer science. It's free, it's open source, and it's built by students for students.

## How do I add a resource? (GitHub way)

If you're comfortable with code, you can add your resource directly to the project. Here's how — don't worry, it's easier than it sounds!

### Step 1: Fork the repo

Click the **Fork** button at the top right of this page. This makes your own copy of Byte Buddies that you can edit.

### Step 2: Open the data file

In your forked copy, find this file:

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
| `description` | 2–4 sentences about what the resource is and why it's cool | `"Learn what binary..."` |
| `resource_type` | One of: `"video"`, `"pdf"`, `"doc"`, `"link"` | `"video"` |
| `url` | The link to your resource, or the path to your uploaded file | `"https://youtube.com/..."` |
| `contributor_name` | Your first name and last initial (or full name if you want!) | `"Maya C."` |
| `tags` | A list of topics your resource covers | `["Python", "Loops"]` |
| `sibling` | One of: `"only-child"`, `"youngest"`, `"middle"`, `"oldest"` | `"youngest"` |
| `grade_level` | Either `"K-5"` or `"6-8"` | `"6-8"` |
| `date_added` | Today's date in YYYY-MM-DD format | `"2025-03-01"` |

**A complete example:**

```js
{
  id: "009",
  title: "Binary Numbers for Beginners",
  description: "Did you know computers only understand 0s and 1s? In this video I break down how binary numbers work using a fun card trick. By the end you'll be able to read binary! No experience needed.",
  resource_type: "video",
  url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  contributor_name: "Maya C.",
  tags: ["Binary", "How It Works", "Beginner"],
  sibling: "youngest",
  grade_level: "K-5",
  date_added: "2025-03-01"
},
```

> ⚠️ **Don't forget the comma** at the end of the `}` — it separates your resource from the next one in the list!

### Step 5: Open a Pull Request

Once you're happy with your changes:

1. Commit your changes with a message like `"Add: Binary Numbers resource by Maya C."`
2. Click **Pull Request → New Pull Request**
3. Add a short description of what you're submitting
4. Click **Create Pull Request**

We'll review it and merge it in! When it's live, your resource will show up on the site with your name on it. 🎉

---

## Allowed tags

You can use any tags that make sense! Here are some popular ones to get you started:

`Scratch` `Python` `Internet` `AI` `Cybersecurity` `Loops` `Algorithms` `Careers` `Confidence` `StudyTips` `Games` `Beginner` `Networking` `Machine Learning` `Binary` `HTML` `Web` `Art` `How It Works` `Visual`

---

## Project structure

Here's what's inside this repo:

```
byte-buddies/
├── index.html          ← The home page with search and resource cards
├── resource.html       ← The detail page for a single resource
├── submit.html         ← The submission page (with Google Form)
├── css/
│   └── style.css       ← All the styles
├── js/
│   ├── resources-data.js  ← ⭐ THIS IS WHERE YOU ADD YOUR RESOURCE
│   └── app.js             ← Search and filter logic
└── resources/          ← Upload PDFs and docs here
    └── (your files)
```

---

## Running it locally

Since this is a static site with no build step, you just need a local server to avoid CORS issues:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node (if you have it)
npx serve .

# Option 3: VS Code
# Install the "Live Server" extension and click "Go Live"
```

Then open `http://localhost:8000` in your browser.

---

## Questions?

Open a GitHub Issue and we'll help you out! We're happy to answer questions, give feedback on your resource before you submit, or just say hi. 👋

---

*Byte Buddies is maintained by students and powered by GitHub Pages. All resources are reviewed before going live.*
