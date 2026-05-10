import { useNavigate } from 'react-router-dom'
import { PYRAMID_LEVELS } from '../../data/pyramid'

const SVG_WIDTH = 400
const SVG_HEIGHT = 350
const LEVEL_HEIGHT = 50
const APEX_HALF = 40   // half-width at top = 40px, so apex = 80px

// x_left(y) = (SVG_WIDTH/2 - APEX_HALF) * (SVG_HEIGHT - y) / SVG_HEIGHT
const xLeft = (y: number) =>
  ((SVG_WIDTH / 2 - APEX_HALF) * (SVG_HEIGHT - y)) / SVG_HEIGHT

function getLabelLines(name: string): string[] {
  if (name === 'Flexibility & Mobility') return ['Flexibility &', 'Mobility']
  if (name === 'Structured Workouts') return ['Structured', 'Workouts']
  if (name === 'Rest & Recovery') return ['Rest &', 'Recovery']
  return [name]
}

function getSlugPath(slug: string): string {
  return slug === 'ai-coach' ? '/ai-coach' : `/section/${slug}`
}

export default function Pyramid() {
  const navigate = useNavigate()

  // Render from top (AI Coach, level 7) to bottom (Nutrition, level 1)
  const levelsTopToBottom = [...PYRAMID_LEVELS].reverse()

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT + 30}`}
        className="w-full"
        role="img"
        aria-label="Interactive health pyramid"
      >
        {levelsTopToBottom.map((level, n) => {
          const yTop = n * LEVEL_HEIGHT
          const yBottom = (n + 1) * LEVEL_HEIGHT
          const xlTop = xLeft(yTop)
          const xlBottom = xLeft(yBottom)
          const xrTop = SVG_WIDTH - xlTop
          const xrBottom = SVG_WIDTH - xlBottom
          const cx = SVG_WIDTH / 2
          const cy = yTop + LEVEL_HEIGHT / 2
          const lines = getLabelLines(level.name)
          const fontSize = n === 0 ? 11 : 13
          const path = getSlugPath(level.slug)

          return (
            <g
              key={level.sectionId}
              onClick={() => navigate(path)}
              style={{ cursor: 'pointer' }}
              role="button"
              aria-label={`Go to ${level.name} section`}
            >
              <polygon
                points={`${xlTop},${yTop} ${xrTop},${yTop} ${xrBottom},${yBottom} ${xlBottom},${yBottom}`}
                fill={level.color}
                stroke="white"
                strokeWidth="1.5"
                opacity="0.92"
                className="transition-opacity duration-150 hover:opacity-100"
              />
              {lines.length === 1 ? (
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={fontSize}
                  fontWeight="600"
                  fill="#1a1a1a"
                  style={{ pointerEvents: 'none', fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {lines[0]}
                </text>
              ) : (
                <>
                  <text
                    x={cx}
                    y={cy - 8}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    fontWeight="600"
                    fill="#1a1a1a"
                    style={{ pointerEvents: 'none', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {lines[0]}
                  </text>
                  <text
                    x={cx}
                    y={cy + 9}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={fontSize}
                    fontWeight="600"
                    fill="#1a1a1a"
                    style={{ pointerEvents: 'none', fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {lines[1]}
                  </text>
                </>
              )}
            </g>
          )
        })}

        {/* Base label */}
        <text
          x={SVG_WIDTH / 2}
          y={SVG_HEIGHT + 18}
          textAnchor="middle"
          fontSize="11"
          fill="#9ca3af"
          fontStyle="italic"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          ↑ Start at the base — work your way up
        </text>
      </svg>
    </div>
  )
}
