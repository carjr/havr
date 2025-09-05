import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from attached_assets directory
  app.use('/assets', (req, res, next) => {
    const assetsPath = path.resolve(process.cwd(), 'attached_assets');
    const express = require('express');
    express.static(assetsPath)(req, res, next);
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Todos os campos são obrigatórios" 
        });
      }

      // Here you would typically save to database or send email
      // For now, we'll just log the contact attempt
      console.log('Contact form submission:', { name, email, message });

      res.json({ 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve." 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        message: "Erro interno do servidor. Tente novamente." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
