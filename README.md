# 🚀 Portfolio Monorepo - Komple Dokümantasyon

Lerna ile yönetilen React (Frontend) + Express.js (Backend) monorepo projesi.

## 📁 Proje Yapısı

```
ekucuk/
├── packages/
│   ├── frontend/              # React + TypeScript + Vite (Public Site)
│   │   ├── src/
│   │   │   ├── services/      # API servisleri
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── .env
│   ├── admin/                 # React + TypeScript + Vite (Admin Panel)
│   │   ├── src/
│   │   │   ├── pages/         # Dashboard, Users, Projects, Settings
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── package.json
│   │   └── vite.config.ts
│   ├── backend/               # Express.js + Node.js (Layered Architecture)
│   │   ├── src/
│   │   │   ├── controllers/   # Request/Response handling
│   │   │   ├── services/      # Business logic
│   │   │   ├── models/        # Data models & validation
│   │   │   ├── routes/        # API endpoints
│   │   │   ├── middlewares/   # Global middlewares
│   │   │   └── index.js       # Server entry point
│   │   ├── package.json
│   │   ├── README.md          # Backend dokümantasyonu
│   │   └── .env
│   └── shared/                # Ortak types & helpers
│       ├── src/
│       │   ├── types.ts
│       │   ├── helpers.ts
│       │   └── index.ts
│       ├── dist/              # Build output (gitignored)
│       ├── package.json
│       └── tsconfig.json
├── package.json               # Root package
├── lerna.json                 # Lerna yapılandırması
├── .gitignore
└── README.md
```

---

## 🎯 İlk Kurulum (Adım Adım)

### 1. Repository'yi Klonla (veya başlat)

```bash
# Eğer yeni başlıyorsanız
git clone <repo-url>
cd ekucuk

# Veya mevcut klasörde
cd ekucuk
```

### 2. Root Bağımlılıkları Yükle

```bash
# Root seviyede (Lerna + tüm workspace paketleri)
npm install
```

**Bu komut:**
- Root dependencies'i yükler (Lerna)
- Workspace sayesinde `packages/frontend` ve `packages/backend` bağımlılıklarını otomatik yükler
- Sembolik linkler (symlinks) oluşturur

### 3. Environment Dosyalarını Oluştur

#### Backend .env

```bash
# Windows PowerShell
cd packages\backend
echo "PORT=5001`nNODE_ENV=development" > .env

# Linux/Mac
cd packages/backend
cat > .env << EOF
PORT=5001
NODE_ENV=development
EOF
```

#### Frontend .env (Opsiyonel)

```bash
# Windows PowerShell
cd packages\frontend
echo "DEFAULT_API_URL=http://localhost:5001" > .env

# Linux/Mac
cd packages/frontend
cat > .env << EOF
DEFAULT_API_URL=http://localhost:5001
EOF
```

### 4. İlk Çalıştırma

```bash
# Root klasöre dön
cd ../..

# Her iki paketi paralel çalıştır
npm run dev
```

✅ **Frontend:** http://localhost:3000  
✅ **Backend:** http://localhost:5001

---

## 🚀 Çalıştırma Komutları

### Root Seviyeden (Önerilen)

```bash
# Tüm paketleri paralel çalıştır (Development)
npm run dev

# Sadece Frontend'i çalıştır (Public Site - Port 3000)
npm run dev:frontend

# Sadece Admin Panel'i çalıştır (Port 3001)
npm run dev:admin

# Sadece Backend'i çalıştır (Port 5001)
npm run dev:backend

# Build (Production için)
npm run build:frontend    # Frontend build
npm run build:admin       # Admin panel build

# Tüm paketleri build et
npm run build
```

### Direkt Paket İçinden Çalıştırma

```bash
# Frontend (Public Site)
cd packages/frontend
npm run dev           # Development server (Vite) - Port 3000
npm run build         # Production build
npm run preview       # Build'i önizle

# Admin Panel
cd packages/admin
npm run dev           # Development server (Vite) - Port 3001
npm run build         # Production build
npm run preview       # Build'i önizle

