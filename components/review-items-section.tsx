"use client"

import { motion } from "framer-motion"
import { 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  Trophy, 
  Rocket, 
  Heart,
  Target,
  MessageSquare,
  Users,
  BarChart3,
  Lightbulb,
  Expand
} from "lucide-react"

export function ReviewItemsSection() {
  const items = [
    { icon: AlertCircle, title: "문제 정의" },
    { icon: TrendingUp, title: "시장성" },
    { icon: DollarSign, title: "수익 모델" },
    { icon: Trophy, title: "경쟁 우위" },
    { icon: Rocket, title: "실행 가능성" },
    { icon: Heart, title: "투자 매력도" },
    { icon: Target, title: "정부지원사업 적합성" },
    { icon: MessageSquare, title: "발표 논리 구조" },
    { icon: Users, title: "고객 검증" },
    { icon: BarChart3, title: "시장 규모" },
    { icon: Lightbulb, title: "MVP 전략" },
    { icon: Expand, title: "확장 가능성" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            이런 항목을 집중적으로 검토합니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group"
            >
              <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
