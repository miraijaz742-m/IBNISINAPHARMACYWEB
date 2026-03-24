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
    "mt-1.5 w-full rounded-md border border-sky-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-400";

  return (
    <section id="availability" className="scroll-mt-24 w-full border-y border-sky-100 bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Before you visit</p>
        <h2 className="section-title">Check medicine availability</h2>
        <p className="section-intro">
          Build a quick list—no cart or payment. We&apos;ll confirm stock on WhatsApp for our walk-in
          store.
        </p>

        <div className="section-body mx-auto max-w-2xl">
          <div className="py-2 sm:py-4">
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
              className="mt-4 w-full rounded-md bg-sky-100 px-5 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-200 disabled:cursor-not-allowed disabled:opacity-50 md:inline-flex md:w-auto md:min-w-[140px]"
            >
              Add item
            </button>

            {items.length > 0 ? (
              <ul className="mt-10 divide-y divide-sky-100 border-y border-sky-100">
                {items.map((item) => (
                  <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-600">{formatQuantityLine(item.quantity, item.unit)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-sky-50 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-10 border border-dashed border-sky-200 bg-sky-50/50 px-4 py-8 text-center text-sm text-slate-500">
                No medicines added yet. Use the form above to build your list.
              </p>
            )}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={sendViaWhatsApp}
                disabled={items.length === 0}
                className="inline-flex min-h-[52px] w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[200px]"
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
            <details className="mt-6 rounded-md border border-sky-200 bg-sky-50/40 p-4 text-sm">
              <summary className="cursor-pointer font-semibold text-slate-700">Preview message</summary>
              <pre className="mt-3 whitespace-pre-wrap break-words rounded-md bg-white p-3 text-xs text-slate-600">
                {messagePreview}
              </pre>
            </details>
          ) : null}
        </div>
      </div>
    </section>
  );
}
