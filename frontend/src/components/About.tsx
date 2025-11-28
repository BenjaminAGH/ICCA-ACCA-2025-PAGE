"use client";

import { ImageWithFallback } from "./misc/ImageWithFallback";
import { Cpu, Users, BookOpen, Award } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Cpu,
      title: "Tecnología de Vanguardia",
      description: "Investigación de punta en control automático y sistemas autónomos"
    },
    {
      icon: Users,
      title: "Networking Internacional",
      description: "Conecta con expertos y profesionales de toda Latinoamérica"
    },
    {
      icon: BookOpen,
      title: "Publicaciones Indexadas",
      description: "Papers seleccionados serán publicados en revistas indexadas"
    },
    {
      icon: Award,
      title: "Reconocimiento Académico",
      description: "Certificación oficial y reconocimiento a mejores trabajos"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">Sobre el Congreso</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El ICA-ACCA es el congreso de referencia en Chile para el control automático y la automatización,
            reuniendo a investigadores, académicos e industria para compartir avances y tendencias.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neSUyMHJvYm90aWNzfGVufDF8fHx8MTc2Mzc0ODg4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Automatización y tecnología"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4">¿Qué es ICA-ACCA?</h3>
            <p className="text-gray-700 mb-4">
              El Congreso Internacional de Control Automático y Automatización (ICA-ACCA) es un evento
              de alto nivel que se realiza anualmente o bianualmente en Chile, organizado en colaboración
              con las principales universidades e instituciones del país.
            </p>
            <p className="text-gray-700 mb-4">
              Durante tres días intensivos, participantes de todo el continente presentan investigaciones
              innovadoras, asisten a conferencias magistrales y participan en talleres especializados
              en áreas como robótica, sistemas de control, inteligencia artificial aplicada, y automatización
              industrial.
            </p>
            <p className="text-gray-700">
              El congreso también sirve como plataforma para establecer colaboraciones entre academia e
              industria, promoviendo la transferencia tecnológica y el desarrollo de soluciones aplicadas.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}