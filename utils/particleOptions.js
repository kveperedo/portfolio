export const particleOptions = {
	autoPlay: true,
	background: {
		color: {
			value: '#F2F6FF',
		},
		image: '',
		position: '',
		repeat: '',
		size: '',
		opacity: 1,
	},
	backgroundMask: {
		composite: 'destination-out',
		cover: {
			color: {
				value: '#fff',
			},
			opacity: 1,
		},
		enable: false,
	},
	fullScreen: {
		enable: true,
		zIndex: -1,
	},
	detectRetina: true,
	fpsLimit: 60,
	infection: {
		cure: false,
		delay: 0,
		enable: false,
		infections: 0,
		stages: [],
	},
	interactivity: {
		detectsOn: 'window',
		events: {
			onClick: {
				enable: false,
				mode: [],
			},
			onDiv: {
				selectors: [],
				enable: false,
				mode: [],
				type: 'circle',
			},
			onHover: {
				enable: false,
				mode: 'trail',
				parallax: {
					enable: false,
					force: 2,
					smooth: 10,
				},
			},
			resize: false,
		},
		modes: {
			attract: {
				distance: 200,
				duration: 0.4,
				speed: 1,
			},
			bounce: {
				distance: 200,
			},
			bubble: {
				distance: 200,
				duration: 0.4,
			},
			connect: {
				distance: 80,
				links: {
					opacity: 0.5,
				},
				radius: 60,
			},
			grab: {
				distance: 100,
				links: {
					blink: false,
					consent: false,
					opacity: 1,
				},
			},
			light: {
				area: {
					gradient: {
						start: {
							value: '#ffffff',
						},
						stop: {
							value: '#000000',
						},
					},
					radius: 1000,
				},
				shadow: {
					color: {
						value: '#000000',
					},
					length: 2000,
				},
			},
			push: {
				quantity: 4,
			},
			remove: {
				quantity: 2,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
				speed: 1,
			},
			slow: {
				factor: 3,
				radius: 200,
			},
			trail: {
				delay: 0.005,
				quantity: 5,
				particles: {
					color: {
						value: '#ff0000',
						animation: {
							enable: true,
							speed: 400,
							sync: true,
						},
					},
					collisions: {
						enable: false,
						bounce: {
							horizontal: {
								random: {},
							},
							vertical: {
								random: {},
							},
						},
						overlap: {},
					},
					links: {
						enable: false,
						shadow: {},
						triangles: {},
					},
					move: {
						outModes: {
							default: 'destroy',
						},
						speed: 2,
						angle: {},
						attract: {
							rotate: {},
						},
						gravity: {},
						path: {
							delay: {
								random: {},
							},
						},
						trail: {},
					},
					size: {
						value: 5,
						animation: {
							enable: true,
							speed: 5,
							minimumValue: 1,
							sync: true,
							startValue: 'min',
							destroy: 'max',
						},
						random: {},
					},
					bounce: {
						horizontal: {
							random: {},
						},
						vertical: {
							random: {},
						},
					},
					life: {
						delay: {
							random: {},
						},
						duration: {
							random: {},
						},
					},
					number: {
						density: {},
					},
					opacity: {
						animation: {},
						random: {},
					},
					rotate: {
						animation: {},
					},
					shadow: {
						offset: {},
					},
					shape: {},
					stroke: {
						color: {
							value: '',
							animation: {
								count: 0,
								enable: false,
								offset: {
									max: 0,
									min: 0,
								},
								speed: 0,
								sync: false,
							},
						},
					},
					twinkle: {
						lines: {},
						particles: {},
					},
				},
			},
		},
	},
	manualParticles: [],
	motion: {
		disable: false,
		reduce: {
			factor: 4,
			value: false,
		},
	},
	particles: {
		bounce: {
			horizontal: {
				random: {
					enable: false,
					minimumValue: 0.1,
				},
				value: 1,
			},
			vertical: {
				random: {
					enable: false,
					minimumValue: 0.1,
				},
				value: 1,
			},
		},
		collisions: {
			bounce: {
				horizontal: {
					random: {
						enable: false,
						minimumValue: 0.1,
					},
					value: 1,
				},
				vertical: {
					random: {
						enable: false,
						minimumValue: 0.1,
					},
					value: 1,
				},
			},
			enable: false,
			mode: 'bounce',
			overlap: {
				enable: true,
				retries: 0,
			},
		},
		color: {
			value: ['#8DBAEE', 'C0F4FF', 'D2C5FF'],
			animation: {
				h: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					sync: true,
				},
				s: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					sync: true,
				},
				l: {
					count: 0,
					enable: false,
					offset: 0,
					speed: 1,
					sync: true,
				},
			},
		},
		life: {
			count: 100,
			delay: {
				random: {
					enable: false,
					minimumValue: 0,
				},
				value: 0,
				sync: false,
			},
			duration: {
				random: {
					enable: false,
					minimumValue: 0.0001,
				},
				value: 0,
				sync: false,
			},
		},
		links: {
			blink: false,
			color: {
				value: 'random',
			},
			consent: false,
			distance: 100,
			enable: false,
			frequency: 1,
			opacity: 1,
			shadow: {
				blur: true,
				color: {
					value: '#00ff00',
				},
				enable: false,
			},
			triangles: {
				enable: false,
				frequency: 1,
			},
			width: 1,
			warp: false,
		},
		move: {
			angle: {
				offset: 45,
				value: 90,
			},
			attract: {
				enable: true,
				rotate: {
					x: 5000,
					y: 5000,
				},
			},
			decay: 0,
			distance: 0,
			direction: 'none',
			drift: 0,
			enable: true,
			gravity: {
				acceleration: 9.81,
				enable: false,
				maxSpeed: 50,
			},
			path: {
				clamp: true,
				delay: {
					random: {
						enable: false,
						minimumValue: 0,
					},
					value: 0,
				},
				enable: false,
			},
			outModes: {
				default: 'out',
				bottom: 'out',
				left: 'out',
				right: 'out',
				top: 'out',
			},
			random: false,
			size: false,
			speed: 2,
			straight: false,
			trail: {
				enable: false,
				length: 10,
				fillColor: {
					value: '#000000',
				},
			},
			vibrate: false,
			warp: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
				factor: 1000,
			},
			limit: 0,
			value: 50,
		},
		opacity: {
			random: {
				enable: true,
				minimumValue: 0.3,
			},
			value: {
				min: 0.3,
				max: 0.8,
			},
			animation: {
				count: 0,
				enable: true,
				speed: 0.5,
				sync: false,
				destroy: 'none',
				minimumValue: 0.3,
				startValue: 'random',
			},
		},
		reduceDuplicates: false,
		rotate: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: {
				min: 0,
				max: 360,
			},
			animation: {
				enable: false,
				speed: 0,
				sync: false,
			},
			direction: 'clockwise',
			path: false,
		},
		shadow: {
			blur: 0,
			color: {
				value: '#000000',
			},
			enable: false,
			offset: {
				x: 0,
				y: 0,
			},
		},
		shape: {
			options: {
				image: [null],
				images: [null],
			},
			type: 'circle',
		},
		size: {
			random: {
				enable: true,
				minimumValue: 1,
			},
			value: {
				min: 50,
				max: 125,
			},
			animation: {
				count: 0,
				enable: true,
				speed: 1,
				sync: true,
				destroy: 'max',
				minimumValue: 100,
				startValue: 'max',
			},
		},
		stroke: {
			width: 0,
			color: {
				value: '',
				animation: {
					h: {
						count: 0,
						enable: false,
						offset: 0,
						speed: 0,
						sync: false,
					},
					s: {
						count: 0,
						enable: false,
						offset: 0,
						speed: 1,
						sync: true,
					},
					l: {
						count: 0,
						enable: false,
						offset: 0,
						speed: 1,
						sync: true,
					},
				},
			},
			opacity: 1,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
	},
	pauseOnBlur: false,
	pauseOnOutsideViewport: true,
	responsive: [],
	themes: [],
};