# Backend
cd packages/backend
npm run dev           # Development (nodemon ile) - Port 5001
npm start             # Production (node ile)
```

### Durum Kontrolü

```bash
# Backend health check
curl http://localhost:5001/api/health

# Veya tarayıcıda
# http://localhost:5001/api/health
```

---

## 🎛️ Admin Panel

Admin panel, backend'i yönetmek için ayrı bir React uygulamasıdır.

### 📍 Erişim
- **URL:** http://localhost:3001
- **Port:** 3001
- **Package:** `@ekucuk/admin`

### 📄 Sayfalar

#### 1. Dashboard (`/`)
- Sistem istatistikleri (kullanıcılar, projeler, görevler)
- Son aktiviteler
- Genel bakış

#### 2. Users (`/users`)
- Kullanıcı listesi (tablo görünümü)
- Kullanıcı ekleme/düzenleme/silme (TODO)
- Rol ve durum yönetimi

#### 3. Projects (`/projects`)
- Proje kartları grid görünümü
- Backend'den `@ekucuk/shared` types kullanarak veri çekme
- CRUD işlemleri (TODO)

#### 4. Settings (`/settings`)
- Genel ayarlar
- Email yapılandırması
- API ayarları

### 🔒 Authentication
Şu anda `isAuthenticated = true` olarak ayarlı (mock). Gerçek authentication:

```typescript
// TODO: packages/admin/src/App.tsx
const isAuthenticated = checkAuth(); // Implement this
```

### 🎨 Styling
- Vanilla CSS (packages/admin/src/App.css)
- Modern, temiz admin panel tasarımı
- Responsive grid layouts
- Tailwind eklemek isterseniz: `npm install -D tailwindcss @tailwindcss/vite`

### 🔗 Shared Types Kullanımı
Admin panel, backend ile aynı type'ları kullanır:

```typescript
import type { Project } from '@ekucuk/shared'

// API'den veri çek
const projects: Project[] = await fetchProjects()
```

### 🚀 Geliştirme
```bash
# Admin panel'i çalıştır
npm run dev:admin

# Veya
cd packages/admin
npm run dev
```

**Not:** Frontend (3000) ve Admin (3001) aynı anda çalışabilir!

---

## 🏗️ Backend Katmanlı Mimari

Backend, **Layered Architecture** pattern kullanarak organize edilmiştir.

### 📐 Mimari Yapı

```
Request → Routes → Controllers → Services → Models → Database (future)
```

### 📁 Katmanlar

#### 1. **Routes** (`src/routes/`)
- Endpoint tanımları (GET, POST, PUT, DELETE)
- Path definitions
- Controller binding

```javascript
// routes/projectRoutes.js
router.get('/', projectController.getAllProjects)
router.post('/', projectController.createProject)
```

#### 2. **Controllers** (`src/controllers/`)
- Request/Response handling
- Input validation
- Service calls
- HTTP status codes
- Response formatting

```javascript
// controllers/projectController.js
async getAllProjects(req, res) {
  try {
    const projects = await projectService.getAllProjects()
    res.json(successResponse(projects))
  } catch (error) {
    res.status(500).json(errorResponse('ERROR', error.message))
  }
}
```

#### 3. **Services** (`src/services/`)
- Business logic
- CRUD operations
- Data processing
- External API calls

```javascript
// services/projectService.js
async getAllProjects() {
  const projects = await this.fetchFromDB()
  return projects.map(p => new Project(p))
}
```

#### 4. **Models** (`src/models/`)
- Data structure
- Validation logic
- Field definitions

```javascript
// models/Project.js
static validate(data) {
  // Validation logic
}
```

#### 5. **Middlewares** (`src/middlewares/`)
- Global error handling
- Authentication (future)
- Logging

### 📝 Yeni Endpoint Ekleme

**Detaylı rehber:** `packages/backend/README.md`

Kısaca:
1. Model oluştur → `models/User.js`
2. Service oluştur → `services/userService.js`
3. Controller oluştur → `controllers/userController.js`
4. Route oluştur → `routes/userRoutes.js`
5. Route'u index'e ekle → `routes/index.js`

### 📍 Mevcut Endpoint'ler

```
GET    /api/health          - Backend health check
GET    /api/projects        - Tüm projeler
GET    /api/projects/:id    - ID'ye göre proje
POST   /api/projects        - Yeni proje oluştur
POST   /api/contact         - İletişim formu gönder
GET    /api/contact         - İletişim formları (Admin)
```

### 🔍 Daha Fazla Bilgi

Backend mimarisi, best practices ve örnek kodlar için:
**`packages/backend/README.md`** dosyasını inceleyin.

---

## 📦 Paket ve Bağımlılık Yönetimi

### 1. Lerna ile Bağımlılık Ekleme

#### Belirli Pakete Bağımlılık Ekle

```bash
# Backend'e runtime dependency ekle
lerna add express --scope=@ekucuk/backend
lerna add mysql2 --scope=@ekucuk/backend
lerna add bcrypt --scope=@ekucuk/backend
lerna add jsonwebtoken --scope=@ekucuk/backend

