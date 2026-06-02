export const overviewStats = [
  { id: 'totalGyms', label: 'Total Gyms', value: 248, delta: '+18 this month' },
  { id: 'activeGyms', label: 'Active Gyms', value: 214, delta: '86% operational' },
  { id: 'expiredGyms', label: 'Expired Gyms', value: 21, delta: 'Needs renewal outreach' },
  { id: 'totalRevenue', label: 'Total Revenue', value: '$1.84M', delta: '+24.8% YoY' },
  { id: 'monthlyRevenue', label: 'Monthly Revenue', value: '$142K', delta: '+8.2% vs last month' },
  { id: 'totalUsers', label: 'Total Users', value: '56.4K', delta: '+3.1K active seats' },
  { id: 'activeTrainers', label: 'Active Trainers', value: 1842, delta: 'Across all facilities' },
  { id: 'activeMembers', label: 'Active Members', value: '41.8K', delta: '+11.7% retention' },
];

export const revenueTrend = [
  { label: 'Jan', value: 72 },
  { label: 'Feb', value: 84 },
  { label: 'Mar', value: 89 },
  { label: 'Apr', value: 101 },
  { label: 'May', value: 118 },
  { label: 'Jun', value: 142 },
];

export const gymGrowthTrend = [
  { label: 'Jan', value: 120 },
  { label: 'Feb', value: 134 },
  { label: 'Mar', value: 149 },
  { label: 'Apr', value: 176 },
  { label: 'May', value: 210 },
  { label: 'Jun', value: 248 },
];

export const subscriptionGrowthTrend = [
  { label: 'Basic', value: 58 },
  { label: 'Premium', value: 104 },
  { label: 'Enterprise', value: 86 },
];

export const gyms = [
  {
    id: 'gym-101',
    name: 'Iron Temple Elite',
    owner: 'Sophia Turner',
    plan: 'Enterprise',
    status: 'Active',
    expiryDate: '2026-12-28',
    members: 1380,
    trainers: 42,
    revenue: '$186K',
    city: 'New York',
  },
  {
    id: 'gym-102',
    name: 'Pulse Forge Fitness',
    owner: 'Liam Carter',
    plan: 'Premium',
    status: 'Active',
    expiryDate: '2026-10-19',
    members: 940,
    trainers: 31,
    revenue: '$129K',
    city: 'Chicago',
  },
  {
    id: 'gym-103',
    name: 'Core Republic',
    owner: 'Mia Lopez',
    plan: 'Basic',
    status: 'Expired',
    expiryDate: '2026-05-14',
    members: 510,
    trainers: 16,
    revenue: '$58K',
    city: 'Houston',
  },
  {
    id: 'gym-104',
    name: 'Apex Motion Club',
    owner: 'Noah Reed',
    plan: 'Premium',
    status: 'Suspended',
    expiryDate: '2026-09-08',
    members: 620,
    trainers: 18,
    revenue: '$74K',
    city: 'San Diego',
  },
  {
    id: 'gym-105',
    name: 'Titan Yard',
    owner: 'Ava Brooks',
    plan: 'Enterprise',
    status: 'Active',
    expiryDate: '2027-01-21',
    members: 1710,
    trainers: 54,
    revenue: '$224K',
    city: 'Austin',
  },
  {
    id: 'gym-106',
    name: 'Nova Strength Lab',
    owner: 'Ethan Gray',
    plan: 'Basic',
    status: 'Active',
    expiryDate: '2026-08-02',
    members: 430,
    trainers: 12,
    revenue: '$42K',
    city: 'Seattle',
  },
];

export const gymDetailMap = {
  'gym-101': {
    id: 'gym-101',
    about: 'Flagship enterprise facility with advanced member engagement and multi-location billing.',
    subscription: { plan: 'Enterprise', billingCycle: 'Annual', renewal: '2026-12-28', amount: '$24,000' },
    revenueGenerated: '$186,000',
    membersCount: 1380,
    trainersCount: 42,
    overview: [
      { label: 'Locations', value: 4 },
      { label: 'Check-ins Today', value: 612 },
      { label: 'Avg. Retention', value: '91%' },
      { label: 'Pending Tickets', value: 3 },
    ],
    members: [
      { name: 'Emma Stone', tier: 'VIP', joined: '2025-08-12', status: 'Active' },
      { name: 'David Kim', tier: 'Premium', joined: '2026-01-05', status: 'Active' },
      { name: 'Olivia West', tier: 'Standard', joined: '2025-11-03', status: 'Paused' },
    ],
    trainers: [
      { name: 'Marcus Vega', specialty: 'Strength', sessions: 182, status: 'Active' },
      { name: 'Sara Chen', specialty: 'HIIT', sessions: 159, status: 'Active' },
      { name: 'Jordan Miles', specialty: 'Mobility', sessions: 91, status: 'Leave' },
    ],
    orders: [
      { id: 'ORD-1882', amount: '$2,140', date: '2026-05-10', status: 'Paid' },
      { id: 'ORD-1921', amount: '$1,280', date: '2026-05-18', status: 'Paid' },
      { id: 'ORD-1968', amount: '$980', date: '2026-05-25', status: 'Refunded' },
    ],
    subscriptionHistory: [
      { plan: 'Premium', period: '2024', amount: '$12,000', status: 'Completed' },
      { plan: 'Enterprise', period: '2025', amount: '$18,000', status: 'Completed' },
      { plan: 'Enterprise', period: '2026', amount: '$24,000', status: 'Active' },
    ],
  },
};

