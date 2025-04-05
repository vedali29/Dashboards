import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const timeRangeData = {
  'Last 30 days': [
    { day: 'Mar 1', visitors: 300, connections: 250, impressions: 300, interactions: 100 },
    { day: 'Mar 5', visitors: 1200, connections: 1000, impressions: 500, interactions: 200 },
    { day: 'Mar 10', visitors: 1300, connections: 1100, impressions: 700, interactions: 350 },
    { day: 'Mar 15', visitors: 800, connections: 600, impressions: 900, interactions: 400 },
    { day: 'Mar 20', visitors: 2000, connections: 1400, impressions: 1400, interactions: 700 },
    { day: 'Mar 25', visitors: 600, connections: 1200, impressions: 1800, interactions: 900 },
    { day: 'Mar 30', visitors: 1800, connections: 1000, impressions: 2000, interactions: 1000 },
  ],
  'This week': [
    { day: 'Mon', visitors: 2000, connections: 200, impressions: 400, interactions: 150 },
    { day: 'Tue', visitors: 50, connections: 350, impressions: 600, interactions: 250 },
    { day: 'Wed', visitors: 700, connections: 500, impressions: 800, interactions: 350 },
    { day: 'Thu', visitors: 1200, connections: 400, impressions: 700, interactions: 300 },
    { day: 'Fri', visitors: 1900, connections: 650, impressions: 1000, interactions: 450 },
    { day: 'Sat', visitors: 800, connections: 550, impressions: 900, interactions: 400 },
    { day: 'Sun', visitors: 1000, connections: 700, impressions: 1100, interactions: 500 },
  ],
  'Last 7 days': [
    { day: '24', visitors: 400, connections: 300, impressions: 500, interactions: 200 },
    { day: '25', visitors: 600, connections: 450, impressions: 700, interactions: 300 },
    { day: '26', visitors: 800, connections: 600, impressions: 900, interactions: 400 },
    { day: '27', visitors: 700, connections: 500, impressions: 800, interactions: 350 },
    { day: '28', visitors: 900, connections: 650, impressions: 1000, interactions: 450 },
    { day: '29', visitors: 1100, connections: 800, impressions: 1200, interactions: 550 },
    { day: '30', visitors: 1000, connections: 750, impressions: 1100, interactions: 500 },
  ],
};

const CustomYAxisTick = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dy={4}
    textAnchor="end"
    fill="#666"
    fontSize="11px"
  >
    {payload.value}
  </text>
);

const CustomXAxisTick = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dy={14}
    textAnchor="middle"
    fill="#666"
    fontSize="11px"
  >
    {payload.value}
  </text>
);

