const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.course.parts.reduce((prev, curr) => prev + curr.exercises, 0)}
  </p>
);

export default Total;
