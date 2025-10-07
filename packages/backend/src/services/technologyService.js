/**
 * @typedef {import('@ekucuk/shared').Technology} Technology
 */
import TechnologyModel from '../models/Technology.js';

class TechnologyService {
  constructor() {
    // In-memory storage (ileride database ile değiştirilecek)
    this.technologies = [
      {
        id: 6,
        title: 'Bootstrap',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        order: 2,
        createdAt: new Date('2024-01-06')
      },
      {
        id: 32,
        title: 'Azure DevOps',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg', 
        order: 28,
        createdAt: new Date('2024-02-01')
      },
      {
        id: 34,
        title: '.NET Core',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', 
        order: 30,
        createdAt: new Date('2024-02-03')
      },
      {
        id: 35,
        title: 'Kafka',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', 
        order: 31,
        createdAt: new Date('2024-02-04')
      },
      {
        id: 36,
        title: 'NGINX',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', 
        order: 32,
        createdAt: new Date('2024-02-05')
      },
      {
        id: 37,
        title: 'Oracle',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', 
        order: 33,
        createdAt: new Date('2024-02-06')
      },
      {
        id: 38,
        title: 'PHP',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        order: 34,
        createdAt: new Date('2024-02-07')
      },
      {
        id: 39,
        title: 'Postman',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', 
        order: 35,
        createdAt: new Date('2024-02-08')
      },
      {
        id: 40,
        title: 'Python',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        order: 36,
        createdAt: new Date('2024-02-09')
      },
      {
        id: 41,
        title: 'Redis',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        order: 37,
        createdAt: new Date('2024-02-10')
      },
      {
        id: 42,
        title: 'SonarQube',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-line.svg', 
        order: 38,
        createdAt: new Date('2024-02-11')
      },
      {
        id: 43,
        title: 'Swagger',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', 
        order: 39,
        createdAt: new Date('2024-02-12')
      },
      {
        id: 44,
        title: 'Swiper',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swiper/swiper-original.svg', 
        order: 40,
        createdAt: new Date('2024-02-13')
      },
      {
        id: 7,
        title: 'Bun',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg',
        order: 3,
        createdAt: new Date('2024-01-07')
      },
      {
        id: 8,
        title: 'C',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
        order: 4,
        createdAt: new Date('2024-01-08')
      },
      {
        id: 9,
        title: 'C#',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        order: 5,
        createdAt: new Date('2024-01-09')
      },
      {
        id: 10,
        title: 'C++',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        order: 6,
        createdAt: new Date('2024-01-10')
      },
      {
        id: 11,
        title: 'CSS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        order: 7,
        createdAt: new Date('2024-01-11')
      },
      {
        id: 12,
        title: 'Docker',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        order: 8,
        createdAt: new Date('2024-01-12')
      },
      {
        id: 13,
        title: 'Express.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        order: 9,
        createdAt: new Date('2024-01-13')
      },
      {
        id: 14,
        title: 'Figma',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        order: 10,
        createdAt: new Date('2024-01-14')
      },
      {
        id: 15,
        title: 'Git',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        order: 11,
        createdAt: new Date('2024-01-15')
      },
      {
        id: 16,
        title: 'GitHub',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        order: 12,
        createdAt: new Date('2024-01-16')
      },
      {
        id: 17,
        title: 'Gradle',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg',
        order: 13,
        createdAt: new Date('2024-01-17')
      },
      {
        id: 18,
        title: 'HTML',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        order: 14,
        createdAt: new Date('2024-01-18')
      },
      {
        id: 19,
        title: 'Java',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        order: 15,
        createdAt: new Date('2024-01-19')
      },
      {
        id: 20,
        title: 'Jenkins',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        order: 16,
        createdAt: new Date('2024-01-20')
      },
      {
        id: 21,
        title: 'JavaScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        order: 17,
        createdAt: new Date('2024-01-21')
      },
      {
        id: 22,
        title: 'Kubernetes',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        order: 18,
        createdAt: new Date('2024-01-22')
      },
      {
        id: 23,
        title: 'Maven',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
        order: 19,
        createdAt: new Date('2024-01-23')
      },
      {
        id: 24,
        title: 'MongoDB',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        order: 20,
        createdAt: new Date('2024-01-24')
      },
      {
        id: 25,
        title: 'MySQL',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        order: 21,
        createdAt: new Date('2024-01-25')
      },
      {
        id: 26,
        title: 'Node.js',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        order: 22,
        createdAt: new Date('2024-01-26')
      },
      {
        id: 27,
        title: 'npm',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
        order: 23,
        createdAt: new Date('2024-01-27')
      },
      {
        id: 28,
        title: 'PostgreSQL',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        order: 24,
        createdAt: new Date('2024-01-28')
      },
      {
        id: 29,
        title: 'React',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        order: 25,
        createdAt: new Date('2024-01-29')
      },
      {
        id: 30,
        title: 'TailwindCSS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        order: 26,
        createdAt: new Date('2024-01-30')
      },
      {
        id: 31,
        title: 'TypeScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        order: 27,
        createdAt: new Date('2024-01-31')
      }
    ];
  }
  /**
   * @returns {Promise<Technology[]>}
   */
  async getAllTechnologies() {
    try {
      // Alfabetik sıraya göre sırala
      const sortedTechnologies = this.technologies
        .sort((a, b) => a.title.localeCompare(b.title, 'tr-TR'))
        .map(tech => new TechnologyModel(tech));
      
      return sortedTechnologies;
    } catch (error) {
      throw new Error(`Error fetching technologies: ${error.message}`);
    }
  }