# Backend'e dev dependency ekle
lerna add @types/node --scope=@ekucuk/backend --dev
lerna add typescript --scope=@ekucuk/backend --dev

# Frontend'e dependency ekle
lerna add axios --scope=@ekucuk/frontend
lerna add react-router-dom --scope=@ekucuk/frontend
lerna add @tanstack/react-query --scope=@ekucuk/frontend

# Frontend'e dev dependency ekle
lerna add @types/react-router-dom --scope=@ekucuk/frontend --dev
```

#### Tüm Paketlere Aynı Dependency Ekle

```bash
# Tüm paketlere ortak bağımlılık
lerna add lodash

# Tüm paketlere dev dependency
lerna add prettier --dev
```

#### Paketler Arası Bağımlılık (Local Packages)

```bash
# Önce shared paketi oluştur
mkdir packages/shared
cd packages/shared
npm init -y

# Frontend'e shared paketini ekle
lerna add @ekucuk/shared --scope=@ekucuk/frontend

# Backend'e shared paketini ekle
lerna add @ekucuk/shared --scope=@ekucuk/backend
```

### 2. NPM Workspaces ile Bağımlılık Yönetimi

```bash
# Root'tan belirli pakete dependency ekle
npm install axios -w @ekucuk/frontend
npm install express -w @ekucuk/backend

# Root'tan dev dependency ekle
npm install -D typescript -w @ekucuk/backend

# Tüm workspace'lere ekle
npm install lodash --workspaces
```

### 3. Bağımlılıkları Güncelleme

```bash
# Belirli paketteki bağımlılıkları güncelle
lerna exec --scope=@ekucuk/frontend -- npm update

# Tüm paketlerdeki bağımlılıkları güncelle
lerna exec -- npm update

# Belirli bir bağımlılığı güncelle
npm update react -w @ekucuk/frontend
```

### 4. Bağımlılıkları Silme

```bash
# Lerna ile sil
lerna exec --scope=@ekucuk/backend -- npm uninstall express

# NPM workspaces ile sil
npm uninstall axios -w @ekucuk/frontend

# Root'tan tüm node_modules'ları sil ve tekrar yükle
lerna clean -y
npm install
```

### 5. Lerna Run Komutları

```bash
# Tüm paketlerde script çalıştır
lerna run dev                    # Hepsinde dev scriptini çalıştır
lerna run build                  # Hepsinde build scriptini çalıştır
lerna run test                   # Hepsinde test scriptini çalıştır

# Paralel çalıştır (önemli!)
lerna run dev --parallel         # Paralel mode (development için)
lerna run test --parallel        # Testleri paralel çalıştır

# Belirli pakette çalıştır
lerna run build --scope=@ekucuk/frontend
lerna run dev --scope=@ekucuk/backend

# Stream output (loglara bakmak için)
lerna run dev --stream

