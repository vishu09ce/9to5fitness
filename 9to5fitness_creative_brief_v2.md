# 9to5Fitness — Creative Brief for Claude Code
**Version:** 2.0 | **Date:** May 2026 | **Status:** Final

---

## Project Overview

Build a digital magazine-style website called **9to5Fitness** targeting full-time office workers (9-to-5 professionals) across all industries. The site is a portfolio and skill demonstration project for an MBA program with an AI specialization. There is no monetization. The experience should feel like a curated health and wellness publication — not a fitness app, not a generic blog.

---

## The Core Concept

The website is structured like a magazine where:

- The **cover** features an interactive health pyramid — this is the hero of the entire site
- Each **pyramid level** is a magazine section containing 3 curated articles
- The **AI Coach** is the final destination — the payoff after reading through all sections
- The visitor journey flows **top to bottom**, like reading a magazine from cover to feature
- The AI Coach is the **seventh and final section** — visitors are educated by the magazine before reaching the AI, arriving informed and ready to act

The pyramid has 7 levels in this order (base to apex, but rendered apex at top visually):

| Order | Section | Pyramid Position |
|---|---|---|
| 1 | Nutrition | Base (widest) |
| 2 | Hydration | Level 2 |
| 3 | Walking | Level 3 |
| 4 | Flexibility & Mobility | Level 4 |
| 5 | Structured Workouts | Level 5 |
| 6 | Rest & Recovery | Level 6 |
| 7 | AI Coach | Top (narrowest) + Final page |

The pyramid on the cover is **interactive** — each level is clickable and navigates to its corresponding section. It should also visually communicate sequence — visitors start at the base and work upward.

---

## Visual Theme

### Mood
Warm, approachable, and human. This is not a hardcore fitness brand. It speaks to the person who wants to be healthier but is busy, realistic, and not an athlete. Think: a knowledgeable friend who happens to know a lot about wellness.

### Aesthetic Reference
Health and wellness publications — Runner's World, Yoga Journal. Editorial quality, clean layouts, generous white space, content-first design. Not a SaaS dashboard, not a gym website.

### Visual Balance
Equal weight across three elements:
- **Photography** — lifestyle imagery of real office workers, not stock gym photos
- **Typography** — strong editorial headlines carry sections
- **Illustration/Graphics** — the pyramid and any supporting diagrams

### Typography
- **Sans-serif throughout** — clean, modern, highly readable
- Strong typographic hierarchy: large editorial headlines, clear subheadings, comfortable body text
- The masthead/logo should feel like a magazine nameplate

### Color
- Decide the palette based on the warm and approachable mood
- Each pyramid section should have its own accent color — used consistently on the section page, article cards, and the corresponding pyramid level
- Colors should feel natural and wellness-inspired, not corporate or clinical
- Must support both light and dark mode

---

## Site Architecture

### Page 1 — The Cover
- Magazine masthead at the top: **9to5Fitness**
- Tagline beneath: *"Health & fitness for the modern 9-to-5 worker"*
- Hero: the interactive pyramid (centered, dominant, takes up the majority of the viewport)
- Each pyramid level shows its section name and is clickable
- Subtle visual cue communicating bottom-to-top reading order
- Below the pyramid: 6 "cover lines" — one teaser per section (like magazine cover callouts)
- A clear entry point to the AI Coach at the bottom of the cover

### Pages 2–7 — Section Pages (one per pyramid level)
Each section page follows a consistent template:

