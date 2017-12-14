import css from 'styled-jsx/css'

export default ({ children }) => (
  <div>
    <p>
      Hola
      <span>Chau!</span>
    </p>
    <style jsx>{`
      p {
        color: red;
        & span {
          color: blue;
        }
      }
    `}</style>
  </div>
)
