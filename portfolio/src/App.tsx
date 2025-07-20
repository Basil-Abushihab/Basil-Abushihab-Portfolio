import { Layout } from "@/components/layout/Layout";
import { TechStackOrbit } from "@/components/tech-stack-orbit/TechStackOrbit";

function App() {
  return (
    <>
      <Layout>
        <TechStackOrbit width = "1000px" height = "1000px" viewBox = "0 0 1000 1000" />
      </Layout>
    </>
  );
}

export default App;
