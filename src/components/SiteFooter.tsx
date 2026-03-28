import Image from "next/image";
import { availabilityHref, getHeroImageSrc, getWhatsAppUrl, pageNavLinks, site } from "@/lib/site";

export function SiteFooter() {
  const instagram = site.social.instagram?.trim();
  const facebook = site.social.facebook?.trim();

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-white selection:bg-primary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute left-[-10%] bottom-[-10%] h-[200px] w-[200px] rounded-full bg-blue-500/5 blur-[80px]" />

      <div className="section-inner pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-16 sm:pb-[max(3rem,env(safe-area-inset-bottom,0px))] relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-6 h-16 w-16 overflow-hidden rounded-full bg-white p-1 shadow-2xl ring-2 ring-white/10 sm:h-20 sm:w-20">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={getHeroImageSrc()}
                  alt=""
                  fill
                  className="object-contain scale-[1.3]"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-2xl font-black tracking-tight text-white">{site.name}</p>
            <p className="mt-1 text-sm font-medium text-white/60">{site.tagline}</p>
            
            <div className="mt-6 space-y-3">
              <div className="space-y-1">
                <p className="text-[15px] font-bold text-primary">{site.landmarkName}</p>
                <p lang="ur" dir="rtl" className="font-urdu text-lg font-medium leading-relaxed text-sky-100/90">
                  {site.landmarkNameUrdu}
                </p>
              </div>
              <p className="max-w-[240px] text-xs leading-relaxed text-white/50">
                {site.address} · {site.locationLabel}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/40 mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              {pageNavLinks.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  className="text-[15px] font-medium text-white/70 transition hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30">Main Line</p>
                <a href={`tel:${site.phoneE164}`} className="block text-base font-bold text-white/90 hover:text-primary transition">
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30">Support</p>
                <a href={`tel:${site.phoneSecondaryE164}`} className="block text-base font-bold text-white/80 hover:text-primary transition">
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30">Email</p>
                <a href={`mailto:${site.email}`} className="block break-all text-[14px] font-medium text-white/80 hover:text-primary transition">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Socials & Support */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/40 mb-6">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-primary hover:border-primary hover:-translate-y-1 shadow-lg"
                aria-label="WhatsApp"
              >
                <WhatsAppGlyph className="h-6 w-6" />
              </a>
              {instagram ? (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-[#E1306C] hover:border-[#E1306C] hover:-translate-y-1 shadow-lg"
                  aria-label="Instagram"
                >
                  <InstagramGlyph className="h-6 w-6" />
                </a>
              ) : null}
              {facebook ? (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 shadow-lg"
                  aria-label="Facebook"
                >
                  <FacebookGlyph className="h-6 w-6" />
                </a>
              ) : null}
            </div>
            
            <div className="mt-8">
              <a 
                href={availabilityHref} 
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                Check Medicine Availability
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-[11px] leading-relaxed text-white/40 text-center sm:text-left max-w-md">
            © {new Date().getFullYear()} {site.name}. Licensed retail pharmacy. 
            Medicines sold only against valid prescription where required by law.
          </p>
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-white/20">
            <span>Budgam</span>
            <span>Beerwah</span>
            <span>Kashmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
