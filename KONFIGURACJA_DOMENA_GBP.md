# 🌐 Konfiguracja Domeny + Google Business Profile

## 1. DNS — punkt-odniesienia.com → GitHub Pages

Po weryfikacji domeny, skonfiguruj te rekordy DNS u rejestratora:

### Opcja A: Apex domain (punkt-odniesienia.com)
```
Typ    Nazwa    Wartość                    TTL
A      @        185.199.108.153            3600
A      @        185.199.109.153            3600
A      @        185.199.110.153            3600
A      @        185.199.111.153            3600
CNAME  www      gruszkoland.github.io.     3600
```

### Opcja B: Tylko subdomena (www.punkt-odniesienia.com)
```
Typ    Nazwa    Wartość                    TTL
CNAME  www      gruszkoland.github.io.     3600
```

### Po ustawieniu DNS:
1. Wejdź na https://github.com/Gruszkoland/punkt-odniesienia/settings/pages
2. W sekcji **Custom domain** wpisz: `punkt-odniesienia.com`
3. Zaznacz **Enforce HTTPS** (pojawi się po propagacji DNS, ~30min)
4. Sprawdź czy `CNAME` plik jest w repo (✅ już dodany)

### Weryfikacja:
```bash
nslookup punkt-odniesienia.com
# Powinny zwrócić 185.199.10x.153
```

---

## 2. Google Business Profile — Checklist napraw

Zaloguj się na https://business.google.com/ i wykonaj:

### 2.1 Adres (KRYTYCZNE)
- [ ] Uzupełnij pełny adres: **Wolsztyńska 23/3, 60-361 Poznań**
- W obecnym wpisie brak numeru budynku

### 2.2 Opis firmy
- [ ] Dodaj opis:
> Punkt Odniesienia to nowoczesna agencja marketingowa wykorzystująca sztuczną inteligencję do optymalizacji sprzedaży online. Specjalizujemy się w automatyzacji marketingu, wdrażaniu narzędzi AI, generowaniu leadów B2B oraz zaawansowanej analityce danych. Działamy w Poznaniu i obsługujemy klientów w całej Polsce.

### 2.3 Godziny otwarcia
- [ ] Ustaw godziny jako **elastyczne** lub:
  - Opcja 1: Zaznacz "Brak stałych godzin otwarcia" (jeśli dostępne)
  - Opcja 2: Pon-Pt 09:00-17:00 (standardowe biuro zdalne)
  - **Ważne:** Obecne ustawienie "Closed, opens Wed 09:00" jest mylące

### 2.4 Strona WWW
- [ ] Zmień URL na: `https://punkt-odniesienia.com/`
  - (tymczasowo zostaw `https://gruszkoland.github.io/punkt-odniesienia/` do czasu propagacji DNS)

### 2.5 Email
- [ ] Zmień na: `adrian@punkt-odniesienia.com`

### 2.6 Zdjęcia
- [ ] Dodaj **logo firmy** jako zdjęcie profilowe (użyj `icon-512.png`)
- [ ] Dodaj **zdjęcie w tle** (użyj `Front dla punkt odniesienia.png` lub `og-image.png`)
- [ ] Opcjonalnie: zdjęcia biura / zespołu

### 2.7 Kategoria
- [ ] Sprawdź kategorię główną: **Agencja marketingowa** lub **Firma konsultingowa**
- [ ] Dodaj dodatkowe: "Firma zajmująca się sztuczną inteligencją", "Agencja reklamowa"

### 2.8 Atrybuty
- [ ] Zaznacz: "Praca zdalna", "Spotkania online"

### 2.9 Recenzje (CEL: min. 5 opinii)
- [ ] Poproś pierwszych klientów o wystawienie recenzji
- Link do recenzji: `https://search.google.com/local/writereview?placeid=ChIJ_5lfe9ZFBEcR6LhKKS11DcM`

---

## 3. Email — adrian@punkt-odniesienia.com

Po aktywacji domeny, opcje konfiguracji email:

### Opcja A: Przekierowanie email (darmowe)
U rejestratora domeny → Email forwarding → `adrian@punkt-odniesienia.com` → Twój Gmail

### Opcja B: Google Workspace (płatne, ~30 PLN/mies.)
Pełny Gmail/Calendar na domenie firmowej. https://workspace.google.com/

### Opcja C: Zoho Mail (darmowe do 5 użytkowników)
https://www.zoho.com/mail/zohomail-pricing.html

---

*Dokument wygenerowany: 2026-04-14*
