import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormConsents } from "@/components/consent/form-consents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DATA_REQUEST_MAILTO,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a phone number with area code."),
  kind: z.enum(["website", "records"]),
  adult: z.boolean().refine((value) => value, {
    message: "Please confirm you are 18 or a parent or guardian.",
  }),
  privacy: z.boolean().refine((value) => value, {
    message: "Please agree to the privacy policy.",
  }),
});

type FormValues = z.infer<typeof schema>;

export function DataRequestPanel() {
  const [done, setDone] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      kind: "website",
      adult: false,
      privacy: false,
    },
  });

  if (done) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
        <h3 className="font-serif text-2xl text-ink">Next step</h3>
        {done.kind === "records" ? (
          <p className="mt-3">
            Medical records are not stored on this website. Call{" "}
            {PHONE_DISPLAY} and ask for the records process. Do not email
            diagnoses, medications, or other health details.
          </p>
        ) : (
          <p className="mt-3">
            This website does not keep a patient file. You can clear the cookie
            choice in your browser, or send a short request with no medical
            details. We will tell you if any website note exists and delete it.
          </p>
        )}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {done.kind === "records" ? (
            <a
              href={PHONE_TEL}
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
            >
              Call {PHONE_DISPLAY}
            </a>
          ) : (
            <a
              href={DATA_REQUEST_MAILTO}
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
            >
              Open an email with no health details
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(setDone)}
      className="rounded-xl bg-surface p-6 shadow-border sm:p-8"
      noValidate
    >
      <h3 className="font-serif text-2xl text-ink">Request a deletion</h3>
      <p className="mt-2">
        Name and phone only. Choose whether this is about website notes or
        medical records. Do not type diagnoses or insurance numbers here.
      </p>
      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="deletion-name">Your name</Label>
          <Input id="deletion-name" autoComplete="name" {...form.register("name")}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={
              form.formState.errors.name ? "deletion-name-error" : undefined
            }
          />
          {form.formState.errors.name ? (
            <p id="deletion-name-error" className="text-base text-crisis" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="deletion-phone">Phone number</Label>
          <Input
            id="deletion-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            {...form.register("phone")}
            aria-invalid={Boolean(form.formState.errors.phone)}
            aria-describedby={
              form.formState.errors.phone ? "deletion-phone-error" : undefined
            }
          />
          {form.formState.errors.phone ? (
            <p id="deletion-phone-error" className="text-base text-crisis" role="alert">
              {form.formState.errors.phone.message}
            </p>
          ) : null}
        </div>
        <fieldset className="space-y-3">
          <legend className="text-base font-medium text-ink">This request is about</legend>
          <label className="flex min-h-12 items-center gap-3 rounded-md border border-rule bg-paper px-4">
            <input
              type="radio"
              value="website"
              className="size-5 accent-forest"
              {...form.register("kind")}
            />
            Website notes (this page only)
          </label>
          <label className="flex min-h-12 items-center gap-3 rounded-md border border-rule bg-paper px-4">
            <input
              type="radio"
              value="records"
              className="size-5 accent-forest"
              {...form.register("kind")}
            />
            Medical records at the practice
          </label>
        </fieldset>
        <FormConsents
          idPrefix="deletion"
          adultInput={form.register("adult")}
          privacyInput={form.register("privacy")}
          errors={form.formState.errors}
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full">
        Continue
      </Button>
    </form>
  );
}
