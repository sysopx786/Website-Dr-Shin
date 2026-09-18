import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormConsents } from "@/components/consent/form-consents";
import { LegalH2, LegalPage } from "@/components/legal/legal-page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { pageHead } from "@/lib/seo";
import { EMAIL_DISPLAY, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/unsubscribe")({
  component: Unsubscribe,
  head: () => pageHead("/unsubscribe"),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter the email address to stop using."),
  adult: z.boolean().refine((value) => value, {
    message: "Please confirm you are 18 or a parent or guardian.",
  }),
  privacy: z.boolean().refine((value) => value, {
    message: "Please agree to the privacy policy.",
  }),
});

type FormValues = z.infer<typeof schema>;

function unsubMailto(values: FormValues) {
  const body = [
    "Do not include diagnoses, medications, or other health details.",
    "",
    `Name: ${values.name}`,
    `The email address to stop using for non-care messages: ${values.email}`,
  ].join("\n");
  return `mailto:${EMAIL_DISPLAY}?subject=${encodeURIComponent("Please stop non-care email")}&body=${encodeURIComponent(body)}`;
}

function Unsubscribe() {
  const [done, setDone] = useState<FormValues | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      adult: false,
      privacy: false,
    },
  });

  return (
    <LegalPage
      path="/unsubscribe"
      crumb="Unsubscribe"
      eyebrow="Email"
      title="Unsubscribe from non-care email"
      lead="This page is for stopping marketing or other non-care messages. It does not cancel an appointment and it does not change medical-record mail."
    >
      <section>
        <LegalH2>What this does</LegalH2>
        <p className="mt-3">
          This website does not run a newsletter. If the office used an address
          for non-care messages and you want that to stop, use the form below
          or call{" "}
          <a className="font-semibold text-forest underline" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
          . Appointment reminders, if any, are managed by the office or the
          RXNT portal — call us or use that portal for those.
        </p>
      </section>

      <section>
        {done ? (
          <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
            <h2 className="font-serif text-2xl text-ink">Next step</h2>
            <p className="mt-3">
              This website does not send email. Open a short message with no
              health details, or call the office. We will stop using{" "}
              <strong className="text-ink">{done.email}</strong> for non-care
              messages.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={unsubMailto(done)}
                className="inline-flex min-h-14 items-center justify-center rounded-md bg-forest px-6 text-lg font-semibold text-paper hover:bg-forest-deep"
              >
                Open an email with no health details
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-forest px-6 text-lg font-semibold text-forest"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(setDone)}
            className="rounded-xl bg-surface p-6 shadow-border sm:p-8"
            noValidate
          >
            <h2 className="font-serif text-2xl text-ink">Stop non-care email</h2>
            <p className="mt-2">
              Name and the address to stop. Do not type diagnoses or insurance
              numbers here.
            </p>
            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="unsub-name">Your name</Label>
                <Input
                  id="unsub-name"
                  autoComplete="name"
                  {...form.register("name")}
                  aria-invalid={Boolean(form.formState.errors.name)}
                  aria-describedby={
                    form.formState.errors.name ? "unsub-name-error" : undefined
                  }
                />
                {form.formState.errors.name ? (
                  <p id="unsub-name-error" className="text-base text-crisis" role="alert">
                    {form.formState.errors.name.message}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="unsub-email">Email address to stop using</Label>
                <Input
                  id="unsub-email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  {...form.register("email")}
                  aria-invalid={Boolean(form.formState.errors.email)}
                  aria-describedby={
                    form.formState.errors.email ? "unsub-email-error" : undefined
                  }
                />
                {form.formState.errors.email ? (
                  <p id="unsub-email-error" className="text-base text-crisis" role="alert">
                    {form.formState.errors.email.message}
                  </p>
                ) : null}
              </div>
              <FormConsents
                idPrefix="unsub"
                adultInput={form.register("adult")}
                privacyInput={form.register("privacy")}
                errors={form.formState.errors}
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full">
              Continue
            </Button>
          </form>
        )}
      </section>
    </LegalPage>
  );
}