# Sadece değişen paketlerde çalıştır
lerna run build --since HEAD
lerna run test --since main
```

### 6. Lerna Exec Komutları

```bash
# Tüm paketlerde komut çalıştır
lerna exec -- ls -la
lerna exec -- pwd
lerna exec -- npm outdated

# Belirli pakette komut çalıştır
lerna exec --scope=@ekucuk/backend -- node --version

# Paralel çalıştır
lerna exec --parallel -- npm audit
```

### 7. Lerna List Komutları

```bash
# Tüm paketleri listele
lerna list
lerna ls

# Detaylı bilgi ile
lerna ls -l
lerna ls --long

# JSON formatında
lerna ls --json

# Sadece paket isimlerini
lerna ls --all
```

### 8. Temizleme ve Yeniden Kurulum

```bash
# Tüm node_modules klasörlerini sil
lerna clean
lerna clean -y              # Onay istemeden

# Root ve tüm paketleri yeniden kur
npm install

# Sadece root'u yeniden kur
rm -rf node_modules package-lock.json
npm install

# Belirli paketin node_modules'ını sil
rm -rf packages/frontend/node_modules
npm install
```

---

## 🏗️ Build ve Deployment

### Development Build

```bash
# Frontend development server
npm run dev:frontend
# Veya
cd packages/frontend && npm run dev

# Backend development server
npm run dev:backend
# Veya
cd packages/backend && npm run dev
```

### Production Build

```bash
# Frontend build
npm run build:frontend
# Çıktı: packages/frontend/dist/

# Tüm paketleri build et
npm run build

# Build dosyalarını kontrol et
cd packages/frontend/dist
ls -la
```

### Production'da Çalıştırma

```bash
# Backend
cd packages/backend
NODE_ENV=production PORT=5001 npm start

# Frontend (Static hosting için)
# dist/ klasörünü Nginx, Apache, Vercel, Netlify vb. yükle
cd packages/frontend
npm run preview  # Local'de önizleme
```

### Docker ile Deployment (Gelecek)

```bash
# Dockerfile oluşturulduğunda
docker build -t portfolio-backend ./packages/backend
docker build -t portfolio-frontend ./packages/frontend

docker run -p 5001:5001 portfolio-backend
docker run -p 3000:3000 portfolio-frontend
```

---

## 🔧 Git ve Versiyon Yönetimi

### Git İşlemleri

```bash
# İlk commit
git add .
git commit -m "Initial monorepo setup"

# Değişiklikleri commit et
git add .
git commit -m "feat: add new feature"

# Push
git push origin main

# Branch oluştur
git checkout -b feature/new-feature
```

### Lerna ile Versiyonlama

```bash
# Versiyon artır (tüm paketler)
lerna version patch          # 0.0.0 → 0.0.1
lerna version minor          # 0.0.1 → 0.1.0
lerna version major          # 0.1.0 → 1.0.0

# Sadece değişen paketleri versiyonla
lerna version --conventional-commits

# Versiyon artır ve git tag oluştur
lerna version --create-release github

# Dry run (test)
lerna version --no-git-tag-version
```

### Semantic Commit Messages

```bash
# Önerilen commit formatı
git commit -m "feat(frontend): add contact form"
git commit -m "fix(backend): resolve CORS issue"
git commit -m "chore: update dependencies"
git commit -m "docs: update README"

# Tipler:
# feat: Yeni özellik
# fix: Bug fix
# chore: Bakım işleri
# docs: Dokümantasyon
# style: Formatting
# refactor: Kod iyileştirme
# test: Test ekleme
# perf: Performance iyileştirme
```

---

## 🌍 Environment Variables

### Backend Environment Variables

`packages/backend/.env`:
```bash
# Server
PORT=5001
NODE_ENV=development

# Database (MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_NAME=portfolio
DB_USER=root
DB_PASSWORD=yourpassword

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:3000

# Email (Opsiyonel)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend Environment Variables