const OverviewSection = () => {
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [metricType, setMetricType] = useState('visitors');
  const [compareMetric, setCompareMetric] = useState(null);
  const [insightType, setInsightType] = useState('Visitors');

  // Calculate percentage change for display
  const getPercentageChange = (metric) => {
    const data = timeRangeData[timeRange];
    const current = data[data.length - 1][metric];
    const previous = data[0][metric];
    const change = ((current - previous) / previous) * 100;
    return `+${Math.round(change)}%`;
  };

  // Get current value for display
  const getCurrentValue = (metric) => {
    const data = timeRangeData[timeRange];
    return (data[data.length - 1][metric] / 1000).toFixed(2) + 'K';
  };

  // Get previous value for display
  const getPreviousValue = (metric) => {
    const data = timeRangeData[timeRange];
    return data[0][metric];
  };
  return (
    <>
      <div className='pl-2 pr-2 mt-8 md:pr-9 bg-[#1D1D1D]'>
      <h2 className="text-[24px] hidden md:block md:text-[28px] font-semibold mb-3 mt-2">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr,1fr] gap-5 ">
        {/* Visitors Graph Card */}
        <div className="bg-[#141414] rounded-xl p-4">
          <div className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center mb-3">
            <div className="flex flex-row md:flex-row gap-2 w-full md:w-auto">
              <select 
                className="bg-[#1D1D1D] border border-gray-700 rounded-full px-2 py-1 text-xs w-full md:w-auto"
                value={metricType}
                onChange={(e) => setMetricType(e.target.value)}
              >
                <option value="visitors">Visitors</option>
                <option value="connections">Connections</option>
                <option value="impressions">Impressions</option>
                <option value="interactions">Interactions</option>
              </select>
              <select 
                className="bg-[#1D1D1D] border border-gray-700 rounded-full px-2 py-1 text-xs w-full md:w-auto"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option>Last 30 days</option>
                <option>This week</option>
                <option>Last 7 days</option>
              </select>
              <select 
                className="bg-[#1D1D1D] border border-gray-700 rounded-full px-2 py-1 text-xs w-full md:w-auto"
                value={compareMetric || ''}
                onChange={(e) => setCompareMetric(e.target.value || null)}
              >
                <option value="">+ Add</option>
                <option value="connections">Connections</option>
                <option value="impressions">Impressions</option>
                <option value="interactions">Interactions</option>
              </select>
            </div>
          </div>

          {/* Metrics Display */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-3">
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-[32px] font-bold">{getCurrentValue(metricType)}</span>
                <div className='flex flex-col text-right ml-2'>
                <span className="text-green-500 text-xs">{getPercentageChange(metricType)}</span>
                <span className="text-gray-500 text-xs">({getPreviousValue(metricType)})</span>
                </div>
              </div>
             
            </div>
            {compareMetric && (
              <div className="w-full md:w-auto">
                <div className="text-2xl md:text-[32px] font-bold text-purple-400">
                  <span className="text-xl font-bold text-purple-400 text-[32px]">{getCurrentValue(compareMetric)}</span>
                  <div className='flex flex-col text-right ml-2'>
                  <span className="text-green-500 text-xs">{getPercentageChange(compareMetric)}</span>
                  <span className="text-gray-500 text-xs">({getPreviousValue(compareMetric)})</span>
                  </div>
                </div>
                
              </div>
            )}
          </div>

          <div className="h-[160px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={timeRangeData[timeRange]}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} opacity={0.5} />
                <YAxis
                  domain={[0, 2000]}
                  ticks={[0, 400, 800, 1200, 1600, 2000]}
                  tick={CustomYAxisTick}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <XAxis
                  dataKey="day"
                  tick={CustomXAxisTick}
                  axisLine={false}
                  tickLine={false}
                  padding={{ left: 10, right: 10 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#222', 
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '12px',
                    padding: '8px'
                  }} 
                />
                <Line
                  type="monotone"
                  dataKey={metricType}
                  stroke="#fff"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: '#fff' }}
                />
                {compareMetric && (
                  <Line
                    type="monotone"
                    dataKey={compareMetric}
                    stroke="#9333EA"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: '#9333EA' }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

         {/* Insights Card */}
         <div className="bg-[#141414] rounded-xl p-4">
          <div className="flex flex-row md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="font-bold text-[18px] md:text-[20px] mb-2 md:mb-0">Insights</h3>
            <select 
              className="bg-[#1D1D1D] border border-gray-700 rounded-full px-2 py-1 text-xs md:w-auto"
              value={insightType}
              onChange={(e) => setInsightType(e.target.value)}
            >
              <option>Visitors</option>
              <option>Connections</option>
              <option>Impressions</option>
              <option>Interactions</option>
            </select>
          </div>

          <div className="space-y-5">
  <div className="flex flex-row md:flex-col justify-between items-start gap-4">
    {/* Founders Section */}
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm md:text-[16px]">Founders</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl md:text-[32px] font-semibold">7.4K</span>
        <div className="flex flex-col text-right ml-2">
          <span className="text-green-500 text-xs">+000%</span>
          <span className="text-gray-500 text-xs">(000)</span>
        </div>
      </div>
    </div>

    {/* Investors Section */}
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm md:text-[16px]">Investors</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl md:text-[32px] font-semibold">6.09K</span>
        <div className="flex flex-col text-right ml-2">
          <span className="text-green-500 text-xs">+000%</span>
          <span className="text-gray-500 text-xs">(000)</span>
        </div>
      </div>
    </div>
  </div>
</div>


            <button className="w-full mt-4 pt-4 text-right text-xs border-t border-gray-700 text-white">
              View detailed insights →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;




       