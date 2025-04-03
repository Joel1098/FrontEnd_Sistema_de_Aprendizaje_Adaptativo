import { useState } from "react";
import InputField from "./InputField";
import ModalActions from "./ModalActions";
import ModalHeader from "./ModalHeader";
import TextareaField from "./TextareaField";

function ModalEditar() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCancel = () => {
    // Handle cancel action
    setName("");
    setDescription("");
  };

  const handleConfirm = () => {
    // Handle confirm action
    console.log({ name, description });
  };

  const handleClose = () => {
    // Handle close action
    handleCancel();
  };

  return (
    <section className="flex flex-col justify-center items-center w-full backdrop-blur bg-gray-200 bg-opacity-70 min-h-[960px] max-md:max-w-full">
      <article className="overflow-hidden max-w-full bg-white rounded-2xl shadow-xl w-[640px]">
        <ModalHeader
          title="Agregar Modulo"
          onClose={handleClose}
        />

        <div className="px-6 w-full max-md:px-5 max-md:max-w-full">
          <form className="w-full max-md:max-w-full">
            <InputField
              label="Nombre"
              placeholder="Título de módulo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextareaField
              label="Descripción"
              placeholder="Agregar una breve descripción de su módulo a registrar"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        </div>

        <ModalActions onCancel={handleCancel} onConfirm={handleConfirm} />
      </article>
    </section>
  );
}

export default ModalEditar;
