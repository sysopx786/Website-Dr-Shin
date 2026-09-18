import { CRISIS_988, EMERGENCY_911 } from "@/lib/site";

export function CrisisBanner() {
  return (
    <div className="bg-crisis text-crisis-fg">
      <p className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-base leading-snug sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:px-6">
        <span className="font-semibold tracking-wide">Crisis support.</span>
        <span>
          Call or text{" "}
          <a className="font-semibold underline decoration-2 underline-offset-2" href={CRISIS_988}>
            988
          </a>{" "}
          for the Suicide & Crisis Lifeline. If this is an emergency, call{" "}
          <a className="font-semibold underline decoration-2 underline-offset-2" href={EMERGENCY_911}>
            911
          </a>
          .
        </span>
      </p>
    </div>
  );
}
