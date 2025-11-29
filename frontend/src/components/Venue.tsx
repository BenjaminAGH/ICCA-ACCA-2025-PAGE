"use client";

import { ImageWithFallback } from "./misc/ImageWithFallback";
import {
  MapPin,
  Building,
  Users,
  Award,
  Plane,
  Hotel,
  CloudSun,
} from "lucide-react";
import { motion } from "motion/react";

export function Venue() {
  const ubbStats = [
    { icon: Users, label: "Estudiantes", value: "12,000+" },
    { icon: Building, label: "Carreras", value: "50+" },
    { icon: Award, label: "Acreditación", value: "5 años" },
    { icon: MapPin, label: "Campus", value: "2 ciudades" },
  ];

  const cityFeatures = [
    "Población metropolitana: 1,000,000+ habitantes",
    "Aeropuerto Internacional Carriel Sur a 15 km del centro",
    "Hub universitario con más de 10 universidades",
    "Rica oferta gastronómica, hotelera y cultural",
  ];

  const practicalInfo = [
    {
      icon: Plane,
      title: "Cómo Llegar",
      description:
        "Vuelos directos desde Santiago (1 hora) y principales ciudades.",
    },
    {
      icon: Hotel,
      title: "Alojamiento",
      description:
        "Hoteles cercanos al campus. Información detallada próximamente.",
    },
    {
      icon: CloudSun,
      title: "Clima en diciembre",
      description:
        "Primavera con temperaturas entre 10-22°C. Se recomienda ropa abrigada para las mañanas.",
    },
  ];

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-3xl">Sede del Congreso</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El ICA-ACCA 2026 se realizará en la Universidad del
            Bío-Bío, Concepción
          </p>
        </motion.div>

        {/* Universidad del Bío-Bío */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h1 className="mb-6 text-2xl text-blue-900">
                Universidad del Bío-Bío
              </h1>
              <p className="text-gray-700 mb-6">
                La Universidad del Bío-Bío (UBB) es una
                institución estatal de educación superior con
                sede en Concepción y Chillán. Fundada en 1988,
                la UBB se ha consolidado como un referente en
                ingeniería y tecnología en la región del
                Bío-Bío.
              </p>
              <p className="text-gray-700 mb-6">
                La Facultad de Ingeniería destaca por su
                excelencia en investigación aplicada,
                especialmente en áreas de automatización,
                control de procesos y sistemas inteligentes,
                convirtiéndola en la sede ideal para el
                ICA-ACCA.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {ubbStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <p className="text-xs text-gray-600">
                        {stat.label}
                      </p>
                      <p className="text-gray-900">
                        {stat.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <a
                href="https://www.ubiobio.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.ubiobio.cl →
              </a>
            </div>
            <div className="h-64 md:h-auto">
              <ImageWithFallback
                src="https://doctoradoia.cl/wp-content/uploads/2023/09/UBB.jpg"
                alt="Campus Universidad del Bío-Bío"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Concepción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 h-64 md:h-auto">
              <ImageWithFallback
                src="https://static.wixstatic.com/media/d6977a_2914a5eb96ac4246b245b99b0d04559f~mv2.jpg/v1/fill/w_568,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d6977a_2914a5eb96ac4246b245b99b0d04559f~mv2.jpg"
                alt="Concepción, Chile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 p-8 md:p-12">
              <h1 className="mb-6 text-2xl text-blue-900">
                Concepción, Chile
              </h1>
              <p className="text-gray-700 mb-4">
                Concepción, conocida como la &quot;Capital del Sur&quot;,
                es la segunda área metropolitana más importante
                de Chile. Ubicada en la región del Bío-Bío, es
                un importante centro universitario, cultural e
                industrial del país.
              </p>
              <p className="text-gray-700 mb-4">
                La ciudad cuenta con excelente conectividad,
                modernas instalaciones y una vibrante vida
                cultural. Su clima mediterráneo y cercanía al
                océano Pacífico la hacen un destino atractivo
                durante todo el año.
              </p>
              <div className="space-y-3">
                {cityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-900">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 h-64 w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?q=Avda.+Collao+1202,+Concepci%C3%B3n,+Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="Mapa UBB Concepción"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Información práctica */}
        <div className="grid md:grid-cols-3 gap-8">
          {practicalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-blue-50 border border-blue-100 rounded-lg p-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="mb-3 text-blue-900">
                  {info.title}
                </h4>
                <p className="text-gray-700 text-sm">
                  {info.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}