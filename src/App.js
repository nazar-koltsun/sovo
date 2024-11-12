const App = () => {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-screen">
      <header className="col-start-2">header</header>
      <aside className="col-start-1 row-start-1 row-end-[-1]">sidebar</aside>
      <main className="col-start-2">main content</main>
    </div>
  );
}

export default App;
