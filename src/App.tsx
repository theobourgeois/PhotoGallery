
function App() {
  return (
    <main className="w-screen h-max">
      <section className="p-12">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          {Array(24).fill(0).map((_, index) => (
            <div className="object-cover">
              <img className="sm:object-cover sm:h-full" key={index} src={`/${index + 1}.JPG`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )

}

export default App
