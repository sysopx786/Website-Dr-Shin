import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/patients")({
  beforeLoad: () => {
    throw redirect({ to: "/new-patients" });
  },
  component: () => null,
});
