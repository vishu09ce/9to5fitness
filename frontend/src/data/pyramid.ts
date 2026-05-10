import type { PyramidLevel } from '../types'

export const PYRAMID_LEVELS: PyramidLevel[] = [
  { level: 1, sectionId: 'nutrition',   name: 'Nutrition',              color: '#E8A87C', slug: 'nutrition'   },
  { level: 2, sectionId: 'hydration',   name: 'Hydration',              color: '#6DB3F2', slug: 'hydration'   },
  { level: 3, sectionId: 'walking',     name: 'Walking',                color: '#7BC67E', slug: 'walking'     },
  { level: 4, sectionId: 'flexibility', name: 'Flexibility & Mobility', color: '#C39BD3', slug: 'flexibility' },
  { level: 5, sectionId: 'workouts',    name: 'Structured Workouts',    color: '#F1948A', slug: 'workouts'    },
  { level: 6, sectionId: 'recovery',   name: 'Rest & Recovery',        color: '#76D7C4', slug: 'recovery'    },
  { level: 7, sectionId: 'ai',         name: 'AI Coach',               color: '#F7DC6F', slug: 'ai-coach'    },
]
