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
