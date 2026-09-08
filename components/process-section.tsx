'use client';

import { motion } from 'framer-motion';
import { Upload, Users, Brain, FileText, MessageCircle, ArrowDown } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    { icon: Upload, title: '사업계획서 업로드', color: 'bg-primary' },
    { icon: Users, title: '전문가 검토', color: 'bg-accent' },
    { icon: Brain, title: 'AI 분석', color: 'bg-success' },
    { icon: FileText, title: '진단 리포트 생성', color: 'bg-chart-4' },
    { icon: MessageCircle, title: '멘토링 진행', color: 'bg-primary' },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">사업계획서 진단 리포트 예시</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">사수래는 단순한 멘토링이 아닌 사업계획서의 강점과 약점을 분석하고 실행 가능한 개선 방향을 제공합니다.</p>
        </motion.div>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="flex flex-col md:flex-row items-center">
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground text-center max-w-[100px]">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block mx-4 text-border">
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-primary">
                    <path d="M0 10H35M35 10L25 2M35 10L25 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {index < steps.length - 1 && (
                <div className="md:hidden my-3 text-primary">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
