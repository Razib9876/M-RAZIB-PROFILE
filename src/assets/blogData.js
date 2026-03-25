const blogData = [
  {
    id: "js-fundamentals",
    category: "javascript",
    title: "The JavaScript Awakening",
    description:
      "My journey started in early 2024 with a lot of confusion. I remember struggling with the concept of 'Asynchronous' code. I would write a fetch request and wonder why my console.log underneath it returned 'undefined'. The breakthrough came when I stopped just watching tutorials and started drawing the 'Call Stack' and 'Task Queue' on paper. Understanding the Event Loop changed everything. I moved from being terrified of Promises to using Async/Await to write clean, readable logic. This stage taught me that coding isn't about memorizing syntax, but understanding execution context.",
    topics: ["Event Loop", "Closures", "Prototypal Inheritance", "Async/Await"],
  },
  {
    id: "react-js",
    category: "react",
    title: "Thinking in Components",
    description:
      "React felt like magic until I hit 'Prop Drilling'. Building my first large project, I found myself passing data through five layers of components just to update a button color. It was a mess. I solved this by diving deep into the Context API and later, State Management. I learned that React isn't just about UI; it's about state synchronization. I spent weeks refactoring old code to use Functional Components and Custom Hooks, which made my logic reusable. This was the moment I stopped 'coding' and started 'architecting' solutions.",
    topics: ["Virtual DOM", "Hooks API", "Context Provider", "Reconciliation"],
  },
  {
    id: "next-js",
    category: "next",
    title: "The Power of the Server",
    description:
      "Transitioning to Next.js in mid-2024 was a turning point. My biggest problem was understanding when to use Server Components vs. Client Components. I kept getting 'Hydration' errors that took hours to debug. I solved this by mastering the boundary rules and understanding that the server can do the heavy lifting before the user even sees the page. Implementing SEO strategies and Image Optimization made my sites feel professional and blazing fast. It taught me the importance of performance and user experience.",
    topics: ["App Router", "SSR & SSG", "API Routes", "Hydration Boundaries"],
  },
  {
    id: "node-js",
    category: "node",
    title: "Scaling the Backend",
    description:
      "Node.js was intimidating because I couldn't 'see' what I was building like I could with CSS. Handling HTTP requests and middleware felt abstract. My first server crashed constantly because I didn't understand Error Handling or try-catch blocks in async routes. I solved this by building a custom logging system and learning how to use Express middleware effectively. Seeing my own API return JSON data for the first time gave me the confidence to handle full-stack communication.",
    topics: ["Event-Driven Arch", "Middleware", "Streams", "JWT Auth"],
  },
  {
    id: "mongoose",
    category: "mongoose",
    title: "Structuring Chaos",
    description:
      "Database design is where I faced my hardest 'logic' problems. In my early Mongoose schemas, I didn't know whether to Embed data or Reference it. My queries were slow and inefficient. I solved this by studying Data Modeling patterns and learning how to use '.populate()' and Aggregation Pipelines. Seeing a complex relational-style query work perfectly in a NoSQL environment felt like a superpower. Now, I focus on schema validation to ensure my data is clean and consistent before it ever hits the database.",
    topics: ["Schema Design", "Middleware/Hooks", "Aggregation", "Indexing"],
  },
];

export default blogData;
