# CA Monk - Blog Application 
This assignment was provided by CA Monk as part of the interview process. I have completed the assignment according to the requirements and specifications outlined in the README file.

## Installation

### Prerequisites
- Node.js (v18 or higher)
- Git
- React.js knowledge
- Familiarity with TanStack Query, Tailwind CSS, and shadcn/ui.

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd camonk-blog-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the JSON Server (Backend API)**
   ```bash
   npm run server
   ```
   The API will run on `http://localhost:3001`

5. **Start the Development Server (in a new terminal)**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:5173`

## Test the Application
1. **View all blogs**
  - The left panel displays a list of all blogs, with the latest blog shown first.

2. **View blog details**
  - Clicking on any blog card displays its full content in the right panel.

4. **Create a new blog**
  - Click the Add Blog button in the navbar, fill in the form, and submit.
  - After successful creation, you will be redirected to the home page and the newly created blog will be displayed automatically.

5. **Loading states**
  - Skeleton loaders are shown while data is being fetched.

6. **Responsive design**
  - On smaller screens, the blog detail appears first, followed by the blog list.
