import 'bulma/css/bulma.css'
import Course  from './Course'
import Angular from '../src/images/angular.jpg'
import Bootstrap from '../src/images/bootstrap5.png'
import Csharp from '../src/images/ccsharp.png'
import KompleWeb from '../src/images/kompleweb.jpg'

function App() {
  
  

  return (
    <div className="App">

<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      My Courses
    </p>
  </div>
</section>
      
      <div className='container'> 
      <section className='section'></section>
        <div className='columns'>
          <div className='column'>
          <Course 
            img = {Angular}
            title="Angular" 
            description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis dolores nesciunt commodi asperiores ut quod quas dignissimos eveniet reiciendis inventore architecto aut aperiam enim nobis, aliquam adipisci repellat ad voluptatem omnis culpa? Ea nihil odit reiciendis enim, illo error maxime perspiciatis harum ipsum fuga. Ducimus repudiandae eveniet eaque non." />
          </div>

          <div className='column'>
          <Course 
            img = {Bootstrap}
            title="Bootsrap 5" 
            description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis dolores nesciunt commodi asperiores ut quod quas dignissimos eveniet reiciendis inventore architecto aut aperiam enim nobis, aliquam adipisci repellat ad voluptatem omnis culpa? Ea nihil odit reiciendis enim, illo error maxime perspiciatis harum ipsum fuga. Ducimus repudiandae eveniet eaque non."/>
          </div>

          <div className='column'>
          <Course 
            img = {Csharp}
            title="Web" 
            description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis dolores nesciunt commodi asperiores ut quod quas dignissimos eveniet reiciendis inventore architecto aut aperiam enim nobis, aliquam adipisci repellat ad voluptatem omnis culpa? Ea nihil odit reiciendis enim, illo error maxime perspiciatis harum ipsum fuga. Ducimus repudiandae eveniet eaque non."/>
      
          </div>

          <div className='column'>
          <Course 
            img = {KompleWeb}
            title="Be Developer" 
            description= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis dolores nesciunt commodi asperiores ut quod quas dignissimos eveniet reiciendis inventore architecto aut aperiam enim nobis, aliquam adipisci repellat ad voluptatem omnis culpa? Ea nihil odit reiciendis enim, illo error maxime perspiciatis harum ipsum fuga. Ducimus repudiandae eveniet eaque non."/>
          </div>
        </div>
      </div>
      

      
      
      
      
    </div>
  )
}

export default App
