# @ekucuk/shared

Monorepo için ortak types ve helper fonksiyonları.

## 📦 İçerik

### Types (`types.ts`)
- `ApiResponse<T>` - Standart API response formatı
- `Project` - Proje bilgileri

### Helpers (`helpers.ts`)
- `successResponse(result)` - Başarılı response oluşturur
- `errorResponse(code, message)` - Hata response oluşturur

## 🚀 Kullanım

### Frontend (TypeScript)
```typescript
import type { ApiResponse, Project } from '@ekucuk/shared';
import { successResponse, errorResponse } from '@ekucuk/shared';

// Type olarak kullan
const data: ApiResponse<Project[]> = await fetchProjects();
```

### Backend (JavaScript)
```javascript
import { successResponse, errorResponse } from '@ekucuk/shared';

// Helper fonksiyonları kullan
app.get('/api/data', (req, res) => {
  res.json(successResponse({ data: 'example' }));
});

app.get('/api/error', (req, res) => {
  res.json(errorResponse('ERROR_CODE', 'Error message'));
});

// JSDoc ile type annotation
/** @type {import('@ekucuk/shared').Project[]} */
const projects = [...];
```

## 📁 Dosya Yapısı
```
packages/shared/
├── src/
│   ├── index.ts      # Ana export dosyası
│   ├── types.ts      # Type tanımları
│   └── helpers.ts    # Helper fonksiyonları
├── dist/             # Build çıktısı (gitignore'da)
│   ├── *.js          # Compiled JavaScript
│   ├── *.d.ts        # Type definitions
│   └── *.map         # Source maps
├── package.json
├── tsconfig.json
└── README.md
```

## 🔨 Build & Watch Mode

Shared paketi TypeScript'ten JavaScript'e compile edilir:

```bash
# Root dizininden
npm run build:shared         # Tek seferlik build
npm run watch:shared         # Watch mode (auto-rebuild)
npm run dev:backend          # Otomatik watch mode ile başlar ⚡

# Veya shared dizininden
cd packages/shared
npm run build                # Tek seferlik build
npm run watch                # Watch mode (auto-rebuild)
```

**🎯 Development Önerisi:**
- `npm run dev:backend` çalıştır → Watch mode otomatik aktif olur
- Shared'da değişiklik yap → Otomatik rebuild ✅
- Backend restart olmadan değişiklikleri görürsün (nodemon sayesinde)


