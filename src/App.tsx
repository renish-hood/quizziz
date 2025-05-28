import './index.css';
import Quiz from './components/quiz';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Quiz App</h1>
        <p className="app-description">Test your knowledge with our interactive quiz</p>
      </header>
      <main className="app-content">
        <Quiz />
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Quiz App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
