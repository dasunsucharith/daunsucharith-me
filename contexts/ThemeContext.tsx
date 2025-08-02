// Theme context removed - using single black/white/sky blue theme
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}

export const useTheme = () => {
  return { theme: 'single', toggleTheme: () => {} }
}