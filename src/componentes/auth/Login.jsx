import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const initialForm = { email: "", password: "", recordar: false };

function validar({ email, password }) {
  const e = {};
  if (!email.trim()) e.email = "El email es obligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email no válido";
  if (!password) e.password = "La contraseña es obligatoria";
  return e;
}

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [ok, setOk] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...form, [name]: type === "checkbox" ? checked : value };
    setForm(next);
    if (errors[name]) setErrors({ ...errors, ...validar(next) });
  };

  const onBlur = () => setErrors(validar(form));

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validar(form);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setOk(true); // Maquetado: simulamos éxito
      // si querés, podés limpiar:
      // setForm(initialForm);
    } else {
      setOk(false);
    }
  };

  return (
    <section className="login">
      <h2>Iniciar sesión</h2>

      {ok && <div className="alerta exito">✅ Sesión iniciada (maquetado)</div>}

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            value={form.email} onChange={onChange} onBlur={onBlur}
            placeholder="tu@correo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && <small id="err-email" className="error">{errors.email}</small>}
        </div>

        <div className="campo">
          <label htmlFor="password">Contraseña</label>
          <div className="pass-wrap">
            <input
              id="password" name="password" type={showPass ? "text" : "password"}
              value={form.password} onChange={onChange} onBlur={onBlur}
              placeholder="Tu contraseña"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "err-password" : undefined}
            />
            <button
              type="button"
              className="btn-mostrar"
              onClick={() => setShowPass((s) => !s)}
              aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <small id="err-password" className="error">{errors.password}</small>}
        </div>

        <div className="fila between">
          <label className="check">
            <input
              type="checkbox" name="recordar" checked={form.recordar}
              onChange={onChange}
            />
            Recuérdame
          </label>
          <Link to="/registro" className="link-min">¿No tenés cuenta? Registrate</Link>
        </div>

        <button type="submit" className="btn-login">Entrar</button>
      </form>
    </section>
  );
};

export default Login;
