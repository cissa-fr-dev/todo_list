import React, { useState } from 'react';
import { Formik } from 'formik';
import { FaPlusCircle } from 'react-icons/fa'
import * as Yup from 'yup';

import { Message, Header, Page, Input, AddButton, Title } from './style'

function App() {
  const [list, setList] = useState([]);
  const validation = Yup.object().shape({
    value: Yup.string().required('Campo obrigatório!'),
  });

  function handleAddItem(item) {
    const newItem = { id: Math.random(), value: item.value }
    setList(oldValues => [...oldValues, newItem]);
  }

  function handleDeteleItem(id) {
    setList(oldValues => oldValues.filter(item => item.id !== id));
  }

  return (
    <Page>
      <Header>
        <div>
          <h1>Add an Item...</h1>
          <div>
            <FaPlusCircle color="green" />
          </div>
        </div>
      </Header>

      <br />

      <Formik
        initialValues={{}}
        validationSchema={validation}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleAddItem(values);
          resetForm();
          setSubmitting(false);
        }}
        render={otherProps => { // Pega tudo do Formik
          const {
            values,
            handleSubmit,
            setFieldValue,
            errors,
          } = otherProps;
          return (
            <>
              <div>
                <Input
                  error={errors.value || null}
                  type="text"
                  placeholder="Add todo..."
                  value={values.value || ""}
                  onChange={(e) => setFieldValue("value", e.target.value)}
                />

                <AddButton
                  // onClick={() => otherProps.} -> Dieguin vai me mostrar depois
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Add
              </AddButton>

                {
                  errors.value && (
                    <Message>{errors.value}</Message>
                  )
                }
              </div>
            </>
          )
        }}
      />

      <br />
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              {item.value}
              <button
                onClick={() => handleDeteleItem(item.id)}
              >
                X
                </button>
            </li>
          )
        })}
      </ul>
    </Page>
  )
}

export default App;