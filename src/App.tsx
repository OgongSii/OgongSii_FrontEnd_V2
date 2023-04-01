import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import PageTemplate from "./components/Common/PageTemplate";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <PageTemplate>
            <B1ndToastContainer autoClose={5000} limit={6} />
            <Router />
          </PageTemplate>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
