import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  
  const initialsValuesCategory = {
    name: '',
    description: '',
    color: '#000000',
  }

  const [categories, setCategories] = useState([]);
  const [categoryValues, setCategoryValues] = useState(initialsValuesCategory);
  

  function setValue(key, value) {
    // key = name, description, color
    setCategoryValues({
      ...categoryValues,
      [key]: value,
    });
  }

  function handleChangeCategoryValues(props){
    setValue(
      props.target.getAttribute('name'), 
      props.target.value
    );
  }
  
  function handleSubmitCategory(props) {
    props.preventDefault();

    setCategories([...categories, categoryValues]);

    setCategoryValues(initialsValuesCategory);
  }
  
  return (
    <>
      <PageDefault>
        <h1>Cadastro de Categoria: {categoryValues.name}</h1>

        <form onSubmit={handleSubmitCategory}>

          <FormField 
            label="Nome da Categoria"
            type="text"
            name="name"
            value={categoryValues.name}
            onChange={handleChangeCategoryValues} 
          />

          <FormField 
            label="Descrição"
            type="textarea"
            name="description"
            value={categoryValues.description}
            onChange={handleChangeCategoryValues} 
          />

          <FormField 
            label="Cor"
            type="color"
            name="color"
            value={categoryValues.color}
            onChange={handleChangeCategoryValues} 
          />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categories.map((category, index) => {
            return (
              <li key={`${category}${index}`}>
                {category.name}
              </li>
            );
          })}
        </ul>
      
        <Link to="/">
          Home
        </Link>
      </PageDefault>
    </>
  )
}

export default CadastroCategoria;