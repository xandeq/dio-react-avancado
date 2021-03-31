import React from 'react';
import PropTypes from 'prop-types'

function Calc(props) {
  const { min, max, onChange } = props;

  return (
    <>
    <p>Valor Minimo: {min}</p>
    <p>Valor Máximo: {max}</p>
    <div>
      <input type="text" onChange={onChange} />
    </div>
    </>
  )
}

Calc.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Calc;