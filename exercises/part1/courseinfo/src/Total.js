const Total = (props) => (
  <p>
    Number of exercises{" "}
    {props.part1.exercises + props.part2.exercises + props.part3.exercises}
  </p>
);

export default Total;
