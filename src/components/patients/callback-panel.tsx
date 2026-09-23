import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import { FormConsents } from "@/components/consent/form-consents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale } from "@/lib/i18n/locale";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type FormValues = {
  name: string;
  phone: string;
  preferredTime: "morning" | "afternoon" | "evening";
  adult: boolean;
  privacy: boolean;
};

export function CallbackPanel() {
  const { t } = useLocale();
  const [done, setDone] = useState<FormValues | null>(null);
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, t("errName")),
        phone: z.string().trim().min(10, t("errPhone")),
        preferredTime: z.enum(["morning", "afternoon", "evening"]),
        adult: z.boolean().refine((value) => value, { message: t("errAdult") }),
        privacy: z.boolean().refine((value) => value, { message: t("errPrivacy") }),
      }),
    [t],
  );
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", preferredTime: "morning", adult: false, privacy: false },
  });
  const times = [
    { value: "morning" as const, label: t("morning") },
    { value: "afternoon" as const, label: t("afternoon") },
    { value: "evening" as const, label: t("evening") },
  ];
  if (done) {
    const timeLabel = times.find((item) => item.value === done.preferredTime)?.label ?? done.preferredTime;
    return (
      <div className="rounded-xl bg-surface p-6 shadow-border sm:p-8">
        <h2 className="font-serif text-2xl">{t("haveReady")}</h2>
        <p className="mt-3 text-ink-soft">{t("callbackDone")}</p>
        <dl className="mt-6 space-y-3">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">{t("nameLabel")}</dt>
            <dd>{done.name}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">{t("phoneLabel")}</dt>
            <dd>{done.phone}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wider text-muted">{t("preferredTime")}</dt>
            <dd>{timeLabel}</dd>
          </div>
        </dl>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-forest text-lg font-semibold text-paper hover:bg-forest-deep"
        >
          <Phone className="size-5" aria-hidden="true" />
          {t("call")} {PHONE_DISPLAY}
        </a>
      </div>
    );
  }
  return (
    <form onSubmit={form.handleSubmit((values) => setDone(values))} className="rounded-xl bg-surface p-6 shadow-border sm:p-8" noValidate>
      <h2 className="font-serif text-2xl">{t("callbackTitle")}</h2>
      <p className="mt-2 text-ink-soft">{t("callbackLead")}</p>
      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="callback-name">{t("yourName")}</Label>
          <Input id="callback-name" autoComplete="name" {...form.register("name")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="callback-phone">{t("phoneNumber")}</Label>
          <Input id="callback-phone" type="tel" autoComplete="tel" inputMode="tel" {...form.register("phone")} />
        </div>
        <fieldset className="space-y-3">
          <legend className="text-base font-medium text-ink">{t("preferredTime")}</legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {times.map((option) => (
              <label key={option.value} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-rule bg-paper px-4 has-[:checked]:border-forest has-[:checked]:bg-paper-deep">
                <input type="radio" value={option.value} className="size-5 accent-forest" {...form.register("preferredTime")} />
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
      <Button type="submit" size="lg" className="mt-6 w-full">{t("prepareCall")}</Button>
    </form>
  );
}
