import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertCourseSchema, insertModuleSchema, insertLessonSchema, insertEnrollmentSchema, insertPageSchema } from "@shared/schema";
import { z } from "zod";
import fetch from "node-fetch";

// Configure the external webapp URL where accounts will be created
const EXTERNAL_API_URL = process.env.EXTERNAL_API_URL || "http://localhost:5000";
const EXTERNAL_API_KEY = process.env.EXTERNAL_API_KEY || "test_api_key";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - all prefixed with /api
  
  // User routes
  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const user = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(user.username);
      
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      
      const newUser = await storage.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid user data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create user" });
    }
  });
  
  app.get("/api/users/:id", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't send password in the response
      const { password, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user" });
    }
  });
  
  // Course routes
  app.get("/api/courses", async (_req: Request, res: Response) => {
    try {
      const courses = await storage.getPublishedCourses();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to get courses" });
    }
  });
  
  app.get("/api/courses/:id", async (req: Request, res: Response) => {
    try {
      const courseId = parseInt(req.params.id);
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      
      const course = await storage.getCourse(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to get course" });
    }
  });
  
  app.post("/api/courses", async (req: Request, res: Response) => {
    try {
      const course = insertCourseSchema.parse(req.body);
      const newCourse = await storage.createCourse(course);
      res.status(201).json(newCourse);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid course data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create course" });
    }
  });
  
  app.put("/api/courses/:id", async (req: Request, res: Response) => {
    try {
      const courseId = parseInt(req.params.id);
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      
      const existingCourse = await storage.getCourse(courseId);
      if (!existingCourse) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      const courseUpdate = insertCourseSchema.partial().parse(req.body);
      const updatedCourse = await storage.updateCourse(courseId, courseUpdate);
      res.status(200).json(updatedCourse);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid course data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update course" });
    }
  });
  
  app.delete("/api/courses/:id", async (req: Request, res: Response) => {
    try {
      const courseId = parseInt(req.params.id);
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      
      const deleted = await storage.deleteCourse(courseId);
      if (!deleted) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete course" });
    }
  });
  
  // Module routes
  app.get("/api/courses/:courseId/modules", async (req: Request, res: Response) => {
    try {
      const courseId = parseInt(req.params.courseId);
      if (isNaN(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
      
      const modules = await storage.getModulesByCourse(courseId);
      res.status(200).json(modules);
    } catch (error) {
      res.status(500).json({ message: "Failed to get modules" });
    }
  });
  
  app.post("/api/modules", async (req: Request, res: Response) => {
    try {
      const module = insertModuleSchema.parse(req.body);
      const newModule = await storage.createModule(module);
      res.status(201).json(newModule);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid module data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create module" });
    }
  });
  
  // Lesson routes
  app.get("/api/modules/:moduleId/lessons", async (req: Request, res: Response) => {
    try {
      const moduleId = parseInt(req.params.moduleId);
      if (isNaN(moduleId)) {
        return res.status(400).json({ message: "Invalid module ID" });
      }
      
      const lessons = await storage.getLessonsByModule(moduleId);
      res.status(200).json(lessons);
    } catch (error) {
      res.status(500).json({ message: "Failed to get lessons" });
    }
  });
  
  app.post("/api/lessons", async (req: Request, res: Response) => {
    try {
      const lesson = insertLessonSchema.parse(req.body);
      const newLesson = await storage.createLesson(lesson);
      res.status(201).json(newLesson);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid lesson data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create lesson" });
    }
  });
  
  // Enrollment routes
  app.get("/api/users/:userId/enrollments", async (req: Request, res: Response) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const enrollments = await storage.getUserEnrollments(userId);
      res.status(200).json(enrollments);
    } catch (error) {
      res.status(500).json({ message: "Failed to get enrollments" });
    }
  });
  
  app.post("/api/enrollments", async (req: Request, res: Response) => {
    try {
      const enrollment = insertEnrollmentSchema.parse(req.body);
      
      // Check if the user is already enrolled
      const existingEnrollment = await storage.getEnrollmentByUserAndCourse(
        enrollment.userId, 
        enrollment.courseId
      );
      
      if (existingEnrollment) {
        return res.status(409).json({ 
          message: "User is already enrolled in this course",
          enrollment: existingEnrollment
        });
      }
      
      const newEnrollment = await storage.createEnrollment(enrollment);
      res.status(201).json(newEnrollment);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid enrollment data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create enrollment" });
    }
  });

  // Page routes
  app.get("/api/pages", async (req: Request, res: Response) => {
    try {
      const published = req.query.published === "true" ? true : 
                      req.query.published === "false" ? false : undefined;
      const pages = await storage.getPages(published);
      res.status(200).json(pages);
    } catch (error) {
      res.status(500).json({ message: "Failed to get pages" });
    }
  });

  app.get("/api/pages/:id", async (req: Request, res: Response) => {
    try {
      const pageId = parseInt(req.params.id);
      if (isNaN(pageId)) {
        return res.status(400).json({ message: "Invalid page ID" });
      }
      
      const page = await storage.getPage(pageId);
      if (!page) {
        return res.status(404).json({ message: "Page not found" });
      }
      
      res.status(200).json(page);
    } catch (error) {
      res.status(500).json({ message: "Failed to get page" });
    }
  });

  app.get("/api/pages/by-slug/:slug", async (req: Request, res: Response) => {
    try {
      const page = await storage.getPageBySlug(req.params.slug);
      if (!page) {
        return res.status(404).json({ message: "Page not found" });
      }
      
      res.status(200).json(page);
    } catch (error) {
      res.status(500).json({ message: "Failed to get page" });
    }
  });

  app.post("/api/pages", async (req: Request, res: Response) => {
    try {
      const page = insertPageSchema.parse(req.body);
      const newPage = await storage.createPage(page);
      res.status(201).json(newPage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid page data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create page" });
    }
  });

  app.put("/api/pages/:id", async (req: Request, res: Response) => {
    try {
      const pageId = parseInt(req.params.id);
      if (isNaN(pageId)) {
        return res.status(400).json({ message: "Invalid page ID" });
      }
      
      const existingPage = await storage.getPage(pageId);
      if (!existingPage) {
        return res.status(404).json({ message: "Page not found" });
      }
      
      const pageUpdate = insertPageSchema.partial().parse(req.body);
      const updatedPage = await storage.updatePage(pageId, pageUpdate);
      res.status(200).json(updatedPage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid page data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to update page" });
    }
  });

  app.delete("/api/pages/:id", async (req: Request, res: Response) => {
    try {
      const pageId = parseInt(req.params.id);
      if (isNaN(pageId)) {
        return res.status(400).json({ message: "Invalid page ID" });
      }
      
      const deleted = await storage.deletePage(pageId);
      if (!deleted) {
        return res.status(404).json({ message: "Page not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete page" });
    }
  });

  // Email check endpoint for trial registration
  app.get("/api/register-trial/check-email/:email", async (req: Request, res: Response) => {
    try {
      const email = req.params.email;
      
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format"
        });
      }
      
      // For development testing purposes, we'll simulate the behavior without actually calling the external API
      // This ensures no false errors will appear during testing  
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[DEV] Checking email (simulated): ${email}`);
        // Simulate email doesn't exist
        return res.status(200).json({
          success: true,
          exists: false,
          available: true
        });
      }
      
      try {
        // Forward the email check to the external web application
        const response = await fetch(`${EXTERNAL_API_URL}/api/register-trial/check-email/${encodeURIComponent(email)}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${EXTERNAL_API_KEY}`
          }
        });
        
        if (response.ok) {
          const data = await response.json() as Record<string, any>;
          // Forward the external API response
          return res.status(200).json(data);
        } else {
          // If external API fails, assume email is available to prevent blocking registration
          console.warn(`Email check failed with status ${response.status}, assuming email is available`);
          return res.status(200).json({
            success: true,
            exists: false,
            available: true
          });
        }
      } catch (fetchError) {
        console.error("Error checking email with external API:", fetchError);
        // If external API is unreachable, allow registration to proceed
        return res.status(200).json({
          success: true,
          exists: false,
          available: true
        });
      }
    } catch (error) {
      console.error("Email check error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while checking email availability"
      });
    }
  });

  // Trial account registration endpoint that forwards to external web app
  app.post("/api/register-trial", async (req: Request, res: Response) => {
    try {
      // Validate incoming data
      const { fullName, email, company, phone, agreeToTerms } = req.body;
      
      if (!fullName || !email || !agreeToTerms) {
        return res.status(400).json({ 
          success: false,
          message: "Missing required fields. Please provide full name, email, and accept the terms."
        });
      }
      
      // For development testing purposes, we'll simulate the behavior without actually calling the external API
      // This ensures successful account creation for testing without connecting to the real backend
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[DEV] Creating trial account (simulated): ${fullName}, ${email}`);
        // Simulate successful registration
        return res.status(201).json({
          success: true,
          message: "Your trial account has been created successfully. Please check your email for login details.",
          email: email,
          fullName: fullName
        });
      }
      
      // Prepare payload for external API - match the expected format
      const payload = {
        fullName,
        email,
        company: company || "",  // Optional
        phone: phone || "",      // Optional
        agreeToTerms
      };
      
      try {
        // Forward the registration to the external web application
        const response = await fetch(`${EXTERNAL_API_URL}/api/register-trial`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${EXTERNAL_API_KEY}`
          },
          body: JSON.stringify(payload)
        });
        
        const data = await response.json() as Record<string, any>;
        
        if (response.ok) {
          // Success response from external API
          return res.status(201).json({
            success: true,
            message: data.message || "Your trial account has been created successfully. Please check your email for login details.",
            email: data.email || email,
            fullName: data.fullName || fullName
          });
        } else {
          // Handle special case: if the error contains "Email already exists" but the account was created
          const emailExistsPattern = /[eE]mail already exists/;
          if (data && typeof data === 'object' && 'message' in data && 
              typeof data.message === 'string' && 
              emailExistsPattern.test(data.message) &&
              data.accountCreated === true) {
            
            console.log("Email exists but account was created, returning success");
            // Return success if the account was actually created despite the error
            return res.status(201).json({
              success: true,
              message: "Your account has been created successfully. Please check your email for login details.",
              email: email,
              fullName: fullName
            });
          }
          
          // External API returned an error
          console.error("Error from external API:", data);
          return res.status(response.status).json({
            success: false,
            message: data && typeof data === 'object' && 'message' in data ? 
              String(data.message) : 'Registration failed. Please try again later.'
          });
        }
      } catch (fetchError) {
        // Network or connection error
        console.error("Error connecting to external API:", fetchError);
        return res.status(502).json({
          success: false,
          message: 'Unable to connect to registration service. Please try again later.'
        });
      }
    } catch (error) {
      console.error("Trial registration error:", error);
      res.status(500).json({ 
        success: false,
        message: "An unexpected error occurred during registration"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
