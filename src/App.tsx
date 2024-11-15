



function App() {
  return (
    <main className="w-screen h-max">
      <section className="p-12">
        <div className="grid grid-cols-2">
          {Array(24).fill(0).map((_, index) => (
            <div className="h-full">
              <img className="h-full" key={index} src={`/${index + 1}.JPG`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )

}

export default App
