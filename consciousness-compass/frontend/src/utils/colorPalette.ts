
/**
 * A utility to provide consistent color themes for different sections
 */
export const getSectionColors = (sectionId: number) => {
  // Array of color schemes for different sections
  const colorSchemes = [
    // Default (fallback)
    {
      primary: 'from-amber-200 to-amber-400',
      accent: 'from-amber-500 to-amber-300',
      text: 'text-amber-200'
    },
    // Section 1: Meditation & Mindfulness - Calming Blue
    {
      primary: 'from-blue-200 to-indigo-300',
      accent: 'from-blue-500 to-indigo-400',
      text: 'text-blue-200'
    },
    // Section 2: Consciousness & Science - Purple/Violet
    {
      primary: 'from-purple-200 to-violet-300',
      accent: 'from-purple-500 to-violet-400',
      text: 'text-purple-200'
    },
    // Section 3: Monroe Institute - Teal/Cyan
    {
      primary: 'from-teal-200 to-cyan-300',
      accent: 'from-teal-500 to-cyan-400',
      text: 'text-teal-200'
    },
    // Section 4: Remote Viewing - Green
    {
      primary: 'from-emerald-200 to-green-300',
      accent: 'from-emerald-500 to-green-400',
      text: 'text-emerald-200'
    },
    // Section 5: OBEs & Astral - Amber/Gold
    {
      primary: 'from-amber-200 to-yellow-300',
      accent: 'from-amber-500 to-yellow-400',
      text: 'text-amber-200'
    },
    // Section 6: Dreamwork - Blue/Purple
    {
      primary: 'from-blue-300 to-purple-200',
      accent: 'from-blue-600 to-purple-400',
      text: 'text-blue-200'
    }
  ];

  // Return the color scheme based on section ID (with a fallback to default)
  return colorSchemes[sectionId] || colorSchemes[0];
};
