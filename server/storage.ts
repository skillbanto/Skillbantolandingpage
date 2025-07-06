import { 
  users, type User, type InsertUser,
  courses, type Course, type InsertCourse,
  courseModules, type CourseModule, type InsertModule,
  lessons, type Lesson, type InsertLesson,
  enrollments, type Enrollment, type InsertEnrollment,
  pages, type Page, type InsertPage
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc } from "drizzle-orm";

// Expand the interface with CRUD methods for all models
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Course methods
  getCourse(id: number): Promise<Course | undefined>;
  getCoursesByCreator(creatorId: number): Promise<Course[]>;
  getPublishedCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;
  updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course | undefined>;
  deleteCourse(id: number): Promise<boolean>;
  
  // Module methods
  getModule(id: number): Promise<CourseModule | undefined>;
  getModulesByCourse(courseId: number): Promise<CourseModule[]>;
  createModule(module: InsertModule): Promise<CourseModule>;
  updateModule(id: number, module: Partial<InsertModule>): Promise<CourseModule | undefined>;
  deleteModule(id: number): Promise<boolean>;
  
  // Lesson methods
  getLesson(id: number): Promise<Lesson | undefined>;
  getLessonsByModule(moduleId: number): Promise<Lesson[]>;
  createLesson(lesson: InsertLesson): Promise<Lesson>;
  updateLesson(id: number, lesson: Partial<InsertLesson>): Promise<Lesson | undefined>;
  deleteLesson(id: number): Promise<boolean>;
  
  // Enrollment methods
  getEnrollment(id: number): Promise<Enrollment | undefined>;
  getEnrollmentByUserAndCourse(userId: number, courseId: number): Promise<Enrollment | undefined>;
  getUserEnrollments(userId: number): Promise<Enrollment[]>;
  getCourseEnrollments(courseId: number): Promise<Enrollment[]>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  updateEnrollment(id: number, completed: boolean): Promise<Enrollment | undefined>;
  deleteEnrollment(id: number): Promise<boolean>;
  
  // Page methods
  getPage(id: number): Promise<Page | undefined>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  getPages(published?: boolean): Promise<Page[]>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(id: number, page: Partial<InsertPage>): Promise<Page | undefined>;
  deletePage(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Course methods
  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }
  
  async getCoursesByCreator(creatorId: number): Promise<Course[]> {
    return db.select().from(courses).where(eq(courses.creatorId, creatorId));
  }
  
  async getPublishedCourses(): Promise<Course[]> {
    return db.select().from(courses).where(eq(courses.published, true));
  }
  
  async createCourse(course: InsertCourse): Promise<Course> {
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }
  
  async updateCourse(id: number, course: Partial<InsertCourse>): Promise<Course | undefined> {
    const [updatedCourse] = await db
      .update(courses)
      .set({ ...course, updatedAt: new Date() })
      .where(eq(courses.id, id))
      .returning();
    return updatedCourse;
  }
  
  async deleteCourse(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(courses)
      .where(eq(courses.id, id))
      .returning({ id: courses.id });
    return !!deleted;
  }
  
  // Module methods
  async getModule(id: number): Promise<CourseModule | undefined> {
    const [module] = await db.select().from(courseModules).where(eq(courseModules.id, id));
    return module;
  }
  
  async getModulesByCourse(courseId: number): Promise<CourseModule[]> {
    return db
      .select()
      .from(courseModules)
      .where(eq(courseModules.courseId, courseId))
      .orderBy(courseModules.position);
  }
  
  async createModule(module: InsertModule): Promise<CourseModule> {
    const [newModule] = await db.insert(courseModules).values(module).returning();
    return newModule;
  }
  
  async updateModule(id: number, module: Partial<InsertModule>): Promise<CourseModule | undefined> {
    const [updatedModule] = await db
      .update(courseModules)
      .set(module)
      .where(eq(courseModules.id, id))
      .returning();
    return updatedModule;
  }
  
  async deleteModule(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(courseModules)
      .where(eq(courseModules.id, id))
      .returning({ id: courseModules.id });
    return !!deleted;
  }
  
  // Lesson methods
  async getLesson(id: number): Promise<Lesson | undefined> {
    const [lesson] = await db.select().from(lessons).where(eq(lessons.id, id));
    return lesson;
  }
  
  async getLessonsByModule(moduleId: number): Promise<Lesson[]> {
    return db
      .select()
      .from(lessons)
      .where(eq(lessons.moduleId, moduleId))
      .orderBy(lessons.position);
  }
  
  async createLesson(lesson: InsertLesson): Promise<Lesson> {
    const [newLesson] = await db.insert(lessons).values(lesson).returning();
    return newLesson;
  }
  
  async updateLesson(id: number, lesson: Partial<InsertLesson>): Promise<Lesson | undefined> {
    const [updatedLesson] = await db
      .update(lessons)
      .set(lesson)
      .where(eq(lessons.id, id))
      .returning();
    return updatedLesson;
  }
  
  async deleteLesson(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(lessons)
      .where(eq(lessons.id, id))
      .returning({ id: lessons.id });
    return !!deleted;
  }
  
  // Enrollment methods
  async getEnrollment(id: number): Promise<Enrollment | undefined> {
    const [enrollment] = await db.select().from(enrollments).where(eq(enrollments.id, id));
    return enrollment;
  }
  
  async getEnrollmentByUserAndCourse(userId: number, courseId: number): Promise<Enrollment | undefined> {
    const [enrollment] = await db
      .select()
      .from(enrollments)
      .where(
        and(
          eq(enrollments.userId, userId),
          eq(enrollments.courseId, courseId)
        )
      );
    return enrollment;
  }
  
  async getUserEnrollments(userId: number): Promise<Enrollment[]> {
    return db.select().from(enrollments).where(eq(enrollments.userId, userId));
  }
  
  async getCourseEnrollments(courseId: number): Promise<Enrollment[]> {
    return db.select().from(enrollments).where(eq(enrollments.courseId, courseId));
  }
  
  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const [newEnrollment] = await db.insert(enrollments).values(enrollment).returning();
    return newEnrollment;
  }
  
  async updateEnrollment(id: number, completed: boolean): Promise<Enrollment | undefined> {
    const [updatedEnrollment] = await db
      .update(enrollments)
      .set({ 
        completed, 
        lastAccessedAt: new Date() 
      })
      .where(eq(enrollments.id, id))
      .returning();
    return updatedEnrollment;
  }
  
  async deleteEnrollment(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(enrollments)
      .where(eq(enrollments.id, id))
      .returning({ id: enrollments.id });
    return !!deleted;
  }
  
  // Page methods
  async getPage(id: number): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.id, id));
    return page;
  }
  
  async getPageBySlug(slug: string): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug));
    return page;
  }
  
  async getPages(published?: boolean): Promise<Page[]> {
    if (published !== undefined) {
      return db.select().from(pages).where(eq(pages.published, published));
    }
    return db.select().from(pages);
  }
  
  async createPage(page: InsertPage): Promise<Page> {
    const [newPage] = await db.insert(pages).values(page).returning();
    return newPage;
  }
  
  async updatePage(id: number, page: Partial<InsertPage>): Promise<Page | undefined> {
    const [updatedPage] = await db
      .update(pages)
      .set({ ...page, updatedAt: new Date() })
      .where(eq(pages.id, id))
      .returning();
    return updatedPage;
  }
  
  async deletePage(id: number): Promise<boolean> {
    const [deleted] = await db
      .delete(pages)
      .where(eq(pages.id, id))
      .returning({ id: pages.id });
    return !!deleted;
  }
}

export const storage = new DatabaseStorage();
