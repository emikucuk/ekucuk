import { Router } from 'express';
import TechnologyController from '../controllers/technologyController.js';

const router = Router();

// GET /api/technologies - Tüm teknolojileri getir
router.get('/', TechnologyController.getAllTechnologies);

// GET /api/technologies/:id - ID'ye göre teknoloji getir
router.get('/:id', TechnologyController.getTechnologyById);

// POST /api/technologies - Yeni teknoloji oluştur
router.post('/', TechnologyController.createTechnology);

// PUT /api/technologies/:id - Teknoloji güncelle
router.put('/:id', TechnologyController.updateTechnology);

// DELETE /api/technologies/:id - Teknoloji sil
router.delete('/:id', TechnologyController.deleteTechnology);

// PUT /api/technologies/order - Teknoloji sıralamasını güncelle
router.put('/order', TechnologyController.updateTechnologyOrder);

// POST /api/technologies/sort-alphabetically - Alfabetik sıralama ve ID atama
router.post('/sort-alphabetically', TechnologyController.sortTechnologiesAlphabeticallyAndAssignIds);

export default router;
