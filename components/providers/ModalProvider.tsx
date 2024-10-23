"use client";
import { ProjectType } from "@/types";
import dynamic from "next/dynamic";
import React, { createContext, useMemo, useState } from "react";

export const ModalContext = createContext({} as ProviderValueType);

type ProviderValueType = {
  isOpen: boolean;
  openModal: (type: ModalType, data: DataType) => void;
  closeModal: () => void;
  data: any;
};

type DataType = {
  project: ProjectType;
} | null;

type ModalType = "projectDetails" | null;

const loadedModals: any = {};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<"projectDetails" | null>();
  const [data, setData] = useState<DataType>();

  const providerValue: ProviderValueType = useMemo(
    () => ({
      isOpen,
      openModal: (type: ModalType, data) => {
        setIsOpen(true);
        setType(type);
        setData(data);
      },
      closeModal: () => {
        setIsOpen(false);
        setType(null);
        setData(null);
      },
      data,
    }),
    [isOpen, type]
  );

  const renderModal = () => {
    if (!data?.project) return null;

    switch (type) {
      case "projectDetails":
        const ProjectDetailsModal =
          loadedModals.projectDetails ||
          dynamic(() => import("@/components/modals/ProjectDetailsModal"));

        if (!loadedModals.projectDetails)
          loadedModals.projectDetails = ProjectDetailsModal;
        return <ProjectDetailsModal project={data?.project} />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {children}

      {isOpen && type && (
        <div
          style={{ backdropFilter: "blur(10px)" }}
          onClick={(e) => {
            const clickedInside = (e as any).target.closest(".inside");

            if (clickedInside) return;

            providerValue.closeModal();
          }}
          className="fixed top-0 left-0 w-full h-full z-[2000] flex items-center justify-center p-5"
        >
          <div className="inside lg:max-w-[850px]">{renderModal()}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
