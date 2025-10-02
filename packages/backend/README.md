# 🚀 Backend - Express.js API

Katmanlı mimari (Layered Architecture) ile oluşturulmuş RESTful API.

## 📁 Proje Yapısı

```
packages/backend/
├── src/
│   ├── controllers/        # Request/Response yönetimi
│   │   ├── healthController.js
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── services/          # Business logic
│   │   ├── projectService.js
│   │   └── contactService.js
│   ├── models/            # Data models & validation
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/            # API endpoint tanımları
│   │   ├── index.js       # Route aggregator
│   │   ├── healthRoutes.js
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── middlewares/       # Global middlewares
│   │   └── errorHandler.js
│   └── index.js           # Ana server dosyası
├── package.json
└── README.md
```

## 🏗️ Mimari Yapı

### Katmanlı Mimari Akışı

```
┌─────────────────────────────────────────────────────────┐
│                      Client Request                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  index.js - Server Setup & Middleware Configuration     │
│  • CORS, JSON parser, URL encoding                      │
│  • Request logging (development)                        │
│  • Route mounting (/api)                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  routes/ - Endpoint Definitions                         │
│  • HTTP method tanımları (GET, POST, PUT, DELETE)       │
│  • Path definitions (/projects, /contact)               │
│  • Controller method binding                            │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  controllers/ - Request/Response Handling               │
│  • Request validation                                   │
│  • Service method calls                                 │
│  • Response formatting (successResponse/errorResponse)  │
│  • HTTP status codes                                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  services/ - Business Logic                             │
│  • Data processing                                      │
│  • Business rules                                       │
│  • Database operations (future)                         │
│  • External API calls                                   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  models/ - Data Structure & Validation                  │
│  • Data model definitions                               │
│  • Field validations                                    │
│  • Data transformation                                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                     Client Response                      │
│            { result, isSuccessful, error }              │
└─────────────────────────────────────────────────────────┘
```

## 🎯 Her Katmanın Sorumluluğu

### 1. Models (Veri Katmanı)

**Sorumluluklar:**
- Veri yapısının tanımlanması
- Field validasyonları
- Data transformation logic

**Örnek:**
```javascript
// models/Project.js
export class Project {
  constructor({ id, title, tech, description }) {
    this.id = id
    this.title = title
    this.tech = tech
    this.description = description || null
  }

  static validate(data) {
    const errors = []
    
    if (!data.title || data.title.trim() === '') {
      errors.push('Title is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}
```

**❗ Dikkat Edilmesi Gerekenler:**
- ✅ Sadece veri yapısı ve validasyon
- ❌ Business logic içermemeli
- ❌ Database operations içermemeli
- ❌ HTTP request/response bilgisi içermemeli

---

### 2. Services (İş Mantığı Katmanı)

**Sorumluluklar:**
- Business logic
- CRUD operations
- Data processing
- Database queries (gelecekte)
- External API calls

**Örnek:**
```javascript
// services/projectService.js
class ProjectService {
  async getAllProjects() {
    try {
      // Business logic
      const projects = await this.fetchFromDB()
      
      // Data transformation
      return projects.map(p => new Project(p))
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`)
    }
  }

  async createProject(projectData) {
    // Validation
    const validation = Project.validate(projectData)
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '))
    }

    // Business logic
    const newProject = new Project({
      id: this.generateId(),
      ...projectData
    })

    // Save to DB (future)
    await this.saveToDb(newProject)
    
    return newProject
  }
}

export default new ProjectService()
```

**❗ Dikkat Edilmesi Gerekenler:**
- ✅ Singleton pattern kullanılabilir (export default new Service())
- ✅ Async/await kullanılmalı
- ✅ Error handling yapılmalı
- ❌ HTTP status code içermemeli
- ❌ Request/Response nesneleri kullanılmamalı

---

### 3. Controllers (İstek Yönetimi Katmanı)

**Sorumluluklar:**
- Request handling
- Input validation
- Service method calls
- Response formatting
- HTTP status codes

**Örnek:**
```javascript
// controllers/projectController.js
import { successResponse, errorResponse } from '@ekucuk/shared'
import projectService from '../services/projectService.js'

class ProjectController {
  async getAllProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects()
      res.json(successResponse(projects))
    } catch (error) {
      res.status(500).json(
        errorResponse('FETCH_PROJECTS_ERROR', error.message)
      )
    }
  }

  async createProject(req, res) {
    try {
      const project = await projectService.createProject(req.body)
      res.status(201).json(successResponse(project))
    } catch (error) {
      res.status(400).json(
        errorResponse('CREATE_PROJECT_ERROR', error.message)
      )
    }
  }
}

export default new ProjectController()
```

**❗ Dikkat Edilmesi Gerekenler:**
- ✅ Her method async olmalı
- ✅ Try-catch ile error handling
- ✅ Doğru HTTP status code kullanılmalı (200, 201, 400, 404, 500)
- ✅ successResponse/errorResponse kullanılmalı (@ekucuk/shared)
- ❌ Business logic içermemeli
- ❌ Database operations içermemeli

---

### 4. Routes (Endpoint Tanımları)

**Sorumluluklar:**
- HTTP method tanımları
- Path definitions
- Controller method binding
- Middleware mounting (optional)

**Örnek:**
```javascript
// routes/projectRoutes.js
import express from 'express'
import projectController from '../controllers/projectController.js'

