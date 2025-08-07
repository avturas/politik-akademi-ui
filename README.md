# 🏛️ Politik Akademi UI

**Github'daki markdown tabanlı içerikleri anlık olarak çekip sade bir arayüzde gösteren Angular uygulaması**

---

## 🎯 Amaç

Bu uygulama, [politik-akademi-icerik](https://github.com/avturas/politik-akademi-icerik) adlı Github reposunda tutulan eğitim içeriklerini (Markdown formatında) kullanıcıya okunabilir ve erişilebilir bir arayüzle sunmak için geliştirilmiştir.

Kullanıcılar, içerikleri kategori ve modül bazında filtreleyerek çalışabilir.

---

## 🧱 Teknolojiler

| Katman   | Teknoloji                     |
| -------- | ----------------------------- |
| Frontend | Angular 20                    |
| UI Kit   | Angular Material              |
| İçerik   | Markdown + Github Raw Content |

---

## ⚙️ Özellikler

- 📥 İçerikler doğrudan Github'dan (`raw.githubusercontent.com`) çekilir.
- 📚 Markdown dosyaları Angular içinde dinamik olarak işlenir.
- 🔎 Kategori, modül ve başlığa göre filtreleme yapılabilir.
- 🌐 Statik içerik yönetimi yerine içeriklerin merkezi olarak bir depoda tutulması sayesinde sade yapı.

---

## ⚠️ Github'dan İçerik Çekmenin Avantajları ve Yan Etkileri

### ✅ Avantajlar

- **Güncel içerik**: İçeriklerde yapılan her güncelleme, kullanıcıya anında yansır.
- **Merkezi kontrol**: İçerikler tek bir yerde (markdown repo) yönetilir; UI kodundan ayrı tutulur.
- **Versiyonlama**: İçerik geçmişi Git ile takip edilebilir.
- **Dağıtımı kolay**: CI/CD veya deploy süreçleri olmadan sadece içerik güncellenerek yayınlanabilir.

### ⚠️ Olası Yan Etkiler

- **Yüklenme süresi**: Her sayfa açılışında Github üzerinden içerik çekildiği için ilk yükleme birkaç saniye sürebilir.
- **İnternet gerekliliği**: İçeriklerin görüntülenebilmesi için aktif internet bağlantısı ve Github'a erişim gerekir.
- **Rate limit**: Github API değil, raw içerikler kullanılsa da, çok sık istek gönderilmesi durumunda IP bazlı sınırlandırmalar olabilir.
- **Güvenilirlik bağımlılığı**: Github tarafındaki repo yapısının veya `index.json` dosyasının bozulması, UI tarafında hatalara yol açabilir.

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

Uygulama, `politik-akademi-icerik` deposundaki `index.json` dosyasına göre içerikleri Github üzerinden çeker:

```json
[
  {
    "title": "Siyaset Nedir?",
    "slug": "01-siyaset-nedir",
    "category": "Tarihi ve Kuramsal Temeller",
    "module": "Siyasetin Temelleri",
    "path": "tarihi-ve-kuramsal-temeller/siyasetin-temelleri/01-siyaset-nedir"
  }
]
```

Bu yapı sayesinde UI tarafında her içerik otomatik olarak eşleşir ve gösterilir.

---

## 📖 Lisans

Tüm içerikler [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır.  
**Not:** İçerikler tamamen ChatGPT tarafından oluşturulmuştur, hata veya eksiklikler içerebilir.

---
