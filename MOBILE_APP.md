# Antik Türkiye mobil kullanım notları

Bu proje statik GitHub Pages sitesi olduğu için ilk mobil deneme için **PWA** olarak hazırlandı. PWA; iPhone ve Android'de ana ekrana eklenebilir, uygulama gibi tam ekran açılabilir ve sayfaların temel HTML içeriklerini çevrimdışı önbelleğe alabilir.

## GitHub PR notu

Bu mobil/PWA denemesinde ikili PNG ikon dosyaları kullanılmaz. Uygulama ikonu `assets/icons/antik-turkiye-icon.svg` olarak metin tabanlı SVG dosyasında tutulur. Böylece GitHub web arayüzündeki **İkili dosyalar desteklenmez** hatasına takılmadan PR oluşturulabilir.

## iPhone / iPad üzerinde deneme

> Not: iOS tarafında paket uzantısı `.apk` değil, `.ipa` olur. `.ipa` üretmek için Mac, Xcode ve Apple Developer hesabı gerekir.

1. Siteyi Safari ile aç.
2. Paylaş düğmesine dokun.
3. **Ana Ekrana Ekle** seçeneğini seç.
4. Adı `Antik Türkiye` olarak bırakıp ekle.
5. Ana ekrandaki ikon üzerinden siteyi uygulama gibi aç.

> Not: iOS bazı sürümlerde `apple-touch-icon` için PNG ikonları tercih eder. Bu PR, GitHub aktarım hatasını önlemek için binary PNG eklemez; gerekirse PNG ikonlar daha sonra terminalden ayrı bir commit olarak eklenebilir.

## Android üzerinde deneme

1. Siteyi Chrome ile aç.
2. Menüden **Uygulamayı yükle** / **Ana ekrana ekle** seçeneğini seç.
3. Ana ekrandaki ikon üzerinden kullan.

## Gerçek APK istenirse

Bu PWA temeli hazır olduğu için bir sonraki adımda iki yol var:

- **Trusted Web Activity (TWA):** GitHub Pages sitesini Android APK içine sarmak için hafif yöntem.
- **Capacitor:** Mevcut HTML/CSS/JS dosyalarını Android/iOS native kabuğuna almak için daha esnek yöntem.

APK üretmek için Android Studio veya GitHub Actions tabanlı bir build akışı eklenebilir.
