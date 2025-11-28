"use client";

import { Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h4
              className="text-white mb-4"
              whileHover={{ scale: 1.02 }}
            >
              ICA-ACCA 2026
            </motion.h4>
            <p className="text-sm">
              Congreso Internacional de Control Automático y Automatización
            </p>
          </div>

          <div>
            <h5 className="text-white mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre el Congreso</a></li>
              <li><a href="#committee" className="hover:text-blue-400 transition-colors">Comité</a></li>
              <li><a href="#paper-submission" className="hover:text-blue-400 transition-colors">Envío de Papers</a></li>
              <li><a href="#sponsors" className="hover:text-blue-400 transition-colors">Sponsors</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white mb-4">Contacto</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@ica-acca.cl" className="hover:text-blue-400 transition-colors">
                  info@ica-acca.cl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <span>Universidad del Bío-Bío<br />Concepción, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; 2026 ICA-ACCA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
