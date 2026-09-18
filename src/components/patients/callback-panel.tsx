import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import { FormConsents } from "@/components/consent/form-consents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a phone number with area code."),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  adult: z.boolean().refine((value) => value, {
    message: "Please confirm you are 18 or a parent or guardian.",
  }),
  privacy: z.boolean().refine((value) => value, {
    message: "Please agree to the privacy policy.",
  }),
});

type FormValues = z.infer<typeof schema>;

const TIMES = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
] as const;

export function CallbackPanel() {
  const [done, setDone] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      preferredTime: "morning",
      adult: false,
      privacy: false,
    },
  });

  function onSubmit(values: FormValues) {
    setDone(values);
  }

  if (done) {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
        <h2 className="font-serif text-2xl">Have this ready when you call</h2>
        <p className="mt-3 text-ink-soft">
          This website cannot send messages to our office. Please call so we can
          complete your request. Do not add medical details on this page.
        </p>
        <dl className="mt-6 space-y-3">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">
              Name
            </dt>
            <dd>{done.name}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">
              Phone
            </dt>
            <dd>{done.phone}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">
              Preferred time
            </dt>
            <dd className="capitalize">{done.preferredTime}</dd>
          </div>
        </dl>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-forest text-lg font-semibold text-paper hover:bg-forest-deep"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-xl bg-surface p-6 shadow-border sm:p-8"
      noValidate
    >
      <h2 className="font-serif text-2xl">Request a callback</h2>
      <p className="mt-2 text-ink-soft">
        Name, phone, and a preferred time only. This form does not transmit
        anything to our office — it prepares a short note, then asks you to
        call. Do not include diagnoses, medications, or insurance ID numbers,
        and do not email those details to the office.
      </p>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="callback-name">Your name</Label>
          <Input
            id="callback-name"
            autoComplete="name"
            {...form.register("name")}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={
              form.formState.errors.name ? "callback-name-error" : undefined
            }
          />
          {form.formState.errors.name ? (
            <p id="callback-name-error" className="text-base text-crisis" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="callback-phone">Phone number</Label>
          <Input
            id="callback-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            {...form.register("phone")}
            aria-invalid={Boolean(form.formState.errors.phone)}
            aria-describedby={
              form.formState.errors.phone ? "callback-phone-error" : undefined
            }
          />
          {form.formState.errors.phone ? (
            <p id="callback-phone-error" className="text-base text-crisis" role="alert">
              {form.formState.errors.phone.message}
            </p>
          ) : null}
        </div>

        <fieldset className="space-y-3">
          <legend className="text-base font-medium text-ink">
            Preferred callback time
          </legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {TIMES.map((option) => (
              <label
                key={option.value}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-rule bg-paper px-4 has-[:checked]:border-forest has-[:checked]:bg-paper-deep"
              >
                <input
                  type="radio"
                  value={option.value}
                  className="size-5 accent-forest"
                  {...form.register("preferredTime")}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
        <FormConsents
          idPrefix="callback"
          adultInput={form.register("adult")}
          privacyInput={form.register("privacy")}
          errors={form.formState.errors}
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full">
        Prepare my call
      </Button>
    </form>
  );
}
