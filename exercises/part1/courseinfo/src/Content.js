import Part from "./Part";

const Content = (props) =>
  props.parts.map((part, index) => (
    <Part key={index} name={part.name} exercises={part.exercises} />
  ));

export default Content;