`packages/frontend/.env`:
```bash
# API URL
DEFAULT_API_URL=http://localhost:5001

# Production
# DEFAULT_API_URL=https://api.yourdomain.com

# Google Analytics (Opsiyonel)
VITE_GA_ID=G-XXXXXXXXXX

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

### Environment Dosyalarını Yönetme

```bash
# .env.example oluştur (git'e eklenecek)
cp packages/backend/.env packages/backend/.env.example
# Sonra hassas bilgileri sil

# Farklı environmentler için
packages/backend/.env.development
packages/backend/.env.production
packages/backend/.env.test

# Kullanım
NODE_ENV=production node src/index.js
```

---

## 🧪 Testing (Gelecek Kurulum)

### Jest ile Test Setup

```bash
# Backend için Jest ekle
lerna add jest --scope=@ekucuk/backend --dev
lerna add supertest --scope=@ekucuk/backend --dev

# Frontend için Vitest (Vite ile uyumlu)
lerna add vitest --scope=@ekucuk/frontend --dev
lerna add @testing-library/react --scope=@ekucuk/frontend --dev
```

### Test Komutları

```bash
# Tüm paketlerde test çalıştır
lerna run test

# Paralel test
lerna run test --parallel

# Sadece backend test
lerna run test --scope=@ekucuk/backend

# Watch mode
cd packages/backend && npm run test:watch
```

---

## 🎨 Linting ve Formatting (Gelecek)

### ESLint ve Prettier Setup

```bash
# Root'a ekle (tüm paketler için ortak)
npm install -D eslint prettier eslint-config-prettier

# Frontend zaten ESLint içeriyor
cd packages/frontend
npm run lint

# Backend için ekle
lerna add eslint --scope=@ekucuk/backend --dev
```

### Lint Komutları

```bash
# Tüm paketlerde lint çalıştır
lerna run lint

# Otomatik düzelt
lerna run lint -- --fix

# Prettier ile formatla
lerna exec -- prettier --write "src/**/*.{js,jsx,ts,tsx,json}"
```

---

## 🔗 Paketler Arası Bağımlılık ve İletişim

### 1. Frontend → Backend HTTP İletişimi

Frontend, backend'e REST API ile bağlanır:

```typescript
// packages/frontend/src/services/api.ts
const API_BASE_URL = import.meta.env.DEFAULT_API_URL || 'http://localhost:5001';

export const api = {
  async get(endpoint) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  }
};
```

**Vite Proxy Yapılandırması:**
```typescript
// packages/frontend/vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      }
    }
  }
});
```

Bu sayede frontend'den `/api/projects` isteği otomatik olarak `http://localhost:5001/api/projects`'e yönlendirilir.

### 2. Ortak Paket Oluşturma (Shared Package) ✅

Frontend ve backend arasında **ortak tipler, sabitler ve utility fonksiyonları** paylaşmak için shared paketi kullanılır.

#### 📦 Yapı

```
packages/shared/
├── src/
│   ├── types.ts       # ApiResponse, Project vb.
│   ├── helpers.ts     # successResponse, errorResponse
│   └── index.ts       # Tüm export'lar
├── dist/              # Build çıktısı (auto-generated)
├── package.json
└── tsconfig.json
```

#### 🔨 Build & Watch Mode

Shared paketi TypeScript olduğu için JavaScript'e compile edilmelidir:

```bash
# İlk build (tek seferlik)
npm run build:shared

# Watch mode - değişiklikleri otomatik compile eder
npm run watch:shared

# Backend/Frontend çalıştır (otomatik watch mode aktif)
npm run dev:backend  # Shared değişikliklerini otomatik algılar ⚡
npm run dev          # Tüm paketler + watch mode
```

**✅ Watch mode aktifken** shared'da yaptığın değişiklikler anında compile edilir!

#### 📝 Paketlere Bağlama (Manuel)

**Not:** Lerna v9'da `lerna add` komutu kaldırıldı. Manuel ekleme yapın:

```json
// packages/frontend/package.json veya packages/backend/package.json
{
  "dependencies": {
    "@ekucuk/shared": "*"
  }
}
```

Sonra `npm install` çalıştırın.

#### 💡 Kullanım

