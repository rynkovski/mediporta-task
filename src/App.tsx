import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import TagsPage from "./Pages/TagsPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TagsPage />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
