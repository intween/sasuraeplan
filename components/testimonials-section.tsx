"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "막막했던 사업계획서 방향을 잡을 수 있었습니다.",
      author: "김OO",
      role: "예비 창업자",
    },
    {
      quote: "심사위원 관점의 피드백이 가장 도움이 되었습니다.",
      author: "이OO",
      role: "스타트업 대표",
    },
    {
      quote: "정부지원사업 준비 과정에서 큰 도움이 되었습니다.",
      author: "박OO",
      role: "초기 창업자",
    },
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
            사업계획서 검토 후기
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative p-8 bg-card rounded-3xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-10 h-10" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-foreground mb-6 relative z-10 text-pretty">
                  {`"${testimonial.quote}"`}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
