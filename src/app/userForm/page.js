import GridContainer from "@/components/grid/GridContainer";
import UserForm from "@/components/userForm/UserForm";
import React from "react";

export default function page() {
  return (
    <div
      className="bg-slate-50 h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/waveBottom.svg')`,
      }}
    >
      <GridContainer className="min-h-screen flex items-center justify-center">
        <UserForm />
      </GridContainer>
    </div>
  );
}