**Frontend (TypeScript):**
```typescript
import type { ApiResponse, Project } from '@ekucuk/shared';
import { successResponse, errorResponse } from '@ekucuk/shared';

const data: ApiResponse<Project[]> = await fetchProjects();
```

**Backend (JavaScript):**
```javascript
import { successResponse, errorResponse } from '@ekucuk/shared';

app.get('/api/projects', (req, res) => {
  /** @type {import('@ekucuk/shared').Project[]} */
  const projects = [...];
  
  res.json(successResponse(projects));
});

app.post('/api/error', (req, res) => {
  res.json(errorResponse('ERROR_CODE', 'Error message'));
});
```

#### 🎯 Helper Fonksiyonları

```javascript
// Başarılı response
successResponse(data)
// → { result: data, isSuccessful: true, error: null }

// Hata response
errorResponse('VALIDATION_ERROR', 'Required fields missing')
// → { result: null, isSuccessful: false, error: { code, message } }
```

---

## 📝 API Response Formatı

Tüm API endpoint'leri standart format kullanır:

```typescript
interface ApiResponse<T> {
  result: T;              // Başarılı sonuç verisi
  isSuccessful: boolean;  // İşlem başarılı mı?
  error: {
    code: string;         // Hata kodu (ör: "VALIDATION_ERROR")
    message: string;      // Hata mesajı
  } | null;              // Hata yoksa null
}
```

**Örnek Kullanım:**

```javascript
// Backend (Express)
app.get('/api/projects', (req, res) => {
  res.json({
    result: { projects: [...] },
    isSuccessful: true,
    error: null
  });
});

// Hata durumunda
app.post('/api/contact', (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({
      result: null,
      isSuccessful: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Email is required'
      }
    });
  }
});
```

---

## 🔍 Troubleshooting (Sorun Giderme)

### 1. Lerna Komutları Çalışmıyor

```bash
# Lerna'yı global yükle
npm install -g lerna

# Veya npx ile çalıştır
npx lerna list
npx lerna run dev
```

### 2. Port Zaten Kullanımda

```bash
# Windows'ta portu kontrol et
netstat -ano | findstr :5001
netstat -ano | findstr :3000

# Process'i öldür
taskkill /PID <process_id> /F

# Linux/Mac
lsof -ti:5001 | xargs kill -9
lsof -ti:3000 | xargs kill -9
```

### 3. Node_modules Sorunları

```bash
# Tüm node_modules'ları temizle ve yeniden yükle
lerna clean -y
rm -rf node_modules package-lock.json
npm install
```

### 4. CORS Hataları

Backend'de CORS ayarlarını kontrol edin:

```javascript
// packages/backend/src/index.js
import cors from 'cors';

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

### 5. Symlink Hataları

```bash
# Workspace linklerini yeniden oluştur
npm install --force
```

### 6. Vite Proxy Çalışmıyor

```typescript
// packages/frontend/vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  }
});
```

### 7. Environment Variables Okumuyor

```bash
# Vite için değişkenler VITE_ ile başlamalı
DEFAULT_API_URL=http://localhost:5001  # ✅ Doğru
API_URL=http://localhost:5001       # ❌ Yanlış

# .env dosyasından sonra server'ı yeniden başlat
# Ctrl+C ile durdur ve npm run dev ile başlat
```

---

## 🎯 Yaygın Senaryolar ve Komutlar

### Yeni Bir Özellik Eklemek

```bash
# 1. Branch oluştur
git checkout -b feature/new-feature

# 2. Gerekli paketleri ekle
lerna add axios --scope=@ekucuk/frontend

# 3. Kod yaz ve test et
npm run dev

# 4. Commit at
git add .
git commit -m "feat: add new feature"

# 5. Push et
git push origin feature/new-feature
```

### Database (MySQL) Bağlantısı Eklemek

```bash
# Backend'e MySQL ekle
lerna add mysql2 --scope=@ekucuk/backend

# .env dosyasına ekle
echo "DB_HOST=localhost\nDB_USER=root\nDB_PASSWORD=password\nDB_NAME=portfolio" >> packages/backend/.env

