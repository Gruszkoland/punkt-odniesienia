# Punkt Odniesienia — Cyfrowa Wizytówka PWA

📍 **Lokalizacja:** Poznań, Wolsztyńska 23/3  
🌐 **Live:** [punkt-odniesienia.com](https://punkt-odniesienia.com/)  
📧 **Kontakt:** [adrian@punkt-odniesienia.com](mailto:adrian@punkt-odniesienia.com)  
📞 **Telefon:** 502 260 232

## O projekcie

Cyfrowa wizytówka agencji marketingowej AI specjalizującej się w optymalizacji Google Maps. Lekka, szybka, mobile-first PWA z offline support.

## Funkcje

- ✅ Responsywny design (Mobile-First, Glassmorphism)
- ✅ Dark Mode (auto `prefers-color-scheme`)
- ✅ PWA z offline support (Service Worker, stale-while-revalidate)
- ✅ Web Share API + clipboard fallback
- ✅ vCard do pobrania (`kontakt.vcf`)
- ✅ Embedded Google Maps z nawigacją
- ✅ Schema.org JSON-LD (LocalBusiness + OfferCatalog)
- ✅ Open Graph + Twitter Cards
- ✅ Plausible Analytics (GDPR-friendly, no cookies)
- ✅ Polityka prywatności (RODO)

## Struktura projektu

```
punkt-odniesienia/
├── index.html              # Główna wizytówka
├── polityka-prywatnosci.html
├── style.css               # Mobile-first, dark mode, glassmorphism
├── app.js                  # Share API, SW registration, Plausible goals
├── sw.js                   # Service Worker (stale-while-revalidate)
├── manifest.json           # PWA manifest
├── config.json             # Business configuration
├── kontakt.vcf             # vCard
├── 1_RAPORTY_WDROŻENIA/    # Raporty implementacji
├── 2_MARKETING/            # Materiały marketingowe
└── geo-maps-toolkit/       # Google Maps Automation Platform (TypeScript)
```

## Uruchomienie lokalne

```bash
# Opcja 1: Python
python -m http.server 8000

# Opcja 2: Node.js
npx serve .

# Otwórz http://localhost:8000
```

## geo-maps-toolkit

Zaawansowana platforma automatyzacji Google Maps — [zobacz README](geo-maps-toolkit/README.md)

## Technologie

| Warstwa | Stack |
|---------|-------|
| Frontend | HTML5, CSS3 (Custom Properties), Vanilla JS |
| PWA | Service Worker, Web App Manifest |
| SEO | Schema.org JSON-LD, OG, Twitter Cards |
| Analytics | Plausible (cookieless) |
| Toolkit | TypeScript, Google Maps API, BigQuery, Playwright |
| Infra | GitHub Pages, GCP Cloud Functions, Terraform |

## Licencja

© 2026 Punkt Odniesienia. Wszelkie prawa zastrzeżone.
