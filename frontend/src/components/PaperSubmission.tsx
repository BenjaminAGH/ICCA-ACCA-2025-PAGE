"use client";

import { FileText, Calendar, CheckCircle, Upload } from "lucide-react";
import { ImageWithFallback } from "./misc/ImageWithFallback";
import { motion } from "motion/react";

export function PaperSubmission() {
  const timeline = [
    {
      date: "Proximamente, 2026",
      event: "Fecha límite Abstracts",
      icon: FileText,
    },
    {
      date: "Proximamente, 2026",
      event: "Notificación de aceptación",
      icon: CheckCircle,
    },
    {
      date: "Proximamente, 2026",
      event: "Fecha límite papers completos",
      icon: Upload,
    },
    {
      date: "9-11 de Diciembre, 2026",
      event: "Congreso ICA-ACCA",
      icon: Calendar,
    }
  ];

  return (
    <section id="paper-submission" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle tech background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">Envío de Papers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Invitamos a investigadores y profesionales a enviar sus trabajos para ser parte del congreso
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600320261634-78edd477fa1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnN8ZW58MXx8fHwxNzYzNzQ4ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Conferencia"
              className="rounded-lg shadow-2xl w-full h-full object-cover min-h-80 border border-slate-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-white">Directrices de Envío</h3>
            <ul className="space-y-4">
              {[
                "Formato IEEE (6-8 páginas para paper completo)",
                "Resúmenes de 300-500 palabras",
                "Idiomas: Español o Inglés",
                "Revisión por pares doble ciego",
                "Publicación en revistas indexadas"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg">
                <Upload className="w-5 h-5" />
                <span>Enviar Paper</span>
              </button> */}
              <p className="mt-3 text-sm text-slate-400">
                Sistema de envío disponible próximamente
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-10 text-center text-white">Fechas Importantes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm text-blue-400 mb-2">{item.date}</p>
                  <p className="text-slate-200">{item.event}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
