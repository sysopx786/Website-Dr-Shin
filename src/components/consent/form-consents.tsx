import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Link } from "@tanstack/react-router";

export function FormConsents({
  idPrefix,
  adultInput,
  privacyInput,
  errors,
}: {
  idPrefix: string;
  adultInput: UseFormRegisterReturn;
  privacyInput: UseFormRegisterReturn;
  errors: {
    adult?: FieldError;
    privacy?: FieldError;
  };
}) {
  const adultId = `${idPrefix}-adult`;
  const privacyId = `${idPrefix}-privacy`;
  const adultErrorId = `${idPrefix}-adult-error`;
  const privacyErrorId = `${idPrefix}-privacy-error`;

  return (
    <fieldset className="space-y-4">
      <legend className="text-base font-medium text-ink">Agreements</legend>
      <label
        htmlFor={adultId}
        className="flex min-h-12 cursor-pointer items-start gap-3 rounded-md border border-rule bg-paper px-4 py-3"
      >
        <input
          {...adultInput}
          id={adultId}
          type="checkbox"
          className="mt-1 size-5 shrink-0 accent-forest"
          aria-required="true"
          aria-invalid={Boolean(errors.adult)}
          aria-describedby={errors.adult ? adultErrorId : undefined}
        />
        <span>
          I am 18 or older, or I am the parent or legal guardian of the person
          this request is about. Children under 18 should not submit information
          on this website on their own.
        </span>
      </label>
      {errors.adult ? (
        <p id={adultErrorId} className="text-base text-crisis" role="alert">
          {errors.adult.message}
        </p>
      ) : null}
      <label
        htmlFor={privacyId}
        className="flex min-h-12 cursor-pointer items-start gap-3 rounded-md border border-rule bg-paper px-4 py-3"
      >
        <input
          {...privacyInput}
          id={privacyId}
          type="checkbox"
          className="mt-1 size-5 shrink-0 accent-forest"
          aria-required="true"
          aria-invalid={Boolean(errors.privacy)}
          aria-describedby={errors.privacy ? privacyErrorId : undefined}
        />
        <span>
          I have read the{" "}
          <Link
            to="/privacy"
            className="font-semibold text-forest underline decoration-2 underline-offset-4"
          >
            Privacy Policy
          </Link>
          . I understand this form does not send health information to the
          office and is not a medical record.
        </span>
      </label>
      {errors.privacy ? (
        <p id={privacyErrorId} className="text-base text-crisis" role="alert">
          {errors.privacy.message}
        </p>
      ) : null}
    </fieldset>
  );
}
