// â”€â”€â”€ Topic Data Database â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Content extracted and expanded from Remotion video compositions (Day 003â€“008)
// This is the single source of truth for all topic pages.

export interface CodeToken {
  text: string;
  color: string;
  glow?: boolean;
  isBold?: boolean;
}

export interface CodeSnippet {
  filename: string;
  lines: CodeToken[][];
  accentColor: string;
}

export interface ContentSection {
  heading: string;
  badge?: string;
  badgeColor?: string;
  body: string;
  code?: CodeSnippet;
}

export interface DecisionRule {
  question: string;
  answer: string;
  color: string;
}

export interface Topic {
  slug: string;
  day: number;
  title: string;
  shortTitle: string;
  badge: string;
  accentColor: string;
  secondaryColor?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: "Hooks" | "Performance" | "Architecture" | "Patterns" | "Rendering";
  description: string;
  sections: ContentSection[];
  decisionRules: DecisionRule[];
  keyTakeaways: string[];
  relatedSlugs: string[];
}

// â”€â”€â”€ COLOR PALETTE (from Remotion video compositions) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CYAN = "#38bdf8";
const VIOLET = "#d2a8ff";
const EMERALD = "#10b981";
const ROSE = "#f43f5e";
const ORANGE = "#f97316";
const BLUE = "#3b82f6";
const AMBER = "#f59e0b";
const RED = "#ef4444";
const YELLOW = "#eab308";

// â”€â”€â”€ TOPICS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Sorted category-wise: Hooks â†’ Performance â†’ Rendering â†’ Patterns â†’ Architecture

