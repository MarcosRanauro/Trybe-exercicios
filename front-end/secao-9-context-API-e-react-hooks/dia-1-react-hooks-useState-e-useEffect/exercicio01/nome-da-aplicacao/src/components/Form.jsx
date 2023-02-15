import React from 'react';
import { useState } from 'react';

function Form() {
    const { name, setName } = useState('');
    const { age, setAge } = useState('');
    const { location, setLocation } = useState('');
    const { module, setModule } = useState('');

  return (
    <form>
      <div>
        <legend>Dados Pessoais</legend>
        <label htmlFor="name">
          Nome completo
          <input
          type='text'
          id='name'
          value={ name }
          onClick={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="age">
          Idade
          <input
          type='text'
          id='age'
          value={ age }
          onClick={({ target }) => setAge(target.value)}
          />
        </label>
        <label htmlFor="location">
          Localidade
          <input
          type='text'
          id='location'
          value={ location }
          onClick={({ target }) => setLocation(target.value)}
          />
        </label>
        <br />
      </div>
      <div>
        <legend>Modulos</legend>
        <label htmlFor='fundamentals'>
          Fundamentos
          <input
          type='radio'
          id='fundamentals'
          name='module'
          value='Fundamentos'
          defaultChecked={ module === 'Fundamentos' }
          onClick={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='front'>
          Front-End
          <input
          type='radio'
          id='front'
          name='module'
          value='Front-End'
          defaultChecked={ module === 'Front-End' }
          onClick={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='back'>
          Back-End
          <input
          type='radio'
          id='back'
          name='module'
          value='Back-End'
          defaultChecked={ module === 'Back-End' }
          onClick={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='back'>
          Ciencia da computação
          <input
          type='radio'
          id='cs'
          name='module'
          value='Ciencia da computação'
          defaultChecked={ module === 'Ciencia da computação' }
          onClick={({ target }) => setModule(target.value)}
          />
        </label>
        <button
          type='submit'
          onClick={(event) => {
            event.preventDefault();
            console.log('Click');
        }}
        >
        Enviar
        </button>
      </div>
    </form>
  )
}

export default Form;