import { pgTable, text, serial, integer, boolean, timestamp, doublePrecision, foreignKey, uniqueIndex, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  email: text("email").unique(),
  whatsappNumber: text("whatsapp_number"),
  isTrial: boolean("is_trial").default(false),
  trialEndsAt: timestamp("trial_ends_at"),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  courses: many(courses),
  enrollments: many(enrollments),
}));

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  price: doublePrecision("price").default(0),
  creatorId: integer("creator_id").references(() => users.id).notNull(),
  thumbnail: text("thumbnail"),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const coursesRelations = relations(courses, ({ one, many }) => ({
  creator: one(users, {
    fields: [courses.creatorId],
    references: [users.id],
  }),
  modules: many(courseModules),
  enrollments: many(enrollments),
}));

export const courseModules = pgTable("course_modules", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  position: integer("position").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const courseModulesRelations = relations(courseModules, ({ one, many }) => ({
  course: one(courses, {
    fields: [courseModules.courseId],
    references: [courses.id],
  }),
  lessons: many(lessons),
}));

export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  moduleId: integer("module_id").references(() => courseModules.id).notNull(),
  position: integer("position").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const lessonsRelations = relations(lessons, ({ one }) => ({
  module: one(courseModules, {
    fields: [lessons.moduleId],
    references: [courseModules.id],
  }),
}));

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  courseId: integer("course_id").references(() => courses.id).notNull(),
  enrolledAt: timestamp("enrolled_at").defaultNow(),
  completed: boolean("completed").default(false),
  lastAccessedAt: timestamp("last_accessed_at"),
}, (enrollments) => {
  return {
    userCourseIdx: uniqueIndex("user_course_idx").on(enrollments.userId, enrollments.courseId),
  };
});

export const enrollmentsRelations = relations(enrollments, ({ one }) => ({
  user: one(users, {
    fields: [enrollments.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [enrollments.courseId],
    references: [courses.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  whatsappNumber: true,
  isTrial: true,
  trialEndsAt: true,
  isAdmin: true,
});

export const insertCourseSchema = createInsertSchema(courses).pick({
  title: true,
  description: true,
  price: true,
  creatorId: true,
  thumbnail: true,
  published: true,
});

export const insertModuleSchema = createInsertSchema(courseModules).pick({
  title: true,
  description: true,
  courseId: true,
  position: true,
});

export const insertLessonSchema = createInsertSchema(lessons).pick({
  title: true,
  content: true,
  moduleId: true,
  position: true,
});

export const insertEnrollmentSchema = createInsertSchema(enrollments).pick({
  userId: true,
  courseId: true,
});

// Type exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;

export type InsertModule = z.infer<typeof insertModuleSchema>;
export type CourseModule = typeof courseModules.$inferSelect;

export type InsertLesson = z.infer<typeof insertLessonSchema>;
export type Lesson = typeof lessons.$inferSelect;

export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
export type Enrollment = typeof enrollments.$inferSelect;

// Page content block type definition
export const blockType = z.enum(['text', 'heading', 'image', 'video']);
export type BlockType = z.infer<typeof blockType>;

// Pages table for content management
export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: json("content").notNull().default([]),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertPageSchema = createInsertSchema(pages);

export type InsertPage = z.infer<typeof insertPageSchema>;
export type Page = typeof pages.$inferSelect;