export const topics: Topic[] = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CATEGORY: HOOKS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // â”€â”€â”€ DAY 004: useEffect Cleanup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "useeffect-cleanup-function",
    day: 4,
    title: "useEffect Cleanup Function â€” The Bug Everyone Misses",
    shortTitle: "useEffect Cleanup",
    badge: "Day 004",
    accentColor: ROSE,
    secondaryColor: CYAN,
    difficulty: "Intermediate",
    category: "Hooks",
    description:
      "The cleanup function â€” the bug that slips past most React developers and causes serious memory leaks. Learn exactly when useEffect runs, why cleanup is non-optional, and how to fix the most common leak patterns.",
    sections: [
      {
        heading: "What useEffect Does",
        badge: "What useEffect Does",
        badgeColor: CYAN,
        body: "useEffect runs after every render. You use it for subscriptions, timers, event listeners, and fetching data. These are all side effects â€” things that reach outside the React component tree. And that's exactly what makes cleanup so critical.",
        code: {
          filename: "Component.tsx",
          accentColor: CYAN,
          lines: [
            [
              { text: "useEffect", color: VIOLET, glow: true },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  ", color: "#e1e4e8" },
              { text: "// subscriptions, timers,", color: "#8b949e" },
            ],
            [
              { text: "  ", color: "#e1e4e8" },
              { text: "// event listeners, fetch", color: "#8b949e" },
            ],
            [
              { text: "}, []);", color: "#e1e4e8" },
            ],
          ],
        },
      },
      {
        heading: "The Bug: No Cleanup = Memory Leak",
        badge: "The Bug",
        badgeColor: ROSE,
        body: "When a component unmounts â€” or when deps change â€” the effect runs again. If you don't clean up the previous effect, you get stacked subscriptions, multiple timers firing simultaneously, and event listeners that reference unmounted components. This is the memory leak.",
        code: {
          filename: "broken.tsx",
          accentColor: ROSE,
          lines: [
            [
              { text: "// âŒ Memory leak â€” subscription never cleaned up", color: ROSE },
            ],
            [
              { text: "useEffect", color: VIOLET },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  socket.", color: "#e1e4e8" },
              { text: "on", color: "#79c0ff" },
              { text: '("message", handler);', color: "#e1e4e8" },
            ],
            [
              { text: "}, []);", color: "#e1e4e8" },
              { text: "  // â† no return! leak!", color: ROSE },
            ],
          ],
        },
      },
      {
        heading: "The Fix: Always Return a Cleanup Function",
        badge: "The Fix",
        badgeColor: EMERALD,
        body: "The return value from useEffect is the cleanup function. React calls it before re-running the effect and when the component unmounts. This is your guarantee that stale effects are torn down before fresh ones run.",
        code: {
          filename: "fixed.tsx",
          accentColor: EMERALD,
          lines: [
            [
              { text: "// âœ… Clean â€” subscription removed on unmount", color: EMERALD, glow: true },
            ],
            [
              { text: "useEffect", color: VIOLET },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  socket.", color: "#e1e4e8" },
              { text: "on", color: "#79c0ff" },
              { text: '("message", handler);', color: "#e1e4e8" },
            ],
            [
              { text: "  ", color: "#e1e4e8" },
              { text: "return", color: "#ff7b72" },
              { text: " () => socket.", color: "#e1e4e8" },
              { text: "off", color: "#79c0ff", glow: true },
              { text: '("message", handler);', color: "#e1e4e8" },
            ],
            [
              { text: "}, []);", color: "#e1e4e8" },
            ],
          ],
        },
      },
    ],
    decisionRules: [
      { question: "Does your effect create a subscription?", answer: "Return cleanup", color: ROSE },
      { question: "Does your effect set a timer or interval?", answer: "clearTimeout/clearInterval", color: AMBER },
      { question: "Does your effect add an event listener?", answer: "removeEventListener", color: CYAN },
      { question: "Does your effect start a fetch request?", answer: "AbortController.abort()", color: VIOLET },
    ],
    keyTakeaways: [
      "useEffect cleanup runs before the next effect execution AND on unmount.",
      "Missing cleanup = stacked subscriptions, timers, and memory leaks.",
      "The return function from useEffect is the cleanup â€” always return one for async resources.",
      "React Strict Mode double-invokes effects in dev to expose missing cleanups early.",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "virtual-dom-vs-real-dom",
      "controlled-vs-uncontrolled",
    ],
  },

  // â”€â”€â”€ DAY 005: useState vs useRef â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "usestate-vs-useref",
    day: 5,
    title: "useState vs useRef â€” When to Use Which",
    shortTitle: "useState vs useRef",
    badge: "Day 005",
    accentColor: CYAN,
    secondaryColor: VIOLET,
    difficulty: "Beginner",
    category: "Hooks",
    description:
      "Two hooks. Both store values. But they work completely differently â€” and using the wrong one causes real bugs. Learn exactly when to reach for useState vs useRef, with a practical decision rule you can apply immediately.",
    sections: [
      {
        heading: "useState â€” Reactive Storage",
        badge: "useState â€” Reactive Storage",
        badgeColor: CYAN,
        body: "useState stores a value and re-renders your component every time it changes. That re-render is what keeps your UI in sync. If the value should appear on screen â€” useState is your hook. React tracks it, diffs it, and repaints when it changes.",
        code: {
          filename: "Counter.tsx",
          accentColor: CYAN,
          lines: [
            [
              { text: "const ", color: "#ff7b72" },
              { text: "[count, setCount]", color: "#e1e4e8" },
              { text: " = ", color: "#ff7b72" },
              { text: "useState", color: VIOLET, glow: true },
              { text: "(0);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// âœ… triggers a re-render", color: CYAN }],
            [
              { text: "setCount", color: "#79c0ff" },
              { text: "(count + 1);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// UI updates automatically", color: "#8b949e" }],
          ],
        },
      },
      {
        heading: "useRef â€” Silent Storage",
        badge: "useRef â€” Silent Storage",
        badgeColor: VIOLET,
        body: "useRef also stores a value that persists across renders. But changing a ref never triggers a re-render. The component keeps running â€” React has no idea. This makes it perfect for values you need to track internally without affecting the UI.",
        code: {
          filename: "Timer.tsx",
          accentColor: VIOLET,
          lines: [
            [
              { text: "const ", color: "#ff7b72" },
              { text: "timerRef", color: "#e1e4e8" },
              { text: " = ", color: "#ff7b72" },
              { text: "useRef", color: VIOLET, glow: true },
              { text: "(null);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// âœ… persists across renders", color: VIOLET }],
            [
              { text: "timerRef", color: "#e1e4e8" },
              { text: ".", color: "#ff7b72" },
              { text: "current", color: "#79c0ff", glow: true },
              { text: " = ", color: "#ff7b72" },
              { text: "setTimeout", color: "#e1e4e8" },
              { text: "(fn, 1000);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// âŒ does NOT trigger re-render", color: ROSE }],
          ],
        },
      },
      {
        heading: "Real Example: Timer ID Storage",
        badge: "Real Example: Timer ID",
        badgeColor: AMBER,
        body: "You never display a timer ID on screen. Storing it in useState triggers a re-render on every setInterval call. useRef holds it silently â€” your component stays fast. This is the canonical use case that shows exactly when each hook belongs.",
        code: {
          filename: "correct.tsx",
          accentColor: EMERALD,
          lines: [
            [{ text: "// âœ… Correct â€” no wasted renders", color: EMERALD, glow: true }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "timerRef", color: "#e1e4e8" },
              { text: " = ", color: "#ff7b72" },
              { text: "useRef", color: VIOLET, glow: true },
              { text: "(null);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "useEffect", color: VIOLET },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  timerRef", color: "#e1e4e8" },
              { text: ".current", color: "#79c0ff", glow: true },
              { text: " = ", color: "#ff7b72" },
              { text: "setInterval", color: "#79c0ff" },
              { text: "(tick, 1000);", color: "#e1e4e8" },
            ],
            [
              { text: "  return ", color: "#ff7b72" },
              { text: "() => ", color: "#e1e4e8" },
              { text: "clearInterval", color: "#79c0ff", glow: true },
              { text: "(timerRef.current);", color: "#e1e4e8" },
            ],
            [{ text: "}, []);", color: "#e1e4e8" }],
          ],
        },
      },
    ],
    decisionRules: [
      { question: "Does it appear on screen?", answer: "useState", color: CYAN },
      { question: "Is it a DOM ref?", answer: "useRef", color: VIOLET },
      { question: "Is it a timer / interval ID?", answer: "useRef", color: VIOLET },
      { question: "Is it a previous-render value?", answer: "useRef", color: VIOLET },
      { question: "Should the UI update when it changes?", answer: "useState", color: CYAN },
    ],
    keyTakeaways: [
      "useState is reactive â€” changing it triggers a re-render. React knows.",
      "useRef is invisible â€” changing it never triggers a re-render. React is unaware.",
      "Both persist values across renders. Only useState connects to the render cycle.",
      "Pick based on whether React needs to know about the value change.",
    ],
    relatedSlugs: [
      "useeffect-cleanup-function",
      "controlled-vs-uncontrolled",
      "virtual-dom-vs-real-dom",
    ],
  },

  // â”€â”€â”€ DAY 009: useMemo vs useCallback â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "usememo-vs-usecallback",
    day: 9,
    title: "useMemo vs useCallback â€” Explained with One Example",
    shortTitle: "useMemo vs useCallback",
    badge: "Day 009",
    accentColor: "#06b6d4",
    secondaryColor: "#8b5cf6",
    difficulty: "Intermediate",
    category: "Hooks",
    description:
      "They look almost identical â€” but they solve completely different problems. useMemo caches a computed value. useCallback caches a function reference. One example will make the difference crystal clear.",
    sections: [
      {
        heading: "useMemo â€” Memoizing a Value",
        badge: "useMemo â€” Memoizes a Value",
        badgeColor: "#06b6d4",
        body: "useMemo runs your function and caches the result. If the dependencies haven't changed, React skips the work entirely and returns the cached value. Perfect for expensive computations like filtering or sorting large arrays.",
        code: {
          filename: "ProductList.tsx",
          accentColor: "#06b6d4",
          lines: [
            [{ text: "// useMemo â€” caches a computed value", color: "#8b949e" }],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "filteredList ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useMemo", color: "#d2a8ff" },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  return ", color: "#ff7b72" },
              { text: "items", color: "#79c0ff" },
              { text: ".", color: "#e1e4e8" },
              { text: "filter", color: "#d2a8ff" },
              { text: "(item =>", color: "#e1e4e8" },
            ],
            [
              { text: "    item.", color: "#e1e4e8" },
              { text: "name", color: "#79c0ff" },
              { text: ".includes(", color: "#e1e4e8" },
              { text: "query", color: "#79c0ff" },
              { text: ")", color: "#e1e4e8" },
            ],
            [{ text: "  );", color: "#e1e4e8" }],
            [
              { text: "}, [", color: "#e1e4e8" },
              { text: "items", color: "#79c0ff" },
              { text: ", ", color: "#e1e4e8" },
              { text: "query", color: "#79c0ff" },
              { text: "]);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// âœ… Returns a VALUE (the filtered array)", color: EMERALD, glow: true }],
          ],
        },
      },
      {
        heading: "useCallback â€” Memoizing a Function",
        badge: "useCallback â€” Memoizes a Function",
        badgeColor: "#8b5cf6",
        body: "Every render creates a brand-new function object. useCallback returns the same function reference across renders â€” preventing needless re-renders of memoized child components that receive the function as a prop.",
        code: {
          filename: "ProductList.tsx",
          accentColor: "#8b5cf6",
          lines: [
            [{ text: "// useCallback â€” caches the function ref", color: "#8b949e" }],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "handleDelete ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useCallback", color: "#d2a8ff" },
              { text: "((", color: "#e1e4e8" },
              { text: "id", color: "#79c0ff" },
              { text: ") => {", color: "#e1e4e8" },
            ],
            [
              { text: "  ", color: "#e1e4e8" },
              { text: "setItems", color: "#d2a8ff" },
              { text: "(prev =>", color: "#e1e4e8" },
            ],
            [
              { text: "    prev.", color: "#e1e4e8" },
              { text: "filter", color: "#d2a8ff" },
              { text: "(item => item.", color: "#e1e4e8" },
              { text: "id ", color: "#79c0ff" },
              { text: "!== ", color: "#ff7b72" },
              { text: "id", color: "#79c0ff" },
              { text: ")", color: "#e1e4e8" },
            ],
            [{ text: "  );", color: "#e1e4e8" }],
            [{ text: "}, []);", color: "#e1e4e8" }],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// âœ… Returns the FUNCTION (same reference)", color: EMERALD, glow: true }],
          ],
        },
      },
      {
        heading: "Real-World Example: Both Hooks Together",
        badge: "Real-World Example",
        badgeColor: EMERALD,
        body: "useMemo stops the filter from running on every keystroke. useCallback stops the child from re-rendering when the parent re-renders. Both working together means zero wasted work â€” the gold standard for React performance.",
        code: {
          filename: "ProductList.tsx",
          accentColor: EMERALD,
          lines: [
            [{ text: "// One component â€” both hooks in action", color: "#8b949e" }],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "filteredItems ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useMemo", color: "#06b6d4", glow: true },
              { text: "(", color: "#e1e4e8" },
            ],
            [
              { text: "  () => items.", color: "#e1e4e8" },
              { text: "filter", color: "#d2a8ff" },
              { text: "(i => i.", color: "#e1e4e8" },
              { text: "name", color: "#79c0ff" },
              { text: ".includes(", color: "#e1e4e8" },
              { text: "q", color: "#79c0ff" },
              { text: ")),", color: "#e1e4e8" },
            ],
            [
              { text: "  [", color: "#e1e4e8" },
              { text: "items", color: "#79c0ff" },
              { text: ", ", color: "#e1e4e8" },
              { text: "q", color: "#79c0ff" },
              { text: "]", color: "#e1e4e8" },
            ],
            [{ text: ");", color: "#e1e4e8" }],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "onDelete ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useCallback", color: "#8b5cf6", glow: true },
              { text: "(id => {", color: "#e1e4e8" },
            ],
            [
              { text: "  ", color: "#e1e4e8" },
              { text: "setItems", color: "#d2a8ff" },
              { text: "(p => p.", color: "#e1e4e8" },
              { text: "filter", color: "#d2a8ff" },
              { text: "(i => i.", color: "#e1e4e8" },
              { text: "id ", color: "#79c0ff" },
              { text: "!== ", color: "#ff7b72" },
              { text: "id", color: "#79c0ff" },
              { text: "));", color: "#e1e4e8" },
            ],
            [{ text: "}, []);", color: "#e1e4e8" }],
          ],
        },
      },
    ],
    decisionRules: [
      { question: "Computing a derived value?", answer: "useMemo", color: "#06b6d4" },
      { question: "Passing a fn as a prop?", answer: "useCallback", color: "#8b5cf6" },
      { question: "Child uses React.memo?", answer: "useCallback!", color: ROSE },
      { question: "Calculation is cheap?", answer: "Skip both", color: "#94a3b8" },
    ],
    keyTakeaways: [
      "useMemo caches a computed value â€” runs your fn, returns the result.",
      "useCallback caches a function reference â€” skips fn creation, returns same ref.",
      "Both recompute only when their dependency array changes.",
      "Skip both when the computation is trivial â€” memoization has its own overhead.",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "useeffect-cleanup-function",
      "virtual-dom-vs-real-dom",
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CATEGORY: PERFORMANCE
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // â”€â”€â”€ DAY 003: Virtual DOM vs Real DOM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "virtual-dom-vs-real-dom",
    day: 3,
    title: "Virtual DOM vs Real DOM â€” What Actually Happens",
    shortTitle: "Virtual DOM vs Real DOM",
    badge: "Day 003",
    accentColor: CYAN,
    secondaryColor: EMERALD,
    difficulty: "Beginner",
    category: "Performance",
    description:
      "Ever wondered what actually happens when React updates the screen? We break down the Real DOM versus the Virtual DOM, and explain exactly how React's reconciliation algorithm makes your UI blazingly fast.",
    sections: [
      {
        heading: "The Problem: Direct DOM Manipulation is Slow",
        badge: "The Problem: Real DOM",
        badgeColor: RED,
        body: "When you update the Real DOM directly, the browser must recalculate styles, rebuild the layout, and repaint the entire screen. This reflow process is extremely slow and scales terribly as your app grows. Even a single property change can cascade into a full-page paint cycle.",
      },
      {
        heading: "The Solution: A Lightweight JavaScript Copy",
        badge: "The Solution: Virtual DOM",
        badgeColor: EMERALD,
        body: "React solves this by keeping a lightweight copy of the DOM in memory, called the Virtual DOM. It is just a plain JavaScript object tree, meaning updates are virtually free â€” no browser rendering, no style recalculation, just fast in-memory object manipulation.",
        code: {
          filename: "virtual-dom-tree.js",
          accentColor: CYAN,
          lines: [
            [
              { text: "// React's Virtual DOM representation", color: "#8b949e" },
            ],
            [
              { text: "{", color: "#e1e4e8" },
            ],
            [
              { text: "  type: ", color: "#e1e4e8" },
              { text: '"ul"', color: "#a5d6ff" },
              { text: ",", color: "#e1e4e8" },
            ],
            [
              { text: "  props: ", color: "#e1e4e8" },
              { text: "{ className: ", color: "#e1e4e8" },
              { text: '"list"', color: "#a5d6ff" },
              { text: " },", color: "#e1e4e8" },
            ],
            [
              { text: "  children: ", color: "#e1e4e8" },
              { text: "[", color: "#e1e4e8" },
            ],
            [
              { text: "    { type: ", color: "#e1e4e8" },
              { text: '"li"', color: "#a5d6ff" },
              { text: ", children: [", color: "#e1e4e8" },
              { text: '"Updated text"', color: "#a5d6ff" },
              { text: "] }", color: "#e1e4e8" },
            ],
            [
              { text: "  ]", color: "#e1e4e8" },
            ],
            [
              { text: "}", color: "#e1e4e8" },
            ],
          ],
        },
      },
      {
        heading: "The Diffing Process: Finding the Exact Changes",
        badge: "The Diffing Process",
        badgeColor: AMBER,
        body: "When state changes, React builds a brand new Virtual DOM, then compares it with the previous snapshot using its reconciliation diffing algorithm. This comparison identifies the exact minimum set of changes needed â€” not a full tree rebuild, but surgical node-level updates.",
      },
      {
        heading: "Batching & Paint: Surgical Real DOM Updates",
        badge: "Batching & Paint",
        badgeColor: EMERALD,
        body: "Finally, React batches all updates together and applies only the minimum changes to the Real DOM. Instead of dozens of individual DOM mutations, React fires one optimized batch. Minimal repaints, maximum speed. This is the core performance guarantee of React.",
      },
    ],
    decisionRules: [
      { question: "Should I update the DOM directly?", answer: "Never in React", color: ROSE },
      { question: "When does React create a new Virtual DOM?", answer: "On every state change", color: CYAN },
      { question: "What does the diffing algorithm find?", answer: "Minimum changed nodes", color: EMERALD },
      { question: "When are Real DOM updates applied?", answer: "After batching all changes", color: AMBER },
    ],
    keyTakeaways: [
      "The Real DOM is slow because every change triggers browser reflow & repaint.",
      "The Virtual DOM is a lightweight JavaScript object â€” updates are instant.",
      "React diffs old vs new Virtual DOM to find the minimum changes needed.",
      "Only those minimum changes are applied to the Real DOM in a single batch.",
    ],
    relatedSlugs: [
      "react-keys-index-bug",
      "usestate-vs-useref",
      "controlled-vs-uncontrolled",
    ],
  },

  // â”€â”€â”€ DAY 007: React Keys â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "react-keys-index-bug",
    day: 7,
    title: "React Keys â€” Why Index as Key Breaks Your App",
    shortTitle: "React Keys & Index Bug",
    badge: "Day 007",
    accentColor: ORANGE,
    secondaryColor: AMBER,
    difficulty: "Intermediate",
    category: "Performance",
    description:
      "You use index as a key and it looks fine. Then items reorder â€” and React silently corrupts your UI. Learn why keys are identity tags, not just performance hints, and exactly when index-as-key destroys component state.",
    sections: [
      {
        heading: "The key Prop â€” React's Identity Tag",
        badge: "The key Prop â€” Identity Tag",
        badgeColor: ORANGE,
        body: "The key prop tells React which list item is which across renders. It is not a performance hint â€” it is an identity label. React uses keys during reconciliation to decide whether to reuse, update, or destroy a component instance. Stable keys â†’ stable component state.",
        code: {
          filename: "list.tsx",
          accentColor: ORANGE,
          lines: [
            [{ text: "// âœ… Correct â€” stable unique ID", color: "#8b949e" }],
            [
              { text: "{", color: "#e1e4e8" },
              { text: "items", color: "#79c0ff" },
              { text: ".map(", color: "#e1e4e8" },
              { text: "item", color: "#ffa657" },
              { text: " => (", color: "#e1e4e8" },
            ],
            [
              { text: "  <", color: "#79c0ff" },
              { text: "ListItem", color: "#7ee787" },
              { text: " key", color: "#79c0ff" },
              { text: "={", color: "#e1e4e8" },
              { text: "item.id", color: ORANGE, glow: true },
              { text: "}", color: "#e1e4e8" },
              { text: " />", color: "#79c0ff" },
            ],
            [
              { text: "))}", color: "#e1e4e8" },
            ],
          ],
        },
      },
      {
        heading: "Why Index-as-Key Silently Corrupts State",
        badge: "The Bug: Index Keys",
        badgeColor: ROSE,
        body: "When you use array index as the key, React maps component identity to position. If items reorder or prepend, the index shifts â€” but the key stays the same positional number. React thinks the component at position 0 is the same component as before, so it reuses its state. But it isn't. Your internal state now belongs to the wrong item.",
        code: {
          filename: "broken.tsx",
          accentColor: ROSE,
          lines: [
            [{ text: "// âŒ Bug â€” index shifts on reorder", color: ROSE }],
            [
              { text: "{", color: "#e1e4e8" },
              { text: "items", color: "#79c0ff" },
              { text: ".map((", color: "#e1e4e8" },
              { text: "item, index", color: "#ffa657" },
              { text: ") => (", color: "#e1e4e8" },
            ],
            [
              { text: "  <", color: "#79c0ff" },
              { text: "ListItem", color: "#7ee787" },
              { text: " key", color: "#79c0ff" },
              { text: "={", color: "#e1e4e8" },
              { text: "index", color: ROSE },
              { text: "}", color: "#e1e4e8" },
              { text: " />", color: "#79c0ff" },
            ],
            [
              { text: "  // â†‘ state leaks to wrong item!", color: ROSE },
            ],
            [
              { text: "))}", color: "#e1e4e8" },
            ],
          ],
        },
      },
    ],
    decisionRules: [
      { question: "List items can reorder or filter?", answer: "Use item.id", color: ORANGE },
      { question: "Items are prepended/inserted?", answer: "Use item.id", color: ORANGE },
      { question: "List is purely static, never changes?", answer: "Index is OK", color: AMBER },
      { question: "Items have internal state (inputs, open/close)?", answer: "Must use item.id", color: ROSE },
    ],
    keyTakeaways: [
      "Keys are identity labels, not performance hints â€” React uses them during reconciliation.",
      "Index-as-key breaks when items reorder, are inserted, or are removed.",
      "Mismatched keys cause React to transfer state from one item to an entirely different item.",
      "Always use a stable, unique identifier from your data (e.g. item.id, item.uuid).",
    ],
    relatedSlugs: [
      "virtual-dom-vs-real-dom",
      "controlled-vs-uncontrolled",
      "ssr-ssg-isr-csr",
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CATEGORY: RENDERING
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // â”€â”€â”€ DAY 008: SSR vs SSG vs ISR vs CSR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "ssr-ssg-isr-csr",
    day: 8,
    title: "SSR Â· SSG Â· ISR Â· CSR â€” When Does Your Page Get Built?",
    shortTitle: "SSR Â· SSG Â· ISR Â· CSR",
    badge: "Day 008",
    accentColor: BLUE,
    secondaryColor: "#a855f7",
    difficulty: "Advanced",
    category: "Rendering",
    description:
      "Four rendering strategies. One big question: when does your page actually get built? Pick wrong â€” and you sacrifice speed or freshness. This is the single most impactful architectural decision you make in a Next.js app.",
    sections: [
      {
        heading: "CSR â€” Client-Side Rendering",
        badge: "CSR â€” Client Side",
        badgeColor: AMBER,
        body: "The browser downloads an empty HTML shell, then JavaScript fetches data and builds the page. Fast initial download, slow first meaningful paint. Best for authenticated dashboards where SEO doesn't matter and data changes constantly.",
        code: {
          filename: "Dashboard.tsx",
          accentColor: AMBER,
          lines: [
            [{ text: "// CSR â€” data fetched after page load", color: "#8b949e" }],
            [
              { text: "const ", color: "#ff7b72" },
              { text: "[data] ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useState", color: VIOLET },
              { text: "(null);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "useEffect", color: VIOLET },
              { text: "(() => {", color: "#e1e4e8" },
            ],
            [
              { text: "  fetch", color: "#79c0ff" },
              { text: '("/api/data")', color: "#a5d6ff" },
              { text: ".then(setData);", color: "#e1e4e8" },
            ],
            [{ text: "}, []);", color: "#e1e4e8" }],
          ],
        },
      },
      {
        heading: "SSG â€” Static Site Generation",
        badge: "SSG â€” Build Time",
        badgeColor: EMERALD,
        body: "Pages are built once at deploy time and served as static HTML. Blazingly fast â€” content is on a CDN edge node near every user. Perfect for blogs, marketing pages, and documentation that changes rarely. Zero server cost, maximum speed.",
        code: {
          filename: "BlogPost.tsx",
          accentColor: EMERALD,
          lines: [
            [{ text: "// SSG â€” built once at deploy time", color: "#8b949e" }],
            [
              { text: "export async function ", color: "#ff7b72" },
              { text: "generateStaticParams", color: "#7ee787" },
              { text: "() {", color: "#e1e4e8" },
            ],
            [
              { text: "  return posts.", color: "#e1e4e8" },
              { text: "map", color: "#79c0ff" },
              { text: "(p => ({ slug: p.id }));", color: "#e1e4e8" },
            ],
            [{ text: "}", color: "#e1e4e8" }],
          ],
        },
      },
      {
        heading: "SSR â€” Server-Side Rendering",
        badge: "SSR â€” Per Request",
        badgeColor: BLUE,
        body: "The page is built fresh on every request on the server. Always up-to-date, great for SEO, but adds server latency on every load. Perfect for authenticated pages with user-specific content or data that changes constantly and must be fresh.",
        code: {
          filename: "UserPage.tsx",
          accentColor: BLUE,
          lines: [
            [{ text: "// SSR â€” runs on every request", color: "#8b949e" }],
            [
              { text: "export default async function ", color: "#ff7b72" },
              { text: "Page", color: "#7ee787" },
              { text: "() {", color: "#e1e4e8" },
            ],
            [
              { text: "  const data = await ", color: "#e1e4e8" },
              { text: "fetch", color: "#79c0ff" },
              { text: '("/api/user", {', color: "#a5d6ff" },
            ],
            [
              { text: "    cache: ", color: "#e1e4e8" },
              { text: '"no-store"', color: "#a5d6ff", glow: true },
            ],
            [{ text: "  });", color: "#e1e4e8" }],
            [{ text: "}", color: "#e1e4e8" }],
          ],
        },
      },
      {
        heading: "ISR â€” Incremental Static Regeneration",
        badge: "ISR â€” Best of Both",
        badgeColor: "#a855f7",
        body: "Start with a static page, then regenerate it in the background after a revalidation period. The first user after expiry gets the stale page while it regenerates behind the scenes. Next user gets fresh content. CDN speed with reasonable freshness.",
      },
    ],
    decisionRules: [
      { question: "Needs SEO + changes rarely?", answer: "SSG", color: EMERALD },
      { question: "Needs SEO + user-specific data?", answer: "SSR", color: BLUE },
      { question: "Content updates every few hours?", answer: "ISR", color: "#a855f7" },
      { question: "Private dashboard, no SEO needed?", answer: "CSR", color: AMBER },
    ],
    keyTakeaways: [
      "CSR: built in the browser after load. Fast download, slow first paint. No SEO.",
      "SSG: built once at deploy. Fastest possible load. Great for static content.",
      "SSR: built fresh on every request. Always current, adds server latency.",
      "ISR: static + background regeneration on a schedule. Best of both worlds.",
    ],
    relatedSlugs: [
      "virtual-dom-vs-real-dom",
      "react-keys-index-bug",
      "usestate-vs-useref",
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // CATEGORY: PATTERNS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  // â”€â”€â”€ DAY 006: Controlled vs Uncontrolled â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    slug: "controlled-vs-uncontrolled",
    day: 6,
    title: "Controlled vs Uncontrolled Components",
    shortTitle: "Controlled vs Uncontrolled",
    badge: "Day 006",
    accentColor: EMERALD,
    secondaryColor: CYAN,
    difficulty: "Intermediate",
    category: "Patterns",
    description:
      "React forms: do you use useState or useRef? The choice between Controlled and Uncontrolled components fundamentally changes how your form data flows through the application â€” and which approach you pick determines performance, testability, and complexity.",
    sections: [
      {
        heading: "Controlled â€” React Owns the Value",
        badge: "Controlled â€” React State",
        badgeColor: EMERALD,
        body: "In a controlled component, React state is the single source of truth for input values. Every keystroke calls setState, which triggers a re-render, which updates the input via the value prop. React has full control and visibility into the current form state at all times.",
        code: {
          filename: "Controlled.tsx",
          accentColor: EMERALD,
          lines: [
            [
              { text: "const ", color: "#ff7b72", isBold: true },
              { text: "[val, setVal] ", color: "#e1e4e8" },
              { text: "= ", color: "#ff7b72" },
              { text: "useState", color: VIOLET, glow: true },
              { text: '("");', color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "<input", color: "#79c0ff", isBold: true },
            ],
            [
              { text: "  value", color: "#79c0ff" },
              { text: "={val}", color: "#a5d6ff" },
            ],
            [
              { text: "  onChange", color: "#79c0ff" },
              { text: "={e => setVal(e.target.value)}", color: "#a5d6ff" },
            ],
            [
              { text: "/>", color: "#79c0ff", isBold: true },
            ],
          ],
        },
      },
      {
        heading: "Uncontrolled â€” The DOM Owns the Value",
        badge: "Uncontrolled â€” DOM Ref",
        badgeColor: CYAN,
        body: "In an uncontrolled component, the DOM itself manages the input state. You use useRef to read the value only when you need it â€” typically on form submit. There are no re-renders on every keystroke. This is faster for large forms, and simpler for file inputs.",
        code: {
          filename: "Uncontrolled.tsx",
          accentColor: CYAN,
          lines: [
            [
              { text: "const ", color: "#ff7b72" },
              { text: "inputRef", color: "#e1e4e8" },
              { text: " = ", color: "#ff7b72" },
              { text: "useRef", color: VIOLET, glow: true },
              { text: "<HTMLInputElement>(null);", color: "#e1e4e8" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [
              { text: "<input", color: "#79c0ff" },
              { text: " ref", color: "#79c0ff" },
              { text: "={inputRef} />", color: "#a5d6ff" },
            ],
            [{ text: "", color: "#e1e4e8" }],
            [{ text: "// Read on submit only:", color: "#8b949e" }],
            [
              { text: "inputRef", color: "#e1e4e8" },
              { text: ".current?.", color: "#ff7b72" },
              { text: "value", color: "#79c0ff", glow: true },
            ],
          ],
        },
      },
    ],
    decisionRules: [
      { question: "Need real-time validation?", answer: "Controlled", color: EMERALD },
      { question: "Conditionally enable a submit button?", answer: "Controlled", color: EMERALD },
      { question: "Simple form, read only on submit?", answer: "Uncontrolled", color: CYAN },
      { question: "File input (<input type='file'>)?", answer: "Uncontrolled", color: CYAN },
      { question: "Large form with many fields?", answer: "Uncontrolled", color: CYAN },
    ],
    keyTakeaways: [
      "Controlled: React state is the single source of truth. Re-renders on every keystroke.",
      "Uncontrolled: DOM owns the value. Read via ref only when you need it.",
      "Controlled = more control, more re-renders. Uncontrolled = less control, faster.",
      "Most production forms use react-hook-form, which is uncontrolled under the hood.",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "useeffect-cleanup-function",
      "react-keys-index-bug",
    ],
  },


  {
    slug: "react-fiber-why-react-got-faster",
    day: 10,
    title: "React Fiber — Why React Got Faster & Smoother",
    shortTitle: "React Fiber",
    badge: "Day 010",
    accentColor: EMERALD,
    difficulty: "Advanced",
    category: "Rendering",
    description:
      "React 16 introduced a secret weapon that made your web applications feel infinitely smoother: React Fiber. But what is it, and why did React need a complete rewrite of its reconciliation engine? Let's break it down.",
    sections: [
      {
        heading: "Old Way  Stack Reconciler",
        badge: "Old Way  Stack Reconciler",
        badgeColor: EMERALD,
        body: "Before Fiber, React updated components synchronously using recursion. Once started, it could not be paused. If your component tree was deep, a rendering update would block the main thread, causing lag and dropped frames.",
        code: {
          filename: "StackReconciler.ts",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ❌ Stack Reconciler (React 15 & below)", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "reconcile", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "vnode", color: "#79c0ff" },
                  { text: ") {", color: "#e1e4e8" },
                ],
                [
                  { text: "  // 🛑 Synchronous recursion — cannot pause!", color: "#f43f5e", glow: true }
                ],
                [
                  { text: "  ", color: "#e1e4e8" },
                  { text: "updateElement", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "vnode", color: "#79c0ff" },
                  { text: ");", color: "#e1e4e8" }
                ],
                [
                  { text: "  vnode.", color: "#e1e4e8" },
                  { text: "children", color: "#79c0ff" },
                  { text: ".", color: "#e1e4e8" },
                  { text: "forEach", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "child => reconcile(child)", color: "#ff7b72" },
                  { text: ");", color: "#e1e4e8" }
                ],
                [{ text: "}", color: "#e1e4e8" }],
                [{ text: "", color: "#e1e4e8" }],
                [{ text: "// Deep trees block the browser main thread!", color: "#8b949e" }],
              ]
        },
      },
      {
        heading: "New Way  Fiber Reconciler",
        badge: "New Way  Fiber Reconciler",
        badgeColor: EMERALD,
        body: "React Fiber completely changed this by building a linked list of virtual fiber nodes. Each node represents a unit of work. Because it is a linked list, React can pause traversal, yield to the browser for user interactions, and resume later.",
        code: {
          filename: "FiberNode.ts",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Fiber Reconciler (React 16+)", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "interface ", color: "#ff7b72" },
                  { text: "FiberNode ", color: "#e1e4e8" },
                  { text: "{", color: "#e1e4e8" }
                ],
                [
                  { text: "  child", color: "#79c0ff" },
                  { text: ": FiberNode | null; ", color: "#8b949e" },
                  { text: "// First child link", color: "#8b949e" }
                ],
                [
                  { text: "  sibling", color: "#79c0ff" },
                  { text: ": FiberNode | null; ", color: "#8b949e" },
                  { text: "// Next sibling link", color: "#8b949e" }
                ],
                [
                  { text: "  return", color: "#79c0ff" },
                  { text: ": FiberNode | null; ", color: "#8b949e" },
                  { text: "// Parent link", color: "#8b949e" }
                ],
                [{ text: "}", color: "#e1e4e8" }],
                [{ text: "", color: "#e1e4e8" }],
                [{ text: "// ⚡ A Linked List structure that is interruptible", color: "#7ee787", glow: true }],
              ]
        },
      },
      {
        heading: "Reconciler Comparison",
        badge: "Reconciler Comparison",
        badgeColor: EMERALD,
        body: "Stack reconciliation is recursive, synchronous, and blocks the browser thread. Fiber reconciliation is iterative, asynchronous, and completely interruptible. It yields control whenever a frame deadline is close.",
      },
      {
        heading: "Cooperative Scheduling",
        badge: "Cooperative Scheduling",
        badgeColor: EMERALD,
        body: "Under the hood, every fiber node keeps references to its child, its sibling, and its return parent. This structure allows React to step through the tree one node at a time instead of executing a giant, unbreakable call stack.",
        code: {
          filename: "WorkLoop.ts",
          accentColor: EMERALD,
          lines: [
                [{ text: "// Conceptual Fiber work loop", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "while ", color: "#ff7b72" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "nextUnitOfWork ", color: "#79c0ff" },
                  { text: "&& !", color: "#ff7b72" },
                  { text: "shouldYield", color: "#d2a8ff" },
                  { text: "()) {", color: "#e1e4e8" }
                ],
                [
                  { text: "  nextUnitOfWork = ", color: "#e1e4e8" },
                  { text: "performUnitOfWork", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" }
                ],
                [
                  { text: "    nextUnitOfWork", color: "#79c0ff" }
                ],
                [
                  { text: "  );", color: "#e1e4e8" }
                ],
                [{ text: "}", color: "#e1e4e8" }],
                [{ text: "", color: "#e1e4e8" }],
                [{ text: "// ⏳ shouldYield checks if the 16ms frame limit is near", color: "#7ee787", glow: true }],
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Synchronous updates?", answer: "Blocking Stack", color: ROSE },
      { question: "Pause & resume work?", answer: "Cooperative Fiber", color: CYAN },
      { question: "Priority scheduling?", answer: "Scheduler Lanes", color: VIOLET },
      { question: "Heavy rendering?", answer: "Asynchronous Fiber", color: EMERALD },
    ],
    keyTakeaways: [
      "Stack — Recursion-based, blocking",
      "Fiber — Linked List-based, asynchronous",
      "Yielding — Cooperative scheduler frame limits",
      "Concurrent — Interruptible updates, fluid UI",
    ],
    relatedSlugs: [
      "virtual-dom-vs-real-dom",
      "react-keys-why-index-as-key-breaks-your-app",
      "why-you-shouldnt-mutate-state-directly",
    ],
  },

  {
    slug: "custom-hooks-build-one-in-60-seconds",
    day: 11,
    title: "Custom Hooks — Build One in 96 Seconds",
    shortTitle: "Custom Hooks",
    badge: "Day 011",
    accentColor: EMERALD,
    difficulty: "Intermediate",
    category: "Hooks",
    description:
      "Writing the same useState and useEffect logic in every component? That's your cue to build a custom hook. Let's build one from scratch in under ninety-six seconds.",
    sections: [
      {
        heading: "The Problem  Duplication",
        badge: "The Problem  Duplication",
        badgeColor: EMERALD,
        body: "Here's the problem. Sidebar tracks a boolean with useState and toggles it with a handler. Now Modal needs the exact same logic. Copy-pasting this state and handler into every component is exactly what custom hooks exist to prevent.",
        code: {
          filename: "DuplicatedLogic.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ❌ Same logic duplicated everywhere", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "Sidebar", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" },
                ],
                [
                  { text: "  const [isOpen, setIsOpen] = ", color: "#e1e4e8" },
                  { text: "useState", color: "#d2a8ff" },
                  { text: "(false);", color: "#e1e4e8" },
                ],
                [
                  { text: "  const toggle = ", color: "#e1e4e8" },
                  { text: "() => setIsOpen(v => !v);", color: "#79c0ff" },
                ],
                [{ text: "}", color: "#e1e4e8" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "Modal", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" },
                ],
                [
                  { text: "  const [isOpen, setIsOpen] = ", color: "#e1e4e8" },
                  { text: "useState", color: "#d2a8ff" },
                  { text: "(false);", color: "#e1e4e8" },
                ],
                [
                  { text: "  // 🛑 Copy-pasted, identical state logic", color: "#f43f5e", glow: true },
                ],
                [{ text: "}", color: "#e1e4e8" }],
              ]
        },
      },
      {
        heading: "The Fix  Custom Hook",
        badge: "The Fix  Custom Hook",
        badgeColor: EMERALD,
        body: "The fix is simple. Move the useState and the toggle function into a regular function whose name starts with use. This function can call other hooks internally, because React tracks hooks by call order, not by which component calls them.",
        code: {
          filename: "useToggle.ts",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Extract into a custom hook", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "useToggle", color: "#d2a8ff" },
                  { text: "(initial = ", color: "#e1e4e8" },
                  { text: "false", color: "#79c0ff" },
                  { text: ") {", color: "#e1e4e8" },
                ],
                [
                  { text: "  const [value, setValue] = ", color: "#e1e4e8" },
                  { text: "useState", color: "#d2a8ff" },
                  { text: "(initial);", color: "#e1e4e8" },
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "  const toggle = ", color: "#e1e4e8" },
                  { text: "() => setValue(v => !v);", color: "#79c0ff" },
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "  return ", color: "#ff7b72" },
                  { text: "[value, toggle];", color: "#e1e4e8" },
                ],
                [{ text: "}", color: "#e1e4e8" }],
                [{ text: "// ⚡ Just a function that calls other hooks", color: "#7ee787", glow: true }],
              ]
        },
      },
      {
        heading: "Before vs After",
        badge: "Before vs After",
        badgeColor: EMERALD,
        body: "Before, every component owns its own duplicated state and handler, with logic scattered everywhere. After, one custom hook owns the logic once, and every component just calls useToggle to reuse it.",
      },
      {
        heading: "Wrong: Wrong vs. Correct Usage",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Using it looks just like any built-in hook. Correct: call useToggle at the top level of your component. Wrong: naming it toggleHook, or calling it inside an if statement. That breaks React's hook order and crashes your app.",
        code: {
          filename: "Modal.wrong.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Wrong — breaks the Rules of Hooks", color: "#f43f5e", glow: true }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "Modal", color: "#d2a8ff" },
                  { text: "({ show }) {", color: "#e1e4e8" },
                ],
                [
                  { text: "  if ", color: "#ff7b72" },
                  { text: "(show) {", color: "#e1e4e8" },
                ],
                [
                  { text: "    const [isOpen, toggle] = ", color: "#e1e4e8" },
                  { text: "useToggle", color: "#d2a8ff" },
                  { text: "();", color: "#e1e4e8" },
                ],
                [{ text: "  }", color: "#e1e4e8" }],
                [{ text: "}", color: "#e1e4e8" }],
              ]
        },
      },
      {
        heading: "Correct: Wrong vs. Correct Usage",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Using it looks just like any built-in hook. Correct: call useToggle at the top level of your component. Wrong: naming it toggleHook, or calling it inside an if statement. That breaks React's hook order and crashes your app.",
        code: {
          filename: "Modal.correct.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Correct — called at the top level", color: "#7ee787", glow: true }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "Modal", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" },
                ],
                [
                  { text: "  const [isOpen, toggle] = ", color: "#e1e4e8" },
                  { text: "useToggle", color: "#d2a8ff" },
                  { text: "(false);", color: "#e1e4e8" },
                ],
                [
                  { text: "  return ", color: "#ff7b72" },
                  { text: "<button onClick={toggle}>Toggle</button>;", color: "#79c0ff" },
                ],
                [{ text: "}", color: "#e1e4e8" }],
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Reusing stateful logic?", answer: "Custom Hook", color: EMERALD },
      { question: "Naming convention?", answer: "use Prefix", color: CYAN },
      { question: "Calling inside if/loop?", answer: "Not Allowed", color: ROSE },
      { question: "Sharing markup too?", answer: "Component Instead", color: VIOLET },
    ],
    keyTakeaways: [
      "Extract — Shared stateful logic into one hook",
      "Prefix — Function name must start with use",
      "Top-Level — Never call inside loops or conditions",
      "Reuse — One hook, unlimited components",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "useeffect-cleanup-function",
      "usememo-vs-usecallback",
    ],
  },

  {
    slug: "context-api-vs-redux-when-you-actually-need-redux",
    day: 12,
    title: "Context API vs Redux — When You Actually Need Redux",
    shortTitle: "Context API vs Redux",
    badge: "Day 012",
    accentColor: VIOLET,
    difficulty: "Intermediate",
    category: "Architecture",
    description:
      "Is your React context slowing down your app? Let's figure out when the built-in Context API is enough, and when you actually need Redux. Let's compare them in under ninety seconds.",
    sections: [
      {
        heading: "Context API  Built-in",
        badge: "Context API  Built-in",
        badgeColor: VIOLET,
        body: "Context API is designed to solve prop drilling, not state management. It lets you pass data directly down the component tree without manually threading props. When the value changes, all consumers re-render, which is fine for low-frequency updates like themes.",
        code: {
          filename: "UserProvider.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🌐 Context API: Prop drilling solution", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "UserContext ", color: "#79c0ff" },
                  { text: "= ", color: "#ff7b72" },
                  { text: "createContext", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "null", color: "#79c0ff" },
                  { text: ");", color: "#e1e4e8" },
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "App", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" },
                ],
                [
                  { text: "  return (", color: "#e1e4e8" },
                ],
                [
                  { text: "    <", color: "#e1e4e8" },
                  { text: "UserContext.Provider ", color: "#79c0ff" },
                  { text: "value", color: "#ff7b72" },
                  { text: "={user}>", color: "#e1e4e8" },
                ],
                [
                  { text: "      <Dashboard />", color: "#e1e4e8" },
                ],
                [
                  { text: "    </UserContext.Provider>", color: "#e1e4e8" },
                ],
                [
                  { text: "  );", color: "#e1e4e8" },
                ],
                [{ text: "}", color: "#e1e4e8" }],
              ]
        },
      },
      {
        heading: "Redux Store  Global State",
        badge: "Redux Store  Global State",
        badgeColor: VIOLET,
        body: "Redux is a full state management system. It uses a single global store, actions, and reducers. Crucially, Redux selectors ensure components only re-render if the specific slice of state they select actually changes, avoiding unnecessary re-renders.",
        code: {
          filename: "UserProfile.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// ⚡ Redux: State management with selectors", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "Profile", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" },
                ],
                [
                  { text: "  // 🎯 Only re-renders if user slice changes", color: "#7ee787", glow: true },
                ],
                [
                  { text: "  const ", color: "#ff7b72" },
                  { text: "user ", color: "#79c0ff" },
                  { text: "= ", color: "#ff7b72" },
                  { text: "useSelector", color: "#d2a8ff" },
                  { text: "((s) => s.user);", color: "#e1e4e8" },
                ],
                [
                  { text: "  const ", color: "#ff7b72" },
                  { text: "dispatch ", color: "#79c0ff" },
                  { text: "= ", color: "#ff7b72" },
                  { text: "useDispatch", color: "#d2a8ff" },
                  { text: "();", color: "#e1e4e8" },
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "  const ", color: "#ff7b72" },
                  { text: "update ", color: "#79c0ff" },
                  { text: "= () => dispatch(editUser(name));", color: "#e1e4e8" },
                ],
                [{ text: "}", color: "#e1e4e8" }],
              ]
        },
      },
      {
        heading: "Context vs Redux",
        badge: "Context vs Redux",
        badgeColor: VIOLET,
        body: "Let's compare them. Context API is simple, built-in, but triggers full re-renders for all consumers when the context value changes. Redux is complex, requires boilerplate, but gives you fine-grained selector optimization and powerful time-travel debugging.",
      },
      {
        heading: "Wrong: Wrong vs. Correct Pattern",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here is the key mistake: putting high-frequency, complex state like real-time data or form inputs into a single global Context. That causes a re-render storm. For fast, high-frequency updates, Redux is the correct, performant choice.",
        code: {
          filename: "ContextStorm.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Wrong: Heavy/frequent state updates in context", color: "#f43f5e", glow: true }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "GlobalStateContext ", color: "#79c0ff" },
                  { text: "= createContext(null);", color: "#e1e4e8" },
                ],
                [
                  { text: "// 🛑 Re-renders the entire application on every keystroke", color: "#8b949e" },
                ],
                [
                  { text: "const [inputVal, setInputVal] = useState('');", color: "#e1e4e8" },
                ],
              ]
        },
      },
      {
        heading: "Correct: Wrong vs. Correct Pattern",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here is the key mistake: putting high-frequency, complex state like real-time data or form inputs into a single global Context. That causes a re-render storm. For fast, high-frequency updates, Redux is the correct, performant choice.",
        code: {
          filename: "ReduxSlices.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Correct: Redux selectors limit re-renders", color: "#7ee787", glow: true }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "inputVal ", color: "#79c0ff" },
                  { text: "= useSelector(s => s.form.input);", color: "#e1e4e8" },
                ],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "dispatch ", color: "#79c0ff" },
                  { text: "= useDispatch();", color: "#e1e4e8" },
                ],
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Low-frequency data (Theme/Auth)?", answer: "Context API", color: CYAN },
      { question: "High-frequency updates (Forms/Data)?", answer: "Redux Store", color: VIOLET },
      { question: "Need Middleware or DevTools?", answer: "Redux Store", color: VIOLET },
      { question: "Simple app, minor state?", answer: "Context API", color: CYAN },
    ],
    keyTakeaways: [
      "Context API — For low-freq updates (Theme/Auth)",
      "Redux Store — For high-freq or complex states",
      "Selectors — Redux selectors limit consumer re-renders",
      "DevTools — Redux provides time-travel debugging",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "custom-hooks-build-one-in-60-seconds",
      "react-fiber-why-react-got-faster",
    ],
  },

  {
    slug: "error-boundaries-catch-crashes-gracefully",
    day: 13,
    title: "Error Boundaries — Catch Crashes Gracefully",
    shortTitle: "Error Boundaries",
    badge: "Day 013",
    accentColor: VIOLET,
    difficulty: "Intermediate",
    category: "Architecture",
    description:
      "What happens when a React component crashes in production? The entire page goes blank. Let's learn how to catch React crashes gracefully using Error Boundaries in under ninety seconds.",
    sections: [
      {
        heading: "Defining The Boundary",
        badge: "Defining The Boundary",
        badgeColor: VIOLET,
        body: "An Error Boundary is a class component that implements componentDidCatch or getDerivedStateFromError. It acts like a try catch block for components, intercepting errors during rendering, lifecycles, or child constructors.",
        code: {
          filename: "ErrorBoundary.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🛡️ Class Component: Error Boundary", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "class ", color: "#ff7b72" },
                  { text: "ErrorBoundary ", color: "#79c0ff" },
                  { text: "extends ", color: "#ff7b72" },
                  { text: "React.Component ", color: "#d2a8ff" },
                  { text: "{", color: "#e1e4e8" }
                ],
                [
                  { text: "  state = { ", color: "#e1e4e8" },
                  { text: "hasError: ", color: "#79c0ff" },
                  { text: "false ", color: "#ff7b72" },
                  { text: "};", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "  static ", color: "#ff7b72" },
                  { text: "getDerivedStateFromError", color: "#d2a8ff", glow: true },
                  { text: "() {", color: "#e1e4e8" }
                ],
                [
                  { text: "    // 🎯 Next render shows fallback UI", color: "#8b949e" }
                ],
                [
                  { text: "    return { ", color: "#e1e4e8" },
                  { text: "hasError: ", color: "#79c0ff" },
                  { text: "true ", color: "#ff7b72" },
                  { text: "};", color: "#e1e4e8" }
                ],
                [
                  { text: "  }", color: "#e1e4e8" }
                ],
                [{ text: "}", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Fallback UI Render",
        badge: "Fallback UI Render",
        badgeColor: VIOLET,
        body: "When a crash is caught, the error boundary updates state and renders a fallback UI, like a friendly error card, instead of letting the entire page crash. This isolates the error so the rest of the application remains functional.",
        code: {
          filename: "ErrorBoundary.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// ⚙️ Fallback UI Rendering logic", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "render() {", color: "#e1e4e8" }
                ],
                [
                  { text: "  if (", color: "#ff7b72" },
                  { text: "this.state.hasError", color: "#79c0ff" },
                  { text: ") {", color: "#e1e4e8" }
                ],
                [
                  { text: "    // 🎨 Render fallback UI instead of crashing", color: "#7ee787", glow: true }
                ],
                [
                  { text: "    return <", color: "#e1e4e8" },
                  { text: "ErrorCard ", color: "#79c0ff" },
                  { text: "/>;", color: "#e1e4e8" }
                ],
                [
                  { text: "  }", color: "#e1e4e8" }
                ],
                [
                  { text: "  return ", color: "#ff7b72" },
                  { text: "this.props.children;", color: "#79c0ff" }
                ],
                [{ text: "}", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Crash Behavior comparison",
        badge: "Crash Behavior comparison",
        badgeColor: VIOLET,
        body: "Let's compare them. Standard React crashes unmount the whole tree, showing a blank screen to users. Error boundaries catch errors, display fallback UI, and can even log crashes to services like Sentry, keeping the app alive.",
      },
      {
        heading: "Wrong: Boundary Limits",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here is the key mistake: trying to catch asynchronous errors in event handlers or fetch calls with error boundaries. They only catch rendering errors. Use normal try-catch blocks for async actions and event handlers.",
        code: {
          filename: "BrokenAsync.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Wrong: Expecting boundary to catch async crashes", color: "#f43f5e", glow: true }],
                [
                  { text: "useEffect(() => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  // 🛑 Boundary CANNOT catch async event crashes!", color: "#8b949e" }
                ],
                [
                  { text: "  fetch('/api').then(() => { throw new Error(); });", color: "#e1e4e8" }
                ],
                [{ text: "}, []);", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Correct: Boundary Limits",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here is the key mistake: trying to catch asynchronous errors in event handlers or fetch calls with error boundaries. They only catch rendering errors. Use normal try-catch blocks for async actions and event handlers.",
        code: {
          filename: "SafeAsync.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Correct: Handle async errors with local try-catch", color: "#7ee787", glow: true }],
                [
                  { text: "try {", color: "#e1e4e8" }
                ],
                [
                  { text: "  await fetch('/api');", color: "#e1e4e8" }
                ],
                [
                  { text: "} catch (err) {", color: "#e1e4e8" }
                ],
                [
                  { text: "  setError(err); // 🎯 Update UI state locally", color: "#8b949e" }
                ],
                [{ text: "}", color: "#e1e4e8" }]
              ]
        },
      },
    ],
    decisionRules: [
      { question: "React rendering crash?", answer: "Error Boundary", color: CYAN },
      { question: "Async fetch or API errors?", answer: "Try / Catch", color: VIOLET },
      { question: "Button / Event click crash?", answer: "Try / Catch", color: VIOLET },
      { question: "Third-party widget isolation?", answer: "Error Boundary", color: CYAN },
    ],
    keyTakeaways: [
      "Fallback UI — Show friendly state instead of blank screen",
      "Isolate Crashes — Prevent a single widget crash from taking down app",
      "Render Only — Boundaries only catch rendering errors",
      "Async Catch — Use try-catch blocks for API/events",
    ],
    relatedSlugs: [
      "react-fiber-why-react-got-faster",
      "lazy-loading-suspense-in-react",
      "synthetic-events-in-react-explained",
    ],
  },

  {
    slug: "lazy-loading-suspense-in-react",
    day: 14,
    title: "React Lazy Loading & Suspense — Load on Demand",
    shortTitle: "Lazy Loading & Suspense",
    badge: "Day 014",
    accentColor: VIOLET,
    difficulty: "Intermediate",
    category: "Performance",
    description:
      "Why does your app take forever to load on a slow connection? Because you're shipping the entire app in one giant bundle. Let's fix that with React Lazy and Suspense in under ninety seconds.",
    sections: [
      {
        heading: "Splitting The Bundle",
        badge: "Splitting The Bundle",
        badgeColor: VIOLET,
        body: "React lazy takes a function that calls a dynamic import, and returns a regular component. Instead of bundling everything upfront, its code is fetched only when it's actually needed, splitting your JavaScript into smaller chunks.",
        code: {
          filename: "Dashboard.lazy.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 📦 Lazy load a heavy component", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "Dashboard ", color: "#79c0ff" },
                  { text: "= ", color: "#e1e4e8" },
                  { text: "React.lazy", color: "#d2a8ff", glow: true },
                  { text: "(() => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  return ", color: "#ff7b72" },
                  { text: "import", color: "#d2a8ff" },
                  { text: "(", color: "#e1e4e8" },
                  { text: "'./Dashboard'", color: "#a5d6ff" },
                  { text: ");", color: "#e1e4e8" }
                ],
                [{ text: "});", color: "#e1e4e8" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "// 🎯 Chunk downloads only when Dashboard renders", color: "#7ee787", glow: true }
                ]
              ]
        },
      },
      {
        heading: "Suspense Boundary",
        badge: "Suspense Boundary",
        badgeColor: VIOLET,
        body: "But lazy components load asynchronously, so React needs something to show while waiting. Wrap them in a Suspense boundary with a fallback prop, like a spinner or skeleton screen, shown until the chunk finishes downloading.",
        code: {
          filename: "App.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// ⏳ Show a fallback while the chunk loads", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "<", color: "#e1e4e8" },
                  { text: "Suspense ", color: "#79c0ff" },
                  { text: "fallback", color: "#ff7b72" },
                  { text: "={<", color: "#e1e4e8" },
                  { text: "Spinner ", color: "#79c0ff" },
                  { text: "/>}>", color: "#e1e4e8" }
                ],
                [
                  { text: "  <", color: "#e1e4e8" },
                  { text: "Dashboard ", color: "#79c0ff", glow: true },
                  { text: "/>", color: "#e1e4e8" }
                ],
                [
                  { text: "</", color: "#e1e4e8" },
                  { text: "Suspense", color: "#79c0ff" },
                  { text: ">", color: "#e1e4e8" }
                ]
              ]
        },
      },
      {
        heading: "Bundle Loading Comparison",
        badge: "Bundle Loading Comparison",
        badgeColor: VIOLET,
        body: "Let's compare them. A single bundle forces users to download every route and feature before anything renders. Code splitting with lazy and Suspense loads only what's visible first, streaming the rest in as users navigate.",
      },
      {
        heading: "Wrong: The Common Mistake",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here's the common mistake. Rendering a lazy component without a surrounding Suspense boundary throws an error and crashes your app. Always wrap every lazy import in Suspense, even if the fallback is just a simple spinner.",
        code: {
          filename: "Broken.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Wrong: no Suspense wrapper around lazy import", color: "#f43f5e", glow: true }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "Modal ", color: "#79c0ff" },
                  { text: "= ", color: "#e1e4e8" },
                  { text: "React.lazy", color: "#d2a8ff" },
                  { text: "(() => ", color: "#e1e4e8" },
                  { text: "import", color: "#d2a8ff" },
                  { text: "('./Modal'));", color: "#e1e4e8" }
                ],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "App", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" }
                ],
                [
                  { text: "  return <", color: "#e1e4e8" },
                  { text: "Modal ", color: "#79c0ff" },
                  { text: "/>; ", color: "#e1e4e8" },
                  { text: "// 🛑 Throws & crashes", color: "#8b949e" }
                ],
                [{ text: "}", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Correct: The Common Mistake",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here's the common mistake. Rendering a lazy component without a surrounding Suspense boundary throws an error and crashes your app. Always wrap every lazy import in Suspense, even if the fallback is just a simple spinner.",
        code: {
          filename: "Fixed.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Correct: always wrap lazy in Suspense", color: "#7ee787", glow: true }],
                [
                  { text: "function ", color: "#ff7b72" },
                  { text: "App", color: "#d2a8ff" },
                  { text: "() {", color: "#e1e4e8" }
                ],
                [
                  { text: "  return (", color: "#e1e4e8" }
                ],
                [
                  { text: "    <", color: "#e1e4e8" },
                  { text: "Suspense ", color: "#79c0ff" },
                  { text: "fallback", color: "#ff7b72" },
                  { text: "={<", color: "#e1e4e8" },
                  { text: "Spinner ", color: "#79c0ff" },
                  { text: "/>}>", color: "#e1e4e8" }
                ],
                [
                  { text: "      <", color: "#e1e4e8" },
                  { text: "Modal ", color: "#79c0ff" },
                  { text: "/>", color: "#e1e4e8" }
                ],
                [
                  { text: "    </", color: "#e1e4e8" },
                  { text: "Suspense", color: "#79c0ff" },
                  { text: ">", color: "#e1e4e8" }
                ],
                [{ text: "  );", color: "#e1e4e8" }],
                [{ text: "}", color: "#e1e4e8" }]
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Heavy route or page?", answer: "Lazy Load", color: CYAN },
      { question: "Rarely used modal/chart?", answer: "Lazy Load", color: CYAN },
      { question: "Small above-fold widget?", answer: "Load Eagerly", color: VIOLET },
      { question: "Needed on first paint?", answer: "Load Eagerly", color: VIOLET },
    ],
    keyTakeaways: [
      "Suspense Required — Always wrap lazy components in a boundary",
      "Fallback UI — Show a spinner while chunks download",
      "Fast First Paint — Users see content sooner on slow networks",
    ],
    relatedSlugs: [
      "ssr-ssg-isr-csr-differences",
      "react-fiber-why-react-got-faster",
      "error-boundaries-catch-crashes-gracefully",
    ],
  },

  {
    slug: "why-you-shouldnt-mutate-state-directly",
    day: 15,
    title: "Why You Shouldn't Mutate State Directly",
    shortTitle: "Mutating State",
    badge: "Day 015",
    accentColor: VIOLET,
    difficulty: "Beginner",
    category: "Rendering",
    description:
      "Why does your React component refuse to re-render when you update an array or object? The culprit is direct state mutation. Let's learn why you should never mutate React state directly, in under ninety seconds.",
    sections: [
      {
        heading: "Reference Equality",
        badge: "Reference Equality",
        badgeColor: VIOLET,
        body: "React uses reference equality checks to see if state has changed. When you mutate an object directly, its memory address remains exactly the same. React thinks nothing changed, so it skips the re-render.",
        code: {
          filename: "ReferenceCheck.ts",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🧠 React's Reference Check (Object.is)", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "oldState ", color: "#79c0ff" },
                  { text: "= { ", color: "#e1e4e8" },
                  { text: "count: ", color: "#79c0ff" },
                  { text: "1 ", color: "#ff7b72" },
                  { text: "};", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [{ text: "// 🛑 Mutation: Modifies data but same reference", color: "#f43f5e" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "newState ", color: "#79c0ff" },
                  { text: "= oldState;", color: "#e1e4e8" }
                ],
                [
                  { text: "newState", color: "#e1e4e8" },
                  { text: ".", color: "#ff7b72" },
                  { text: "count ", color: "#79c0ff" },
                  { text: "= ", color: "#ff7b72" },
                  { text: "2;", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "Object", color: "#79c0ff" },
                  { text: ".", color: "#ff7b72" },
                  { text: "is", color: "#d2a8ff", glow: true },
                  { text: "(oldState, newState); // 🛑 TRUE (No Render)", color: "#f43f5e" }
                ]
              ]
        },
      },
      {
        heading: "Solving with Immutability",
        badge: "Solving with Immutability",
        badgeColor: VIOLET,
        body: "The solution is immutability. Always create a new object or array by copying the old one using the spread operator or modern methods. This changes the reference, forcing React to trigger a render.",
        code: {
          filename: "ImmutableCheck.ts",
          accentColor: VIOLET,
          lines: [
                [{ text: "// ✨ Immutability: Create new reference", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "oldState ", color: "#79c0ff" },
                  { text: "= { ", color: "#e1e4e8" },
                  { text: "count: ", color: "#79c0ff" },
                  { text: "1 ", color: "#ff7b72" },
                  { text: "};", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [{ text: "// 🎯 Spread operator creates a brand new object", color: "#7ee787", glow: true }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "newState ", color: "#79c0ff" },
                  { text: "= { ", color: "#e1e4e8" },
                  { text: "...oldState", color: "#ff7b72" },
                  { text: ", count: ", color: "#79c0ff" },
                  { text: "2 ", color: "#ff7b72" },
                  { text: "};", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "Object", color: "#79c0ff" },
                  { text: ".", color: "#ff7b72" },
                  { text: "is", color: "#d2a8ff" },
                  { text: "(oldState, newState); // 🎯 FALSE (Re-renders!)", color: "#7ee787" }
                ]
              ]
        },
      },
      {
        heading: "Mutation vs Immutability",
        badge: "Mutation vs Immutability",
        badgeColor: VIOLET,
        body: "Let's compare them. Direct mutation is fast to write, but keeps the same reference, causing silent bugs and rendering failures. Immutable updates create a new reference, ensuring predictable renders and compatibility with React DevTools.",
      },
      {
        heading: "Wrong: Mutation Mistakes",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here is the key mistake: pushing directly to a state array or modifying an object key before calling set state. Instead, use the spread operator to create a shallow copy and update the value in a single step.",
        code: {
          filename: "DirectPush.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Wrong: Mutating items array directly", color: "#f43f5e", glow: true }],
                [
                  { text: "const [items, setItems] = useState([]);", color: "#e1e4e8" }
                ],
                [
                  { text: "const addItem = () => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  items.push('item'); // 🛑 Mutating state directly!", color: "#8b949e" }
                ],
                [
                  { text: "  setItems(items);    // 🛑 React won't re-render", color: "#8b949e" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Correct: Mutation Mistakes",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here is the key mistake: pushing directly to a state array or modifying an object key before calling set state. Instead, use the spread operator to create a shallow copy and update the value in a single step.",
        code: {
          filename: "SpreadArray.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Correct: Copy array and update reference", color: "#7ee787", glow: true }],
                [
                  { text: "const [items, setItems] = useState([]);", color: "#e1e4e8" }
                ],
                [
                  { text: "const addItem = () => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  // 🎯 Creating new array reference via spread", color: "#8b949e" }
                ],
                [
                  { text: "  setItems([...items, 'item']);", color: "#e1e4e8" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Simple Array updates?", answer: "Spread Operator", color: CYAN },
      { question: "Shallow Object keys?", answer: "Spread Operator", color: CYAN },
      { question: "Deeply Nested structures?", answer: "Immer Library", color: VIOLET },
      { question: "State history tracking?", answer: "Immutability", color: EMERALD },
    ],
    keyTakeaways: [
      "References — React tracks references, not content",
      "New Address — Always return new object references",
      "Spread (...) — Fastest way to create shallow copies",
      "Nest States — Use Immer to simplify nested updates",
    ],
    relatedSlugs: [
      "usestate-vs-useref",
      "usememo-vs-usecallback",
      "virtual-dom-vs-real-dom",
    ],
  },

  {
    slug: "synthetic-events-in-react-explained",
    day: 16,
    title: "Synthetic Events in React Explained",
    shortTitle: "Synthetic Events",
    badge: "Day 016",
    accentColor: VIOLET,
    difficulty: "Intermediate",
    category: "Architecture",
    description:
      "Why does React wrap native browser events in a custom object called SyntheticEvent? Is it just for cross-browser compatibility, or is there something deeper happening? Let's dissect React's event system in under ninety seconds.",
    sections: [
      {
        heading: "Event Normalization",
        badge: "Event Normalization",
        badgeColor: VIOLET,
        body: "When you register an event handler like on click in React, the argument received is a SyntheticEvent wrapper. It normalizes event properties across different browsers, so you get identical behavior whether your users are on Chrome, Safari, or Firefox.",
        code: {
          filename: "SyntheticWrapper.ts",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🧠 SyntheticEvent Normalization", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "handleClick ", color: "#79c0ff" },
                  { text: "= (e: React.MouseEvent) => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  // e is a SyntheticEvent wrapper", color: "#8b949e" }
                ],
                [
                  { text: "  console", color: "#e1e4e8" },
                  { text: ".", color: "#ff7b72" },
                  { text: "log", color: "#d2a8ff", glow: true },
                  { text: "(e.type); // 'click'", color: "#7ee787" }
                ],
                [
                  { text: "  console", color: "#e1e4e8" },
                  { text: ".", color: "#ff7b72" },
                  { text: "log", color: "#d2a8ff" },
                  { text: "(e.nativeEvent); // 🌐 Real event", color: "#7ee787" }
                ],
                [
                  { text: "};", color: "#e1e4e8" }
                ]
              ]
        },
      },
      {
        heading: "Event Delegation",
        badge: "Event Delegation",
        badgeColor: VIOLET,
        body: "Behind the scenes, React doesn't attach event listeners to individual DOM elements. Instead, it uses event delegation. In React seventeen and above, a single listener for each event type is attached to your root application container, saving memory and improving performance.",
        code: {
          filename: "EventDelegation.ts",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🌐 React 17+ Event Delegation", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "// Bind listeners once at root level:", color: "#8b949e" }
                ],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "root ", color: "#79c0ff" },
                  { text: "= document.getElementById('root');", color: "#e1e4e8" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "root", color: "#e1e4e8" },
                  { text: ".", color: "#ff7b72" },
                  { text: "addEventListener", color: "#d2a8ff", glow: true },
                  { text: "(", color: "#e1e4e8" },
                  { text: "'click'", color: "#a5d6ff" },
                  { text: ", handleEvent);", color: "#e1e4e8" }
                ]
              ]
        },
      },
      {
        heading: "Native vs Synthetic",
        badge: "Native vs Synthetic",
        badgeColor: VIOLET,
        body: "Let's compare them. Native browser events attach handlers directly to DOM elements and vary by browser. React Synthetic Events use a single delegator on the root element, wrap the native event with standard behavior, and handle memory optimization automatically.",
      },
      {
        heading: "Wrong: Event Pooling",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here is a classic gotcha. In React sixteen and below, events were pooled and reused, meaning event properties were nullified in async code unless you called e dot persist. In React seventeen, event pooling is removed, making async event access safe and simple.",
        code: {
          filename: "React16Pooling.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ React 16 & Below: Event Pooling Bug", color: "#f43f5e", glow: true }],
                [
                  { text: "const handleClick = (e) => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  setTimeout(() => {", color: "#e1e4e8" }
                ],
                [
                  { text: "    console.log(e.target); // 🛑 Nullified / Error!", color: "#8b949e" }
                ],
                [
                  { text: "  }, 100);", color: "#e1e4e8" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Correct: Event Pooling",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here is a classic gotcha. In React sixteen and below, events were pooled and reused, meaning event properties were nullified in async code unless you called e dot persist. In React seventeen, event pooling is removed, making async event access safe and simple.",
        code: {
          filename: "React17NoPooling.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ React 17+: Safe Async Access (No Pooling)", color: "#7ee787", glow: true }],
                [
                  { text: "const handleClick = (e) => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  setTimeout(() => {", color: "#e1e4e8" }
                ],
                [
                  { text: "    console.log(e.target); // 🎯 Works perfectly!", color: "#7ee787" }
                ],
                [
                  { text: "  }, 100);", color: "#e1e4e8" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Need original browser event?", answer: "e.nativeEvent", color: CYAN },
      { question: "Block parent event bubble?", answer: "e.stopPropagation()", color: CYAN },
      { question: "Async access in React 16-?", answer: "Call e.persist()", color: VIOLET },
      { question: "Async access in React 17+?", answer: "Safe by default", color: EMERALD },
    ],
    keyTakeaways: [
      "Normalization — Unified cross-browser event wrapper",
      "Delegation — Listeners bound to App Root container",
      "No Pooling — Safe async access out of the box in v17+",
      "Native API — Raw browser event inside e.nativeEvent",
    ],
    relatedSlugs: [
      "react-fiber-why-react-got-faster",
      "react-portals-what-theyre-for",
      "controlled-vs-uncontrolled-components",
    ],
  },

  {
    slug: "react-portals-what-theyre-for",
    day: 17,
    title: "React Portals — What They're For",
    shortTitle: "React Portals",
    badge: "Day 017",
    accentColor: VIOLET,
    difficulty: "Beginner",
    category: "Rendering",
    description:
      "Have you ever built a modal or a tooltip in React only to find it cropped by a parent's overflow hidden or messed up by z-index styling? React Portals are the ultimate solution to this common styling nightmare. Let's see how they work.",
    sections: [
      {
        heading: "Traditional Subtree",
        badge: "Traditional Subtree",
        badgeColor: VIOLET,
        body: "Normally, when you render a component in React, it mounts as a direct child of its closest parent element in the HTML DOM tree. While this is great for structure, it forces your floating elements like modals to inherit CSS limitations from parent containers.",
        code: {
          filename: "TraditionalSubtree.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// ❌ Traditional Rendering (Direct Subtree)", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "ParentComponent ", color: "#79c0ff" },
                  { text: "= () => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  return (", color: "#e1e4e8" }
                ],
                [
                  { text: "    <div className=\"overflow-hidden\">", color: "#ff7b72" }
                ],
                [
                  { text: "      {/* Modal is nested inside parent's DOM subtree */}", color: "#8b949e" }
                ],
                [
                  { text: "      <Modal />", color: "#79c0ff", glow: true }
                ],
                [
                  { text: "    </div>", color: "#ff7b72" }
                ],
                [
                  { text: "  );", color: "#e1e4e8" }
                ],
                [
                  { text: "};", color: "#e1e4e8" }
                ]
              ]
        },
      },
      {
        heading: "Portal Rendering",
        badge: "Portal Rendering",
        badgeColor: VIOLET,
        body: "With React Portals, you can render a child component into a completely different part of the DOM tree, like directly under the document body. Under the hood, React retains full event bubbling and context API behaviors, even though the DOM node lives elsewhere.",
        code: {
          filename: "PortalModal.tsx",
          accentColor: VIOLET,
          lines: [
                [{ text: "// 🌐 Portal Rendering (Escapes parent subtree)", color: "#8b949e" }],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "import ", color: "#ff7b72" },
                  { text: "{ createPortal } ", color: "#e1e4e8" },
                  { text: "from ", color: "#ff7b72" },
                  { text: "'react-dom';", color: "#a5d6ff" }
                ],
                [{ text: "", color: "#e1e4e8" }],
                [
                  { text: "const ", color: "#ff7b72" },
                  { text: "PortalModal ", color: "#79c0ff" },
                  { text: "= () => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  return ", color: "#ff7b72" },
                  { text: "createPortal", color: "#d2a8ff", glow: true },
                  { text: "(", color: "#e1e4e8" }
                ],
                [
                  { text: "    <div className=\"modal\">Content</div>,", color: "#a5d6ff" }
                ],
                [
                  { text: "    document.body // 🌐 Mounts under body", color: "#7ee787" }
                ],
                [
                  { text: "  );", color: "#e1e4e8" }
                ],
                [
                  { text: "};", color: "#e1e4e8" }
                ]
              ]
        },
      },
      {
        heading: "Normal vs Portal",
        badge: "Normal vs Portal",
        badgeColor: VIOLET,
        body: "Let's compare. Normal rendering nests the element deep inside the DOM, meaning parent styles like position relative, overflow hidden, or z-index constraints will clip or position your element incorrectly. Portal rendering mounts the element directly to a top-level node, completely bypassing parent layout rules.",
      },
      {
        heading: "Wrong: Standard vs Portal",
        badge: "Wrong",
        badgeColor: ROSE,
        body: "Here is how you write it. In a standard setup, you render a div which stays trapped inside the parent's container. By wrapping your content in create Portal and passing document dot body as the target, the modal renders at the top level of the page, completely free from parent containment.",
        code: {
          filename: "TrappedModal.tsx",
          accentColor: ROSE,
          lines: [
                [{ text: "// ❌ Trapped Modal (clipping hazard)", color: "#f43f5e", glow: true }],
                [
                  { text: "const Modal = ({ children }) => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  // Render inside normal component subtree", color: "#8b949e" }
                ],
                [
                  { text: "  return <div className=\"modal\">{children}</div>;", color: "#e1e4e8" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
      {
        heading: "Correct: Standard vs Portal",
        badge: "Correct",
        badgeColor: EMERALD,
        body: "Here is how you write it. In a standard setup, you render a div which stays trapped inside the parent's container. By wrapping your content in create Portal and passing document dot body as the target, the modal renders at the top level of the page, completely free from parent containment.",
        code: {
          filename: "PortalEscape.tsx",
          accentColor: EMERALD,
          lines: [
                [{ text: "// ✅ Free Modal (escapes clipping)", color: "#7ee787", glow: true }],
                [
                  { text: "const Modal = ({ children }) => {", color: "#e1e4e8" }
                ],
                [
                  { text: "  // Escape to document.body container node", color: "#8b949e" }
                ],
                [
                  { text: "  return createPortal(children, document.body);", color: "#7ee787" }
                ],
                [{ text: "};", color: "#e1e4e8" }]
              ]
        },
      },
    ],
    decisionRules: [
      { question: "Escape parent overflow: hidden?", answer: "createPortal", color: CYAN },
      { question: "Floating components (Modals/Tooltips)?", answer: "createPortal", color: CYAN },
      { question: "Natural event bubbling needed?", answer: "React handles it", color: EMERALD },
      { question: "Standard layout/page contents?", answer: "Normal Render", color: VIOLET },
    ],
    keyTakeaways: [
      "DOM Escape — Render anywhere in the HTML hierarchy",
      "React Bubbling — Retains full React event & context behavior",
      "Style Safety — Bypasses overflow: hidden & z-index stacking",
      "Best For — Perfect for Modals, Tooltips, & Popovers",
    ],
    relatedSlugs: [
      "virtual-dom-vs-real-dom",
      "synthetic-events-in-react-explained",
      "error-boundaries-catch-crashes-gracefully",
    ],
  },
];

// â”€â”€â”€ Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getRelatedTopics(slug: string): Topic[] {
  const topic = getTopicBySlug(slug);
  if (!topic) return [];
  return topic.relatedSlugs
    .map((s) => getTopicBySlug(s))
    .filter((t): t is Topic => t !== undefined);
}

export function getAllSlugs(): string[] {
  return topics.map((t) => t.slug);
}