export const subscriptionPlans = [
  {
    name: 'Basic',
    price: '$99/mo',
    description: 'For boutique gyms scaling operations with essential admin visibility.',
    features: ['Single location', 'Member CRM', 'Standard reporting'],
    accent: 'from-white/15 to-white/5',
  },
  {
    name: 'Premium',
    price: '$249/mo',
    description: 'For growth-stage gym networks that need deeper analytics and automation.',
    features: ['Multi-location reporting', 'Advanced billing', 'Priority support'],
    accent: 'from-neon/25 to-neon/10',
  },
  {
    name: 'Enterprise',
    price: '$599/mo',
    description: 'For high-volume operators managing multiple brands and hundreds of staff.',
    features: ['Custom roles', 'SLA support', 'Executive analytics'],
    accent: 'from-emerald-400/20 to-white/10',
  },
];

export const subscriptionSummary = {
  activePlans: 214,
  expiredPlans: 21,
  upcomingRenewals: 37,
  records: [
    { gym: 'Iron Temple Elite', plan: 'Enterprise', renewal: '2026-12-28', value: '$24,000', status: 'Active' },
    { gym: 'Core Republic', plan: 'Basic', renewal: '2026-05-14', value: '$1,188', status: 'Expired' },
    { gym: 'Pulse Forge Fitness', plan: 'Premium', renewal: '2026-10-19', value: '$2,988', status: 'Upcoming' },
  ],
};

export const revenueSummary = {
  total: '$1.84M',
  monthly: '$142K',
  yearly: '$1.12M',
  subscriptionRevenue: [
    { label: 'Basic', value: 28 },
    { label: 'Premium', value: 52 },
    { label: 'Enterprise', value: 77 },
  ],
  monthlyRevenue: revenueTrend,
  gymRankings: [
    { gym: 'Titan Yard', revenue: '$224K', rank: 1 },
    { gym: 'Iron Temple Elite', revenue: '$186K', rank: 2 },
    { gym: 'Pulse Forge Fitness', revenue: '$129K', rank: 3 },
    { gym: 'Apex Motion Club', revenue: '$74K', rank: 4 },
  ],
};

export const analyticsSummary = {
  kpis: [
    { label: 'User Growth', value: '+18.4%', description: 'Quarter over quarter growth' },
    { label: 'Gym Growth', value: '+12.9%', description: 'Net new facilities onboarded' },
    { label: 'Revenue Growth', value: '+24.8%', description: 'Annual recurring revenue expansion' },
  ],
  userGrowth: [
    { label: 'Jan', value: 22 },
    { label: 'Feb', value: 26 },
    { label: 'Mar', value: 33 },
    { label: 'Apr', value: 37 },
    { label: 'May', value: 42 },
    { label: 'Jun', value: 56 },
  ],
  gymGrowth: gymGrowthTrend,
  revenueGrowth: revenueTrend,
  channels: [
    { source: 'Direct Sales', conversions: 84, value: '$420K' },
    { source: 'Referrals', conversions: 46, value: '$188K' },
    { source: 'Partner Network', conversions: 29, value: '$119K' },
  ],
};

export const users = [
  { id: 'usr-1', name: 'Admin Aisha', role: 'Platform Ops', status: 'Active', lastSeen: '2 mins ago' },
  { id: 'usr-2', name: 'Devon Watts', role: 'Support Lead', status: 'Active', lastSeen: '18 mins ago' },
  { id: 'usr-3', name: 'Mina Roy', role: 'Finance Analyst', status: 'Away', lastSeen: '1 hour ago' },
  { id: 'usr-4', name: 'Chris Hale', role: 'Fraud Review', status: 'Offline', lastSeen: '3 hours ago' },
];

export const tickets = [
  { id: 'TCK-301', subject: 'Billing sync mismatch', gym: 'Iron Temple Elite', priority: 'High', status: 'Open', updated: '12 mins ago' },
  { id: 'TCK-302', subject: 'Staff access reset', gym: 'Nova Strength Lab', priority: 'Medium', status: 'Pending', updated: '34 mins ago' },
  { id: 'TCK-303', subject: 'Renewal confirmation missing', gym: 'Core Republic', priority: 'High', status: 'Closed', updated: '2 hours ago' },
];

export const notifications = [
  { id: 'NT-1', title: 'System maintenance scheduled', type: 'System', detail: 'Core analytics pipeline maintenance at 02:00 UTC.', time: '5 mins ago' },
  { id: 'NT-2', title: '37 renewals approaching', type: 'Subscription', detail: 'Premium and Enterprise plan reminders need review.', time: '18 mins ago' },
  { id: 'NT-3', title: 'Failed payment cluster detected', type: 'Payment', detail: '7 gyms flagged for manual revenue verification.', time: '49 mins ago' },
];

export const settingsSections = [
  {
    title: 'Profile',
    fields: ['Name', 'Email', 'Role', 'Timezone'],
  },
  {
    title: 'Platform Settings',
    fields: ['Default currency', 'Renewal reminders', 'Usage thresholds', 'Tax profile'],
  },
  {
    title: 'Branding',
    fields: ['Logo', 'Accent colors', 'Email templates', 'White-label options'],
  },
  {
    title: 'Security',
    fields: ['Password policy', 'Two-factor auth', 'Session timeout', 'Audit logging'],
  },
];
