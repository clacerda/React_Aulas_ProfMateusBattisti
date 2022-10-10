import style from './Carro.module.css';

const Carro = ({id, modelo}) => {
  return (
    <div>
        <h3 className={style.my_carro}>O carro id: {id} é um modelo {modelo} </h3>
    </div>
  )
}

export default Carro