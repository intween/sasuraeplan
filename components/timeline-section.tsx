"use client"

import { motion } from "framer-motion"

export function TimelineSection() {
  const steps = [
    { number: "01", title: "사업계획서 제출" },
    { number: "02", title: "전문가 분석" },
    { number: "03", title: "피드백 리포트 제공" },
    { number: "04", title: "멘토링 진행" },
    { number: "05", title: "최종 고도화" },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            사업계획서 고도화 프로세스
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-8 left-0 right-0 h-0.5 bg-primary origin-left"
          />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 z-10">
                  {step.number}
                </div>
                <p className="mt-4 text-sm font-medium text-foreground text-center">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg shadow-primary/25 flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1 p-4 bg-card rounded-xl border border-border">
                <p className="font-medium text-foreground">{step.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
