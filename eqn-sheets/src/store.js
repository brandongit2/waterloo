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
                            'Module 1: Energy, Entropy, and Spontaneous Change',
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
                                latex: '\\Delta U&=q+W',
                                description: `
                                    The first law of thermodynamics.
                                    <ul>
                                        <li>${k('\\Delta U')} is the change in the internal energy of a system,</li>
                                        <li>${k('q')} is the heat exchanged between the system and its surroundings, and</li>
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
                                latex: '\\Delta U&=q_V',
                                description: `
                                    The change in internal energy, ${k('\\Delta U')}, is equal to the amount of heat transferred under constant volume, ${k('q_V')}.
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
                            },
                            {
                                latex: '\\Delta U&=\\Delta H+\\Delta n_\\mathrm{gas}RT',
                                description: `
                                    Describes how the change in the number of gas particles in a reaction affects the total interal energy of a system, ${k('U')}. Similar to ${k('\\Delta U=\\Delta H+P\\Delta V')}, but the ${k('P\\Delta V')} term is replaced with ${k('\\Delta n_\\mathrm{gas}RT')}.
                                    <ul>
                                        <li>${k('\\Delta H')} represents the change in enthalpy of the system,</li>
                                        <li>${k('\\Delta n_\\mathrm{gas}')} is the change in moles of gas during a reaction,</li>
                                        <li>${k('R')} is the ideal gas constant, and</li>
                                        <li>${k('T')} is the temperature of the system.</li>
                                    </ul>
                                    Using the fact that ${k('\\Delta U=q_V')} and ${k('\\Delta H=q_P')}, we can rewrite the equation as
                                    ${k('q_V=q_P+\\Delta n_\\mathrm{gas}RT.', true)}
                                    This shows that when ${k('\\Delta n_\\mathrm{gas}=0')} (i.e. when the reaction does not change the number of particles), ${k('q_V=q_P')}.
                                `
                            },
                            {
                                latex: '\\Delta_rH^\\circ&=\\sum_kv_k\\cdot\\Delta_fH_k^\\circ',
                                description: `
                                    The standard enthalpy of reaction, calculated from the standard enthalpies of formation of the products and reactants.
                                    <ul>
                                        <li>${k('k')} represents each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\Delta_fH_k^\\circ')} is the standard enthalpy of formation on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                `
                            },
                            {
                                latex: '\\Delta_rS^\\circ&=\\sum_kv_k\\cdot\\overline{S}_k^\\circ',
                                description: `
                                    The standard entropy of reaction, calculated from the standard molar entropies of the products and reactants.
                                    <ul>
                                        <li>${k('k')} represents each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\overline{S}_k^\\circ')} is the standard molar entropy on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                    <br>
                                    Although ${k('\\Delta_fS^\\circ')} values could be used, it is simpler to find ${k('\\overline{S}^\\circ')} values because they represent the same things and are absolute instead of relative.
                                `
                            },
                            {
                                latex: '\\Delta_rG^\\circ&=\\sum_kv_k\\cdot\\Delta_fG_k^\\circ',
                                description: `
                                    The standard Gibbs energy of reaction, calculated from the standard Gibbs energies of formation of the products and reactants.
                                    <ul>
                                        <li>${k('k')} represents each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\Delta_fH_k^\\circ')} is the standard Gibbs energy of formation on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                `
                            },
                            {
                                latex: '\\Delta_rG^\\circ&=\\Delta_rH^\\circ-T\\Delta_rS^\\circ',
                                description: `
                                    The standard Gibbs energy of reaction, ${k('\\Delta_rG^\\circ')}, calculated from the standard enthalpy of formation, ${k('\\Delta_rH^\\circ')}, and the standard entropy of formation, ${k('\\Delta_rS^\\circ')}. ${k('T')} is the temperature at which the reaction occurs.
                                `
                            },
                            'Module 2: Chemical Kinetics',
                            {
                                latex: '-\\frac{1}{a}\\frac{\\Delta[\\ce{A}]}{\\Delta t}=-\\frac{1}{b}\\frac{\\Delta[\\ce{A}]}{\\Delta t}&=\\frac{1}{x}\\frac{\\Delta[\\ce{A}]}{\\Delta t}=\\frac{1}{y}\\frac{\\Delta[\\ce{A}]}{\\Delta t}=\\ldots',
                                description: `
                                    The rate of reaction of a generalized reaction
                                    ${k('\\ce{$a$ A + $b$ B + $\\ldots$ -> $x$ X + $y$ Y + $\\ldots$}', true)}
                                    For reactants, the value is negated since their concentrations are depleting. Negating those numbers will make them positive, which is what we want.
                                `
                            },
                            {
                                latex: 'v&=k[\\ce{A}]^m[\\ce{B}]^n\\ldots',
                                description: `
                                    The rate law for a generalized reaction
                                    ${k('\\ce{$a$ A + $b$ B + $\\ldots$ -> $x$ X + $y$ Y + $\\ldots$}', true)}
                                    where ${k('k')}, ${k('m')}, and ${k('n')} are all constants to be found experimentally.
                                `
                            },
                            {
                                latex: '[\\ce{A}]_t&=[\\ce{A}]_0-kt',
                                description: `
                                    The integrated rate law for a zeroth order reaction, where
                                    <ul>
                                        <li>${k('[\\ce{A}]_t')} is the concentration of A at time ${k('t')},</li>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A,</li>
                                        <li>${k('k')} is the rate constant for this reaction, and</li>
                                        <li>${k('t')} is the time elapsed in the reaction.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '[\\ce{A}]_t&=[\\ce{A}]_0\\cdot e^{-kt}',
                                description: `
                                    The integrated rate law for a first order reaction, where
                                    <ul>
                                        <li>${k('[\\ce{A}]_t')} is the concentration of A at time ${k('t')},</li>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A,</li>
                                        <li>${k('k')} is the rate constant for this reaction, and</li>
                                        <li>${k('t')} is the time elapsed in the reaction.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\frac{1}{[\\ce{A}]_t}&=\\frac{1}{[\\ce{A}]_0}+kt',
                                description: `
                                    The integrated rate law for a second order reaction, where
                                    <ul>
                                        <li>${k('[\\ce{A}]_t')} is the concentration of A at time ${k('t')},</li>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A,</li>
                                        <li>${k('k')} is the rate constant for this reaction, and</li>
                                        <li>${k('t')} is the time elapsed in the reaction.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 't_{1/2}&=\\frac{[\\ce{A}]_0}{2k}',
                                description: `
                                    The half life of a zeroth order reaction, where
                                    <ul>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A, and</li>
                                        <li>${k('k')} is the rate constant for the reaction.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 't_{1/2}&=\\frac{\\ln 2}{k}',
                                description: `
                                    The half life of a first order reaction, where ${k('k')} is the rate constant for the reaction.
                                `
                            },
                            {
                                latex: 't_{1/2}&=\\frac{1}{k[\\ce{A}]_0}',
                                description: `
                                    The half life of a second order reaction, where
                                    <ul>
                                    <li>${k('k')} is the rate constant for the reaction, and</li>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\ln k&=\\ln A-\\frac{E_a}{RT}',
                                description: `
                                    The Arrhenius equation, where
                                    <ul>
                                        <li>${k('k')} is the rate constant for a reaction,</li>
                                        <li>${k('A')} is the pre-exponential factor (just some constant),</li>
                                        <li>${k('E_a')} is the activation energy for the reaction,</li>
                                        <li>${k('R')} is the ideal gas constant, and</li>
                                        <li>${k('T')} is the temperature.</li>
                                    </ul>
                                    A graph can be made of ${k('\\ln k')} vs. ${k('\\frac{1}{T}')}, in which case the slope would be ${k('\\frac{E_a}{R}')}. This allows you to find the activation energy from the rate constant and the temperature.
                                    <br>
                                    This equation comes from taking the natural logarithm of the original form of the Arrhenius equation, ${k('k=Ae^{-\\frac{E_a}{RT}}')}.
                                `
                            },
                            'Module 3: Chemical Equilibrium',
                            {
                                latex: 'Q&=\\frac{a_\\ce{C}^ca_\\ce{D}^d\\ldots}{a_\\ce{A}^aa_\\ce{B}^b\\ldots}',
                                description: `
                                    The reaction quotient for a general reaction
                                    ${k('\\ce{$a$ A + $b$ B + $\\ldots$ <=> $c$ C + $d$ D + $\\ldots$}', true)}
                                    where
                                    <ul>
                                        <li>${k('a_\\ce{N}')} is the activity of the species N in the reaction, and</li>
                                        <li>${k('a,b,c,d,\\ldots')} are coefficients in the reaction.</li>
                                    </ul>
                                    This value indicates whether there are more reactants or products in the reaction vessel. If the numerator is greater than the denominator (i.e., there are more products than reactants), then ${k('Q>1')}. If the numerator is less than the denominator (i.e., there are more reactants than products), then ${k('Q<1')}. ${k('Q')} tends to the equilibrium constant ${k('K')} as the reaction progresses.
                                `
                            },
                            {
                                latex: 'a_\\mathrm{g}&\\approx\\frac{P}{P^\\circ}',
                                description: `
                                    The activity of a gas, where
                                    <ul>
                                        <li>${k('P')} is the pressure of the gas, and</li>
                                        <li>${k('P^\\circ')} is the pressure at 1 bar.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'a_\\mathrm{l}=a_\\mathrm{s}&\\approx 1',
                                description: 'The activity of a pure solid or liquid.'
                            },
                            {
                                latex: 'a_\\mathrm{aq}&\\approx\\frac{[\\ce{X}]}{c^\\circ}',
                                description: `
                                    The activity of an aqueous solution, where
                                    <ul>
                                        <li>${k('[\\ce{X}]')} is the concentration of the solute, and</li>
                                        <li>${k('c^\\circ')} is just ${k('\\pu{1 mol L-1}')}.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'Q_C&=\\frac{[\\ce{C}]^c[\\ce{D}]^d\\ldots}{[\\ce{A}]^a[\\ce{B}]^b\\ldots}',
                                description: `
                                    The reaction quotient for a general reaction
                                    ${k('\\ce{$a$ A(aq) + $b$ B(aq) + $\\ldots$ <=> $c$ C(aq) + $d$ D(aq) + $\\ldots$}', true)}
                                    written in terms of concentrations, where
                                    <ul>
                                        <li>${k('[\\ce{X}]')} is the concentration of the species X in the reaction, and</li>
                                        <li>${k('a,b,c,d,\\ldots')} are the coefficients in the reaction.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'Q_P&=\\frac{P_\\ce{C}^cP_\\ce{D}^d\\ldots}{P_\\ce{A}^aP_\\ce{B}^b\\ldots}',
                                description: `
                                    The reaction quotient for a general reaction
                                    ${k('\\ce{$a$ A(g) + $b$ B(g) + $\\ldots$ <=> $c$ C(g) + $d$ D(g) + $\\ldots$}', true)}
                                    written in terms of partial pressures, where
                                    <ul>
                                        <li>${k('P_\\ce{X}')} is the partial pressure of the species X in the reaction, and</li>
                                        <li>${k('a,b,c,d,\\ldots')} are the coefficients in the reaction.</li>
                                    </ul>
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
                                latex: '\\pu{1 bar}&=\\pu{100000 Pa}',
                                description: `bar &#8594; bar<br>Pa &#8594; Pascal<br>1 bar is an approximation of 1 atm, but it is a neat multiple of ${k('10^5')} Pascals.`
                            },
                            {
                                latex: '\\pu{1 atm}&=\\pu{101325 Pa}',
                                description: 'atm &#8594; atmosphere<br>Pa &#8594; Pascal<br>Approximately equal to the mean sea-level pressure on Earth.'
                            },
                            {
                                latex: '\\pu{1 mmHg}&=\\pu{133.322 Pa}',
                                description: `mmHg &#8594; millimeters mercury<br>Pa &#8594; Pascal<br>Formerly defined as the amount of pressure exerted by a column of mercury 1 mm high.`
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
                lists: {
                    'equations': {
                        code: 'E',
                        content: [
                            'Complex Numbers',
                            {
                                latex: 'i&=\\sqrt{-1}',
                                description: `${k('i')} is the imaginary unit.`
                            },
                            {
                                latex: '(a+bi)+(c+di)&=(a+c)+(b+d)i',
                                description: `The addition of two complex numbers, where ${k('a, b, c, d\\in\\Reals')} and ${k('i')} is the imaginary unit. The real and imaginary components add separately.`
                            },
                            {
                                latex: '(a+bi)(c+di)&=(ac-bd)+(ad+bc)i',
                                description: `
                                    The multiplication of two complex numbers, where ${k('a,b,c,d\\in\\Reals')} and ${k('i')} is the imaginary unit. The factors are treated as binomials and FOILed:
                                    ${k('(a+bi)(c+di)=ac+adi+bci+bdi^2', true)}
                                    Then, the real and imaginary terms are grouped together and we use ${k('i^2=-1')} to further simplify:
                                    ${k(`
                                        \\begin{aligned}
                                            ac+adi+bci+bdi^2&=ac+adi+bci-bd \\\\
                                            &=(ac-bd)+(ad+bc)i
                                        \\end{aligned}
                                    `, true)}
                                `
                            },
                            {
                                latex: 'z^{-1}=(a+bi)^{-1}&=\\frac{a-bi}{a^2+b^2}',
                                description: `The multiplicative inverse of a complex number ${k('z\\neq0')}, where ${k('a, b, c, d\\in\\Reals')} and ${k('i')} is the imaginary unit.`
                            },
                            {
                                latex: '\\frac{z}{w}&=z\\cdot w^{-1}',
                                description: `The division of two complex numbers ${k('z')} and ${k('w\\neq0')}.`
                            },
                            {
                                latex: '\\bar{z}=\\overline{a-bi}&=a-bi',
                                description: `The conjugate of any complex number ${k('z')}.`
                            },
                            {
                                latex: '|z|=|a+bi|&=\\sqrt{a^2+b^2}',
                                description: `The modulus of any complex number ${k('z')}. This is equivalent to the distance from ${k('z')} to the origin in the complex plane.`
                            },
                            {
                                latex: 'e^{i\\theta}&=\\cos\\theta+i\\sin\\theta',
                                description: `
                                    Euler's formula. This can be used to calculate complex exponents of base ${k('e')}. To expand it to calculate exponents of base ${k('x\\in\\Reals')}, we can do the following:
                                    ${k(`
                                        \\begin{aligned}
                                            x^z&=x^{a+bi} \\\\
                                            &=x^a\\cdot x^{bi}
                                        \\end{aligned}
                                    `, true)}
                                    Then, by definition, ${k('x^z=e^{z\\ln x}')}, so:
                                    ${k(`x^z=x^a\\cdot e^{i(b\\ln x)}`, true)}
                                    Then, we use Euler's formula.
                                    ${k('x^z=x^a(\\cos(b\\ln x)+i\\sin(b\\ln x))', true)}
                                    On an unrelated note, if we multiply both sides by ${k('r')}, we can get an equation for any complex number in polar form:
                                    ${k(`
                                        \\begin{aligned}
                                            e^{i\\theta}&=\\cos\\theta+i\\sin\\theta \\\\
                                            re^{i\\theta}&=r(\\cos\\theta+i\\sin\\theta)=z
                                        \\end{aligned}
                                    `, true)}
                                `
                            },
                            {
                                latex: 'z_1z_2=r_1e^{i\\theta_1}\\cdot r_2e^{i\\theta_2}&=r_1r_2e^{i\\theta_1+i\\theta_2}',
                                description: `The multiplication of two complex numbers ${k('z_1')} and ${k('z_2')} represented in polar form will result in the multiplication of their moduli (lengths) and the addition of their arguments (angles).`
                            },
                            {
                                latex: '\\sqrt[n]{re^{i\\theta}}&=\\sqrt[n]{r}e^{i\\frac{\\theta+2\\pi k}{n}}',
                                description: `An equation for all the ${k('n')}th roots of a complex number, where ${k('k')} is some integer. There will always be ${k('n')} unique roots.`
                            },
                            {
                                latex: '-e^{i\\theta}&=e^{i(\\theta+\\pi)}',
                                description: 'It\'s easy to derive this geometrically from Euler\'s formula.'
                            },
                            {
                                latex: '\\overline{e^{i\\theta}}&=e^{-i\\theta}',
                                description: 'It\'s easy to derive this geometrically from Euler\'s formula.'
                            },
                            `Vectors in ${k('\\bm{\\Reals^n}')}`,
                            {
                                latex: '\\lVert\\vec{v}\\rVert=\\left\\lVert\\begin{bmatrix}a\\\\b\\end{bmatrix}\\right\\rVert&=\\sqrt{a^2+b^2}',
                                description: 'The norm of a vector is just its length.'
                            },
                            {
                                latex: '\\vec{u}\\cdot\\vec{v}&=\\lVert\\vec{u}\\rVert\\lVert\\vec{v}\\rVert\\cos\\theta',
                                description: `An interpretation of the dot product, where ${k('\\theta')} is the angle between ${k('\\vec{u}')} and ${k('\\vec{v}')}.`
                            },
                            {
                                latex: '\\operatorname{proj}_{\\vec{v}}\\vec{u}&=\\frac{\\vec{u}\\cdot\\vec{v}}{\\vec{v}\\cdot\\vec{v}}\\vec{v}',
                                description: `The projection of ${k('\\vec{u}')} onto ${k('\\vec{v}')}.`
                            },
                            {
                                latex: `
                                    &\\begin{cases}\\begin{aligned}
                                        \\vec{v}_1&=\\vec{s}_1 \\\\
                                        \\vec{v}_2&=\\vec{s}_2-\\operatorname{proj}_{\\vec{v}_1}\\vec{s}_2 \\\\
                                        \\vec{v}_3&=\\vec{s}_3-\\operatorname{proj}_{\\vec{v}_1}\\vec{s}_3-\\operatorname{proj}_{\\vec{v}_2}\\vec{s}_3 \\\\
                                        &\\vdots
                                    \\end{aligned}\\end{cases}
                                `,
                                description: `The Gram-Schmidt process, which generates a set of orthogonal vectors ${k('v_n')} from a set of linearly independent vectors ${k('s_n')}.`
                            },
                            'Systems of Linear Equations'
                        ]
                    }
                }
            },
            'math-128': {
                name: 'MATH 128',
                lists: {
                    'formulas': {
                        code: 'F',
                        content: [
                            'Chapter 7: Techniques of Integration',
                            {
                                latex: '\\int u\\,dv&=uv-\\int v\\,du',
                                description: 'Integration by parts, which is the opposite of the product rule in differential calculus.'
                            },
                            {
                                latex: '\\int f\'(g(x))g\'(x)\\,dx&=\\int f\'(u)\\,du=f(u)+C=f(g(x))+C',
                                description: 'u-substitution, which is the opposite of the chain rule in differential calculus.'
                            },
                            {
                                latex: '\\sqrt{a^2-b^2x^2}&\\rightarrow x=\\frac{a}{b}\\sin\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            },
                            {
                                latex: '\\sqrt{a^2+b^2x^2}&\\rightarrow x=\\frac{a}{b}\\tan\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            },
                            {
                                latex: '\\sqrt{b^2x^2-a^2}&\\rightarrow x=\\frac{a}{b}\\sec\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            },
                            {
                                latex: '(ax+b)&\\rightarrow\\frac{A}{ax+b}',
                                description: `When doing partial fraction decomposition, the factor ${k('(ax+b)')} corresponds to the term ${k('\\frac{A}{ax+b}')} in the decomposed fraction.`
                            },
                            {
                                latex: '(ax^2+bx+c)&\\rightarrow\\frac{Ax+B}{ax^2+bx+c}',
                                description: `When doing partial fraction decomposition, the factor ${k('(ax^2+bx+c)')} corresponds to the term ${k('\\frac{Ax+B}{ax^2+bx+c}')} in the decomposed fraction.`
                            },
                            {
                                latex: '(ax+b)^n&\\rightarrow\\sum_{i=1}^n\\frac{A_i}{(ax+b)^i}',
                                description: `
                                    When doing partial fraction decomposition, the repeating factor ${k('(ax+b)^n')} corresponds to the terms ${k('\\sum_{i=1}^n\\frac{A_i}{(ax+b)^i}')} in the decomposed fraction.
                                    <br>
                                    For example, ${k('(ax+b)^3\\rightarrow\\frac{A_1}{(ax+b)}+\\frac{A_2}{(ax+b)^2}+\\frac{A_3}{(ax+b)^3}.', true)}
                                `
                            },
                            {
                                latex: '\\int_n^rf(x)\\,dx&=\\lim_{t\\to r}\\int_n^tf(x)\\,dx',
                                description: `
                                    When ${k('f(x)')} is undefined at ${k('x=r')} and ${k('f(n)')} is defined, the integral ${k('\\int_n^rf(x)\\,dx')} is improper. To solve it, one must take the limit as some variable ${k('t')} approaches ${k('r')}.
                                    <br>
                                    For example, ${k('\\int_0^\\infty f(x)\\,dx=\\lim_{t\\to\\infty}\\int_0^tf(x)\\,dx.', true)}
                                `
                            },
                            'Chapter 8: Applications of Integration',
                            {
                                latex: 'P(t)&=ce^{-ct}',
                                description: `A probability density function that models wait times. This is a decreasing exponential function which always has the property that ${k('\\int_0^\\infty P(t)\\,dt=1')}.`
                            },
                            {
                                latex: 'a&=\\left(\\frac{1}{x_1-x_0}\\right)\\int_{x_0}^{x_1}f(x)\\,dx',
                                description: `The average value of a function on the interval ${k('[x_0,x_1]')}.`
                            },
                            {
                                latex: '&\\int_0^\\infty tP(t)\\,dt',
                                description: `The expected value of a probability density function ${k('P(t)')}.`
                            },
                            {
                                latex: 'L&=\\int_a^b\\sqrt{1+(f\'(x))^2}\\,dx',
                                description: `The arc length of a function ${k('f(x)')} over the interval ${k('[a,b]')}.`
                            },
                            'Chapter 9: Sequences and Series',
                            {
                                latex: 'f(x)&\\approx\\sum_{k=0}^n\\frac{f^{(k)}(a)\\cdot(x-a)^k}{k!}',
                                description: `The Taylor polynomial approximation of ${k('f(x)')} centered on ${k('x=a')}. ${k('f^{(n)}(x)')} means the ${k('n')}th derivative of ${k('f')}.`
                            },
                            {
                                latex: '\\sum_{i=1}^ni&=\\frac{n(n+1)}{2}'
                            },
                            {
                                latex: '\\sum_{i=0}^nar^i&=a\\cdot\\frac{1-r^{n+1}}{1-r}',
                                description: `
                                    The sum of a geometric series, where
                                    <ul>
                                        <li>${k('a')} is the initial value of the sequence (i.e. ${k('ar^i')} when ${k('i=0')}), and</li>
                                        <li>${k('r')} is the common ratio between consecutive terms in the sequence.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\sum_{n=1}^\\infty a_n&=\\lim_{k\\to\\infty}S_k',
                                description: `The sum of an infinite series ${k('a_k')} is equal to the limit as ${k('k')} approaches infinity of the partial sum sequence, ${k('S_k')}. ${k('S_k')} is a sequence defined so the terms evaluate to ${k('\\{a_1,a_1+a_2,\\ldots\\}')}.`
                            },
                            {
                                latex: '&\\sum_{n=1}^\\infty\\frac{1}{n}',
                                description: 'The harmonic series.'
                            },
                            {
                                latex: '|S_n-S|&\\leq b_{n+1}',
                                description: `The alternating series estimation theorem. This states that ${k('|S_n-S|')}, the difference between the ${k('n')}th partial sum and the total sum, is always less than or equal to the ${k('n+1')}th term of the alternating series ${k('b')}.`
                            },
                            {
                                latex: '&\\sum_{n=0}^\\infty c_n(x-a)^n',
                                description: 'The power series.'
                            },
                            {
                                latex: '\\frac{d}{dx}\\sum_{n=0}^\\infty c_n(x-a)^n&=\\sum_{n=0}^\\infty nc_n(x-a)^{n-1}',
                                description: 'The derivative of the power series. Differentiation is simple since the power series can be thought of as an infinite polynomial, and polynomials are easy to differentiate.'
                            },
                            {
                                latex: '\\int\\sum_{n=0}^\\infty c_n(x-a)^n&=C+\\sum_{n=0}^\\infty \\frac{c_n(x-a)^{n+1}}{n+1}',
                                description: 'The integral of the power series. Integration is simple since the power series can be thought of as an infinite polynomial, and polynomials are easy to integrate.'
                            }
                        ]
                    },
                    'table of integrals': {
                        code: 'I',
                        content: [
                            { latex: '\\int\\frac{1}{x}\\,dx&=\\ln|x|+C' },
                            { latex: '\\int e^x\\,dx&=e^x+C' },
                            { latex: '\\int\\sin(x)\\,dx&=-\\cos x+C' },
                            { latex: '\\int\\cos(x)\\,dx&=\\sin x+C' },
                            { latex: '\\int\\tan(x)\\,dx&=\\ln|\\sec x|+C' },
                            { latex: '\\int\\sec(x)\\,dx&=\\ln|\\tan x+\\sec x|+C' },
                            { latex: '\\int\\sec^2(x)\\,dx&=\\tan x+C' },
                            { latex: '\\int\\sec^3(x)\\,dx&=\\frac{\\sec x\\tan x}{2}+\\frac{\\ln|\\sec x+\\tan x|}{2}+C' },
                            { latex: '\\int\\frac{1}{\\sqrt{1-x^2}}\\,dx&=\\arcsin x+C' },
                            { latex: '\\int-\\frac{1}{\\sqrt{1-x^2}}\\,dx&=\\arccos x+C' },
                            { latex: '\\int\\frac{1}{1+x^2}\\,dx&=\\arctan x+C' },
                        ]
                    },
                    'trigonometric identities': {
                        code: 'T',
                        content: [
                            {
                                latex: '\\sin^2x+\\cos^2x&=1',
                                description: 'Also known as the Pythagorean identity.'
                            },
                            {
                                latex: '\\tan^2x+1&=\\sec^2x',
                                description: `This comes from the division of both sides of the Pythagorean identity by ${k('\\cos^2x')}.`
                            },
                            {
                                latex: '\\sin^2x&=\\frac{1-\\cos 2x}{2}',
                                description: `Half-angle identity for ${k('\\sin^2x')}.`
                            },
                            {
                                latex: '\\cos^2x&=\\frac{1+\\cos 2x}{2}',
                                description: `Half-angle identity for ${k('\\cos^2x')}.`
                            },
                            {
                                latex: '\\sin2x&=2\\sin(x)\\cos(x)',
                                description: `Double-angle identity for ${k('\\sin2x')}.`
                            },
                            {
                                latex: '\\cos2x&=\\cos^2x-\\sin^2x',
                                description: `Double-angle identity for ${k('\\cos2x')}.`
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
                            'Chapter 14: Periodic Motion',
                            {
                                latex: 'F&=-kx',
                                description: `
                                    Hooke's Law, where:
                                    <ul>
                                        <li>${k('F')} is the force of the spring on an object,</li>
                                        <li>${k('k')} is the spring constant of the spring, and</li>
                                        <li>${k('x')} is the displacement of the object from equilibrium.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'T&=\\frac{1}{f}',
                                description: `
                                    Period of oscillatory motion, ${k('T')}, is the inverse of the frequency, ${k('f')}.
                                `
                            },
                            {
                                latex: '\\omega&=\\sqrt{\\frac{k}{m}}',
                                description: `
                                    Angular frequency, where
                                    <ul>
                                        <li>${k('k')} represents the spring constant, and</li>
                                        <li>${k('m')} is the mass of the oscillating object.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'a_x&=-\\omega^2x',
                                description: `
                                    Acceleration of an object in SHM, where
                                    <ul>
                                        <li>${k('\\omega')} is the angular frequency, and</li>
                                        <li>${k('x')} is the position of the object from its equilibrium position.</li>
                                    </ul>
                                    Remember that ${k('x')} is a function of time, and so ${k('a_x=\\frac{d^2x}{dt^2}')}.
                                `
                            },
                            {
                                latex: 'f&=\\frac{\\omega}{2\\pi}',
                                description: `
                                    Frequency of an oscillating object, where ${k('\\omega')} represents the the angular frequency.
                                `
                            },
                            {
                                latex: 'x&=A\\cos(\\omega t+\\phi)',
                                description: `
                                    The position of an object in SHM, where
                                    <ul>
                                        <li>${k('A')} is the amplitude,</li>
                                        <li>${k('\\omega')} is the angular frequency,</li>
                                        <li>${k('t')} is the time elapsed, and </li>
                                        <li>${k('\\phi')} is the phase angle. This is just a constant which defines the initial conditions of the SHM.</li>
                                    </ul>
                                    Taking derivatives of this, we get
                                    ${k('v_x=-\\omega A\\sin(\\omega t+\\phi)', true)}
                                    and
                                    ${k('a_x=-\\omega^2A\\cos(\\omega t+\\phi)=-\\omega^2x', true)}
                                `
                            },
                            {
                                latex: 'E&=\\frac{1}{2}mv^2+\\frac{1}{2}kx^2=\\frac{1}{2}kA^2',
                                description: `
                                    Total mechanical energy of an oscillating object on a spring, where
                                    <ul>
                                        <li>${k('m')} is the mass of the object,</li>
                                        <li>${k('v')} is the velocity of the object,</li>
                                        <li>${k('k')} is the spring constant of the spring</li>
                                        <li>${k('x')} is the position of the object relative to its equilibrium point, and</li>
                                        <li>${k('A')} is the amplitude of the SHM.</li>
                                    </ul>
                                    This comes from the fact that total mechanical energy is equal to the sum of the kinetic energy and the elastic potential energy:
                                    ${k('E=K+U', true)}
                                    and ${k('K=\\frac{1}{2}mv^2')} and ${k('U=\\frac{1}{2}kx^2')}.
                                    <br>
                                    When the object is furthest from equilibrium, ${k('x=A')} and ${k('v=0')}. Therefore, when ${k('x=A')}, ${k('E=0+\\frac{1}{2}kA^2')}. Since mechanical energy is constant, ${k('E')} is always equal to ${k('\\frac{1}{2}kA^2')}.
                                `
                            },
                            {
                                latex: '\\theta&=\\Theta\\cos(\\omega t+\\phi)',
                                description: `
                                    SHM for a simple pendulum. This is only accurate for small angles.
                                    <ul>
                                        <li>${k('\\theta')} is the angular displacement of the object,</li>
                                        <li>${k('\\Theta')} is the maximum angular displacement of the object (analagous to amplitude),</li>
                                        <li>${k('t')} is the time, and</li>
                                        <li>${k('\\phi')} is the phase angle, which just defines the initial conditions for the SHM.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\alpha_\\theta&=-\\omega^2\\theta',
                                description: `
                                    Angular acceleration of an object on a simple pendulum, where
                                    <ul>
                                        <li>${k('\\omega')} is the angular frequency, and</li>
                                        <li>${k('\\theta')} is the angle of the object relative to its equilibrium position,</li>
                                    </ul>
                                    Remember that ${k('\\theta')} is a function of time, and so ${k('\\alpha_\\theta=\\frac{d^2\\theta}{dt^2}')}. Also, this equation is only accurate for small angles.
                                `
                            },
                            {
                                latex: '\\omega&=\\sqrt{\\frac{g}{L}}',
                                description: `
                                    Angular frequency of a simple pendulum, where
                                    <ul>
                                        <li>${k('g')} is the acceleration due to gravity, and</li>
                                        <li>${k('L')} is the length of the pendulum.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\omega&=\\sqrt{\\frac{mgd}{I}}',
                                description: `
                                    Angular frequency for a physical pendulum, where
                                    <ul>
                                        <li>${k('m')} is the mass of the object,</li>
                                        <li>${k('g')} is the acceleration due to gravity,</li>
                                        <li>${k('d')} is the distance from the pivot point to the center of mass, and</li>
                                        <li>${k('I')} is the moment of inertia of the object.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\omega&=\\sqrt{\\frac{\\kappa}{I}}',
                                description: `
                                    Angular frequency for a torsion pendulum, where
                                    <ul>
                                        <li>${k('\\kappa')} is the torsion constant of the pendulum, and</li>
                                        <li>${k('I')} is the moment of inertia of the object.</li>
                                    </ul>
                                    This is similar to ${k('\\omega=\\sqrt{\\frac{k}{m}}')} for SHM on a spring, but using the rotational equivalents of ${k('k')} and ${k('m')}.
                                `
                            },
                            {
                                latex: '-kx-bv_x&=ma_x',
                                description: `
                                    Newton's second law for damped SHM, where
                                    <ul>
                                        <li>${k('k')} is the spring constant of the spring,</li>
                                        <li>${k('x')} is the position of the object relative to its equilibrium position (a function of time),</li>
                                        <li>${k('b')} is a constant which defines the amount of damping,</li>
                                        <li>${k('v_x')} is the velocity of the object, equal to ${k('\\frac{dx}{dt}')},</li>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('a_x')} is the accerlation of the object, equal to ${k('\\frac{d^2x}{dt^2}')}.</li>
                                    </ul>
                                    This equation is in the form of ${k('F=ma')}, where ${k('F=-kx-bv_x')}. This is the sum of the restoring force of the spring, ${k('-kx')}, and the damping force, ${k('-bv_x')}.
                                `
                            },
                            {
                                latex: '\\omega\'&=\\sqrt{\\frac{k}{m}-\\frac{b^2}{4m^2}}',
                                description: `
                                    Angular frequency for damped oscillations, where
                                    <ul>
                                        <li>${k('k')} is the spring constant of the spring,</li>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('b')} is a constant which defines the amount of damping.</li>
                                    </ul>
                                    This is only defined over the reals for ${k('b\\geq2\\sqrt{km}')}.
                                `
                            },
                            {
                                latex: 'x&=Ae^{-\\frac{b}{2m}t}\\cos(\\omega\'t+\\phi)',
                                description: `
                                    The position of an object in damped SHM, where
                                    <ul>
                                        <li>${k('A')} is the initial amplitude of the SHM,</li>
                                        <li>${k('b')} is a constant which defines the amount of damping,</li>
                                        <li>${k('m')} is the mass of the object,</li>
                                        <li>${k('t')} is the time,</li>
                                        <li>${k('\\omega\'')} is the angular frequency of damped SHM, and</li>
                                        <li>${k('\\phi')} is the phase angle.</li>
                                    </ul>
                                    This equation only works for ${k('b\\geq2\\sqrt{km}')}.
                                `
                            },
                            {
                                latex: 'A&=\\frac{F_\\mathrm{max}}{\\sqrt{(k-m\\omega_d^2)^2+b^2\\omega_d^2}}',
                                description: `
                                    The amplitude of a forced SHM, as a function of driving angular frequency ${k('\\omega_d')}.
                                    <ul>
                                        <li>${k('F_\\mathrm{max}')} is the maximum magnitude of the driving force,</li>
                                        <li>${k('k')} is the spring constant of the spring,</li>
                                        <li>${k('m')} is the mass of the object,</li>
                                        <li>${k('\\omega_d')} is the driving angular frequency, and</li>
                                        <li>${k('b')} is a constant which defines the amount of damping.</li>
                                    </ul>
                                    This is given in lecture as
                                    ${k('A(\\omega)=\\frac{F_0}{m\\sqrt{(\\omega^2-\\omega_0^2)^2+\\left(\\frac{b\\omega}{m}\\right)^2}}', true)}
                                    which is equivalent when ${k('\\omega_0=\\sqrt{\\frac{k}{m}}')}. In the alternative equation, ${k('F_0=F_\\mathrm{max}')} and ${k('\\omega=\\omega_d')}.
                                    <br>
                                    The value of ${k('\\omega_d')} which maximizes ${k('A')} is called the resonance frequency.
                                `
                            },
                            'Chapter 15: Mechanical Waves',
                            {
                                latex: 'v&=\\lambda f',
                                description: `
                                    The speed of a periodic wave, where
                                    <ul>
                                        <li>${k('\\lambda')} is the wavelength, and</li>
                                        <li>${k('f')} is the frequency.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'k&=\\frac{2\\pi}{\\lambda}',
                                description: `
                                    The wave number of a wave, where ${k('\\lambda')} is the wavelength.
                                `
                            },
                            {
                                latex: 'y(x,t)&=A\\cos\\left(2\\pi\\left(\\frac{x}{\\lambda}-\\frac{t}{T}\\right)\\right)',
                                description: `
                                    The wave function of a periodic wave, where
                                    <ul>
                                        <li>${k('y')} is the displacement of any given point on the wave,</li>
                                        <li>${k('x')} is the longitudinal position of that point on the wave,</li>
                                        <li>${k('t')} is the time,</li>
                                        <li>${k('A')} is the amplitude of the wave,</li>
                                        <li>${k('\\lambda')} is the wavelength, and</li>
                                        <li>${k('T')} is the period of the wave.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'y(x,t)&=A\\cos\\left(kx-\\omega t\\right)',
                                description: `
                                    The wave function of a periodic wave, where
                                    <ul>
                                        <li>${k('y')} is the displacement of any given point on the wave,</li>
                                        <li>${k('x')} is the longitudinal position of that point on the wave,</li>
                                        <li>${k('t')} is the time,</li>
                                        <li>${k('A')} is the amplitude of the wave,</li>
                                        <li>${k('k')} is the wave number of the wave, and</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'v&=\\sqrt{\\frac{F}{\\mu}}',
                                description: `
                                    The speed of a transverse wave on a string, where
                                    <ul>
                                        <li>${k('F')} is the tension on the string, and</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'K_\\lambda&=\\frac{1}{4}\\lambda\\mu A^2\\omega^2',
                                description: `
                                    Kinetic energy in one wavelength of a string with transverse waves going through it.
                                    <ul>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string,</li>
                                        <li>${k('A')} is the amplitude of the wave, and</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'U_\\lambda&=\\frac{1}{4}\\lambda\\mu A^2\\omega^2',
                                description: `
                                    Potential energy in one wavelength of a string with transverse waves going through it.
                                    <ul>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string,</li>
                                        <li>${k('A')} is the amplitude of the wave, and</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave.</li>
                                    </ul>
                                    This is exactly the same as the kinetic energy in the same portion of string.
                                `
                            },
                            {
                                latex: 'E_\\lambda&=\\frac{1}{2}\\lambda\\mu A^2\\omega^2',
                                description: `
                                    Mechanical energy in one wavelength of a string with transverse waves going through it.
                                    <ul>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string,</li>
                                        <li>${k('A')} is the amplitude of the wave, and</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave.</li>
                                    </ul>
                                    This is equal to ${k('K_\\lambda+U_\\lambda')}.
                                `
                            },
                            {
                                latex: 'P_\\lambda&=\\frac{1}{2}v\\mu A^2\\omega^2',
                                description: `
                                    Power in one wavelength of a string with transverse waves going through it.
                                    <ul>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('v')} is the wave speed,</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string,</li>
                                        <li>${k('A')} is the amplitude of the wave, and</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave.</li>
                                    </ul>
                                `
                            },
                            'Chapter 16: Sound and Hearing',
                            {
                                latex: 'v&=\\sqrt{\\frac{B}{\\rho}}',
                                description: `
                                    The speed of a sound wave through a fluid, where
                                    <ul>
                                        <li>${k('B')} is the bulk modulus of the fluid (${k('\\frac{p(x,t)}{\\frac{dV}{V}}')}, or ${k('\\frac{\\text{stess}}{\\text{strain}}')}), and</li>
                                        <li>${k('\\rho')} is the density of the fluid.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'v&=\\sqrt{\\frac{Y}{\\rho}}',
                                description: `
                                    The speed of a sound wave through a solid, where
                                    <ul>
                                        <li>${k('Y')} is the Young's modulus of the solid, which is similar to the bulk modulus, and</li>
                                        <li>${k('\\rho')} is the density of the solid.</li>
                                    </ul>
                                `
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'g&=\\pu{9.8067 m s-1}',
                                description: 'The acceleration due to gravity on Earth.'
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
                            'Chapter 13: Gravitation',
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
                            'Chapter 37a: Special Relativity',
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
                                latex: `
                                    &\\begin{cases}\\begin{aligned}
                                        x'&=\\gamma(x-ut) \\\\
                                        y'&=y \\\\
                                        z'&=z \\\\
                                        t'&=\\gamma\\left(t-\\frac{ux}{c^2}\\right)
                                    \\end{aligned}\\end{cases}
                                `,
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
                            },
                            'Chapter 38: Photons: Light Waves Behaving as Particles',
                            {
                                latex: 'E&=hf=\\frac{hc}{\\lambda}',
                                description: `
                                    The energy of a photon, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('f')} is the frequency of the light, equal to ${k('\\frac{c}{\\lambda}')},</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('\\lambda')} is the wavelength of the light.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'K_\\mathrm{max}&=eV_0',
                                description: `
                                    The maximum kinetic energy of a photoelectron, where
                                    <ul>
                                        <li>${k('e')} is the charge on an electron, and</li>
                                        <li>${k('V_0')} is the stopping potential, or the potential required to stop the emitted electron with highest energy.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'K_\\mathrm{max}&=hf-\\phi',
                                description: `
                                    The maximum kinetic energy of a photoelectron, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('f')} is the frequency of the wave, equal to ${k('\\frac{c}{\\lambda}')}, and</li>
                                        <li>${k('\\phi')} is the work function, or the energy required to eject the electron.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'p&=\\frac{E}{c}=\\frac{h}{\\lambda}',
                                description: `
                                    The momentum of a photon, where
                                    <ul>
                                        <li>${k('E')} is the energy of the photon,</li>
                                        <li>${k('c')} is the speed of light in a vacuum,</li>
                                        <li>${k('h')} is Planck's constant, and</li>
                                        <li>${k('\\lambda')} is the wavelength of the wave.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'K_\\mathrm{max}&=eV_\\mathrm{AC}',
                                description: `
                                    The maximum kinetic energy of a bremsstrahlung photon, where
                                    <ul>
                                        <li>${k('e')} is the charge of an electron, and</li>
                                        <li>${k('V_\\mathrm{AC}')} is the accelerating voltage for the electron.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: 'K_\\mathrm{max}&=hf_\\mathrm{max}=\\frac{hc}{\\lambda_\\mathrm{min}}',
                                description: `
                                    The maximum kinetic energy of a bremsstrahlung photon, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('f_\\mathrm{max}')} is the maximum frequency for an emitted photon,</li>
                                        <li>${k('c')} is the speed of light in a vacuum,</li>
                                        <li>${k('\\lambda_\\mathrm{min}')} is the minimum wavelength for an emitted photon (inverse of maximum frequency).</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\lambda\'-\\lambda&=\\frac{h}{m_ec}(1-\\cos\\phi)',
                                description: `
                                    The difference in wavelength between incident and scattered radiation due to the Compton effect.
                                    <ul>
                                        <li>${k('\\lambda\'')} is the wavelength of the scattered light,</li>
                                        <li>${k('\\lambda')} is the wavelength of the incident light,</li>
                                        <li>${k('h')} is Plack's constant,</li>
                                        <li>${k('m_e')} is the mass of the electron,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('\\phi')} is the angle at which the photon scatters.</li>
                                    </ul>
                                    The scattered wavelength will always be longer than the incident wavelength.
                                `
                            },
                            {
                                latex: '\\Delta x\\Delta p_x&\\geq\\frac{\\hbar}{2}',
                                description: `
                                    Heisenberg's uncertainty principle, where
                                    <ul>
                                        <li>${k('\\Delta x')} is the uncertainty in position of a particle,</li>
                                        <li>${k('\\Delta p_x')} is the uncertainty in momentum of a particle, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, equal to ${k('\\frac{h}{2\\pi}')}.</li>
                                    </ul>
                                `
                            },
                            'Chapter 39: Particles Behaving as Waves',
                            {
                                latex: '\\lambda&=\\frac{h}{mv}',
                                description: `
                                    De Broglie wavelength of a particle, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('m')} is the mass of the particle, and</li>
                                        <li>${k('v')} is the velocity of the particle.</li>
                                    </ul>
                                `
                            },
                            {
                                latex: '\\lambda&=\\frac{h}{\\sqrt{2m_eeV_\\mathrm{AC}}}',
                                description: `
                                    De Broglie wavelength of an electron, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('m_e')} is the mass of an electron,</li>
                                        <li>${k('e')} is the charge on an electron, and</li>
                                        <li>${k('V_\\mathrm{AC}')} is the voltage required to accelerate the electron to its current speed.</li>
                                    </ul>
                                `
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'g&=\\pu{9.8067 m s-1}',
                                description: 'T acceleration due to gravity on Earth.'
                            },
                            {
                                latex: 'G&=\\pu{6.6738e-11 m3 kg-1 s-2}',
                                description: `The gravitational constant. Used as the proportionality constant in the equation ${k('F_g=\\frac{Gm_1m_2}{r^2}\\text{.}', true)}`
                            },
                            {
                                latex: 'R_\\oplus&=\\pu{6.3781e6 m}',
                                description: 'The radius of the Earth.'
                            },
                            {
                                latex: 'M_\\oplus&=\\pu{5.9722e24 kg}',
                                description: 'The mass of the Earth.'
                            },
                            {
                                latex: 'R_\\odot&=\\pu{6.96340e8 m}',
                                description: 'The radius of the Sun.'
                            },
                            {
                                latex: 'M_\\odot&=\\pu{1.9885e30 kg}',
                                description: 'The mass of the Sun.'
                            },
                            {
                                latex: 'c&=\\pu{2.99792e8 m s-1}',
                                description: 'The speed of light in a vacuum.'
                            },
                            {
                                latex: 'h&=\\pu{6.62607e-34 J s}',
                                description: 'Planck\'s constant.'
                            },
                            {
                                latex: 'h&=\\pu{4.13566e-15 eV s}',
                                description: 'Planck\'s constant in electronvolt seconds.'
                            },
                            {
                                latex: 'e&=\\pu{1.60218e-19 C}',
                                description: 'The charge on an electron.'
                            },
                            {
                                latex: 'm_e&=\\pu{9.10938e-31 kg}',
                                description: 'The mass of a stationary electron.'
                            }
                        ]
                    },
                    'conversions': {
                        code: 'CV',
                        content: [
                            {
                                latex: '\\pu{1 eV}&=\\pu{1.60218e-19 J}',
                                description: 'eV - electronvolt<br>J - Joule'
                            }
                        ]
                    }
                }
            }
        },
        curCourse: null,
        curList: null
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
