# 🏛️ Politik Akademi UI

**GitHub Pages üzerinden sunulan markdown tabanlı içerikleri anlık olarak çekip sade bir arayüzde gösteren Angular uygulaması**

---

## 🎯 Amaç

Bu uygulama, [politik-akademi-icerik](https://github.com/avturas/politik-akademi-icerik) adlı GitHub reposunda tutulan eğitim içeriklerini (Markdown formatında) kullanıcıya okunabilir ve erişilebilir bir arayüzle sunmak için geliştirilmiştir.

Kullanıcılar, içerikleri kategori ve modül bazında filtreleyerek çalışabilir.

---

## 🧱 Teknolojiler

| Katman   | Teknoloji                   |
| -------- | --------------------------- |
| Frontend | Angular 20                  |
| UI Kit   | Angular Material            |
| İçerik   | Markdown + GitHub Pages CDN |

---

## ⚙️ Özellikler

- 📥 İçerikler doğrudan GitHub Pages üzerinden (CDN) çekilir:
  `https://avturas.github.io/politik-akademi-icerik/`
- 📚 Markdown dosyaları Angular içinde dinamik olarak işlenir.
- 🔎 Kategori, modül ve başlığa göre filtreleme yapılabilir.
- 🧩 İçerik yönetimi UI’dan ayrılmıştır — merkezi ve sade yapı.

---

## ✅ Neden GitHub Pages Tabanlı CDN?

| Avantaj           | Açıklama                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------- |
| 📦 Dağıtımı kolay | Deploy etmeye gerek kalmadan sadece içerik repo güncellenerek tüm uygulamalar etkilenir. |
| 🌍 Global erişim  | GitHub Pages üzerinden tüm dünyadan hızlı erişim.                                        |

---

## ⚠️ Dikkat Edilmesi Gerekenler

- ⏳ **Yükleme süresi**: İçerik ilk defa çekiliyorsa CDN üzerinden birkaç saniye sürebilir.
- 🌐 **İnternet gerekliliği**: İçeriklerin yüklenebilmesi için aktif bağlantı gerekir.
- 🚦 **GitHub Pages limiti**: Çok yoğun istek altında (örn. DDOS durumlarında) bazı erişim kısıtlamaları oluşabilir.
- 🔧 **Yapı bozulmaları**: `index.json` veya markdown yollarındaki hata, UI'da kırık sayfalara sebep olabilir.

---

## 🚀 Kurulum

Projeyi çalıştırmak için aşağıdaki adımları takip edin:

```bash
git clone https://github.com/avturas/politik-akademi-ui.git
cd politik-akademi-ui
npm install
ng serve
```

Tarayıcıda [http://localhost:4200](http://localhost:4200) adresini açarak uygulamayı görüntüleyebilirsiniz.

---

## 📁 İçerik Yapısı

Uygulama, `politik-akademi-icerik` deposundaki `index.json` dosyasına göre içerikleri CDN üzerinden çeker:

```json
{
  "title": "Yunan Polisleri ve Doğrudan Demokrasi Deneyimi",
  "slug": "06-yunan-polisleri-ve-dogrudan-demoktasi-deneyimi",
  "category": "Tarihi ve Kuramsal Temeller",
  "module": "Siyasetin Tarihsel Temelleri ve Gucun Evrimi",
  "path": "tarihi-ve-kuramsal-temeller/siyasetin-tarihsel-temelleri-ve-gucun-evrimi/06-yunan-polisleri-ve-dogrudan-demoktasi-deneyimi.md"
}
```

UI uygulaması, bu `path` değerini `https://avturas.github.io/politik-akademi-icerik/` temeliyle birleştirerek içeriği yükler.

---

## 📖 Lisans

Tüm içerikler [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır.  
**Not:** İçerikler tamamen ChatGPT tarafından oluşturulmuştur, hata veya eksiklikler içerebilir.