const router = express.Router()

// GET /api/projects
router.get('/', projectController.getAllProjects)

// GET /api/projects/:id
router.get('/:id', projectController.getProjectById)

// POST /api/projects
router.post('/', projectController.createProject)

// PUT /api/projects/:id
router.put('/:id', projectController.updateProject)

// DELETE /api/projects/:id
router.delete('/:id', projectController.deleteProject)

export default router
```

**❗ Dikkat Edilmesi Gerekenler:**
- ✅ RESTful naming convention
- ✅ Express Router kullanılmalı
- ✅ Controller method'ları bind edilmeli
- ❌ Business logic içermemeli
- ❌ Route içinde inline function kullanılmamalı

---

### 5. Middlewares (Ara Katman)

**Sorumluluklar:**
- Global error handling
- Authentication/Authorization
- Request logging
- Input sanitization
- Rate limiting (future)

**Örnek:**
```javascript
// middlewares/errorHandler.js
import { errorResponse } from '@ekucuk/shared'

export const notFoundHandler = (req, res, next) => {
  res.status(404).json(
    errorResponse('NOT_FOUND', `Route ${req.originalUrl} not found`)
  )
}

export const globalErrorHandler = (err, req, res, next) => {
  console.error('Error:', err)

  const statusCode = err.statusCode || 500
  res.status(statusCode).json(
    errorResponse(err.code || 'INTERNAL_ERROR', err.message)
  )
}
```

**❗ Dikkat Edilmesi Gerekenler:**
- ✅ next() kullanımına dikkat
- ✅ Error middleware'ler en sonda olmalı (index.js)
- ✅ Middleware order önemlidir
- ❌ Business logic içermemeli

---

## 📝 Yeni Endpoint Ekleme Rehberi

### Adım Adım Süreç

Örnek: User endpoint'i ekleyelim

#### 1️⃣ Model Oluştur

```javascript
// models/User.js
export class User {
  constructor({ id, name, email, role }) {
    this.id = id
    this.name = name
    this.email = email
    this.role = role || 'user'
    this.createdAt = new Date()
  }

