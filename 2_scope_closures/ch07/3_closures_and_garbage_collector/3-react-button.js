// Is here any closure present? Why?

function Button(props) {
  const { label } = props;

  function handleClick() {
    console.log(`Button ${label} was clicked`);
  }

  return <button onClick={handleClick}>{label}</button>;
}
