# ✅ CHECKLIST 10/10 — Punkt Odniesienia

**Cel:** Podnieść ocenę wizytówki z 5.5/10 do 10/10  
**Data startu:** 2026-04-14  
**Priorytet:** Fazy 1-2 krytyczne, Fazy 3-5 rozwojowe

---

## FAZA 1: Naprawy krytyczne (błędy 404, PWA) ⏱️ ~1h

- [x] **1.1** Wygenerować `favicon.svg` (placeholder SVG z inicjałami "PO") ✅ 2026-04-14
- [x] **1.2** Wygenerować `icon-192.png` (placeholder z literami "PO") ✅ 2026-04-14
- [x] **1.3** Wygenerować `icon-512.png` (placeholder z literami "PO") ✅ 2026-04-14
- [x] **1.4** Dodać `<link rel="icon">` do `index.html` ✅ 2026-04-14
- [x] **1.5** Naprawić `manifest.json` — rozdzielić `"any maskable"` na osobne wpisy ✅ 2026-04-14
- [x] **1.6** Naprawić `manifest.json` — `"start_url": "."` (kompatybilne z GH Pages) ✅ 2026-04-14
- [x] **1.7** Dodać `"id"` do `manifest.json` ✅ 2026-04-14
- [x] **1.8** Naprawić `sw.js` — zmienić ścieżki ASSETS na względne (`./`) ✅ 2026-04-14
- [x] **1.9** Dodać ikony do tablicy ASSETS w `sw.js` ✅ 2026-04-14
- [x] **1.10** Zwiększyć wersję cache w `sw.js` → `v2` ✅ 2026-04-14
- [ ] **1.11** Przetestować brak błędów 404 w konsoli
- [ ] **1.12** Przetestować instalację PWA (Add to Home Screen)

---

## FAZA 2: SEO i Structured Data ⏱️ ~1h

- [x] **2.1** Dodać `og:image` meta tag (wymaga grafiki 1200×630) ✅ 2026-04-14
- [x] **2.2** Dodać `og:url` meta tag ✅ 2026-04-14
- [x] **2.3** Dodać `<link rel="canonical">` ✅ 2026-04-14
- [x] **2.4** Dodać Twitter Card meta tagi (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) ✅ 2026-04-14
- [x] **2.5** Dodać Schema.org JSON-LD (`LocalBusiness`) do `<head>` ✅ 2026-04-14
- [x] **2.6** Stworzyć `robots.txt` ✅ 2026-04-14
- [x] **2.7** Stworzyć `sitemap.xml` ✅ 2026-04-14
- [x] **2.8** Wygenerować `og-image.png` (1200×630 z logotypem i hasłem) ✅ 2026-04-14
- [ ] **2.9** Przetestować w [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] **2.10** Przetestować w [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## FAZA 3: Branding i profesjonalizm ⏱️ ~2-4h

- [x] **3.1** Zaprojektować profesjonalne logo (SVG) ✅ 2026-04-14 (użyto własne logo PNG)
- [x] **3.2** Zamienić emoji 🚀 na logo w `.avatar` ✅ 2026-04-14
- [x] **3.3** Wygenerować favicon z nowego logo ✅ 2026-04-14
- [x] **3.4** Wygenerować ikony PWA z nowego logo (192, 512) ✅ 2026-04-14
- [x] **3.5** Zakupić domenę firmową — `punkt-odniesienia.com` ✅ 2026-04-14 (weryfikacja w toku)
- [x] **3.6** Skonfigurować custom domain w GitHub Pages (CNAME) ✅ 2026-04-14
- [ ] **3.7** Ustawić email firmowy na nowej domenie — czeka na DNS
- [x] **3.8** Zaktualizować email w `index.html`, `kontakt.vcf`, `config.json` ✅ 2026-04-14
- [x] **3.9** Brak social media (decyzja właściciela) ✅ N/A
- [x] **3.10** Zaktualizować `config.json` — logo, ikony ✅ 2026-04-14

---

## FAZA 4: Google Business Profile ⏱️ ~1h

- [ ] **4.1** Uzupełnić pełny adres w Google Maps (Wolsztyńska 23/3)
- [ ] **4.2** Dodać opis firmy w Google Business Profile
- [ ] **4.3** Ustawić prawidłowe godziny otwarcia (pon-pt)
- [ ] **4.4** Dodać zdjęcia biura / zespołu
- [ ] **4.5** Dodać kategorię i atrybuty biznesu
- [ ] **4.6** Zaktualizować stronę WWW na custom domain
- [ ] **4.7** Zaktualizować email na firmowy
- [ ] **4.8** Poprosić klientów o recenzje (cel: min. 5 opinii)
- [ ] **4.9** Dodać logo firmy jako zdjęcie profilowe w Maps

---

## FAZA 5: Rozszerzenia i perfekcja ⏱️ ~2-4h

- [x] **5.1** Dodać Analytics — Plausible (GDPR-friendly, no cookies) ✅ 2026-04-15
- [x] **5.2** Dodać sekcję "Usługi" z ofertą Maps Google ✅ 2026-04-15
- [x] **5.3** Schema.org OfferCatalog — 6 usług w JSON-LD ✅ 2026-04-15
- [ ] **5.4** Lighthouse audit — cel: 100/100 wszystkie kategorie (po deploy)
- [x] **5.5** Nie dotyczy — tylko wersja PL ✅ N/A
- [x] **5.6** Performance: preload logo, SW v4 ✅ 2026-04-15
- [x] **5.7** Dodać politykę prywatności (RODO) ✅ 2026-04-15
- [x] **5.8** HTTPS — automatyczne przez GitHub Pages + custom domain ✅
- [x] **5.9** Brak potrzeby cookie consent (Plausible = no cookies) ✅ N/A
- [ ] **5.10** Finalna ocena 10/10 — pełny re-audit (po deploy)

---

## LEGENDA

| Symbol | Znaczenie |
|--------|-----------|
| - [ ] | Do wykonania |
| - [x] | Wykonane |
| ⏱️ | Szacowany czas |
| 🔴 | Krytyczne |
| 🟡 | Ważne |
| 🟢 | Opcjonalne |

---

## POSTĘP

| Faza | Zadania | Wykonane | Status |
|------|---------|----------|--------|
| 1 | 12 | 10 | 🟡 W trakcie (83%) |
| 2 | 10 | 8 | 🟡 W trakcie (80%) |
| 3 | 10 | 9 | 🟡 W trakcie (90%) |
| 4 | 9 | 0 | ⬜ Instrukcje w KONFIGURACJA_DOMENA_GBP.md |
| 5 | 10 | 8 | 🟡 W trakcie (80%) |
| **Razem** | **51** | **35** | **69%** |

---

*Ostatnia aktualizacja: 2026-04-15 — Faza 5: Usługi, Plausible, polityka prywatności, Schema.org OfferCatalog*