  static validate(data) {
    const errors = []

    if (!data.name || data.name.trim() === '') {
      errors.push('Name is required')
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Valid email is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}
```

#### 2️⃣ Service Oluştur

```javascript
// services/userService.js
import { User } from '../models/User.js'

class UserService {
  constructor() {
    this.users = [] // In-memory, ileride DB
  }

  async getAllUsers() {
    try {
      return this.users.map(u => new User(u))
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`)
    }
  }

  async getUserById(id) {
    try {
      const user = this.users.find(u => u.id === parseInt(id))
      
      if (!user) {
        throw new Error('User not found')
      }

      return new User(user)
    } catch (error) {
      throw error
    }
  }

  async createUser(userData) {
    try {
      const validation = User.validate(userData)
      
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '))
      }

      const newUser = new User({
        id: this.users.length + 1,
        ...userData
      })

      this.users.push(newUser)
      return newUser
    } catch (error) {
      throw error
    }
  }

  async updateUser(id, userData) {
    try {
      const index = this.users.findIndex(u => u.id === parseInt(id))
      
      if (index === -1) {
        throw new Error('User not found')
      }

      const updatedUser = new User({
        ...this.users[index],
        ...userData
      })

      this.users[index] = updatedUser
      return updatedUser
    } catch (error) {
      throw error
    }
  }

  async deleteUser(id) {
    try {
      const index = this.users.findIndex(u => u.id === parseInt(id))
      
      if (index === -1) {
        throw new Error('User not found')
      }

      this.users.splice(index, 1)
      return { message: 'User deleted successfully' }
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()
```

#### 3️⃣ Controller Oluştur

```javascript
// controllers/userController.js
import { successResponse, errorResponse } from '@ekucuk/shared'
import userService from '../services/userService.js'

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers()
      res.json(successResponse(users))
    } catch (error) {
      res.status(500).json(
        errorResponse('FETCH_USERS_ERROR', error.message)
      )
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params
      const user = await userService.getUserById(id)
      res.json(successResponse(user))
    } catch (error) {
      res.status(404).json(
        errorResponse('USER_NOT_FOUND', error.message)
      )
    }
  }

  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body)
      res.status(201).json(successResponse(user))
    } catch (error) {
      res.status(400).json(
        errorResponse('CREATE_USER_ERROR', error.message)
      )
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params
      const user = await userService.updateUser(id, req.body)
      res.json(successResponse(user))
    } catch (error) {
      res.status(400).json(
        errorResponse('UPDATE_USER_ERROR', error.message)
      )
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params
      const result = await userService.deleteUser(id)
      res.json(successResponse(result))
    } catch (error) {
      res.status(404).json(
        errorResponse('DELETE_USER_ERROR', error.message)
      )
    }
  }
}

export default new UserController()
```

#### 4️⃣ Route Oluştur

```javascript
// routes/userRoutes.js
import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

// GET /api/users - Tüm kullanıcıları getir
router.get('/', userController.getAllUsers)

// GET /api/users/:id - ID'ye göre kullanıcı getir
router.get('/:id', userController.getUserById)

// POST /api/users - Yeni kullanıcı oluştur
router.post('/', userController.createUser)

// PUT /api/users/:id - Kullanıcı güncelle
router.put('/:id', userController.updateUser)

// DELETE /api/users/:id - Kullanıcı sil
router.delete('/:id', userController.deleteUser)

export default router
```

#### 5️⃣ Route'u Ana Index'e Ekle

```javascript
// routes/index.js
import express from 'express'
import healthRoutes from './healthRoutes.js'
import projectRoutes from './projectRoutes.js'
import contactRoutes from './contactRoutes.js'
import userRoutes from './userRoutes.js' // ✨ YENİ

const router = express.Router()

router.use('/health', healthRoutes)
router.use('/projects', projectRoutes)
router.use('/contact', contactRoutes)
router.use('/users', userRoutes) // ✨ YENİ

export default router
```

#### ✅ Tamamlandı!

Yeni endpoint'ler kullanıma hazır:
```
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

---

## 🔥 Best Practices

### 1. Error Handling

```javascript
// ✅ İYİ
try {
  const result = await service.doSomething()
  res.json(successResponse(result))
} catch (error) {
  res.status(500).json(errorResponse('ERROR_CODE', error.message))
}

// ❌ KÖTÜ
const result = await service.doSomething()
res.json(successResponse(result)) // Hata yakalanmıyor!
```

### 2. HTTP Status Codes

```javascript
// Başarılı durumlar
200 OK              // GET, PUT, DELETE için
201 Created         // POST için (yeni kaynak oluşturuldu)

// Hata durumları
400 Bad Request     // Validation hatası
404 Not Found       // Kaynak bulunamadı
500 Internal Error  // Server hatası
```

### 3. Response Format

```javascript
// ✅ Shared package kullan
import { successResponse, errorResponse } from '@ekucuk/shared'

// Başarılı
res.json(successResponse(data))

// Hata
res.status(400).json(errorResponse('ERROR_CODE', 'Error message'))
```

### 4. Async/Await

```javascript
// ✅ İYİ
async getAllProjects(req, res) {
  try {
    const projects = await projectService.getAllProjects()
    res.json(successResponse(projects))
  } catch (error) {
    // error handling
  }
}

// ❌ KÖTÜ - Promise chain kullanma
getAllProjects(req, res) {
  projectService.getAllProjects()
    .then(projects => res.json(successResponse(projects)))
    .catch(error => ...)
}
```

### 5. Service Singleton Pattern

```javascript
// ✅ İYİ
class ProjectService {
  // methods
}

export default new ProjectService() // Singleton

// ❌ KÖTÜ
export class ProjectService {
  // methods
} // Her import'ta yeni instance
```

---

## 🧪 Test Etme

### Postman Collection

```json
{
  "info": {
    "name": "Backend API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "url": "http://localhost:5001/api/health"
      }
    },
    {
      "name": "Get All Projects",
      "request": {
        "method": "GET",
        "url": "http://localhost:5001/api/projects"
      }
    },
    {
      "name": "Create Project",
      "request": {
        "method": "POST",
        "url": "http://localhost:5001/api/projects",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"New Project\",\n  \"tech\": \"React, Node.js\"\n}"
        }
      }
    }
  ]
}
```

### cURL Examples

```bash
# Health Check
curl http://localhost:5001/api/health

# Get All Projects
curl http://localhost:5001/api/projects

# Get Project by ID
curl http://localhost:5001/api/projects/1

# Create Project
curl -X POST http://localhost:5001/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"New Project","tech":"React, Node.js"}'

# Send Contact Form
curl -X POST http://localhost:5001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","message":"Hello"}'
```

---

## 📊 Mevcut Endpoint'ler

### Health
```
GET /api/health
```

### Projects
```
GET    /api/projects      - Tüm projeleri getir
GET    /api/projects/:id  - ID'ye göre proje getir
POST   /api/projects      - Yeni proje oluştur
```

### Contact
```
POST   /api/contact       - İletişim formu gönder
GET    /api/contact       - Tüm iletişim formlarını getir (Admin)
```

---

## 🚀 Çalıştırma

```bash
# Development
npm run dev

# Production
npm start
```

---

## 📚 Ek Kaynaklar

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design](https://restfulapi.net/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 🤝 Katkıda Bulunma

Yeni endpoint eklerken:
1. Bu README'deki adımları takip edin
2. Katman sorumluluklarına uyun
3. Error handling ekleyin
4. successResponse/errorResponse kullanın
5. Dokümantasyonu güncelleyin

