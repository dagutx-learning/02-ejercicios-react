import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : setForm(initialForm);
  }, [dataToEdit]);
  // -**********************************-
  // Functions
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    // Create o Update
    if (!form.id) {
      // Id to create a new item
      const id = Date.now();
      createData({ ...form, id });
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  // -**********************************-
  return (
    <div className="column">
      <h3 className="subtitle">
        {dataToEdit ? "Editar Caballero" : "Agregar Caballero"}
      </h3>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="field">
          <label htmlFor="name" className="label">
            Nombre
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Constellation */}
        <div className="field">
          <label htmlFor="constellation" className="label">
            Constelación
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="constellation"
              id="constellation"
              value={form.constellation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="button is-info"
              type="reset"
              value="Limpiar"
              onClick={handleReset}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="button is-primary" type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
