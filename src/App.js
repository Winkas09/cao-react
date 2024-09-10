import "./App.css";
import "./pages/NewsPage.css";
import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter.js";
import PageHeader from "./components/PageHeader";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div>
      <PageHeader />
      <PageContent />
      <PageFooter />
      <NewsPage />
    </div>
  );
}

export default App;
