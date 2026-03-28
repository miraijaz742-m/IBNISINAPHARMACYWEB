"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { getWhatsAppUrlWithText, site } from "@/lib/site";

type UnitKey = "strips" | "bottles" | "packs" | "units" | "tubes" | "boxes";

type LineItem = {
  id: string;
  name: string;
  quantity: number;
  unit: UnitKey;
};

const UNITS: { key: UnitKey; singular: string; plural: string }[] = [
  { key: "strips", singular: "strip", plural: "strips" },
  { key: "bottles", singular: "bottle", plural: "bottles" },
  { key: "packs", singular: "pack", plural: "packs" },
  { key: "units", singular: "unit", plural: "units" },
  { key: "tubes", singular: "tube", plural: "tubes" },
  { key: "boxes", singular: "box", plural: "boxes" },
];

function formatQuantityLine(qty: number, unit: UnitKey): string {
  const u = UNITS.find((x) => x.key === unit) ?? UNITS[3];
  const word = qty === 1 ? u.singular : u.plural;
  return `${qty} ${word}`;
}

function buildAvailabilityMessage(items: LineItem[]): string {
  const lines = items.map(
    (item, i) => `${i + 1}. ${item.name.trim()} - ${formatQuantityLine(item.quantity, item.unit)}`,
  );
  return [
    `Hello, I want to check availability of the following medicines at ${site.name}:`,
    "",
    ...lines,
    "",
    "Please confirm stock and any substitutes. Thank you.",
  ].join("\n");
}

export function MedicineAvailabilitySection() {
  const formId = useId();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<UnitKey>("strips");
  const [items, setItems] = useState<LineItem[]>([]);
  const [sendError, setSendError] = useState<string | null>(null);

  const canAdd = name.trim().length > 0 && quantity >= 1;

  const addItem = useCallback(() => {
    if (!canAdd) return;
    setItems((prev) => [
      ...prev,
      {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${prev.length}`,
        name: name.trim(),
        quantity,
        unit,
      },
    ]);
    setName("");
    setQuantity(1);
    setUnit("strips");
    setSendError(null);
  }, [canAdd, name, quantity, unit]);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
    setSendError(null);
  }, []);

  const messagePreview = useMemo(() => (items.length ? buildAvailabilityMessage(items) : ""), [items]);

  const sendViaWhatsApp = useCallback(() => {
    if (items.length === 0) {
      setSendError("Add at least one medicine before sending.");
      return;
    }
    setSendError(null);
    const url = getWhatsAppUrlWithText(buildAvailabilityMessage(items));
    window.open(url, "_blank", "noopener,noreferrer");
  }, [items]);

  const inputClass =
    "mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[15px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white";

  return (
    <section id="availability" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Before you visit</p>
        <h2 className="section-title">Check medicine availability</h2>
        <p className="section-intro">
          Build a quick list—no cart or payment. We&apos;ll confirm stock on WhatsApp for our walk-in
          store.
        </p>

        <div className="section-body mx-auto max-w-2xl rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-matte-xl ring-1 ring-slate-200/50">
          <div className="py-2 sm:py-0">
            <div className="grid gap-5 sm:gap-4 md:grid-cols-[minmax(0,1fr)_6.5rem_9.5rem] md:items-end">
              <div>
                <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-slate-800">
                  Medicine name
                </label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Paracetamol 500mg"
                  className={inputClass}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-qty`} className="block text-sm font-semibold text-slate-800">
                  Qty
                </label>
                <input
                  id={`${formId}-qty`}
                  type="number"
                  min={1}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value, 10) || 1))}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor={`${formId}-unit`} className="block text-sm font-semibold text-slate-800">
                  Unit
                </label>
                <select id={`${formId}-unit`} value={unit} onChange={(e) => setUnit(e.target.value as UnitKey)} className={inputClass}>
                  {UNITS.map((u) => (
                    <option key={u.key} value={u.key}>
                      {u.plural}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={addItem}
              disabled={!canAdd}
              className="mt-6 w-full rounded-full bg-primary/10 px-6 py-3.5 text-[15px] font-bold text-primary transition hover:bg-primary/20 hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed disabled:opacity-50 md:inline-flex md:w-auto md:min-w-[140px]"
            >
              Add item
            </button>

            {items.length > 0 ? (
              <ul className="mt-10 divide-y divide-slate-100 border-y border-slate-100">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-4">
                    <div className="min-w-0">
                      <p className="text-[17px] font-bold text-slate-900">{item.name}</p>
                      <p className="mt-0.5 text-sm font-medium text-slate-500">{formatQuantityLine(item.quantity, item.unit)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 rounded-full px-4 py-2 text-[13px] font-bold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-[15px] text-slate-500">
                No medicines added yet. Use the form above to build your list.
              </p>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={sendViaWhatsApp}
                disabled={items.length === 0}
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-matte-md disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[200px]"
              >
                Send message
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-500 sm:text-left sm:max-w-xs">
                Opens WhatsApp with your formatted list so we can confirm stock before you visit.
              </p>
            </div>

            {sendError ? <p className="mt-3 text-center text-sm font-medium text-red-600 sm:text-left">{sendError}</p> : null}
          </div>

          {messagePreview ? (
            <details className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 text-[15px]">
              <summary className="cursor-pointer font-bold text-slate-700 p-4">Preview message</summary>
              <pre className="px-5 pb-5 pt-1 whitespace-pre-wrap break-words text-[13px] font-medium text-slate-500 bg-transparent">
                {messagePreview}
              </pre>
            </details>
          ) : null}
        </div>
      </div>
    </section>
  );
}
