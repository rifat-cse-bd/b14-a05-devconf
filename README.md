# 🧱 Dev Stack Builder

A responsive web application that allows developers to explore popular development technologies and build their own personalized technology stack.

Users can browse technologies, view their category, difficulty level, rating, and description, and add their favorite technologies to their personal stack.

---

## 🚀 Live Website

🔗 **Live Site:** [https://creative-sundae-a826d2.netlify.app/]

---

## 📂 GitHub Repository

🔗 **GitHub:** [https://github.com/rifat-cse-bd/b14-a05-devconf]

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite
- Lucide React / React Icons

---

## ✨ Features

### 1. Explore Development Technologies

Users can browse different technologies with information such as:

- Technology name
- Category
- Description
- Difficulty level
- Rating
- Technology icon
- Badge

### 2. Build Your Own Technology Stack

Users can add technologies to their personal **Your Stack** section.

The stack shows:

- Technology icon
- Technology name
- Category
- Remove button
- Number of selected technologies

The same technology cannot be added twice.

### 3. Interactive Toast Notifications

The project uses **React-Toastify** to display notifications when users:

- Add a technology
- Try to add a duplicate technology
- Remove a technology
- Remove all technologies

---

# 📊 Technology Data

The technology information is stored in a separate JSON file instead of being hardcoded inside the React component.

Each technology contains information such as:

```json
{
  "id": "react",
  "name": "React",
  "category": "Frontend",
  "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
  "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
  "rating": 4.9,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

---

# 📱 Responsive Design

The website is designed to work across different screen sizes:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The technology cards use a responsive layout that adapts to the screen size.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

JSX makes React components easier to read and write because we can describe the UI using a syntax that looks similar to HTML.

For example:

```jsx
<h1>Dev Stack Builder</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only and should not be changed by the child.

**State** is data that belongs to a component and can change over time. When state changes, React updates the UI.

For example, in this project, technology data is passed to the `TechnologyCard` component using props, while the selected stack is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data.

I used `useState` to manage:

- The technology data
- The selected technology stack
- Loading state
- Error state

For example:

```jsx
const [stack, setStack] = useState([]);
```

Here, `stack` stores the selected technologies and `setStack` updates the stack.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component.

In this project, I used `useEffect` to fetch the technology data from the JSON file when the component loads.

This allows the application to load the technology information instead of hardcoding the data directly inside the component.

Example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify individual items in a list.

A unique key helps React understand which items have been added, removed, or changed.

For example:

```jsx
technologies.map((technology) => (
  <TechnologyCard key={technology.id} technology={technology} />
));
```

Here, `technology.id` is used because each technology has a unique ID.

---

## 6. What is conditional rendering?

Conditional rendering means showing different UI elements depending on a condition.

In this project, conditional rendering is used in the **Your Stack** section.

If no technologies have been selected, an empty message is displayed.

If technologies have been added, the selected technologies are displayed instead.

Example:

```jsx
{
  stack.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    stack.map((technology) => (
      <StackItem key={technology.id} technology={technology} />
    ))
  );
}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using **props**.

For example:

```jsx
<TechnologyCard technology={technology} onAdd={handleAdd} />
```

Here, the parent sends the `technology` data and the `onAdd` function to the child.

The child can then call the function passed through props when the user clicks a button.

For example:

```jsx
<button onClick={() => onAdd(technology)}>Add to Stack</button>
```

This allows the child component to communicate with the parent through a callback function.

---

# 📁 Project Structure

```text
src/
├── components/
│   ├── Technology.jsx
│   └── TechnologyCard.jsx
│
│
├── App.jsx
├── main.jsx
└── index.css

public/
└── ...
```

---

# 🔔 React-Toastify

React-Toastify is used to provide feedback to users through toast notifications.

Notifications are shown for:

- Adding a technology
- Duplicate technology attempts
- Removing a technology
- Removing all technologies

---

# 🎨 Gradient Theme

The project uses a shared gradient theme for the brand, highlighted heading text, and primary buttons.

The gradient follows the assignment's recommended:

**Orange → Pink → Violet**

This creates a consistent visual style throughout the application.

---

# 👨‍💻 Author

**Shekh Rifat Islam**

Built with ❤️ using React.js.

---

## 📄 Assignment

This project was created as part of the **Programming Hero B14-A05 Dev Stack Builder** assignment.
