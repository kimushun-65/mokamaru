'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Phone } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { METRICS_DATA, CHART_DATA } from '@/lib/constants';
import SectionTitle from './SectionTitle';

const Metrics = () => {
  return (
    <section id="metrics" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Key Metrics" subtitle="行動量と戦略が生み出した成果" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {METRICS_DATA.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px -10px rgba(228, 2, 101, 0.15)',
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full z-0 group-hover:from-primary/5 transition-colors" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-gray-500 font-semibold uppercase tracking-wider text-xs md:text-sm">
                    {metric.label}
                  </h3>
                  {index === 0 && <TrendingUp className="text-primary w-6 h-6" />}
                  {index === 1 && <Users className="text-secondary w-6 h-6" />}
                  {index === 2 && <Phone className="text-dark w-6 h-6" />}
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">
                    {metric.value}
                  </span>
                  {metric.growth && (
                    <span className="text-sm font-bold text-green-50 bg-green-50 px-2 py-1 rounded-full mb-2">
                      {metric.growth}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-inner"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              MoM Growth (月次成長)
            </h3>
            <div className="flex gap-6 text-sm mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-gray-600 font-medium">
                  商談数 (Meetings)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-gray-600 font-medium">
                  案件化数 (Opportunities)
                </span>
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={CHART_DATA}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#02b7b7" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#02b7b7" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorOpportunities"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#e40265" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#e40265" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                  labelStyle={{ color: '#374151', fontWeight: 'bold' }}
                />
                <Area
                  type="monotone"
                  dataKey="meetings"
                  name="商談数"
                  stroke="#02b7b7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorMeetings)"
                />
                <Area
                  type="monotone"
                  dataKey="opportunities"
                  name="案件化数"
                  stroke="#e40265"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorOpportunities)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
