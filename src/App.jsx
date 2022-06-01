import './App.scss'

function App() {
  return (
    <div className='container'>
      <header className='flex-center'>
        <nav>Header</nav>
      </header>

      <main>
        <div className='main__content-container'>
          <div className='main__content-left'>
            <article className='main__hero'>Hero</article>
            <aside className='main__sidebar'>Sidebar</aside>
          </div>
          <div className='main__content-right'>
            <article>Main Content</article>
            <article>Extra content</article>
          </div>
        </div>

        <div className='main__content-info'>
          <article>Related Images</article>
          <article>Related Posts</article>
        </div>
      </main>

      <footer className='flex-center'>Footer</footer>
    </div>
  )
}

export default App
