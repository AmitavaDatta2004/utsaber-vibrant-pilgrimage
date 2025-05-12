import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated color palette with blue, green, and red
				festival: {
					blue: {
						DEFAULT: "#0EA5E9", // ocean blue
						light: "#7DD3FC",
						dark: "#0369A1",
					},
					green: {
						DEFAULT: "#10B981", // emerald green
						light: "#A7F3D0",
						dark: "#047857",
					},
					red: {
						DEFAULT: "#ea384c", // auspicious red
						light: "#f87171",
						dark: "#b91c1c",
					},
					cream: {
						DEFAULT: "#fefbf6", // serene cream
						light: "#ffffff",
						dark: "#f5f5f4",
					},
					indigo: {
						DEFAULT: "#1A1F2C", // mystical indigo (night)
						light: "#394160",
						dark: "#0f1218",
					}
				},
				// Keep the existing color palette as well
				saffron: {
					DEFAULT: "#F97316", // deep saffron
					light: "#FDBA74",
					dark: "#C2410C",
				},
				marigold: {
					DEFAULT: "#FEF7CD", // marigold yellow
					light: "#FEF9E7", 
					dark: "#FEF08A",
				},
				auspicious: {
					DEFAULT: "#ea384c", // auspicious red
					light: "#f87171",
					dark: "#b91c1c",
				},
				cream: {
					DEFAULT: "#fefbf6", // serene cream
					light: "#ffffff",
					dark: "#f5f5f4",
				},
				indigo: {
					DEFAULT: "#1A1F2C", // mystical indigo (night)
					light: "#394160",
					dark: "#0f1218",
				}
			},
			fontFamily: {
				'heading': ['Playfair Display', 'serif'],
				'sans': ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typewriter': {
					to: { left: '100%' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'pulse-gold': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5', boxShadow: '0 0 15px rgba(255, 215, 0, 0.7)' }
				},
				'floating-particles': {
					'0%': { transform: 'translate(0, 0)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translate(var(--random-x), var(--random-y))', opacity: '0' }
				},
				'marquee': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'color-shift': {
					'0%': { color: '#0EA5E9' },
					'33%': { color: '#10B981' },
					'66%': { color: '#ea384c' },
					'100%': { color: '#0EA5E9' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'typewriter': 'typewriter 4s steps(40) forwards',
				'blink': 'blink 1s step-end infinite',
				'pulse-gold': 'pulse-gold 2s infinite',
				'floating-particles': 'floating-particles 5s linear infinite',
				'color-shift': 'color-shift 8s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
