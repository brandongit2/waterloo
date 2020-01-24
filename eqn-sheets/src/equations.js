import katex from 'katex';

function k(tex, displayMode = false) {
    return katex.renderToString(tex, { displayMode });
}

let equations = {
    'math-114': {
        'name': 'MATH 114',
        'constants': [],
        'equations': []
    },
    'math-128': {
        'name': 'MATH 128',
        'constants': [],
        'equations': []
    },
    'phys-122': {
        'name': 'PHYS 122',
        'constants': [],
        'equations': [
            {
                latex: '\\Delta\\gamma=\\gamma\\int_{-\\infty}^{\\ln(\\pi^{e\\gamma_0})}\\frac{\\sin(5t^2-3t+1)}{\\sqrt{6^{t}}}\\,dt',
                description: ''
            }
        ]
    },
    'phys-124': {
        'name': 'PHYS 124',
        'constants': [
            {
                latex: 'g&=9.8067\\ \\text{m}\\,\\text{s}^{-1}',
                description: 'T acceleration due to gravity on Earth.'
            },
            {
                latex: 'G&=6.6738\\times10^{-11}\\ \\text{m}^3\\,\\text{kg}^{-1}\\,\\text{s}^{-2}',
                description: 'The gravitational constant.'
            },
            {
                latex: 'R_\\oplus&=6.3781\\times10^6\\ \\text{m}',
                description: 'The radius of the Earth.'
            },
            {
                latex: 'M_\\oplus&=5.9722\\times10^{24}\\ \\text{kg}',
                description: 'The mass of the Earth.'
            },
            {
                latex: 'R_\\odot&=6.96340\\times10^8\\ \\text{m}',
                description: 'The radius of the Sun.'
            },
            {
                latex: 'M_\\odot&=1.9885\\times10^{30}\\ \\text{kg}',
                description: 'The mass of the Sun.'
            },
            {
                latex: 'c&=2.99792\\times10^8\\ \\text{m}\\,\\text{s}^{-1}',
                description: 'The speed of light in a vacuum.'
            }
        ],
        'equations': [
            {
                latex: 'KE&=\\frac{1}{2}mv^2',
                description: `
                    Kinetic energy, where
                    <ul>
                        <li>${k('m')} is the mass of the object, and</li>
                        <li>${k('v')} is the velocity of the object.</li>
                    </ul>
                `
            },
            {
                latex: 'F_g&=\\frac{Gm_1m_2}{r^2}',
                description: `
                    The force of gravity between two objects, where
                    <ul>
                        <li>${k('G')} is the gravitational constant,</li>
                        <li>${k('m_1')} and ${k('m_2')} are the masses of the objects, and</li>
                        <li>${k('r')} is the distance between the two objects.</li>
                    </ul>
                `
            },
            {
                latex: 'U&=-\\frac{GM_\\oplus m}{r}',
                description: `
                    The gravitational potential energy of an object from Earth, where
                    <ul>
                        <li>${k('G')} is the gravitational constant,</li>
                        <li>${k('M_\\oplus')} is the mass of the Earth,</li>
                        <li>${k('m')} is the mass of the object, and</li>
                        <li>${k('r')} is the distance between the two objects.</li>
                    </ul>
                    This equation is an extension of the equation ${k('U=mgh')} taught in high school. Namely, it accounts for the fact that ${k('g')} changes with altitude.
                `
            },
            {
                latex: 'v&=\\sqrt{\\frac{GM_\\oplus}{r}}',
                description: `
                    The velocity of an object in circular orbit around the Earth, where
                    <ul>
                        <li>${k('G')} is the gravitational constant,</li>
                        <li>${k('M_\\oplus')} is the mass of the Earth, and</li>
                        <li>${k('r')} is the distance between the two objects.</li>
                    </ul>
                `
            },
            {
                latex: 'T^2&=\\frac{4\\pi^2a^3}{GM_\\odot}',
                description: `
                    Kepler's third law of planetary motion, where
                    <ul>
                        <li>${k('a')} is the semi-major axis of the orbit,</li>
                        <li>${k('G')} is the gravitational constant, and</li>
                        <li>${k('M_\\odot')} is the mass of the Sun.</li>
                    </ul>
                    This is actually an approximation of the equation
                    ${k('T^2=\\frac{4\\pi^2a^3}{G\\left(M_\\odot+m\\right)}', true)}
                    which takes into account the mass ${k('m')} of the planet. We don't use this because it's more complicated, and ${k('m')} is almost always insignificant compared to ${k('M_\\odot')}.
                `
            },
            {
                latex: 'R_S&=\\frac{2GM}{c^2}',
                description: `
                    The Schwarzchild radius of an object, where
                    <ul>
                        <li>${k('G')} is the gravitational constant,</li>
                        <li>${k('M')} is the mass of the object, and</li>
                        <li>${k('c')} is the speed of light in a vacuum.</li>
                    </ul>
                `
            },
            {
                latex: '\\gamma&=\\frac{1}{\\sqrt{1-\\frac{u^2}{c^2}}}',
                description: `
                    The Lorentz factor, where
                    <ul>
                        <li>${k('u')} is the velovity of the object, and</li>
                        <li>${k('c')} is the speed of light in a vacuum.</li>
                    </ul>
                `
            },
            {
                latex: '\\Delta t&=\\gamma\\Delta t_0',
                description: `
                    This equation compares a proper time, ${k('\\Delta t_0')}, and that same time as observed by an observer in another frame of reference (${k('\\Delta t')}). ${k('\\gamma')} is the Lorentz factor.
                `
            },
            {
                latex: 'l&=\\frac{l_0}{\\gamma}',
                description: `
                    This equation compares a proper length, ${k('l_0')}, and that same length as observed by an observer in another frame of reference (${k('l')}). ${k('\\gamma')} is the Lorentz factor.
                `
            },
            {
                latex: '&\\begin{cases}x\'=\\gamma(x-ut)\\\\y\'=y\\\\z\'=z\\\\t\'=\\gamma\\left(t-\\frac{ux}{c^2}\\right)\\end{cases}',
                description: `
                    The Lorentz transform for two frames of reference moving solely in the ${k('x')}-direction. If the objects were moving in other directions, the full Lorentz transform would be used, but that is beyond the scope of this course.
                    <ul>
                        <li>${k('x')}, ${k('y')}, ${k('z')}, and ${k('t')} are the spacetime coordinates of the object according to the &#8216;moving&#8217; frame.</li>
                        <li>${k('x\'')}, ${k('y\'')}, ${k('z\'')}, and ${k('t\'')} are the spacetime coordinates of the object in our frame.</li>
                        <li>${k('\\gamma')} is the Lorentz factor,</li>
                        <li>${k('u')} is the velocity of the &#8216;moving&#8217; frame relative to ours, and</li>
                        <li>${k('c')} is the speed of light in a vacuum.</li>
                    </ul>
                `
            }
        ]
    }
};
export default equations;
