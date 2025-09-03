import { useState } from "react";
import "./registro.css";
import Boton from "../boton/Boton.jsx";

const initialForm = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmar: "",
  telefono: "",
  acepta: false,
};

function validar(form) {
  const errores = {};

  if (!form.nombre.trim()) errores.nombre = "El nombre es obligatorio";
  if (!form.apellido.trim()) errores.apellido = "El apellido es obligatorio";

  if (!form.email.trim()) {
    errores.email = "El email es obligatorio";
  } else {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(form.email)) errores.email = "Email no válido";
  }

  if (!form.password) {
    errores.password = "La contraseña es obligatoria";
  } else if (form.password.length < 6) {
    errores.password = "Mínimo 6 caracteres";
  }

  if (!form.confirmar) {
    errores.confirmar = "Repite la contraseña";
  } else if (form.confirmar !== form.password) {
    errores.confirmar = "Las contraseñas no coinciden";
  }

  if (form.telefono && !/^\+?\d{7,15}$/.test(form.telefono)) {
    errores.telefono = "Teléfono no válido";
  }

  if (!form.acepta) errores.acepta = "Debes aceptar los términos";

  return errores;
}

const Registro = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) {
      // validar en tiempo real si ya había error en ese campo
      const nuevos = validar({ ...form, [name]: type === "checkbox" ? checked : value });
      setErrors((prev) => ({ ...prev, [name]: nuevos[name] }));
    }
  };

  const onBlur = (e) => {
    const { name } = e.target;
    const nuevos = validar(form);
    setErrors((prev) => ({ ...prev, [name]: nuevos[name] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nuevos = validar(form);
    setErrors(nuevos);

    if (Object.keys(nuevos).length === 0) {
      setSubmitted(true);
      // Solo maquetado: simulamos éxito
      // Podés limpiar el form si querés:
      // setForm(initialForm);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section className="registro">
      <h2>Crear cuenta</h2>

      {submitted && (
        <div className="alerta exito" role="status" aria-live="polite">
          ✅ ¡Registro exitoso! (maquetado)
        </div>
      )}

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="fila">
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Tu nombre"
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? "err-nombre" : undefined}
            />
            {errors.nombre && <small id="err-nombre" className="error">{errors.nombre}</small>}
          </div>

          <div className="campo">
            <label htmlFor="apellido">Apellido</label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              value={form.apellido}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Tu apellido"
              aria-invalid={!!errors.apellido}
              aria-describedby={errors.apellido ? "err-apellido" : undefined}
            />
            {errors.apellido && <small id="err-apellido" className="error">{errors.apellido}</small>}
          </div>
        </div>

        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="tu@correo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && <small id="err-email" className="error">{errors.email}</small>}
        </div>

        <div className="fila">
          <div className="campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Mínimo 6 caracteres"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "err-pass" : undefined}
            />
            {errors.password && <small id="err-pass" className="error">{errors.password}</small>}
          </div>

          <div className="campo">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input
              id="confirmar"
              name="confirmar"
              type="password"
              value={form.confirmar}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Repite la contraseña"
              aria-invalid={!!errors.confirmar}
              aria-describedby={errors.confirmar ? "err-confirmar" : undefined}
            />
            {errors.confirmar && <small id="err-confirmar" className="error">{errors.confirmar}</small>}
          </div>
        </div>

        <div className="campo">
          <label htmlFor="telefono">Teléfono (opcional)</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={form.telefono}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="+54911..."
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? "err-telefono" : undefined}
          />
          {errors.telefono && <small id="err-telefono" className="error">{errors.telefono}</small>}
        </div>

        <div className="campo-check">
          <input
            id="acepta"
            name="acepta"
            type="checkbox"
            checked={form.acepta}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errors.acepta}
            aria-describedby={errors.acepta ? "err-acepta" : undefined}
          />
          <label htmlFor="acepta">Acepto términos y condiciones</label>
        </div>
        {errors.acepta && <small id="err-acepta" className="error">{errors.acepta}</small>}

        <Boton texto='Registrarme'/>
      </form>
    </section>
  );
};

export default Registro;
