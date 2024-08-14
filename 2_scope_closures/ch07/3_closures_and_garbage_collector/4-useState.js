// Is here any closure present? Why?

function Button() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>+1</button>;
}