  /**
   * @param {number} id
   * @returns {Promise<Technology|undefined>}
   */
  async getTechnologyById(id) {
    try {
      const technology = this.technologies.find(tech => tech.id === parseInt(id));
      
      if (!technology) {
        return undefined;
      }

      return new TechnologyModel(technology);
    } catch (error) {
      throw new Error(`Error fetching technology: ${error.message}`);
    }
  }

  /**
   * @param {Technology} technologyData
   * @returns {Promise<Technology>}
   */
  async createTechnology(technologyData) {
    try {
      const validation = TechnologyModel.validateWithErrors(technologyData);
      
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      // Yeni ID oluştur
      const newId = Math.max(...this.technologies.map(t => t.id), 0) + 1;

      const newTechnology = new TechnologyModel({
        id: newId,
        ...technologyData,
        createdAt: new Date()
      });

      this.technologies.push(newTechnology);
      
      return newTechnology;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {number} id
   * @param {Partial<Technology>} updateData
   * @returns {Promise<Technology>}
   */
  async updateTechnology(id, updateData) {
    try {
      const index = this.technologies.findIndex(tech => tech.id === parseInt(id));
      
      if (index === -1) {
        throw new Error('Technology not found');
      }

      // Validation (sadece güncellenen alanlar için)
      if (updateData.title !== undefined || updateData.image !== undefined || updateData.order !== undefined) {
        const validationData = {
          title: updateData.title || this.technologies[index].title,
          image: updateData.image || this.technologies[index].image,
          order: updateData.order !== undefined ? updateData.order : this.technologies[index].order
        };

        const validation = TechnologyModel.validateWithErrors(validationData);
        
        if (!validation.isValid) {
          throw new Error(validation.errors.join(', '));
        }
      }

      // Güncelle
      const updatedTechnology = new TechnologyModel({
        ...this.technologies[index],
        ...updateData
      });

      this.technologies[index] = updatedTechnology;
      
      return updatedTechnology;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @param {number} id
   * @returns {Promise<{message: string}>}
   */
  async deleteTechnology(id) {
    try {
      const index = this.technologies.findIndex(tech => tech.id === parseInt(id));
      
      if (index === -1) {
        throw new Error('Technology not found');
      }

      this.technologies.splice(index, 1);
      
      return { message: 'Technology deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Alfabetik sıraya göre sıralama ve ID atama işlemi
   * @returns {Promise<{result: Technology[], isSuccessful: boolean, error: {code: string, message: string} | null}>}
   */
  async sortTechnologiesAlphabeticallyAndAssignIds() {
    try {
      // Alfabetik sıraya göre sırala
      const sortedTechnologies = this.technologies
        .sort((a, b) => a.title.localeCompare(b.title, 'tr-TR'));

      // Sıralı ID'ler ata (1'den başlayarak)
      sortedTechnologies.forEach((tech, index) => {
        tech.id = index + 1;
        tech.order = index + 1; // Order'ı da güncelle
      });

      // Teknoloji listesini güncelle
      this.technologies = sortedTechnologies;

      const result = this.technologies.map(tech => new TechnologyModel(tech));

      return {
        result,
        isSuccessful: true,
        error: null
      };
    } catch (error) {
      return {
        result: [],
        isSuccessful: false,
        error: {
          code: 'SORT_ERROR',
          message: `Alfabetik sıralama hatası: ${error.message}`
        }
      };
    }
  }

  /**
   * @param {number[]} orderUpdates - [{id, order}] formatında
   * @returns {Promise<Technology[]>}
   */
  async updateTechnologyOrder(orderUpdates) {
    try {
      if (!Array.isArray(orderUpdates)) {
        throw new Error('Order updates must be an array');
      }

      // Her technology'nin order'ını güncelle
      orderUpdates.forEach(update => {
        const index = this.technologies.findIndex(tech => tech.id === update.id);
        if (index !== -1) {
          this.technologies[index].order = update.order;
        }
      });

      // Güncellenmiş listeyi döndür
      return await this.getAllTechnologies();
    } catch (error) {
      throw new Error(`Error updating technology order: ${error.message}`);
    }
  }
}

export default new TechnologyService();
