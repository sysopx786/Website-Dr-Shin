import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dr-shin")({
  beforeLoad: () => {
    throw redirect({ to: "/dr-yong-shin" });
  },
  component: () => null,
});