1. **Section header** — large editorial headline with the section name and accent color
2. **Editorial intro** — 2–3 sentences explaining why this level matters specifically for 9-to-5 workers
3. **3 article cards** — each card contains:
   - Thumbnail image
   - Article title
   - 2-line summary (written in editorial voice, not the original article's words)
   - Estimated read time
   - Source name (e.g. "Healthline", "NPR")
   - "Read article" link opening in a new tab to the original source
4. **Section AI prompt** — a contextual call-to-action button at the bottom of the page that opens the AI Coach with a pre-loaded message relevant to that section
5. **Navigation** — subtle progress indicator showing which pyramid level the user is on

### Page 8 — AI Coach
This is the payoff page. The design and copy should acknowledge that the visitor has completed the magazine journey.

- **Headline:** "You've covered the six pillars. Now let's build your plan."
- **Subheading:** A one-line description of what the AI can do
- **Medical disclaimer** — brief, friendly, one line: the AI is not a medical professional
- **Chat interface** — clean, full-width conversational UI
- The AI opens with a warm greeting that references the pyramid journey

---

## AI Chat Behavior

### Scope & Focus
The AI Coach is scoped strictly to **fitness and workouts only**.

### Program Philosophy
The AI builds programs around three components:
1. **Walking** — always included as the cardiovascular component
2. **Warmup** — always included before any strength session
3. **Strength Training** — the primary structured workout component

Traditional cardio (running, cycling, HIIT) is **not recommended**. Walking handles cardiovascular needs. The AI should be able to explain this rationale if asked.

### Behavior Rules
| Rule | Behavior |
|---|---|
| Focus | Fitness and workouts only — nothing outside this scope |
| Off-topic | Politely decline and redirect back to fitness |
| Tone | Friendly and conversational — like a knowledgeable friend |
| Medical disclaimer | Display once at the start of every conversation |
| Memory | Within the same conversation only — no cross-session memory |
| Conversation limit | Deliver one complete personalized plan per session, then close naturally |
| Fitness levels | Beginner and intermediate only |
| Equipment | Always ask the user what equipment they have before recommending workouts |
| Injuries | If the user mentions any injury or physical limitation, immediately redirect them to consult a doctor — do not attempt to work around it |

### Program Structure the AI Should Follow
When building a weekly program:
- **Frequency:** 2–3 sessions per week
- **Session structure:** Warmup → Strength Training → Cool-down stretch
- **Walking:** Daily — integrated into the workday (lunch breaks, commute, etc.)
- **Rest days:** At least 1–2 full rest days per week
- **Sets/Reps:** 2–3 sets of 8–12 reps per exercise for beginners
- **Progressive overload:** Gradually increase reps or weight each week

---

## Content — Curated Website Articles

The following 18 articles are confirmed and ready to use. Each needs a thumbnail image from a free image provider (Unsplash, Pexels) matching the editorial tone.

### Section 1 — Nutrition
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 1 | Dietary Guidelines for Americans 2025–2030 | MedlinePlus / US Gov | https://www.medlineplus.gov/ency/article/002093.htm | 6 min |
| 2 | Healthy Eating Plate vs USDA MyPlate | Harvard T.H. Chan | https://nutritionsource.hsph.harvard.edu/healthy-eating-plate-vs-usda-myplate/ | Evergreen |
| 3 | What Is Intermittent Fasting & How Does It Work? | Johns Hopkins Medicine | https://www.hopkinsmedicine.org/health/expert-qa/intermittent-fasting-what-is-it-and-how-does-it-work | 6 min |

### Section 2 — Hydration
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 4 | Good Hydration Linked to Healthy Aging | NIH | https://www.nih.gov/news-events/news-releases/good-hydration-linked-healthy-aging | 5 min |
| 5 | How Hydration Impacts Productivity in the Workplace | FloWater | https://drinkflowater.com/how-hydration-impacts-productivity-in-the-workplace/ | 6 min |
| 6 | Coffee vs. Water: Finding the Right Balance at Work | Culligan Quench | https://quench.culligan.com/blog/coffee-vs-water-finding-the-right-balance-at-work/ | 5 min |

### Section 3 — Walking
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 7 | The Hidden Benefits of Walking: What Harvard Research Reveals | SmartHealthways / Harvard | https://www.smarthealthways.com/2025/09/the-hidden-benefits-of-walking-what.html | 7 min |
| 8 | Walking Towards Better Health | U.S. News & World Report | https://health.usnews.com/wellness/fitness/articles/walking-towards-better-health | 6 min |
| 9 | Walking at Work: How to Get More Steps in Your Day | FlexJobs | https://www.flexjobs.com/blog/post/5-ways-to-walk-more-every-day | 5 min |

### Section 4 — Flexibility & Mobility
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 10 | 18 Key Benefits of Yoga at Work | Vantage Fit | https://www.vantagefit.io/en/blog/yoga-in-the-workplace/ | 8 min |
| 11 | How Does a Sedentary Lifestyle Affect Your Health? | UPMC HealthBeat | https://share.upmc.com/2025/10/sedentary-lifestyle-affects/ | 7 min |
| 12 | The Ultimate Deskercise Routine: Stretches for the Office | Healthline | https://www.healthline.com/health/deskercise | 6 min |

### Section 5 — Structured Workouts
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 13 | Strength Training Boosts Longevity, Mood and Metabolism | NPR | https://www.npr.org/sections/health-shots/2024/03/11/1236791784/strength-resistance-weight-training-longevity-aging-heart-disease | 6 min |
| 14 | The Best Workout for a Busy Schedule | SWEAT440 | https://sweat440.com/the-best-workout-for-a-busy-schedule-build-muscle-and-save-time/ | 5 min |
| 15 | Research Says This Is the Minimum Dose of Gym Time You Need | ScienceDaily | https://www.sciencedaily.com/releases/2022/08/220815085707.htm | 5 min |

### Section 6 — Rest & Recovery
| # | Title | Source | URL | Read Time |
|---|---|---|---|---|
| 16 | Sleep Is Essential to Health | American Academy of Sleep Medicine | https://jcsm.aasm.org/doi/10.5664/jcsm.9476 | 6 min |
| 17 | Exercise Rest Day: Benefits, Importance & Tips | Healthline | https://www.healthline.com/health/exercise-fitness/rest-day | 7 min |
| 18 | Burnout Prevention Through Stress Management | VCU Health | https://www.vcuhealth.org/news/burnout-prevention-through-stress-management/ | 5 min |

---

## Section AI Entry Points

Each section page ends with a contextual button that opens the AI Coach with a pre-loaded opening message:

| Section | Button Label | Pre-loaded AI Message |
|---|---|---|
| Nutrition | "Build my meal plan" | "I'd like help building a meal plan for a busy office worker" |
| Hydration | "Build my hydration routine" | "Help me build a daily hydration routine for my workday" |
| Walking | "Create my walking routine" | "Can you create a daily walking routine I can do around my 9-to-5 schedule?" |
| Flexibility & Mobility | "Build my stretch routine" | "I want a daily stretching and mobility routine for someone who sits at a desk all day" |
| Structured Workouts | "Design my workout plan" | "Please design a workout plan that fits around a full-time office job" |
| Rest & Recovery | "Improve my recovery" | "Help me build better rest and recovery habits as a busy professional" |

---

## The Health Pyramid — Visual Spec

The pyramid is the centerpiece of the site. It must be:

- **Interactive** — each level is clickable, navigating to its section
- **Color-coded** — each level has its own distinct accent color, consistent with its section pages
- **Labeled** — section name visible on each level
- **Sequenced** — visually communicates a bottom-to-top reading order (base = start here)
- **Responsive** — works cleanly on both desktop and mobile

The pyramid levels from base to apex:

| Level | Section | Position |
|---|---|---|
| 1 (widest) | Nutrition | Base |
| 2 | Hydration | — |
| 3 | Walking | — |
| 4 | Flexibility & Mobility | — |
| 5 | Structured Workouts | — |
| 6 | Rest & Recovery | — |
| 7 (narrowest) | AI Coach | Apex |

---

## RAG Knowledge Base

The AI Coach is powered by RAG (Retrieval Augmented Generation). The knowledge base consists of 27 articles — 18 website articles visible to visitors plus 9 background articles used internally by the AI only.

The full knowledge base is maintained in a separate document: **9to5fitness_knowledge_base.md**

The knowledge base should be updated periodically as new research becomes available. When updating, add new articles to the relevant section and increment the version number.

---

## What This Project Is

This is a portfolio and academic demonstration project built for an MBA program with an AI specialization. It demonstrates:

- **Product thinking** — a clear problem, a coherent solution, a deliberate user journey
- **Content strategy** — curated editorial structure built on a health philosophy framework
- **UX design** — a magazine-to-AI funnel with intentional reading flow
- **AI integration** — a scoped, RAG-powered AI coach as the payoff of the user journey
- **AI architecture** — provider-agnostic design, knowledge base separation, deliberate guardrails

There is no monetization, no user accounts required for browsing, and no backend beyond the AI chat API integration.

---

*Creative Brief v2.0 | Project: 9to5Fitness | May 2026*
