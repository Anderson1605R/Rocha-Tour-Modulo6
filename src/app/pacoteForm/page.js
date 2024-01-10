"use client";
import GridContainer from "@/components/grid/GridContainer";
import PacoteForm from "@/components/pacoteForm/PacoteForm";
import React from "react";

function page() {
  return (
    <div
      className="bg-slate-50 h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/waveBottom.svg')`,
      }}
    >
      <GridContainer className="min-h-screen flex items-center justify-center">
        <PacoteForm />
      </GridContainer>
    </div>
  );
}

export default page;
