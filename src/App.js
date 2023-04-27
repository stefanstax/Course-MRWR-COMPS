import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";

const App = () => {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      id: 2,
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any project you want",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want",
    },
  ];
  return (
    <>
      {/* <ButtonPage /> */}
      <Accordion items={items} />
    </>
  );
};

export default App;
