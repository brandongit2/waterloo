import katex from 'katex';
import 'katex/dist/contrib/mhchem.js';
import { createStore } from 'redux';

import rootReducer from './reducers';

function k(tex, displayMode = false) {
    return katex.renderToString(tex, { displayMode });
}

let store = createStore(
    rootReducer,
    {
        courses: {
            'chem-123': {
                name: 'CHEM 123',
                lists: {
                    'equations': {
                        code: 'E',
                        content: [
                            {
                                latex: 'C&=\\frac{q}{\\Delta T}',
                                description: `
                                    Average heat capacity, where
                                    <ul>
                                        <li>${k('q')} represents the amount of heat put into (or released from) an object, and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'c&=\\frac{q}{m\\Delta T}',
                                description: `
                                    Specific heat capacity, where
                                    <ul>
                                        <li>${k('q')} represents the amount of heat put into (or released from) an object,</li>
                                        <li>${k('m')} is the amount of the substance (in grams), and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                    This equation is typically shown in the form ${k('q=mc\\Delta T')}.
                                `
                            },
                            {
                                latex: '\\overline{C}&=\\frac{q}{n\\Delta T}',
                                description: `
                                    Molar heat capacity, where
                                    <ul>
                                        <li>${k('q')} represents the amount of heat put into (or released from) an object,</li>
                                        <li>${k('n')} is the amount of the substance (in moles), and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                    This equation is typically shown in the form ${k('q=mc\\Delta T')}.
                                `
                            },
                            {
                                latex: 'W&=-P_\\mathrm{ext}\\Delta V',
                                description: `
                                    In a closed system, ${k('W')} represents the work done by external pressure to change the volume of the system.
                                    <ul>
                                        <li>${k('P_\\mathrm{ext}')} represents the external pressure and</li>
                                        <li>${k('\\Delta V')} is the change in volume.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\Delta U&=Q+W',
                                description: `
                                    The first law of thermodynamics.
                                    <ul>
                                        <li>${k('\\Delta U')} is the change in the internal energy of a system,</li>
                                        <li>${k('Q')} is the heat exchanged between the system and its surroundings, and</li>
                                        <li>${k('W')} is the work done between the system and its surroundings. When ${k('W<0')}, work is done on the surroundings by the system (i.e. the volume of the system is increasing). When ${k('W>0')}, work is done on the system by its surroundings (i.e. the volume of the system is decreasing).</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'H&=U+PV',
                                description: `
                                    Enthalpy of a system, where
                                    <ul>
                                        <li>${k('U')} represents the total internal energy of the system,</li>
                                        <li>${k('P')} is the external pressure on the system, and</li>
                                        <li>${k('V')} is the volume of the system.</li>
                                    </ul>
                                    There is no physical interpretation of this equation, and ${k('U')} (and therefore ${k('H')}) is not determinable. Instead, this equation is more useful in the form ${k('\\Delta H=\\Delta U+P\\Delta V')}, where ${k('\\Delta H')} is now the change in enthalpy, and ${k('P')} is constant.
                                `
                            },
                            {
                                latex: '\\Delta H&=q_P',
                                description: `
                                    The change in enthalpy, ${k('\\Delta H')}, is equal to the amount of heat transferred under constant pressure, ${k('q_P')}. Note that enthalpy is a property of the system (a system doesn't &#8216;have&#8217; heat), and heat is the energy released or absorbed by the system.
                                `
                            },
                            {
                                latex: '\\Delta S&=-\\frac{q}{T}',
                                description: `
                                    Change in entropy for the surroundings of a system.
                                    <ul>
                                        <li>${k('q')} represents the heat transferred between the system and its surroundings, and</li>
                                        <li>${k('T')} is the temperature of the surroundings.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\Delta S&=\\frac{\\Delta H}{T}',
                                description: `
                                    Change in entropy for a system undergoing a phase change.
                                    <ul>
                                        <li>${k('\\Delta H')} represents the change in enthalpy of the system, and</li>
                                        <li>${k('T')} is the temperature where the phase change occurs at 1 atm.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'C_P&=C_V+nR',
                                description: `
                                    The relationship between ${k('C_P')}, the heat capacity under constant pressure, and ${k('C_V')}, the heat capacity under constant volume, for an ideal gas.
                                    <ul>
                                        <li>${k('n')} represents the number of moles of substance in the system, and</li>
                                        <li>${k('R')} is the ideal gas constant.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\Delta S&=C_V\\ln\\left(\\frac{T_f}{T_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under constant volume.
                                    <ul>
                                        <li>${k('C_V')} represents the heat capacity of the system under constant volume, and</li>
                                        <li>${k('T_i')} and ${k('T_f')} are the initial and final tempreratures of the system.</li>
                                    </ul>
                                    This equation really only works for ideal gases since liquids and solids don't undergo volume changes.
                                `
                            },
                            {
                                latex: '\\Delta S&=C_P\\ln\\left(\\frac{T_f}{T_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under constant pressure.
                                    <ul>
                                        <li>${k('C_P')} represents the heat capacity of the system under constant pressure, and</li>
                                        <li>${k('T_i')} and ${k('T_f')} are the initial and final tempreratures of the system.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\Delta S&=C_V\\ln\\left(\\frac{T_f}{T_i}\\right)+nR\\ln\\left(\\frac{V_f}{V_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under changing volume.
                                    <ul>
                                        <li>${k('C_V')} represents the heat capacity of the system under constant volume,</li>
                                        <li>${k('T_f')} and ${k('T_i')} are the final and initial tempreratures of the system,</li>
                                        <li>${k('n')} is the number of moles of substance in the system,</li>
                                        <li>${k('R')} is the ideal gas constant, and </li>
                                        <li>${k('V_f')} and ${k('V_i')} are the final and initial volumes of the system.</li>
                                    </ul>
                                    This equation really only works for ideal gases since liquids and solids don't undergo volume changes.
                                `
                            },
                            {
                                latex: '\\Delta S&=C_P\\ln\\left(\\frac{T_f}{T_i}\\right)+nR\\ln\\left(\\frac{P_f}{P_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under changing pressure.
                                    <ul>
                                        <li>${k('C_P')} represents the heat capacity of the system under constant pressure,</li>
                                        <li>${k('T_f')} and ${k('T_i')} are the final and initial tempreratures of the system,</li>
                                        <li>${k('n')} is the number of moles of substance in the system,</li>
                                        <li>${k('R')} is the ideal gas constant, and </li>
                                        <li>${k('P_f')} and ${k('P_i')} are the final and initial pressures of the system.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'G&=H-TS',
                                description: `
                                    Gibbs energy, where
                                    <ul>
                                        <li>${k('H')} represents the total enthalpy of a system,</li>
                                        <li>${k('T')} is the temperature of the system, and</li>
                                        <li>${k('S')} is the entropy of the system.</li>
                                    </ul>
                                    Like ${k('H=U+PV')}, this equation has no physical meaning; it is just a useful interpretation of energy. Again, this equation is more useful in the form ${k('\\Delta G=\\Delta H-T\\Delta S')}, where ${k('\\Delta G')} is the change in Gibbs energy, and ${k('T')} is constant.
                                `
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'R&=\\pu{8314.46 L Pa K-1 mol-1}',
                                description: `Ideal gas constant. Used as the constant of proportionality in the equation ${k('PV=nRT')}.`
                            }
                        ]
                    },
                    'conversions': {
                        code: 'CV',
                        content: [
                            {
                                latex: '\\pu{1 °C}&=\\pu{273.15 K}',
                                description: '°C &#8594; degree Celsius<br>K &#8594; Kelvin'
                            },
                            {
                                latex: '\\pu{1 atm}&=\\pu{101325 Pa}',
                                description: 'atm &#8594; atmosphere<br>Pa &#8594; Pascal'
                            },
                            {
                                latex: '\\pu{1 mmHg}&=\\pu{133.322 Pa}',
                                description: 'mmHg &#8594; millimeters mercury<br>Pa &#8594; Pascal'
                            },
                            {
                                latex: '\\pu{1 cal}&=\\pu{4.184 J}',
                                description: `cal &#8594; calorie<br>J &#8594; Joule<br>The calorie (cal) is not to be confused with the food calorie (Cal or kcal). ${k('\\pu{1 Cal}=\\pu{1000 cal}')}.`
                            }
                        ]
                    }
                }
            },
            'math-114': {
                name: 'MATH 114',
                lists: {}
            },
            'math-128': {
                name: 'MATH 128',
                lists: {
                    'identities': {
                        code: 'I',
                        content: [
                            {
                                latex: '\\sin^2{x}+\\cos^2{x}&=1',
                                description: 'fuck shit'
                            }
                        ]
                    },
                    'equations': {
                        code: 'E',
                        content: [
                            {
                                latex: '\\int x\\,dx',
                                description: 'h'
                            }
                        ]
                    }
                }
            },
            'phys-122': {
                name: 'PHYS 122',
                lists: {
                    'equations': {
                        code: 'E',
                        content: [
                            {
                                latex: '\\Delta\\gamma=\\gamma\\int_{-\\infty}^{\\ln(\\pi^{e\\gamma_0})}\\frac{\\sin(5t^2-3t+1)}{\\sqrt{6^{t}}}\\,dt',
                                description: ''
                            }
                        ]
                    }
                }
            },
            'phys-124': {
                name: 'PHYS 124',
                lists: {
                    'equations': {
                        code: 'E',
                        content: [
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
                                latex: 'K&=\\frac{1}{2}mv^2',
                                description: `
                            Kinetic energy, where
                            <ul>
                                <li>${k('m')} is the mass of the object, and</li>
                                <li>${k('v')} is the velocity of the object.</li>
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
                                latex: 'E&=K+U',
                                description: `
                            Total mechanical energy, where
                            <ul>
                                <li>${k('K')} is the kinetic energy, and</li>
                                <li>${k('U')} is the potential energy.</li>
                            </ul>
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
                                <li>${k('u')} is the speed of the &#8216;moving&#8217; frame, and</li>
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
                                <li>${k('u')} is the speed of the &#8216;moving&#8217; frame relative to ours, and</li>
                                <li>${k('c')} is the speed of light in a vacuum.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'v_x&=\\frac{v\'_x+u}{1+\\frac{uv\'_x}{c^2}}',
                                description: `
                            The velocity of an object in its own frame of reference, given its apparent velocity to a &#8216;stationary&#8217; frame of reference.
                            <ul>
                                <li>${k('v\'_x')} is the apparent velocity to us,</li>
                                <li>${k('u')} is the speed of the &#8216;moving&#8217; frame, and</li>
                                <li>${k('c')} is the speed of light in a vacuum.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'f&=f_0\\sqrt{\\frac{c+u}{c-u}}',
                                description: `
                            The apparent frequency of a wave, given the &#8216;proper&#8217; frequency.
                            <ul>
                                <li>${k('f_0')} is the &#8216;proper&#8217; frequency (i.e. the frequency as measured by the source),</li>
                                <li>${k('c')} is the speed of light in a vacuum, and</li>
                                <li>${k('u')} is the speed of the source.</li>
                            </ul>
                            This equation is for a source approaching the observer. If the source is leaving the observer, ${k('u')} is negative.
                        `
                            },
                            {
                                latex: 'p&=\\gamma mv',
                                description: `
                            Relativistic momentum, where
                            <ul>
                                <li>${k('\\gamma')} is the Lorentz factor,</li>
                                <li>${k('m')} is the mass of the object, and</li>
                                <li>${k('v')} is the speed of the object.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'F&=\\gamma^3ma',
                                description: `
                            Relativistic force where ${k('\\bm{F}')} and ${k('\\bm{v}')} are parallel.
                            <ul>
                                <li>${k('\\gamma')} is the Lorentz factor,</li>
                                <li>${k('m')} is the mass of the object, and</li>
                                <li>${k('a')} is the magnitude of acceleration of the object.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'F&=\\gamma ma',
                                description: `
                            Relativistic force where ${k('\\bm{F}')} and ${k('\\bm{v}')} are perpendicular.
                            <ul>
                                <li>${k('\\gamma')} is the Lorentz factor,</li>
                                <li>${k('m')} is the mass of the object, and</li>
                                <li>${k('a')} is the magnitude of acceleration of the object.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'K&=mc^2(\\gamma-1)',
                                description: `
                            Relativistic kinetic energy, where
                            <ul>
                                <li>${k('m')} is the mass of the object,</li>
                                <li>${k('c')} is the speed of light in a vacuum, and</li>
                                <li>${k('\\gamma')} is the Lorentz factor.</li>
                            </ul>
                        `
                            },
                            {
                                latex: 'E&=K+mc^2=\\gamma mc^2',
                                description: `
                            Total energy of a particle, where
                            <ul>
                                <li>${k('K')} is the relativistic kinetic energy,</li>
                                <li>${k('m')} is the mass of the particle, and</li>
                                <li>${k('c')} is the speed of light in a vacuum.</li>
                            </ul>
                            Note that it doesn't necessarily have to be a particle; it could be any object. However, it is useless to define energy of macroscopic objects this way, since the rest energy (the ${k('mc^2')} term) is stored in the mass of the object and is almost impossible to release.
                        `
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'g&=9.8067\\ \\text{m}\\,\\text{s}^{-1}',
                                description: 'T acceleration due to gravity on Earth.'
                            },
                            {
                                latex: 'G&=6.6738\\times10^{-11}\\ \\text{m}^3\\,\\text{kg}^{-1}\\,\\text{s}^{-2}',
                                description: `The gravitational constant. Used as the proportionality constant in the equation ${k('F_g=\\frac{Gm_1m_2}{r^2}\\text{.}', true)}`
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
                            },
                            {
                                latex: '1\\ \\text{eV}&=1.60218\\times10^{-19}\\ \\text{J}',
                                description: 'eV - electronvolt<br>J - Joule'
                            }
                        ]
                    },
                }
            }
        },
        curCourse: null,
        curList: null
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