# Connection dosyası oluştur
# packages/backend/src/db/connection.js
```

### TypeScript'e Geçiş (Backend)

```bash
# Backend'e TypeScript ekle
lerna add typescript --scope=@ekucuk/backend --dev
lerna add @types/node --scope=@ekucuk/backend --dev
lerna add @types/express --scope=@ekucuk/backend --dev
lerna add ts-node --scope=@ekucuk/backend --dev

# tsconfig.json oluştur
cd packages/backend
npx tsc --init

# package.json'u güncelle
# "dev": "nodemon --exec ts-node src/index.ts"
```

### CI/CD Pipeline (GitHub Actions)

`.github/workflows/ci.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run linting
        run: lerna run lint
      
      - name: Run tests
        run: lerna run test
      
      - name: Build
        run: lerna run build
```

---

## 📚 Önemli Lerna Kavramları

### 1. **Scope (@ekucuk/...)**
- Her paket benzersiz bir scope ile isimlendirilir
- Örnek: `@ekucuk/frontend`, `@ekucuk/backend`
- Paketler arası referans için kullanılır

### 2. **Workspaces**
- NPM Workspaces ile entegre çalışır
- `npm install` root'ta çalıştırıldığında tüm paketleri yükler
- Sembolik linkler (symlinks) oluşturur
- Disk alanından tasarruf sağlar

### 3. **Hoisting**
- Ortak bağımlılıklar root `node_modules`'a yüklenir
- Disk kullanımını azaltır
- Bağımlılık çakışmalarını önler

### 4. **Paralel Execution (--parallel)**
- Birden fazla paketi aynı anda çalıştırır
- Development için idealdir
- Örnek: `lerna run dev --parallel`

### 5. **Scope Filtering (--scope)**
- Belirli paketlere komut gönderir
- Örnek: `lerna run build --scope=@ekucuk/frontend`
- Multiple scope: `--scope={@ekucuk/frontend,@ekucuk/backend}`

### 6. **Changed Packages (--since)**
- Sadece değişen paketlerde komut çalıştırır
- Git commit'lerine göre filtreler
- Örnek: `lerna run build --since HEAD`

---

## 🎨 Best Practices

### 1. Commit Mesajları
```bash
feat(frontend): add user authentication
fix(backend): resolve database connection issue
chore: update dependencies
docs: improve README
style: format code with prettier
refactor(backend): simplify API routes
test: add unit tests for user service
perf(frontend): optimize bundle size
```

### 2. Branch Stratejisi
```
main          → Production
develop       → Development
feature/*     → Yeni özellikler
fix/*         → Bug fixes
hotfix/*      → Acil düzeltmeler
```

### 3. Environment Yönetimi
- `.env` → Local development (git'e eklenmez)
- `.env.example` → Template (git'e eklenir)
- `.env.production` → Production ayarları
- `.env.test` → Test ayarları

### 4. Package.json Scripts
- `dev` → Development server
- `build` → Production build
- `start` → Production server
- `test` → Test çalıştır
- `lint` → Kod kontrolü

---

## 🚀 İleri Seviye Özellikler

### 1. Ortak TypeScript Config

`tsconfig.base.json` (root):
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true
  }
}
```

Paketlerde:
```json
{
  "extends": "../../tsconfig.base.json"
}
```

### 2. Ortak ESLint Config

`.eslintrc.js` (root):
```javascript
module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    'no-console': 'warn'
  }
};
```

### 3. Husky ile Git Hooks

```bash
npm install -D husky
npx husky install

# Pre-commit hook
npx husky add .husky/pre-commit "lerna run lint"
```

---

## 📖 Kaynaklar ve Referanslar

- **Lerna Docs:** https://lerna.js.org/
- **NPM Workspaces:** https://docs.npmjs.com/cli/v8/using-npm/workspaces
- **Vite:** https://vitejs.dev/
- **Express.js:** https://expressjs.com/
- **React:** https://react.dev/

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

## 📞 İletişim

Sorularınız için issue açabilirsiniz.

---

## 📄 Lisans

MIT

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

