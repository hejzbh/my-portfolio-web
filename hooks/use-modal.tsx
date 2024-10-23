import { useContext } from "react";
import { ModalContext } from "@/components/providers/ModalProvider";

const useModal = () => {
  const context = useContext(ModalContext);

  return context;
};

export default useModal;
