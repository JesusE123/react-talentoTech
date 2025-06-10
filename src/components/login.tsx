import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import type { User } from "../types/User";



const Login = () => {
  const { register, handleSubmit } = useForm<User>();

  
  const onSubmit: SubmitHandler<User> = (data) => {

    localStorage.setItem("user", JSON.stringify(data));
  
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen bg-gray-100">
        <div className="p-4 shadow-lg mb-4 w-72">
          <p className="text-red-500 text-center">
            Usuario: En modo de prueba con la finalidad de probar las rutas
            protegidas, puede ingresar cualquier usuario
          </p>
        </div>

        <form
          className="bg-white p-8 rounded shadow-md w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full mb-4 p-2 border rounded"
            {...register("password", { required: true })}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
