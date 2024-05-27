"use client";
import React from "react";
import { Spinner, ThemeProvider } from "./Spinner";

export default function Loading() {
  return (
    <ThemeProvider>
      <Spinner
        className="h-16 w-16 m-auto mb-6"
        color="orange"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </ThemeProvider>
  );
}
