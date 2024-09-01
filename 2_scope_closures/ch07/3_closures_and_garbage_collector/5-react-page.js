// Is there any closure present? Why?

function Header() {
  const title = "ACME";
  return <div>{title}</div>;
}

function Page() {
  return (
    <div>
      <Header />
    </div>
  );
}
