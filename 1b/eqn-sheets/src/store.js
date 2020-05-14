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
                                        <li>${k('q')} is the amount of heat put into (or released from) an object, and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'c&=\\frac{q}{m\\Delta T}',
                                description: `
                                    Specific heat capacity, where
                                    <ul>
                                        <li>${k('q')} is the amount of heat put into (or released from) an object,</li>
                                        <li>${k('m')} is the amount of the substance (in grams), and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                    This equation is typically shown in the form ${k('q=mc\\Delta T')}.
                                `
                            }, {
                                latex: '\\overline{C}&=\\frac{q}{n\\Delta T}',
                                description: `
                                    Molar heat capacity, where
                                    <ul>
                                        <li>${k('q')} is the amount of heat put into (or released from) an object,</li>
                                        <li>${k('n')} is the amount of the substance (in moles), and</li>
                                        <li>${k('\\Delta T')} is the change in temperature of the object.</li>
                                    </ul>
                                    This equation is typically shown in the form ${k('q=mc\\Delta T')}.
                                `
                            }, {
                                latex: 'W&=-P_\\mathrm{ext}\\Delta V',
                                description: `
                                    In a closed system, ${k('W')} represents the work done by external pressure to change the volume of the system.
                                    <ul>
                                        <li>${k('P_\\mathrm{ext}')} is the external pressure and</li>
                                        <li>${k('\\Delta V')} is the change in volume.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta U&=q+W',
                                description: `
                                    The first law of thermodynamics.
                                    <ul>
                                        <li>${k('\\Delta U')} is the change in the internal energy of a system,</li>
                                        <li>${k('q')} is the heat exchanged between the system and its surroundings, and</li>
                                        <li>${k('W')} is the work done between the system and its surroundings. When ${k('W<0')}, work is done on the surroundings by the system (i.e. the volume of the system is increasing). When ${k('W>0')}, work is done on the system by its surroundings (i.e. the volume of the system is decreasing).</li>
                                    </ul>
                                `
                            }, {
                                latex: 'H&=U+PV',
                                description: `
                                    Enthalpy of a system, where
                                    <ul>
                                        <li>${k('U')} is the total internal energy of the system,</li>
                                        <li>${k('P')} is the external pressure on the system, and</li>
                                        <li>${k('V')} is the volume of the system.</li>
                                    </ul>
                                    There is no physical interpretation of this equation, and ${k('U')} (and therefore ${k('H')}) is not determinable. Instead, this equation is more useful in the form ${k('\\Delta H=\\Delta U+P\\Delta V')}, where ${k('\\Delta H')} is now the change in enthalpy, and ${k('P')} is constant.
                                `
                            }, {
                                latex: '\\Delta H&=q_P',
                                description: `
                                    The change in enthalpy, ${k('\\Delta H')}, is equal to the amount of heat transferred under constant pressure, ${k('q_P')}. Note that enthalpy is a property of the system (a system doesn't &#8216;have&#8217; heat), and heat is the energy released or absorbed by the system.
                                `
                            }, {
                                latex: '\\Delta U&=q_V',
                                description: `
                                    The change in internal energy, ${k('\\Delta U')}, is equal to the amount of heat transferred under constant volume, ${k('q_V')}.
                                `
                            }, {
                                latex: '\\Delta S&=-\\frac{q}{T}',
                                description: `
                                    Change in entropy for the surroundings of a system.
                                    <ul>
                                        <li>${k('q')} is the heat transferred between the system and its surroundings, and</li>
                                        <li>${k('T')} is the temperature of the surroundings.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta S&=\\frac{\\Delta H}{T}',
                                description: `
                                    Change in entropy for a system undergoing a phase change.
                                    <ul>
                                        <li>${k('\\Delta H')} is the change in enthalpy of the system, and</li>
                                        <li>${k('T')} is the temperature where the phase change occurs at 1 atm.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'C_P&=C_V+nR',
                                description: `
                                    The relationship between ${k('C_P')}, the heat capacity under constant pressure, and ${k('C_V')}, the heat capacity under constant volume, for an ideal gas.
                                    <ul>
                                        <li>${k('n')} is the number of moles of substance in the system, and</li>
                                        <li>${k('R')} is the ideal gas constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta S&=C_V\\ln\\left(\\frac{T_f}{T_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under constant volume.
                                    <ul>
                                        <li>${k('C_V')} is the heat capacity of the system under constant volume, and</li>
                                        <li>${k('T_i')} and ${k('T_f')} are the initial and final tempreratures of the system.</li>
                                    </ul>
                                    This equation really only works for ideal gases since liquids and solids don't undergo volume changes.
                                `
                            }, {
                                latex: '\\Delta S&=C_P\\ln\\left(\\frac{T_f}{T_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under constant pressure.
                                    <ul>
                                        <li>${k('C_P')} is the heat capacity of the system under constant pressure, and</li>
                                        <li>${k('T_i')} and ${k('T_f')} are the initial and final tempreratures of the system.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta S&=C_V\\ln\\left(\\frac{T_f}{T_i}\\right)+nR\\ln\\left(\\frac{V_f}{V_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under changing volume.
                                    <ul>
                                        <li>${k('C_V')} is the heat capacity of the system under constant volume,</li>
                                        <li>${k('T_f')} and ${k('T_i')} are the final and initial tempreratures of the system,</li>
                                        <li>${k('n')} is the number of moles of substance in the system,</li>
                                        <li>${k('R')} is the ideal gas constant, and </li>
                                        <li>${k('V_f')} and ${k('V_i')} are the final and initial volumes of the system.</li>
                                    </ul>
                                    This equation really only works for ideal gases since liquids and solids don't undergo volume changes.
                                `
                            }, {
                                latex: '\\Delta S&=C_P\\ln\\left(\\frac{T_f}{T_i}\\right)+nR\\ln\\left(\\frac{P_f}{P_i}\\right)',
                                description: `
                                    Change in entropy for a system undergoing a state change under changing pressure.
                                    <ul>
                                        <li>${k('C_P')} is the heat capacity of the system under constant pressure,</li>
                                        <li>${k('T_f')} and ${k('T_i')} are the final and initial tempreratures of the system,</li>
                                        <li>${k('n')} is the number of moles of substance in the system,</li>
                                        <li>${k('R')} is the ideal gas constant, and </li>
                                        <li>${k('P_f')} and ${k('P_i')} are the final and initial pressures of the system.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'G&=H-TS',
                                description: `
                                    Gibbs energy, where
                                    <ul>
                                        <li>${k('H')} is the total enthalpy of a system,</li>
                                        <li>${k('T')} is the temperature of the system, and</li>
                                        <li>${k('S')} is the entropy of the system.</li>
                                    </ul>
                                    Like ${k('H=U+PV')}, this equation has no physical meaning; it is just a useful interpretation of energy. Again, this equation is more useful in the form ${k('\\Delta G=\\Delta H-T\\Delta S')}, where ${k('\\Delta G')} is the change in Gibbs energy, and ${k('T')} is constant.
                                `
                            }, {
                                latex: '\\Delta U&=\\Delta H+\\Delta n_\\mathrm{gas}RT',
                                description: `
                                    Describes how the change in the number of gas particles in a reaction affects the total interal energy of a system, ${k('U')}. Similar to ${k('\\Delta U=\\Delta H+P\\Delta V')}, but the ${k('P\\Delta V')} term is replaced with ${k('\\Delta n_\\mathrm{gas}RT')}.
                                    <ul>
                                        <li>${k('\\Delta H')} is the change in enthalpy of the system,</li>
                                        <li>${k('\\Delta n_\\mathrm{gas}')} is the change in moles of gas during a reaction,</li>
                                        <li>${k('R')} is the ideal gas constant, and</li>
                                        <li>${k('T')} is the temperature of the system.</li>
                                    </ul>
                                    Using the fact that ${k('\\Delta U=q_V')} and ${k('\\Delta H=q_P')}, we can rewrite the equation as
                                    ${k('q_V=q_P+\\Delta n_\\mathrm{gas}RT.', true)}
                                    This shows that when ${k('\\Delta n_\\mathrm{gas}=0')} (i.e. when the reaction does not change the number of particles), ${k('q_V=q_P')}.
                                `
                            }, {
                                latex: '\\Delta_rH^\\circ&=\\sum_kv_k\\cdot\\Delta_fH_k^\\circ',
                                description: `
                                    The standard enthalpy of reaction, calculated from the standard enthalpies of formation of the products and reactants.
                                    <ul>
                                        <li>${k('k')} is each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\Delta_fH_k^\\circ')} is the standard enthalpy of formation on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                `
                            }, {
                                latex: '\\Delta_rS^\\circ&=\\sum_kv_k\\cdot\\overline{S}_k^\\circ',
                                description: `
                                    The standard entropy of reaction, calculated from the standard molar entropies of the products and reactants.
                                    <ul>
                                        <li>${k('k')} is each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\overline{S}_k^\\circ')} is the standard molar entropy on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                    <br>
                                    Although ${k('\\Delta_fS^\\circ')} values could be used, it is simpler to find ${k('\\overline{S}^\\circ')} values because they represent the same things and are absolute instead of relative.
                                `
                            }, {
                                latex: '\\Delta_rG^\\circ&=\\sum_kv_k\\cdot\\Delta_fG_k^\\circ',
                                description: `
                                    The standard Gibbs energy of reaction, calculated from the standard Gibbs energies of formation of the products and reactants.
                                    <ul>
                                        <li>${k('k')} is each of the products and reactants,</li>
                                        <li>${k('v_k')} is the coefficient on the ${k('k')} term of the formation reaction,</li>
                                        <li>${k('\\Delta_fH_k^\\circ')} is the standard Gibbs energy of formation on the ${k('k')} term of the formation reaction.</li>
                                    </ul>
                                    For the reactants, ${k('v_k')} is negative, and for the products, ${k('v_k')} is positive.
                                `
                            }, {
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
                            }, {
                                latex: 'v&=k[\\ce{A}]^m[\\ce{B}]^n\\ldots',
                                description: `
                                    The rate law for a generalized reaction
                                    ${k('\\ce{$a$ A + $b$ B + $\\ldots$ -> $x$ X + $y$ Y + $\\ldots$}', true)}
                                    where ${k('k')}, ${k('m')}, and ${k('n')} are all constants to be found experimentally.
                                `
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
                                latex: 't_{1/2}&=\\frac{[\\ce{A}]_0}{2k}',
                                description: `
                                    The half life of a zeroth order reaction, where
                                    <ul>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A, and</li>
                                        <li>${k('k')} is the rate constant for the reaction.</li>
                                    </ul>
                                `
                            }, {
                                latex: 't_{1/2}&=\\frac{\\ln 2}{k}',
                                description: `
                                    The half life of a first order reaction, where ${k('k')} is the rate constant for the reaction.
                                `
                            }, {
                                latex: 't_{1/2}&=\\frac{1}{k[\\ce{A}]_0}',
                                description: `
                                    The half life of a second order reaction, where
                                    <ul>
                                    <li>${k('k')} is the rate constant for the reaction, and</li>
                                        <li>${k('[\\ce{A}]_0')} is the initial concentration of A.</li>
                                    </ul>
                                `
                            }, {
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
                                latex: 'K_c&=\\frac{k_1}{k_{-1}}',
                                description: `
                                    The definition of the equilibrium constant ${k('K_c')}, in terms of ${k('k')}, the rate constant for the reaction. ${k('k_1')} is for the forward reaction, and ${k('k_{-1}')} is for the reverse reaction. Remember that for an elementary process, ${k('v=k_1[\\ce{A}]^a[\\ce{B}]^b\\ldots')} and vice versa for ${k('k_{-1}')}, and at equilibrium, the two rates are equal. Therefore,
                                    ${k(`
                                        \\begin{aligned}
                                            k_1[\\ce{A}]^a[\\ce{B}]^b\\ldots&=k_{-1}[\\ce{C}]^c[\\ce{D}]^d\\ldots \\\\
                                            \\frac{k_1}{k_{-1}}&=\\frac{[\\ce{C}]^c[\\ce{D}]^d\\ldots}{[\\ce{A}]^a[\\ce{B}]^b\\ldots}
                                        \\end{aligned}
                                    `, true)}
                                `
                            }, {
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
                            }, {
                                latex: 'a_\\mathrm{g}&\\approx\\frac{P}{P^\\circ}',
                                description: `
                                    The activity of a gas, where
                                    <ul>
                                        <li>${k('P')} is the pressure of the gas, and</li>
                                        <li>${k('P^\\circ')} is the pressure at 1 bar.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'a_\\mathrm{l}=a_\\mathrm{s}&\\approx 1',
                                description: 'The activity of a pure solid or liquid.'
                            }, {
                                latex: 'a_\\mathrm{aq}&\\approx\\frac{[\\ce{X}]}{c^\\circ}',
                                description: `
                                    The activity of an aqueous solution, where
                                    <ul>
                                        <li>${k('[\\ce{X}]')} is the concentration of the solute, and</li>
                                        <li>${k('c^\\circ')} is just ${k('\\pu{1 mol L-1}')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'Q_c&=\\frac{[\\ce{C}]^c[\\ce{D}]^d\\ldots}{[\\ce{A}]^a[\\ce{B}]^b\\ldots}',
                                description: `
                                    The reaction quotient for a general reaction
                                    ${k('\\ce{$a$ A(aq) + $b$ B(aq) + $\\ldots$ <=> $c$ C(aq) + $d$ D(aq) + $\\ldots$}', true)}
                                    written in terms of concentrations, where
                                    <ul>
                                        <li>${k('[\\ce{X}]')} is the concentration of the species X in the reaction, and</li>
                                        <li>${k('a,b,c,d,\\ldots')} are the coefficients in the reaction.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: '\\Delta_rG&=\\Delta_rG^\\circ+RT\\ln Q',
                                description: `
                                    <ul>
                                        <li>${k('\\Delta_rG')} is the Gibbs energy of reaction,</li>
                                        <li>${k('\\Delta_rG^\\circ')} is the standard Gibbs energy of reaction (i.e., the Gibbs energy of reaction at STP),</li>
                                        <li>${k('R')} is the ideal gas constant,</li>
                                        <li>${k('T')} is the temperature, and</li>
                                        <li>${k('Q')} is the reaction quotient of the reaction.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'Q_P&=Q_c(RT)^{\\Delta n_\\mathrm{gas}}',
                                description: `
                                    <ul>
                                        <li>${k('Q_P')} is the reaction quotient in terms partial pressures,</li>
                                        <li>${k('Q_c')} is the reaction quotient in terms of concentrations,</li>
                                        <li>${k('R')} is the ideal gas constant,</li>
                                        <li>${k('T')} is the temperature,</li>
                                        <li>${k('\\Delta n_\\mathrm{gas}')} is the change in moles of gas.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\ln K&=-\\frac{\\Delta_rG^\\circ}{RT}',
                                description: `
                                    A form of the Van't Hoff equation, which relates the equlibrium constant ${k('K')} to the standard Gibbs energy of reaction, ${k('\\Delta_rG^\\circ')}.
                                    <ul>
                                        <li>${k('K')} is the equilibrium constant,</li>
                                        <li>${k('\\Delta_rG^\\circ')} is the standard Gibbs energy of reaction,</li>
                                        <li>${k('R')} is the ideal gas constant, and</li>
                                        <li>${k('T')} is the temperature.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\ln\\left(\\frac{K_2}{K_1}\\right)&=-\\frac{\\Delta_rH^\\circ}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)',
                                description: `
                                    A form of the Van't Hoff equation, which relates changes in the equlibrium constant ${k('K')} to changes in temperature.
                                    <ul>
                                        <li>${k('K_1')} and ${k('K_2')} are the initial and final equilibrium constants,</li>
                                        <li>${k('\\Delta_rH^\\circ')} is the standard enthalpy of reaction,</li>
                                        <li>${k('R')} is the ideal gas constant, and</li>
                                        <li>${k('T_1')} and ${k('T_2')} are the initial and final temperatures.</li>
                                    </ul>
                                `
                            },
                            'Module 4: Acid-Base Equilibria in Aqueous Solution',
                            {
                                latex: 'K_w&=[\\ce{H3O+}][\\ce{OH-}]\\approx 10^{-14}',
                                description: `
                                    The equilibrium constant of water, where
                                    <ul>
                                        <li>${k('[\\ce{H3O+}]')} is the concentration of hydronium ions (equivalent to the concentration of H<sup>+</sup> ions), and</li>
                                        <li>${k('[\\ce{OH-}]')} is the concentration of hydroxide ions.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathrm{p}K_w&=-\\log K_w\\approx 14',
                                description: `${k('K_w')} is the equilibrium constant of water.`
                            }, {
                                latex: '\\mathrm{pH}&=-\\log[\\ce{H+}]',
                                description: `${k('[\\ce{H+}]')} is the concentration of H<sup>+</sup>.`
                            }, {
                                latex: '\\mathrm{pOH}&=-\\log[\\ce{OH-}]',
                                description: `${k('[\\ce{OH-}]')} is the concentration of OH<sup>-</sup>.`
                            }, {
                                latex: '\\mathrm{pH}+\\mathrm{pOH}&=\\mathrm{p}K_w',
                                description: k(`
                                    \\begin{aligned}
                                        K_w&=[\\ce{H+}][\\ce{OH-}] \\\\
                                        \\log K_w&=\\log([\\ce{H+}][\\ce{OH-}]) \\\\
                                        &=\\log[\\ce{H+}]+\\log[\\ce{OH-}] \\\\
                                        \\mathrm{p}K_w&=\\mathrm{pH}+\\mathrm{pOH}
                                    \\end{aligned}
                                `, true)
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'R&=\\pu{8.31446 kg m2 s-2 K-1 mol-1}',
                                description: `The ideal gas constant, in base SI units. Useful for working with energy in joules.`
                            }, {
                                latex: 'R&=\\pu{8314.46 L Pa K-1 mol-1}',
                                description: `The ideal gas constant, with liter pascals instead of joules. Liters are conventionally used in place of cubic meters in chemistry, so this form is most commonly used.`
                            }, {
                                latex: 'R&=\\pu{8.31446e-2 L bar K-1 mol-1}',
                                description: `The ideal gas constant, in liter bars instead of liter pascals. This form is useful when talking about equilibria of gases, since ${k('K_P')} is derived from pressure written in bars.`
                            }
                        ]
                    },
                    'conversions': {
                        code: 'CV',
                        content: [
                            {
                                latex: 'n\\ \\pu{°C}&=(n + 273.15)\\ \\pu{K}',
                                description: `
                                    °C - degree celsius
                                    <br>
                                    K - kelvin
                                `
                            }, {
                                latex: '\\pu{1 bar}&=\\pu{1e5 Pa}',
                                description: `
                                    bar - bar
                                    <br>
                                    Pa - pascal
                                    <br>
                                    1 bar is an approximation of 1 atm, but it is a neat multiple of ${k('10^5')} pascals.
                                `
                            }, {
                                latex: '\\pu{1 atm}&=\\pu{101325 Pa}',
                                description: `
                                    atm - atmosphere
                                    <br>
                                    Pa - pascal
                                    <br>
                                    Approximately equal to the mean sea-level pressure on Earth.
                                `
                            }, {
                                latex: '\\pu{1 mmHg}&=\\pu{133.322 Pa}',
                                description: `
                                    mmHg - millimeters mercury
                                    <br>
                                    Pa - pascal
                                    <br>
                                    Formerly defined as the amount of pressure exerted per unit area by a column of mercury 1 mm high.
                                `
                            }, {
                                latex: '\\pu{1 cal}&=\\pu{4.184 J}',
                                description: `
                                    cal - calorie
                                    <br>
                                    J - joule
                                    <br>
                                    The calorie (cal) is not to be confused with the food calorie (Cal or kcal). ${k('\\pu{1 Cal}=\\pu{1000 cal}')}.
                                `
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
                            }, {
                                latex: 'z_1+z_2=(a+bi)+(c+di)&=(a+c)+(b+d)i',
                                description: `The addition of two complex numbers, where ${k('a, b, c, d\\in\\Reals')} and ${k('i')} is the imaginary unit. The real and imaginary components add separately.`
                            }, {
                                latex: 'z_1z_2=(a+bi)(c+di)&=(ac-bd)+(ad+bc)i',
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
                            }, {
                                latex: 'z^{-1}=(a+bi)^{-1}&=\\frac{a-bi}{a^2+b^2}',
                                description: `The multiplicative inverse of a complex number ${k('z\\neq0')}, where ${k('a, b, c, d\\in\\Reals')} and ${k('i')} is the imaginary unit.`
                            }, {
                                latex: '\\frac{z}{w}&=z\\cdot w^{-1}',
                                description: `The division of two complex numbers ${k('z')} and ${k('w\\neq0')}.`
                            }, {
                                latex: '\\bar{z}=\\overline{a+bi}&=a-bi',
                                description: `The conjugate of any complex number ${k('z')}.`
                            }, {
                                latex: '|z|=|a+bi|&=\\sqrt{a^2+b^2}',
                                description: `The modulus of any complex number ${k('z')}. This is equivalent to the distance from ${k('z')} to the origin in the complex plane.`
                            }, {
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
                            }, {
                                latex: 'z_1z_2=r_1e^{i\\theta_1}\\cdot r_2e^{i\\theta_2}&=r_1r_2e^{i\\theta_1+i\\theta_2}',
                                description: `The multiplication of two complex numbers ${k('z_1')} and ${k('z_2')} represented in polar form will result in the multiplication of their moduli (lengths) and the addition of their arguments (angles).`
                            }, {
                                latex: '\\sqrt[n]{re^{i\\theta}}&=\\sqrt[n]{r}e^{i\\frac{\\theta+2\\pi k}{n}}',
                                description: `An equation for all the ${k('n')}th roots of a complex number, where ${k('k')} is some integer. There will always be ${k('n')} unique roots.`
                            }, {
                                latex: '-e^{i\\theta}&=e^{i(\\theta+\\pi)}',
                                description: 'It\'s easy to derive this geometrically from Euler\'s formula.'
                            }, {
                                latex: '\\overline{e^{i\\theta}}&=e^{-i\\theta}',
                                description: 'It\'s easy to derive this geometrically from Euler\'s formula.'
                            },
                            `Vectors in ${k('\\mathbf{R}^n')}`,
                            {
                                latex: '\\mathbf{u}&=\\begin{bmatrix}u_1\\\\u_2\\\\\\vdots\\\\u_n\\end{bmatrix}',
                                description: `A vector ${k('\\mathbf{u}')} has components ${k('u_1')} through ${k('u_n')}, where ${k('n')} is the size of the vector.`
                            }, {
                                latex: `
                                    \\mathbf{u}+\\mathbf{v}
                                    =
                                    \\begin{bmatrix}
                                        u_1\\\\u_2\\\\\\vdots\\\\u_n
                                    \\end{bmatrix}
                                    +
                                    \\begin{bmatrix}
                                        v_1\\\\v_2\\\\\\vdots\\\\v_n
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        u_1+v_1\\\\u_2+v_2\\\\\\vdots\\\\u_n+v_n
                                    \\end{bmatrix}
                                `,
                                description: `When adding two vectors, just add their components.`
                            }, {
                                latex: `
                                    c\\mathbf{u}
                                    =
                                    c
                                    \\begin{bmatrix}
                                        u_1\\\\u_2\\\\\\vdots\\\\u_n
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        cu_1\\\\cu_2\\\\\\vdots\\\\cu_n
                                    \\end{bmatrix}
                                `,
                                description: `Scalar multiplication of a vector is just scalar multiplication of the vector's components.`
                            }, {
                                latex: '\\mathbf{u}+\\mathbf{v}&=\\mathbf{v}+\\mathbf{u}',
                                description: `Vector addition is commutative.`
                            }, {
                                latex: '(\\mathbf{u}+\\mathbf{v})+\\mathbf{w}&=\\mathbf{v}+(\\mathbf{u}+\\mathbf{w})',
                                description: `Vector addition is associative.`
                            }, {
                                latex: 'a(\\mathbf{u}+\\mathbf{v})&=a\\mathbf{u}+a\\mathbf{v}',
                                description: `Scalars are distributive over vector addition.`
                            }, {
                                latex: '(a+b)\\mathbf{u}&=a\\mathbf{u}+b\\mathbf{u}',
                                description: `Vectors are distributive over scalar addition.`
                            }, {
                                latex: 'a(b\\mathbf{u})&=(ab)\\mathbf{u}',
                                description: `Scalar multiplication of a vector is associative.`
                            }, {
                                latex: 'c_1\\mathbf{u}_1+c_2\\mathbf{u}_2+&\\ldots+c_m\\mathbf{u}_m',
                                description: `A linear combination of a set of vectors ${k('\\mathbf{u}_m')}.`
                            }, {
                                latex: `
                                    \\lVert\\mathbf{u}\\rVert
                                    =
                                    \\left\\lVert\\begin{bmatrix}
                                        a\\\\b
                                    \\end{bmatrix}\\right\\rVert
                                    &=\\sqrt{a^2+b^2}
                                    =\\sqrt{\\mathbf{u}\\cdot\\mathbf{u}}
                                `,
                                description: 'The norm of a vector is just its length, by the Pythagorean Theorem. It is also the square root of the dot product of the vector by itself. The dot product is defined in the next equation.'
                            }, {
                                latex: `
                                    \\mathbf{u}\\cdot\\mathbf{v}
                                    =
                                    \\begin{bmatrix}
                                        u_1\\\\u_2\\\\\\vdots\\\\u_n
                                    \\end{bmatrix}
                                    \\cdot
                                    \\begin{bmatrix}
                                        v_1\\\\v_2\\\\\\vdots\\\\v_n
                                    \\end{bmatrix}
                                    &=
                                    u_1v_1+u_2v_2+\\ldots+u_nv_n
                                `,
                                description: `The definition of the dot product of two vectors ${k('\\mathbf{u}')} and ${k('\\mathbf{v}')}. Note that the result of the dot product is a scalar.`
                            }, {
                                latex: '\\mathbf{u}\\cdot\\mathbf{v}&=\\mathbf{v}\\cdot\\mathbf{u}',
                                description: `The dot product of two vectors is commutative.`
                            }, {
                                latex: '\\mathbf{u}\\cdot(\\mathbf{v}+\\mathbf{w})&=\\mathbf{u}\\cdot\\mathbf{v}+\\mathbf{u}\\cdot\\mathbf{w}',
                                description: `The dot product of two vectors is distributive.`
                            }, {
                                latex: '(c\\mathbf{u})\\cdot\\mathbf{v}&=\\mathbf{u}\\cdot(c\\mathbf{v})=c(\\mathbf{u}\\cdot\\mathbf{v})',
                                description: `Scalar multiplication is associative over the dot product of two vectors.`
                            }, {
                                latex: '\\mathbf{u}\\cdot\\mathbf{v}&=\\lVert\\mathbf{u}\\rVert\\lVert\\mathbf{v}\\rVert\\cos\\theta',
                                description: `An interpretation of the dot product, where ${k('\\theta')} is the angle between ${k('\\mathbf{u}')} and ${k('\\mathbf{v}')}.`
                            }, {
                                latex: '\\operatorname{proj}_{\\mathbf{v}}\\mathbf{u}&=\\frac{\\mathbf{u}\\cdot\\mathbf{v}}{\\mathbf{v}\\cdot\\mathbf{v}}\\mathbf{v}',
                                description: `The projection of ${k('\\mathbf{u}')} onto ${k('\\mathbf{v}')}.`
                            }, {
                                latex: `
                                    &\\begin{cases}\\begin{aligned}
                                        \\mathbf{u}_1&=\\mathbf{s}_1 \\\\
                                        \\mathbf{u}_2&=\\mathbf{s}_2-\\operatorname{proj}_{\\mathbf{u}_1}\\mathbf{s}_2 \\\\
                                        \\mathbf{u}_3&=\\mathbf{s}_3-\\operatorname{proj}_{\\mathbf{u}_1}\\mathbf{s}_3-\\operatorname{proj}_{\\mathbf{u}_2}\\mathbf{s}_3 \\\\
                                        &\\vdots
                                    \\end{aligned}\\end{cases}
                                `,
                                description: `The Gram-Schmidt process, which generates a set of orthogonal vectors ${k('\\mathbf{u}_n')} from a set of linearly independent vectors ${k('\\mathbf{s}_n')}.`
                            },
                            'Systems of Linear Equations',
                            {
                                latex: `
                                    A^T
                                    =
                                    \\begin{bmatrix}
                                        A_{11} & A_{12} & \\ldots & A_{1m} \\\\
                                        A_{21} & A_{22} & \\ldots & A_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1} & A_{n2} & \\ldots & A_{nm}
                                    \\end{bmatrix}^T
                                    &=
                                    \\begin{bmatrix}
                                        A_{11} & A_{21} & \\ldots & A_{m1} \\\\
                                        A_{12} & A_{22} & \\ldots & A_{m2} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{1n} & A_{2n} & \\ldots & A_{mn}
                                    \\end{bmatrix}
                                `,
                                description: `To transpose a matrix ${k('A')}, swap the columns and rows. In other words, column ${k('m')} becomes row ${k('m')} and row ${k('n')} becomes column ${k('n')}.`
                            }, {
                                latex: `
                                    A\\mathbf{x}=
                                    \\begin{bmatrix}
                                        A_{11} & A_{12} & \\ldots & A_{1m} \\\\
                                        A_{21} & A_{22} & \\ldots & A_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1} & A_{n2} & \\ldots & A_{nm}
                                    \\end{bmatrix}
                                    \\begin{bmatrix}
                                        x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_m
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        A_{11}x_1+A_{12}x_2+\\ldots+A_{1m}x_m \\\\
                                        A_{21}x_1+A_{22}x_2+\\ldots+A_{2m}x_m \\\\
                                        \\vdots \\\\
                                        A_{n1}x_1+A_{n2}x_2+\\ldots+A_{nm}x_m
                                    \\end{bmatrix}
                                `,
                                description: `
                                    Matrix multiplication of a vector. This can be simplified by representing ${k('A')} as a collection of row vectors:
                                    ${k(`
                                        A=
                                        \\begin{bmatrix}\\mathbf{a}_1\\\\\\mathbf{a}_2\\\\\\ldots\\\\\\mathbf{a}_n\\end{bmatrix}
                                        \\qquad
                                        \\mathbf{a}_n=\\begin{bmatrix}A_{n1}&A_{n2}&\\ldots&A_{nm}\\end{bmatrix}
                                    `, true)}
                                    The matrix-vector product is then the dot product of each row vector ${k('\\mathbf{a}_n')} and ${k('\\mathbf{x}')}:
                                    ${k(`
                                        A\\mathbf{x}=
                                        \\begin{bmatrix}\\mathbf{a}_1\\\\\\mathbf{a}_2\\\\\\ldots\\\\\\mathbf{a}_n\\end{bmatrix}
                                        \\begin{bmatrix}x_1\\\\x_2\\\\\\vdots\\\\x_m\\end{bmatrix}
                                        =
                                        \\begin{bmatrix}
                                            \\mathbf{a}_1\\cdot\\mathbf{x} \\\\
                                            \\mathbf{a}_2\\cdot\\mathbf{x} \\\\
                                            \\vdots \\\\
                                            \\mathbf{a}_n\\cdot\\mathbf{x}
                                        \\end{bmatrix}
                                    `, true)}
                                `
                            },
                            'Matrices as Linear Transformations',
                            {
                                latex: `
                                    A+B=
                                    \\begin{bmatrix}
                                        A_{11} & A_{12} & \\ldots & A_{1m} \\\\
                                        A_{21} & A_{22} & \\ldots & A_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1} & A_{n2} & \\ldots & A_{nm}
                                    \\end{bmatrix}
                                    +
                                    \\begin{bmatrix}
                                        B_{11} & B_{12} & \\ldots & B_{1m} \\\\
                                        B_{21} & B_{22} & \\ldots & B_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        B_{n1} & B_{n2} & \\ldots & B_{nm}
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        A_{11}+B_{11} & A_{12}+B_{12} & \\ldots & A_{1m}+B_{1m} \\\\
                                        A_{21}+B_{21} & A_{22}+B_{22} & \\ldots & A_{2m}+B_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1}+B_{n1} & A_{n2}+B_{n2} & \\ldots & A_{nm}+B_{nm}
                                    \\end{bmatrix}
                                `,
                                description: `The addition of two matrices is done element by element.`
                            }, {
                                latex: 'A+B&=B+A',
                                description: `The addition of matrices has the commutative property.`
                            }, {
                                latex: '(A+B)+C&=A+(B+C)',
                                description: `Matrix addition is associative.`
                            }, {
                                latex: `
                                    cA=
                                    c
                                    \\begin{bmatrix}
                                        A_{11} & A_{12} & \\ldots & A_{1m} \\\\
                                        A_{21} & A_{22} & \\ldots & A_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1} & A_{n2} & \\ldots & A_{nm}
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        cA_{11} & cA_{12} & \\ldots & cA_{1m} \\\\
                                        cA_{21} & cA_{22} & \\ldots & cA_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        cA_{n1} & cA_{n2} & \\ldots & cA_{nm}
                                    \\end{bmatrix}
                                `,
                                description: `Scalar multiplication of a matrix is a scalar multiplication of each element of the matrix.`
                            }, {
                                latex: 's(A+B)&=sA+sB',
                                description: `Scalar multiplication is distributive over matrix addition.`
                            }, {
                                latex: '(s+t)A&=sA+tA',
                                description: `Matrix multiplication is distributive over scalar addition.`
                            }, {
                                latex: 's(tA)&=(st)A',
                                description: `Scalar multiplication of a matrix is associative.`
                            }, {
                                latex: `
                                    AB=
                                    \\begin{bmatrix}
                                        A_{11} & A_{12} & \\ldots & A_{1m} \\\\
                                        A_{21} & A_{22} & \\ldots & A_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        A_{n1} & A_{n2} & \\ldots & A_{nm}
                                    \\end{bmatrix}
                                    \\begin{bmatrix}
                                        B_{11} & B_{12} & \\ldots & B_{1m} \\\\
                                        B_{21} & B_{22} & \\ldots & B_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        B_{n1} & B_{n2} & \\ldots & B_{nm}
                                    \\end{bmatrix}
                                    &=
                                    \\begin{bmatrix}
                                        \\begin{bmatrix}
                                            A_{11} \\\\ A_{12} \\\\ \\vdots \\\\ A_{1m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{11} \\\\ B_{21} \\\\ \\vdots \\\\ B_{n1}
                                        \\end{bmatrix}
                                        &
                                        \\begin{bmatrix}
                                            A_{11} \\\\ A_{12} \\\\ \\vdots \\\\ A_{1m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{12} \\\\ B_{22} \\\\ \\vdots \\\\ B_{n2}
                                        \\end{bmatrix}
                                        &
                                        \\ldots
                                        &
                                        \\begin{bmatrix}
                                            A_{11} \\\\ A_{12} \\\\ \\vdots \\\\ A_{1m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{1m} \\\\ B_{2m} \\\\ \\vdots \\\\ B_{nm}
                                        \\end{bmatrix}
                                        \\\\
                                        \\begin{bmatrix}
                                            A_{21} \\\\ A_{22} \\\\ \\vdots \\\\ A_{2m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{11} \\\\ B_{21} \\\\ \\vdots \\\\ B_{n1}
                                        \\end{bmatrix}
                                        &
                                        \\begin{bmatrix}
                                            A_{21} \\\\ A_{22} \\\\ \\vdots \\\\ A_{2m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{12} \\\\ B_{22} \\\\ \\vdots \\\\ B_{n2}
                                        \\end{bmatrix}
                                        &
                                        \\ldots
                                        &
                                        \\begin{bmatrix}
                                            A_{21} \\\\ A_{22} \\\\ \\vdots \\\\ A_{2m}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{1m} \\\\ B_{2m} \\\\ \\vdots \\\\ B_{nm}
                                        \\end{bmatrix}
                                        \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots
                                        \\\\
                                        \\begin{bmatrix}
                                            A_{n1} \\\\ A_{n2} \\\\ \\vdots \\\\ A_{nm}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{11} \\\\ B_{21} \\\\ \\vdots \\\\ B_{n1}
                                        \\end{bmatrix}
                                        &
                                        \\begin{bmatrix}
                                            A_{n1} \\\\ A_{n2} \\\\ \\vdots \\\\ A_{nm}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{12} \\\\ B_{22} \\\\ \\vdots \\\\ B_{n2}
                                        \\end{bmatrix}
                                        &
                                        \\ldots
                                        &
                                        \\begin{bmatrix}
                                            A_{n1} \\\\ A_{n2} \\\\ \\vdots \\\\ A_{nm}
                                        \\end{bmatrix}
                                        \\cdot
                                        \\begin{bmatrix}
                                            B_{1m} \\\\ B_{2m} \\\\ \\vdots \\\\ B_{nm}
                                        \\end{bmatrix}
                                    \\end{bmatrix}
                                    =
                                    \\begin{bmatrix}
                                        A_{11}B_{11}+A_{12}B_{21}+\\ldots+A_{1m}B_{n1}
                                        &
                                        A_{11}B_{12}+A_{12}B_{22}+\\ldots+A_{1m}B_{n2}
                                        &
                                        \\ldots
                                        &
                                        A_{11}B_{1m}+A_{12}B_{2m}+\\ldots+A_{1m}B_{nm}
                                        \\\\
                                        A_{21}B_{11}+A_{22}B_{21}+\\ldots+A_{2m}B_{n1}
                                        &
                                        A_{21}B_{12}+A_{22}B_{22}+\\ldots+A_{2m}B_{n2}
                                        &
                                        \\ldots
                                        &
                                        A_{21}B_{1m}+A_{22}B_{2m}+\\ldots+A_{2m}B_{nm}
                                        \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots
                                        \\\\
                                        A_{n1}B_{11}+A_{n2}B_{21}+\\ldots+A_{nm}B_{n1}
                                        &
                                        A_{n1}B_{12}+A_{n2}B_{22}+\\ldots+A_{nm}B_{n2}
                                        &
                                        \\ldots
                                        &
                                        A_{n1}B_{1m}+A_{n2}B_{2m}+\\ldots+A_{nm}B_{nm}
                                    \\end{bmatrix}
                                `,
                                description: `
                                    The multiplication of two matrices ${k('A')} and ${k('B')}. The process is broken down as follows.
                                    <br>
                                    As an example, let ${k('C=\\begin{bmatrix}2 & 3 & 5 \\\\1 & -4 & -9\\end{bmatrix}')} and ${k('D=\\begin{bmatrix}8 & 0 \\\\ -7 & -4 \\\\ 2 & 2\\end{bmatrix}')} (for matrix multiplication to work, ${k('C')} must have dimensions ${k('m\\times n')} and ${k('D')} must have dimensions ${k('n\\times m')}). The product of ${k('C')} and ${k('D')} will be represented by ${k('P')} and will have elements ${k('P=\\begin{bmatrix}P_{11} & P_{12} \\\\ P_{21} & P_{22}\\end{bmatrix}')} (${k('P')} will always have dimensions ${k('m\\times m')}).
                                    <br>
                                    ${k('C')} is made up of two row vectors, which we will call ${k('\\mathbf{c}_1')} and ${k('\\mathbf{c}_2')}. Likewise, ${k('D')} is made up of two column vectors, which we will call ${k('\\mathbf{d}_1')} and ${k('\\mathbf{d}_2')}. So far, we have
                                    ${k('C=\\begin{bmatrix}\\mathbf{c}_1\\\\\\mathbf{c}_2\\end{bmatrix},D=\\begin{bmatrix}\\mathbf{d}_1&\\mathbf{d}_2\\end{bmatrix}', true)}
                                    where
                                    ${k('\\begin{matrix}\\mathbf{c}_1=\\begin{bmatrix}2 & 3 & 5\\end{bmatrix} & \\mathbf{d}_1=\\begin{bmatrix}8 \\\\ -7 \\\\ 2\\end{bmatrix}\\\\\\mathbf{c}_2=\\begin{bmatrix}1 & -4 & -9\\end{bmatrix} & \\mathbf{d}_2=\\begin{bmatrix}0 \\\\ -4 \\\\ 2\\end{bmatrix}\\end{matrix}', true)}
                                    Now, ${k('P')} is defined as
                                    ${k(`
                                        P=
                                        \\begin{bmatrix}
                                            \\mathbf{c}_1\\cdot\\mathbf{d}_1 & \\mathbf{c}_1\\cdot\\mathbf{d}_2 \\\\
                                            \\mathbf{c}_2\\cdot\\mathbf{d}_1 & \\mathbf{c}_2\\cdot\\mathbf{d}_2
                                        \\end{bmatrix}
                                    `, true)}
                                    In fact, ${k('P_{ij}=\\mathbf{c}_i\\cdot\\mathbf{d}_j')} for any two general matrices defined as before.
                                    <br>
                                    This definition may seem overly complicated, but it is useful in that it preserves the linear transformation nature of matrices. A component-wise definition of matrix multiplication is surprisingly useless.
                                `
                            }, {
                                latex: 'A(BC)&=(AB)C',
                                description: `Matrix multiplication is associative.`
                            }, {
                                latex: 'A(B+C)&=AB+BC',
                                description: `Matrix multiplication is left-distributive.`
                            }, {
                                latex: '(A+B)C&=AC+BC',
                                description: `Matrix multiplication is right-distributive.`
                            }, {
                                latex: 's(AB)&=(sA)B',
                                description: `Scalar multiplication is associative over matrix multiplication.`
                            }, {
                                latex: 'A+0_{nm}&=A',
                                description: `
                                    If ${k('A')} has dimensions ${k('n\\times m')}, the zero matrix, ${k('0_{nm}')}, is the additive identity for matrix addition.
                                    ${k(`
                                        0_{nm}=
                                        \\begin{bmatrix}
                                            0 & 0 & \\ldots & 0 \\\\
                                            0 & 0 & \\ldots & 0 \\\\
                                            \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                            0 & 0 & \\ldots & 0
                                        \\end{bmatrix}
                                    `, true)}
                                `
                            }, {
                                latex: 'AI_m&=A',
                                description: `
                                    If ${k('A')} has dimensions ${k('n\\times m')}, the identity matrix, ${k('I_m')}, is the multiplicative identity for matrix multiplication.
                                    ${k(`
                                        I_m=
                                        \\begin{bmatrix}
                                            1 & 0 & \\ldots & 0 \\\\
                                            0 & 1 & \\ldots & 0 \\\\
                                            \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                            0 & 0 & \\ldots & 1
                                        \\end{bmatrix}
                                    `, true)}
                                `
                            }, {
                                latex: 'AA^{-1}=A^{-1}A&=I_n',
                                description: `
                                    If ${k('A')} is an ${k('n\\times n')} matrix, ${k('A^{-1}')} is its multiplicative inverse such that ${k('AA^{-1}')} is the identity matrix ${k('I_n')}.
                                `
                            },
                            'Determinants',
                            {
                                latex: '\\begin{vmatrix}a_{11}\\end{vmatrix}&=a_{11}',
                                description: `The determinant of a ${k('1\\times1')} matrix is the value of the only element.`
                            }, {
                                latex: `
                                    \\begin{vmatrix}
                                        a_{11} & a_{12} \\\\
                                        a_{21} & a_{22}
                                    \\end{vmatrix}
                                    &=
                                    a_{11}a_{22}-a_{12}a_{21}
                                `,
                                description: `The determinant of a ${k('2\\times2')} matrix.`
                            }, {
                                latex: `
                                    \\det(A)
                                    =
                                    \\begin{vmatrix}
                                        a_{11} & a_{12} & \\ldots & a_{1m} \\\\
                                        a_{21} & a_{22} & \\ldots & a_{2m} \\\\
                                        \\vdots & \\vdots & \\ddots & \\vdots \\\\
                                        a_{n1} & a_{n2} & \\ldots & a_{nm}
                                    \\end{vmatrix}
                                    &=
                                    \\sum_{j=1}^m(-1)^{i+j}\\det(M_{ij})
                                `,
                                description: `The determinant of an ${k('n\\times m')} matrix ${k('A')}, where ${k('M_{ij}')} signifies the minor of element ${k('a_{ij}')}.`
                            }, {
                                latex: '\\det(ABC\\ldots)&=\\det(A)\\cdot\\det(B)\\cdot\\det(C)\\cdot\\ldots'
                            },
                            'Eigenvalues, Diagonalization',
                            {
                                latex: 'A\\mathbf{u}&=\\lambda\\mathbf{u}',
                                description: `A vector ${k('u')} is an eigenvector of matrix ${k('A')} if ${k('A\\mathbf{u}')} is equivalent to a scalar multiplication of ${k('\\mathbf{u}')}. ${k('\\lambda')} is this scalar.`
                            }
                        ]
                    },
                    'transformation matrices': {
                        code: 'M',
                        content: [
                            '2D',
                            {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & 0 \\\\
                                        0 & 1
                                    \\end{bmatrix}
                                `,
                                description: 'The identity matrix. Does nothing.'
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        k & 0 \\\\
                                        0 & 1
                                    \\end{bmatrix}
                                `,
                                description: `
                                    If ${k('k>1')}, stretch by a factor of ${k('k')} in the ${k('x')} direction.
                                    <br>
                                    If ${k('k=1')}, do nothing.
                                    <br>
                                    If ${k('0<k<1')}, compress by a factor of ${k('k')} in the ${k('x')} direction.
                                    <br>
                                    If ${k('k=0')}, compress to a line on the ${k('y')}-axis.
                                    <br>
                                    If ${k('-1<k<0')}, flip across the ${k('y')}-axis and compress by a factor of ${k('k')} in the ${k('x')} direction.
                                    <br>
                                    If ${k('k=-1')},  flip across the ${k('y')}-axis.
                                    <br>
                                    If ${k('k<-1')}, flip across the ${k('y')}-axis and stretch by a factor of ${k('k')} in the ${k('x')} direction.
                                `
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & 0 \\\\
                                        0 & k
                                    \\end{bmatrix}
                                `,
                                description: `
                                    If ${k('k>1')}, stretch by a factor of ${k('k')} in the ${k('y')} direction.
                                    <br>
                                    If ${k('k=1')}, do nothing.
                                    <br>
                                    If ${k('0<k<1')}, compress by a factor of ${k('k')} in the ${k('y')} direction.
                                    <br>
                                    If ${k('k=0')}, compress to a line on the ${k('x')}-axis.
                                    <br>
                                    If ${k('-1<k<0')}, flip across the ${k('x')}-axis and compress by a factor of ${k('k')} in the ${k('y')} direction.
                                    <br>
                                    If ${k('k=-1')},  flip across the ${k('x')}-axis.
                                    <br>
                                    If ${k('k<-1')}, flip across the ${k('x')}-axis and stretch by a factor of ${k('k')} in the ${k('y')} direction.
                                `
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        \\cos\\theta & -\\sin\\theta \\\\
                                        \\sin\\theta & \\cos\\theta
                                    \\end{bmatrix}
                                `,
                                description: `The rotation matrix. Rotates by angle ${k('\\theta')}.`
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & \\tan\\theta \\\\
                                        0 & 1
                                    \\end{bmatrix}
                                `,
                                description: `Skew in ${k('x')} direction by angle ${k('\\theta')}.`
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & 0 \\\\
                                        \\tan\\theta & 1
                                    \\end{bmatrix}
                                `,
                                description: `Skew in ${k('y')} direction by angle ${k('\\theta')}.`
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & 0 & \\Delta x \\\\
                                        0 & 1 & \\Delta y \\\\
                                        0 & 0 & 1
                                    \\end{bmatrix}
                                `,
                                description: `Translate a vector ${k('\\begin{bmatrix}x \\\\ y \\\\ 1\\end{bmatrix}')} by ${k('\\Delta x')} and ${k('\\Delta y')}.`
                            },
                            '3D',
                            {
                                latex: `
                                    &\\begin{bmatrix}
                                        1 & 0 & 0 \\\\
                                        0 & \\cos\\theta & -\\sin\\theta \\\\
                                        0 & \\sin\\theta & \\cos\\theta
                                    \\end{bmatrix}
                                `,
                                description: `Rotation about the ${k('x')}-axis by angle ${k('\\theta')}`
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        \\cos\\theta & 0 & \\sin\\theta \\\\
                                        0 & 1 & 0 \\\\
                                        -\\sin\\theta & 0 & \\cos\\theta
                                    \\end{bmatrix}
                                `,
                                description: `Rotation about the ${k('y')}-axis by angle ${k('\\theta')}`
                            }, {
                                latex: `
                                    &\\begin{bmatrix}
                                        \\cos\\theta & -\\sin\\theta & 0 \\\\
                                        \\sin\\theta & \\cos\\theta & 0 \\\\
                                        0 & 0 & 1
                                    \\end{bmatrix}
                                `,
                                description: `Rotation about the ${k('z')}-axis by angle ${k('\\theta')}`
                            }
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
                            'Unit 1: Integration',
                            {
                                latex: '\\int u\\,dv&=uv-\\int v\\,du',
                                description: 'Integration by parts, which is the opposite of the product rule in differential calculus.'
                            }, {
                                latex: '\\int f\'(g(x))g\'(x)\\,dx&=\\int f\'(u)\\,du=f(u)+C=f(g(x))+C',
                                description: 'u-substitution, which is the opposite of the chain rule in differential calculus.'
                            }, {
                                latex: '\\sqrt{a^2-b^2x^2}&\\rightarrow x=\\frac{a}{b}\\sin\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            }, {
                                latex: '\\sqrt{a^2+b^2x^2}&\\rightarrow x=\\frac{a}{b}\\tan\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            }, {
                                latex: '\\sqrt{b^2x^2-a^2}&\\rightarrow x=\\frac{a}{b}\\sec\\theta',
                                description: 'One of the useful trigonometric substitutions.'
                            }, {
                                latex: '(ax+b)&\\rightarrow\\frac{A}{ax+b}',
                                description: `When doing partial fraction decomposition, the factor ${k('(ax+b)')} corresponds to the term ${k('\\frac{A}{ax+b}')} in the decomposed fraction.`
                            }, {
                                latex: '(ax^2+bx+c)&\\rightarrow\\frac{Ax+B}{ax^2+bx+c}',
                                description: `When doing partial fraction decomposition, the factor ${k('(ax^2+bx+c)')} corresponds to the term ${k('\\frac{Ax+B}{ax^2+bx+c}')} in the decomposed fraction.`
                            }, {
                                latex: '(ax+b)^n&\\rightarrow\\sum_{i=1}^n\\frac{A_i}{(ax+b)^i}',
                                description: `
                                    When doing partial fraction decomposition, the repeating factor ${k('(ax+b)^n')} corresponds to the terms ${k('\\sum_{i=1}^n\\frac{A_i}{(ax+b)^i}')} in the decomposed fraction.
                                    <br>
                                    For example, ${k('(ax+b)^3\\rightarrow\\frac{A_1}{(ax+b)}+\\frac{A_2}{(ax+b)^2}+\\frac{A_3}{(ax+b)^3}.', true)}
                                `
                            }, {
                                latex: '\\int_n^rf(x)\\,dx&=\\lim_{t\\to r}\\int_n^tf(x)\\,dx',
                                description: `
                                    When ${k('f(x)')} is undefined at ${k('x=r')} and ${k('f(n)')} is defined, the integral ${k('\\int_n^rf(x)\\,dx')} is improper. To solve it, one must take the limit as some variable ${k('t')} approaches ${k('r')}.
                                    <br>
                                    For example, ${k('\\int_0^\\infty f(x)\\,dx=\\lim_{t\\to\\infty}\\int_0^tf(x)\\,dx.', true)}
                                `
                            }, {
                                latex: 'P(t)&=ce^{-ct}',
                                description: `A probability distribution function that models wait times. This is a decreasing exponential function which always has the property that ${k('\\int_0^\\infty P(t)\\,dt=1')}.`
                            }, {
                                latex: 'a&=\\left(\\frac{1}{x_1-x_0}\\right)\\int_{x_0}^{x_1}f(x)\\,dx',
                                description: `The average value of a function on the interval ${k('[x_0,x_1]')}.`
                            }, {
                                latex: '&\\int_0^\\infty tP(t)\\,dt',
                                description: `The expected value of a probability distribution function ${k('P(t)')}.`
                            }, {
                                latex: 'L&=\\int_a^b\\sqrt{1+(f\'(x))^2}\\,dx',
                                description: `The arc length of a function ${k('f(x)')} over the interval ${k('[a,b]')}.`
                            },
                            'Unit 2: Series',
                            {
                                latex: 'f(x)&\\approx\\sum_{k=0}^n\\frac{f^{(k)}(a)\\cdot(x-a)^k}{k!}',
                                description: `The Taylor polynomial approximation of ${k('f(x)')} centered on ${k('x=a')}. ${k('f^{(n)}(x)')} means the ${k('n')}th derivative of ${k('f')}.`
                            }, {
                                latex: '\\sum_{i=1}^ni&=\\frac{n(n+1)}{2}'
                            }, {
                                latex: '\\sum_{i=0}^nar^i&=a\\cdot\\frac{1-r^{n+1}}{1-r}',
                                description: `
                                    The sum of a geometric series, where
                                    <ul>
                                        <li>${k('a')} is the initial value of the sequence (i.e. ${k('ar^i')} when ${k('i=0')}), and</li>
                                        <li>${k('r')} is the common ratio between consecutive terms in the sequence.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\sum_{n=1}^\\infty a_n&=\\lim_{k\\to\\infty}S_k',
                                description: `The sum of an infinite series ${k('a_k')} is equal to the limit as ${k('k')} approaches infinity of the partial sum sequence, ${k('S_k')}. ${k('S_k')} is a sequence defined so the terms evaluate to ${k('\\{a_1,a_1+a_2,\\ldots\\}')}.`
                            }, {
                                latex: '&\\sum_{n=1}^\\infty\\frac{1}{n}',
                                description: 'The harmonic series.'
                            }, {
                                latex: '|S_n-S|&\\leq b_{n+1}',
                                description: `The alternating series estimation theorem. This states that ${k('|S_n-S|')}, the difference between the ${k('n')}th partial sum and the total sum, is always less than or equal to the ${k('n+1')}th term of the alternating series ${k('b')}.`
                            }, {
                                latex: '&\\sum_{n=0}^\\infty c_n(x-a)^n',
                                description: 'The power series.'
                            }, {
                                latex: '\\frac{d}{dx}\\sum_{n=0}^\\infty c_n(x-a)^n&=\\sum_{n=0}^\\infty nc_n(x-a)^{n-1}',
                                description: 'The derivative of the power series. Differentiation is simple since the power series can be thought of as an infinite polynomial, and polynomials are easy to differentiate.'
                            }, {
                                latex: '\\int\\sum_{n=0}^\\infty c_n(x-a)^n&=C+\\sum_{n=0}^\\infty \\frac{c_n(x-a)^{n+1}}{n+1}',
                                description: 'The integral of the power series. Integration is simple since the power series can be thought of as an infinite polynomial, and polynomials are easy to integrate.'
                            }, {
                                latex: 'e^x&=\\sum_{n=0}^\\infty\\frac{x^n}{n!}=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\ldots',
                                description: `The Taylor series of ${k('e^x')}.`
                            }, {
                                latex: '\\sin x&=\\sum_{n=0}^\\infty(-1)^n\\frac{x^{2n+1}}{(2n+1)!}=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+\\ldots',
                                description: `The Taylor series of ${k('\\sin x')}.`
                            }, {
                                latex: '\\cos x&=\\sum_{n=0}^\\infty(-1)^n\\frac{x^{2n}}{(2n)!}=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\ldots',
                                description: `The Taylor series of ${k('\\cos x')}.`
                            }, {
                                latex: '\\frac{1}{1-x}&=\\sum_{n=0}^\\infty x^n=1+x+x^2+x^3+\\ldots',
                                description: `The Taylor series of ${k('\\frac{1}{1-x}')}.`
                            }, {
                                latex: '(1+x)^k&=\\sum_{n=0}^\\infty{k\\choose n}x^n=1+kx+\\frac{k(k-1)}{2!}x^2+\\frac{k(k-1)(k-2)}{3!}x^3+\\ldots'
                            }, {
                                latex: '|f(x)-T_N(x)|&\\le M\\frac{|x-a|^{N+1}}{(N+1)!}',
                                description: `A bound for the remainder, or error, of an ${k('N')}th degree Taylor approximation of ${k('f(x)')} centered at ${k('a')}. ${k('M')} is the maximum of ${k('f^{(N+1)}')} over the interval ${k('[x,a]')}.`
                            },
                            'Unit 3: Differential Equations',
                            {
                                latex: '\\frac{dy(x)}{dx}&=g(x)f(y)',
                                description: `A separable differential equation can be written in this form.`
                            }, {
                                latex: 'y\'+P(x)y&=Q(x)',
                                description: `A first-order linear differential equation can be written in this form.`
                            }, {
                                latex: 'I(x)&=e^{\\int P(x)\\,dx}',
                                description: `The integrating factor ${k('I(x)')} is used when solving first-order linear differential equations of the form ${k('y\'+P(x)y=Q(x)')}.`
                            }, {
                                latex: 'y(x)&=\\frac{\\int I(x)Q(x)\\,dx}{I(x)}',
                                description: `The solution to a first-order linear differential equation of the form ${k('y\'+P(x)y=Q(x)')}, where ${k('I(x)')} is the integrating factor. Notes that the integrals may not be solvable.`
                            }, {
                                latex: 'y(x+h)&=y(x)+hf(x,y(x))',
                                description: `Euler's method for approximating a solution to a differential equation of the form ${k('y\'=f(x,y)')}. ${k('h')} is the step size, and a smaller ${k('h')} will result in a more accurate approximation.`
                            }, {
                                latex: 'p\'(t)&=f(p(t))',
                                description: `This is a form of first-order nonlinear time-independent differential equation. It is useful for studying steady states and their stabilities. The roots of ${k('f(p(t))')} are steady states. Behaviour of ${k('f(p(t))')} around these roots will tell us about the stability of these steady states. For example, we can set ${k('p(t)')} equal to certain test values between roots, and the resulting ${k('f(p(t))')} will tell us the slope of ${k('p(t)')} at those points. If the slope is positive, ${k('p(t)')} is tending toward the next steady state and away from the previous steady state. If the slope is negative, ${k('p(t)')} is tending away from the next steady state and toward the previous steady state. We can do a similar evaluation by checking the slope of ${k('f(p(t))')} at its roots. If the slope is positive (i.e. ${k('f(p(t))>0')}), the steady state at that root is unstable. If it is negative, the steady state at that root is stable.`
                            },
                            'Unit 4: Multivariable Calculus',
                            {
                                latex: 'x&=r\\cos\\theta',
                                description: `Used when converting polar to Cartesian coordinates (${k('(r,\\theta)\\to(x,y)')}).`
                            }, {
                                latex: 'y&=r\\sin\\theta',
                                description: `Used when converting polar to Cartesian coordinates (${k('(r,\\theta)\\to(x,y)')}).`
                            }, {
                                latex: 'r&=\\sqrt{x^2+y^2}',
                                description: `Used when converting Cartesian to polar coordinates (${k('(x,y)\\to(r,\\theta)')}).`
                            }, {
                                latex: '\\tan\\theta&=\\frac{y}{x}',
                                description: `Used when converting Cartesian to polar coordinates (${k('(x,y)\\to(r,\\theta)')}).`
                            }, {
                                latex: 'z&=Ax+By+C',
                                description: `The general equation for a plane in three dimensions.`
                            }, {
                                latex: 'f_x(x,y)&=\\lim_{h\\to0}\\frac{f(x+h,y)-f(x,y)}{h}',
                                description: `The partial derivative of ${k('f(x,y)')} with respect to ${k('x')}. Similar to the normal definition of a derivative, except now ${k('f')} is a multivariable function. Here, we hold ${k('y')} constant and take a derivative as normal.`
                            }, {
                                latex: 'f_y(x,y)&=\\lim_{h\\to0}\\frac{f(x,y+h)-f(x,y)}{h}',
                                description: `The partial derivative of ${k('f(x,y)')} with respect to ${k('y')}. Similar to the normal definition of a derivative, except now ${k('f')} is a multivariable function. Here, we hold ${k('x')} constant and take a derivative as normal.`
                            }, {
                                latex: '\\frac{\\partial f}{\\partial x}&=f_x',
                                description: `On the left is the Leibniz notation for a partial derivative, and on the right is the Lagrange notation.`
                            }, {
                                latex: 'f_{xy}(x,y)&=f_{yx}(x,y)',
                                description: `For second-order partial derivatives, the order of differentiation doesn't matter.`
                            }, {
                                latex: 'z-z_0&=A(x-x_0)+B(y-y_0)',
                                description: `The three-dimensional analogue to the point-slope form of a line. In this equation, ${k('(x_0,y_0,z_0)')} is the point the plane passes through, and ${k('A')} and ${k('B')} are the rates of change at the point with respect to ${k('x')} and ${k('y')}, respectively.`
                            }, {
                                latex: 'z&=f(x_0,y_0)+f_x(x_0,y_0)\\cdot(x-x_0)+f_y(x_0,y_0)\\cdot(y-y_0)',
                                description: `The equation for a plane passing through the point ${k('(x_0,y_0,z_0)')}.`
                            }, {
                                latex: 'D(a,b)&=f_{xx}(a,b)f_{yy}(a,b)-(f_{xy}(a,b))^2',
                                description: `
                                    Given a function ${k('f(x,y)')} and a critical point ${k('(a,b)')}, this function can determine whether it is a local minimum, maximum, or neither.
                                    <ul>
                                        <li>If ${k('D>0')} and ${k('f_{xx}(a,b)>0')}, then ${k('(a,b)')} is a local minimum.</li>
                                        <li>If ${k('D>0')} and ${k('f_{xx}(a,b)<0')}, then ${k('(a,b)')} is a local maximum.</li>
                                        <li>If ${k('D<0')}, then ${k('(a,b)')} is a "saddle point" (neither a local maximum not a local minimum).</li>
                                        <li>If ${k('D=0')}, the test is inconclusive.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\int_{y=c}^{y=d}\\int_{x=a}^{x=b}f(x,y)\\,dx\\,dy&=\\int_{x=a}^{x=b}\\int_{y=c}^{y=d}f(x,y)\\,dy\\,dx',
                                description: `The order in which multiple integrals are applied doesn't matter.`
                            }, {
                                latex: '&\\int_{\\alpha}^{\\beta}\\int_{a}^{b}f(r,\\theta)r\\,dr\\,d\\theta',
                                description: `
                                    The volume under a cylindrical function ${k('f(r,\\theta)')}.
                                    <ul>
                                        <li>${k('a')} and ${k('b')} are the limits of integration for the radius, and</li>
                                        <li>${k('\\alpha')} and ${k('\\beta')} are the limits of integration for the angle.</li>
                                    </ul>
                                `
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
                            }, {
                                latex: '\\tan^2x+1&=\\sec^2x',
                                description: `This comes from the division of both sides of the Pythagorean identity by ${k('\\cos^2x')}.`
                            }, {
                                latex: '\\sin^2x&=\\frac{1-\\cos 2x}{2}',
                                description: `Half-angle identity for ${k('\\sin^2x')}.`
                            }, {
                                latex: '\\cos^2x&=\\frac{1+\\cos 2x}{2}',
                                description: `Half-angle identity for ${k('\\cos^2x')}.`
                            }, {
                                latex: '\\sin2x&=2\\sin(x)\\cos(x)',
                                description: `Double-angle identity for ${k('\\sin2x')}.`
                            }, {
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
                            }, {
                                latex: 'T&=\\frac{1}{f}',
                                description: `
                                    Period of oscillatory motion, ${k('T')}, is the inverse of the frequency, ${k('f')}.
                                `
                            }, {
                                latex: '\\omega&=\\sqrt{\\frac{k}{m}}',
                                description: `
                                    Angular frequency, where
                                    <ul>
                                        <li>${k('k')} is the spring constant, and</li>
                                        <li>${k('m')} is the mass of the oscillating object.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'a_x&=-\\omega^2x',
                                description: `
                                    Acceleration of an object in SHM, where
                                    <ul>
                                        <li>${k('\\omega')} is the angular frequency, and</li>
                                        <li>${k('x')} is the position of the object from its equilibrium position.</li>
                                    </ul>
                                    Remember that ${k('x')} is a function of time, and so ${k('a_x=\\frac{d^2x}{dt^2}')}.
                                `
                            }, {
                                latex: 'f&=\\frac{\\omega}{2\\pi}',
                                description: `
                                    Frequency of an oscillating object, where ${k('\\omega')} represents the the angular frequency.
                                `
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
                                latex: '\\alpha_\\theta&=-\\omega^2\\theta',
                                description: `
                                    Angular acceleration of an object on a simple pendulum, where
                                    <ul>
                                        <li>${k('\\omega')} is the angular frequency, and</li>
                                        <li>${k('\\theta')} is the angle of the object relative to its equilibrium position,</li>
                                    </ul>
                                    Remember that ${k('\\theta')} is a function of time, and so ${k('\\alpha_\\theta=\\frac{d^2\\theta}{dt^2}')}. Also, this equation is only accurate for small angles.
                                `
                            }, {
                                latex: '\\omega&=\\sqrt{\\frac{g}{L}}',
                                description: `
                                    Angular frequency of a simple pendulum, where
                                    <ul>
                                        <li>${k('g')} is the acceleration due to gravity, and</li>
                                        <li>${k('L')} is the length of the pendulum.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: '\\omega&=\\sqrt{\\frac{\\kappa}{I}}',
                                description: `
                                    Angular frequency for a torsion pendulum, where
                                    <ul>
                                        <li>${k('\\kappa')} is the torsion constant of the pendulum, and</li>
                                        <li>${k('I')} is the moment of inertia of the object.</li>
                                    </ul>
                                    This is similar to ${k('\\omega=\\sqrt{\\frac{k}{m}}')} for SHM on a spring, but using the rotational equivalents of ${k('k')} and ${k('m')}.
                                `
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
                                latex: 'k&=\\frac{2\\pi}{\\lambda}',
                                description: `
                                    The wave number of a wave, where ${k('\\lambda')} is the wavelength.
                                `
                            }, {
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
                            }, {
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
                            }, {
                                latex: 'v&=\\sqrt{\\frac{F}{\\mu}}',
                                description: `
                                    The speed of a transverse wave on a string, where
                                    <ul>
                                        <li>${k('F')} is the tension on the string, and</li>
                                        <li>${k('\\mu')} is the mass per unit length of the string.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
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
                            }, {
                                latex: 'y(x,t)&=y_1(x,t)+y_2(x,t)',
                                description: `The principle of superposition. ${k('y')}, ${k('y_1')}, and ${k('y_2')} are wave functions.`
                            }, {
                                latex: 'y(x,t)&=2A\\sin(kx)\\sin(\\omega t)',
                                description: `
                                    The wave function of a standing wave, where
                                    <ul>
                                        <li>${k('A')} is the amplitude of the original wave,</li>
                                        <li>${k('k')} is the wave number,</li>
                                        <li>${k('x')} is the longitudinal position of the described particle,</li>
                                        <li>${k('\\omega')} is the angular frequency, and</li>
                                        <li>${k('t')} is the time.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'x&=\\frac{n\\lambda}{2}',
                                description: `
                                    The positions of nodes on a standing wave, where
                                    <ul>
                                        <li>${k('n\\in\\Z;n\\ge0')}, and</li>
                                        <li>${k('\\lambda')} is the wavelength.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'x&=\\frac{(2n+1)\\lambda}{4}',
                                description: `
                                    The positions of antinodes on a standing wave, where
                                    <ul>
                                        <li>${k('n\\in\\Z;n\\ge0')}, and</li>
                                        <li>${k('\\lambda')} is the wavelength.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f_n&=\\frac{nv}{2L}=nf_1',
                                description: `
                                    The harmonics of a standing wave, where
                                    <ul>
                                        <li>${k('f_n')} is the ${k('n')}th harmonic,</li>
                                        <li>${k('v')} is the wave speed,</li>
                                        <li>${k('L')} is the length of the vibrating string, and</li>
                                        <li>${k('f_1')} is the fundamental frequency (${k('f_n')} for ${k('n=1')}).</li>
                                    </ul>
                                `
                            },
                            'Chapter 16: Sound and Hearing',
                            {
                                latex: 'v&=\\sqrt{\\frac{B}{\\rho}}',
                                description: `
                                    The speed of a sound wave through a fluid, where
                                    <ul>
                                        <li>${k('B')} is the bulk modulus of the fluid, and</li>
                                        <li>${k('\\rho')} is the density of the fluid.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'v&=\\sqrt{\\frac{Y}{\\rho}}',
                                description: `
                                    The speed of a sound wave through a solid, where
                                    <ul>
                                        <li>${k('Y')} is the Young's modulus of the solid, which is similar to the bulk modulus, and</li>
                                        <li>${k('\\rho')} is the density of the solid.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'P_\\mathrm{max}&=BkA',
                                description: `
                                    The pressure amplitude of a sound wave in a fluid, where
                                    <ul>
                                        <li>${k('B')} is the bulk modulus of the medium,</li>
                                        <ii>${k('k')} is the wave number, and</ii>
                                        <li>${k('A')} is the displacement amplitude (the distance each particle moves in meters).</li>
                                    </ul>
                                    The result is in units of Pascals, and it represents the maximum deviation of pressure at a point from rest.
                                `
                            }, {
                                latex: '\\Delta P&=P_\\mathrm{max}\\sin(kx-\\omega t)',
                                description: `
                                    The change in pressure at a point from rest, where
                                    <ul>
                                        <li>${k('P_\\mathrm{max}')} is the pressure amplitude,</li>
                                        <li>${k('k')} is the wave number,</li>
                                        <li>${k('x')} is the longitudinal position of the point at rest,</li>
                                        <li>${k('\\omega')} is the angular frequency of the SHM, and</li>
                                        <li>${k('t')} is the time.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f_L&=\\frac{v\\pm v_L}{v\\mp v_S}f_S',
                                description: `
                                    The Doppler effect, where
                                    <ul>
                                        <li>${k('f_L')} is the frequency of the sound for the listener,</li>
                                        <li>${k('v')} is the speed of sound,</li>
                                        <li>${k('v_L')} is the velocity of the listener,</li>
                                        <li>${k('v_S')} is the velocity of the source, and</li>
                                        <li>${k('f_S')} is the frequency of the sound emitted from the source.</li>
                                    </ul>
                                    This equation assumes that the source and listener are moving in a line toward or away from one another.
                                `
                            }, {
                                latex: '\\sin\\alpha&=\\frac{v}{v_S}',
                                description: `
                                    In a shock wave,
                                    <ul>
                                        <li>${k('\\alpha')} is the angle of the wave,</li>
                                        <li>${k('v')} is the speed of sound, and</li>
                                        <li>${k('v_S')} is the speed of the sound source.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'd&=n\\lambda=\\frac{nv}{f}',
                                description: `
                                    The conditions for constructive interference, where
                                    <ul>
                                        <li>${k('d')} is the path difference,</li>
                                        <li>${k('n\\in\\Z;n\\ge0')},</li>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('v')} is the speed of sound, and</li>
                                        <li>${k('f')} is the frequency.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'd&=(2n+1)\\frac{\\lambda}{2}=\\frac{(2n+1)v}{2f}',
                                description: `
                                    The conditions for destructive interference, where
                                    <ul>
                                        <li>${k('d')} is the path difference,</li>
                                        <li>${k('n\\in\\Z;n\\ge0')},</li>
                                        <li>${k('\\lambda')} is the wavelength,</li>
                                        <li>${k('v')} is the speed of sound, and</li>
                                        <li>${k('f')} is the frequency.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f_n&=\\frac{nv}{2L}',
                                description: `
                                    The normal modes of an open pipe, where
                                    <ul>
                                        <li>${k('f_n')} is the ${k('n')}th harmonic/normal mode,</li>
                                        <li>${k('v')} is the speed of sound,</li>
                                        <li>${k('L')} is the length of the pipe, and</li>
                                        <li>${k('f_1')} is the fundamental frequency.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f_n&=\\frac{(2n-1)v}{4L}',
                                description: `
                                    The normal modes of a stopped pipe, where
                                    <ul>
                                        <li>${k('f_n')} is the ${k('n')}th harmonic,</li>
                                        <li>${k('v')} is the speed of sound,</li>
                                        <li>${k('L')} is the length of the pipe, and</li>
                                        <li>${k('f_1')} is the fundamental frequency.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f_\\mathrm{beat}&=|f_1-f_2|',
                                description: `The frequency of a beat is the absolute difference of the frequencies that make it up.`
                            }, {
                                latex: 'I&=\\frac{1}{2}\\sqrt{\\rho B}\\omega^2A^2=\\frac{P_\\mathrm{max}^2}{2\\rho v}',
                                description: `
                                    The intensity of a sound wave in a fluid, where
                                    <ul>
                                        <li>${k('\\rho')} is the density of the fluid,</li>
                                        <li>${k('B')} is the bulk modulus of the fluid,</li>
                                        <li>${k('\\omega')} is the angular frequency of the sound wave,</li>
                                        <li>${k('A')} is the displacement amplitude of the sound wave,</li>
                                        <li>${k('P_\\mathrm{max}')} is the pressure amplitude of the sound wave, and</li>
                                        <li>${k('v')} is the wave speed.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\beta&=(\\pu{10 dB})\\log\\frac{I}{I_0}',
                                description: `
                                    The intensity level of a sound, in decibels, where
                                    <ul>
                                        <li>${k('I')} is the intensity of the sound wave, and</li>
                                        <li>${k('I_0')} is a chosen reference intensity, equal to 10<sup>-12</sup> W m<sup>-2</sup>.</li>
                                    </ul>
                                `
                            },
                            'Chapter 21: Electric Charge and Electric Field',
                            {
                                latex: 'F&=k\\frac{|q_1q_2|}{r^2}=\\frac{1}{4\\pi\\epsilon_0}\\frac{|q_1q_2|}{r^2}',
                                description: `
                                    Coulomb's law, which descibes the magnitude of force between two charged objects.
                                    <ul>
                                        <li>${k('k')} is Coulomb's constant,</li>
                                        <li>${k('q_1')} and ${k('q_2')} are the charges on each object,</li>
                                        <li>${k('r')} is the distance between them, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathbf{E}&=\\frac{\\mathbf{F}_0}{q_0}',
                                description: `The electric field at a point (${k('\\mathbf{E}')}) as experienced by a test charge at that point is defined as the force exerted on the charge (${k('\\mathbf{F}_0')}) divided by the magnitude of the test charge (${k('q_0')}).`
                            }, {
                                latex: '\\mathbf{E}&=\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\hat\\mathbf{r}',
                                description: `
                                    The electric field caused by a point charge at a point, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('q')} is the value of the point charge,</li>
                                        <li>${k('r')} is the distance between the point charge and the point, and</li>
                                        <li>${k('\\hat{\\mathbf{r}}')} is the unit vector in the direction from the point charge to the point.</li>
                                    </ul>
                                    If ${k('q')} is positive, then ${k('\\mathbf{E}')} points away from the point charge. If ${k('q')} is negative, then ${k('\\mathbf{E}')} points toward the point charge.
                                `
                            }, {
                                latex: 'E&=\\frac{\\lambda}{2\\pi r\\epsilon_0}',
                                description: `
                                    The magnitude of the electric field at a distance ${k('r')} from an infinite line charge.
                                    <ul>
                                        <li>${k('\\lambda')} is the linear charge density, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E&=\\frac{\\sigma}{2\\epsilon_0}',
                                description: `
                                    The magnitude of the electric field caused by an infinite plane charge, where
                                    <ul>
                                        <li>${k('\\sigma')} is the surface charge density, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                    The magnitude of the field doesn't depend on distance from the plane.
                                `
                            }, {
                                latex: 'E&=\\frac{\\sigma}{\\epsilon_0}',
                                description: `
                                    The magnitude of the electric field caused by two infinite plane charges of opposite charge, where
                                    <ul>
                                        <li>${k('\\sigma')} is the surface charge density of both planes, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                    The magnitude of the field doesn't depend on distance from the planes.
                                `
                            }, {
                                latex: 'p&=qd',
                                description: `
                                    The magnitude of the electric dipole moment, where
                                    <ul>
                                        <li>${k('q')} is the magnitude of charge on each end of the dipole, and</li>
                                        <li>${k('d')} is the length of the dipole.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\boldsymbol{\\tau}&=\\mathbf{p}\\times\\mathbf{E}',
                                description: `
                                    The torque on a dipole in a uniform electric field ${k('\\mathbf{E}')}. ${k('\\mathbf{p}')} is a vector pointing from the center of the dipole to the positive charge.
                                `
                            }, {
                                latex: 'U&=-\\mathbf{p}\\cdot\\mathbf{E}',
                                description: `
                                    The potential energy of a dipole in a uniform electric field ${k('\\mathbf{E}')}. ${k('\\mathbf{p}')} is a vector pointing from the center of the dipole to the positive charge.
                                `
                            },
                            'Chapter 22: Gauss\'s Law',
                            {
                                latex: '\\Phi_E&=\\int E\\cos\\phi\\,dA=\\int\\mathbf{E}\\cdot\\,d\\mathbf{A}',
                                description: `
                                    The electric flux through a surface, where
                                    <ul>
                                        <li>${k('\\mathbf{E}')} is the electric field over a surface element ${k('d\\mathbf{A}')}, and</li>
                                        <li>${k('\\phi')} is the angle between ${k('\\mathbf{E}')} and ${k('E_\\perp')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Phi_E=\\oint\\mathbf{E}\\cdot\\,d\\mathbf{A}&=\\frac{Q}{\\epsilon_0}',
                                description: `
                                    Gauss's law, which states that the electric flux (${k('\\Phi_E')}) through a closed surface is equal to the total charge (${k('Q')}) enclosed by the surface divided by ${k('\\epsilon_0')} (the permittivity of vacuum). The integral ${k('\\oint\\mathbf{E}\\cdot\\,d\\mathbf{A}')} is nearly identical to the previous equation, except that is integral is explicitly stated to be over a closed surface.
                                `
                            }, {
                                latex: 'E_\\perp&=\\frac{\\sigma}{\\epsilon_0}',
                                description: `
                                    On a charged surface, this is the perpendicular component of the electric field at a point on the surface.
                                    <ul>
                                        <li>${k('\\sigma')} is the surface charge density at the point, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                `
                            },
                            'Chapter 23: Electric Potential',
                            {
                                latex: 'U&=\\frac{1}{4\\pi\\epsilon_0}\\frac{qq_0}{r}',
                                description: `
                                    The electric potential energy between two charges separated by a distance ${k('r')}.
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum, and</li>
                                        <li>${k('q')} and ${k('q_0')} are the values of the two charges.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'U&=\\frac{q_0}{4\\pi\\epsilon_0}\\sum_i\\frac{q_i}{r_i}',
                                description: `
                                    The electric potential energy between a charge ${k('q_0')} and multiple other charges ${k('q_i')}.
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('q_0')} and ${k('q_i')} are the values of each respective charge, and</li>
                                        <li>${k('r_i')} is the distance of charge ${k('i')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V&=\\frac{U}{q_0}',
                                description: `Electric potential (or voltage) is the electric potential energy caused by a point charge divided by the value of that point charge.`
                            }, {
                                latex: 'V&=\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r}',
                                description: `
                                    The electric potential due to a charge ${k('q')}, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('q')} is the value of the charge, and</li>
                                        <li>${k('r')} is the distance from the charge to the point where voltage is being measured.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V&=\\frac{1}{4\\pi\\epsilon_0}\\sum_i\\frac{q_i}{r_i}',
                                description: `
                                    The electric potential due to multiple charges, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('q_i')} is the value of the ${k('i')}th charge, and</li>
                                        <li>${k('r_i')} is the distance from the ${k('i')}th charge to the point where voltage is being measured.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V&=\\frac{1}{4\\pi\\epsilon_0}\\int\\frac{dq}{r}',
                                description: `
                                    The electric potential due to a continuous distribution of charge, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('dq')} is the value of the charge element, and</li>
                                        <li>${k('r')} is the distance from the charge element to the point where voltage is being measured.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V_a-V_b&=\\int_a^b\\mathbf{E}\\cdot d\\mathbf{l}',
                                description: `
                                    The electric potential difference between points ${k('a')} and ${k('b')}, where
                                    <ul>
                                        <li>${k('\\mathbf{E}')} is the electric field, and</li>
                                        <li>${k('d\\mathbf{l}')} is the line element along the path from ${k('a')} to ${k('b')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathbf{E}&=-\\left(\\pmb{\\hat\\text\\i}\\frac{\\partial V}{\\partial x}+\\pmb{\\hat\\text\\j}\\frac{\\partial V}{\\partial y}+\\mathbf{\\hat k}\\frac{\\partial V}{\\partial z}\\right)=-\\nabla V',
                                description: `
                                    The electric field, defined as the gradient of electric potential.
                                    <ul>
                                        <li>${k('\\pmb{\\hat\\text\\i}')}, ${k('\\pmb{\\hat\\text\\j}')}, and ${k('\\mathbf{\\hat k}')} are the unit vectors in the ${k('x')}, ${k('y')}, and ${k('z')} directions, respectively, and</li>
                                        <li>${k('V')} is a function of ${k('(x,y,z)')} which represents electric potential at a point.</li>
                                    </ul>
                                `
                            },
                            'Chapter 24: Capacitance and Dielectrics',
                            {
                                latex: 'C&=\\frac{Q}{V_{ab}}',
                                description: `
                                    The capacitance of a capacitor, where
                                    <ul>
                                        <li>${k('Q')} is the magnitude of charge on each capacitor, and</li>
                                        <li>${k('V_{ab}')} is the potential difference across the two conductors.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'C=\\frac{Q}{V_{ab}}&=\\epsilon_0\\frac{A}{d}',
                                description: `
                                    The capacitance of a parallel-plate capacitor in a vacuum, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of of vacuum,</li>
                                        <li>${k('A')} is the area of each plate, and</li>
                                        <li>${k('d')} is the distance separating the plates.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\frac{1}{C_\\mathrm{eq}}&=\\frac{1}{C_1}+\\frac{1}{C_2}+\\frac{1}{C_3}+\\ldots',
                                description: `
                                    For capacitors in series, the reciprocal of the equivalent capacitance (${k('C_\\mathrm{eq}')}) is equal to the sum of the reciprocals of the capacitances of each capacitor (${k('C_1,C_2,\\ldots')}).
                                `
                            }, {
                                latex: 'C_\\mathrm{eq}&=C_1+C_2+C_3+\\ldots',
                                description: `
                                    For capacitors in parallel, the equivalent capacitance (${k('C_\\mathrm{eq}')}) is equal to the sum of the capacitances of each capacitor (${k('C_1,C_2,\\ldots')}).
                                `
                            }, {
                                latex: 'U&=\\frac{Q^2}{2C}=\\frac{1}{2}CV^2=\\frac{1}{2}QV',
                                description: `
                                    The potential energy in a capacitor, where
                                    <ul>
                                        <li>${k('Q')} is the magnitude of charge on each capacitor,</li>
                                        <li>${k('C')} is the capacitance, and</li>
                                        <li>${k('V')} is the electric potential between the two plates of the capacitor.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'u&=\\frac{1}{2}\\epsilon_0E^2',
                                description: `
                                    The electric potential energy density in a volume of space, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum, and</li>
                                        <li>${k('E')} is the magnitude of electric field in the space.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'K&=\\frac{C}{C_0}',
                                description: `
                                    The dielectric constant of a material, where
                                    <ul>
                                        <li>${k('C')} is the capacitance of a capacitor with the dielectric, and</li>
                                        <li>${k('C_0')} is the capacitance of the capacitor without the dielectric (i.e., in vacuum).</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E&=\\frac{E_0}{K}',
                                description: `
                                    The electric field between the plates of a conductor with a dielectric, where
                                    <ul>
                                        <li>${k('E_0')} is the electric field if there were no dielectric (i.e., in vacuum), and</li>
                                        <li>${k('K')} is the dielectric constant of the dielectric.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\sigma_\\mathrm{i}&=\\sigma\\left(1-\\frac{1}{K}\\right)',
                                description: `
                                    The induced surface charge density of a dielectric in a capacitor, where
                                    <ul>
                                        <li>${k('\\sigma')} is the surface charge density on each plate of the capacitor, and</li>
                                        <li>${k('K')} is the dielectric constant of the dielectric.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\epsilon&=K\\epsilon_0',
                                description: `
                                    The permittivity of a material, where
                                    <ul>
                                        <li>${k('K')} is the dielectric constant of the material, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'C&=KC_0=\\epsilon\\frac{A}{d}',
                                description: `
                                    The capacitance of a parallel-plate capacitor with a dielectric between the plates, where
                                    <ul>
                                        <li>${k('K')} is the dielectric constant of the dielectric,</li>
                                        <li>${k('C_0')} is the capacitance of the capacitor without the dielectric (i.e., in vacuum),</li>
                                        <li>${k('\\epsilon')} is the permittivity of the dielectric,</li>
                                        <li>${k('A')} is the area of each plate, and</li>
                                        <li>${k('d')} is the separation between the plates.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'u&=\\frac{1}{2}\\epsilon E^2',
                                description: `
                                    The electric potential energy density in a volume of space occupied by a dielectric, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of the dielectric, and</li>
                                        <li>${k('E')} is the magnitude of electric field in the space.</li>
                                    </ul>
                                `
                            },
                            'Chapter 25: Current, Resistance, and Electromotive Force',
                            {
                                latex: 'I&=\\frac{dQ}{dt}=n|q|v_\\mathrm{d}A',
                                description: `
                                    The definition of current through an area ${k('A')}, where
                                    <ul>
                                        <li>${k('\\frac{dQ}{dt}')} is the net flow of charge with respect to time,</li>
                                        <li>${k('n')} is the concentration of moving charged particles,</li>
                                        <li>${k('q')} is the charge per particle,</li>
                                        <li>${k('v_\\mathrm{d}')} is the particle drift speed, and</li>
                                        <li>${k('A')} is the cross-sectional area.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'J&=\\frac{I}{A}=n|q|v_\\mathrm{d}',
                                description: `
                                    The scalar definition of current density (the magnitude of the vector definition), where
                                    <ul>
                                        <li>${k('I')} is the current moving through an area ${k('A')},</li>
                                        <li>${k('n')} is the concentration of moving charged particles,</li>
                                        <li>${k('q')} is the charge per particle, and</li>
                                        <li>${k('v_\\mathrm{d}')} is the particle drift speed.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathbf{J}&=nq\\mathbf{v}_\\mathrm{d}',
                                description: `
                                    The vector definition of current density, where
                                    <ul>
                                        <li>${k('n')} is the concentration of moving charged particles,</li>
                                        <li>${k('q')} is the charge per particle, and</li>
                                        <li>${k('\\mathbf{v}_d')} is the particle drift velocity.</li>
                                    </ul>
                                    ${k('\\mathbf{J}')} is a vector quantity and ${k('I')} is not. This is because ${k('I')} typically describes current flowing through a wire, where direction is in either one direction or the other. In this case, it would not be terribly useful to define a vector current. However, ${k('\\mathbf{J}')} describes current per unit area, which is more "abstract"; it isn't a term typically used when describing current through a wire. In this case, it is important to know the direction of current flow since it could be in any direction.
                                `
                            }, {
                                latex: '\\rho&=\\frac{E}{J}',
                                description: `
                                    The definition of resistivity of a material, where
                                    <ul>
                                        <li>${k('E')} is the magnitude of the magnetic field in the material, and</li>
                                        <li>${k('J')} is the magnitude of current density caused by the electric field.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\sigma&=\\frac{1}{\\rho}',
                                description: `
                                    The definition of conductivity of a material, where ${k('\\rho')} is the resistivity of the material.
                                `
                            }, {
                                latex: '\\rho(T)&=\\rho_0\\cdot(1+\\alpha\\cdot(T-T_0))',
                                description: `
                                    The resistivity of a material as a function of temperature ${k('T')}. This is only accurate for temperatures of up to about 100 °C or so.
                                    <ul>
                                        <li>${k('\\rho_0')} is the resistivity at the reference temperature ${k('T_0')}, and</li>
                                        <li>${k('\\alpha')} is the temperature coefficient of resistivity.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V&=EL',
                                description: `
                                    <ul>
                                        <li>${k('V')} is voltage across two ends of a wire,</li>
                                        <li>${k('E')} is the magnitude of electric field in the wire, and</li>
                                        <li>${k('L')} is the length of the wire.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'R&=\\frac{\\rho L}{A}',
                                description: `
                                    The definition of resistance of a conductor, where
                                    <ul>
                                        <li>${k('\\rho')} is the resistivity of the conductor,</li>
                                        <li>${k('L')} is the length of the conductor wire, and</li>
                                        <li>${k('A')} is the cross-sectional area of the conductor wire.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V&=IR',
                                description: `
                                    Ohm's law, where
                                    <ul>
                                        <li>${k('V')} is the voltage between the two ends of a conductor,</li>
                                        <li>${k('I')} is the current in the conductor, and</li>
                                        <li>${k('R')} is the resistance of the conductor.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'R(T)&=R_0\\cdot(1+\\alpha\\cdot(T-T_0))',
                                description: `
                                    Resistance as a function of temperature ${k('T')}. This is only accurate for temperatures of up to about 100 °C or so.
                                    <ul>
                                        <li>${k('R_0')} is the resistance at a reference temperature ${k('T_0')}, and</li>
                                        <li>${k('\\alpha')} is the temperature coefficient of resistance.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'V_{ab}&=\\mathcal{E}-Ir',
                                description: `
                                    The voltage between two ends of a voltage source, where
                                    <ul>
                                        <li>${k('\\mathcal{E}')} is the emf generated by the source,</li>
                                        <li>${k('I')} is the current running through the source, and</li>
                                        <li>${k('r')} is the internal resistance of the source.</li>
                                    </ul>
                                    In an ideal case with no resistance, ${k('V_{ab}=\\mathcal{E}')}.
                                `
                            }, {
                                latex: 'I&=\\frac{\\mathcal{E}}{R+r}',
                                description: `
                                    The current through a circuit powered by a source with internal resistance, where
                                    <ul>
                                        <li>${k('\\mathcal{E}')} is the emf generated by the souce,</li>
                                        <li>${k('R')} is the resistance of the circuit, and</li>
                                        <li>${k('r')} is the internal resistance of the source.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'P&=V_{ab}I',
                                description: `
                                    The power entering or leaving a circuit element, where
                                    <ul>
                                        <li>${k('V_{ab}')} is the voltage across the circuit element, and</li>
                                        <li>${k('I')} is the current in the circuit element.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'P&=I^2R=\\frac{V_{ab}^2}{R}',
                                description: `
                                    The power dissapated by a resistor, where
                                    <ul>
                                        <li>${k('I')} is the current flowing through the resister,</li>
                                        <li>${k('V_{ab}')} is the voltage across the resistor, and</li>
                                        <li>${k('R')} is the resistance of the resistor.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'P&=\\mathcal{E}I-I^2R',
                                description: `
                                    The power output of an emf source, where
                                    <ul>
                                        <li>${k('\\mathcal{E}')} is the emf generated by the source,</li>
                                        <li>${k('I')} is the current in the circuit, and</li>
                                        <li>${k('r')} is the internal resistance of the source.</li>
                                    </ul>
                                    The ${k('\\mathcal{E}I')} term here represents the rate of energy conversion (from chemical to electric potential), and the ${k('I^2R')} term represents the rate of energy dissipation (from electric to thermal).
                                `
                            }, {
                                latex: 'P&=\\mathcal{E}I+I^2r',
                                description: `
                                    The power entering an emf source from a greater emf source (e.g., charging a battery), where
                                    <ul>
                                        <li>${k('\\mathcal{E}')} is the emf generated by the smaller source,</li>
                                        <li>${k('I')} is the current in the circuit, and</li>
                                        <li>${k('r')} is the internal resistance of the smaller source.</li>
                                    </ul>
                                `
                            },
                            'Chapter 26: Direct-Current Circuits',
                            {
                                latex: 'R_\\mathrm{eq}&=R_1+R_2+R_3+\\ldots',
                                description: `
                                    For resistors in series, the equivalent resistance is the sum of the resistances of each individual resistor.
                                `
                            }, {
                                latex: '\\frac{1}{R_\\mathrm{eq}}&=\\frac{1}{R_1}+\\frac{1}{R_2}+\\frac{1}{R_3}+\\ldots',
                                description: `
                                    For resistors in parallel, the reciprocal of the equivalent resistance is the sum of the reciprocals of the resistances of each individual resistor.
                                `
                            }, {
                                latex: '\\frac{I_1}{I_2}&=\\frac{R_2}{R_1}',
                                description: `
                                    For two resistors in parallel.
                                    <ul>
                                        <li>${k('I_1')} and ${k('I_2')} are the currents running through the resistors, and</li>
                                        <li>${k('R_1')} and ${k('R_2')} are the resistances of the resistors.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\textstyle\\sum I&=0',
                                description: `
                                    Kirchhoff's junction rule states that at each junction of a circuit, the sum of currents into it is zero.
                                `
                            }, {
                                latex: '\\textstyle\\sum V&=0',
                                description: `
                                    Kirchhoff's loop rule states that for each loop of a circuit, the sum of voltages is zero.
                                `
                            },
                            'Chapter 27: Magnetic Field and Magnetic Forces',
                            {
                                latex: '\\mathbf{F}&=q\\mathbf{v}\\times\\mathbf{B}',
                                description: `
                                    The force ${k('\\mathbf{F}')} exerted by an electric field ${k('\\mathbf{B}')} on a charge ${k('q')} moving with velocity ${k('\\mathbf{v}')}.
                                `
                            }, {
                                latex: '\\Phi_B&=\\int B\\cos\\phi\\,dA=\\int\\mathbf{B}\\cdot d\\mathbf{A}',
                                description: `
                                    The magnetic flux though a surface, where
                                    <ul>
                                        <li>${k('\\mathbf{B}')} is the magnetic field at a surface element ${k('d\\mathbf{A}')}, and</li>
                                        <li>${k('\\phi')} is the angle between ${k('\\mathbf{B}')} and ${k('B_\\perp')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\oint\\mathbf{B}\\cdot d\\mathbf{A}&=0',
                                description: `
                                    Gauss's law for magnetism, where ${k('\\mathbf{B}')} is the magnetic field at surface element ${k('d\\mathbf{A}')}.
                                `
                            }, {
                                latex: 'R&=\\frac{mv}{|q|B}',
                                description: `
                                    The radius of circular motion in a uniform magnetic field, where
                                    <ul>
                                        <li>${k('m')} is the particle's mass,</li>
                                        <li>${k('v')} is the particle's speed,</li>
                                        <li>${k('q')} is the particle's charge, and</li>
                                        <li>${k('B')} is the magnitude of magnetic field.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'd\\mathbf{F}&=I\\,d\\mathbf{l}\\times\\mathbf{B}',
                                description: `
                                    The magnetic force on an infinitessimal wire segment, where
                                    <ul>
                                        <li>${k('I')} is the current through the wire,</li>
                                        <li>${k('d\\mathbf{l}')} is the length of the wire segment, in the direction of the current, and</li>
                                        <li>${k('\\mathbf{B}')} is the magnetic field.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\tau&=IBA\\sin\\phi',
                                description: `
                                    The magnitude of torque on any current-carrying loop from a uniform magnetic field, where
                                    <ul>
                                        <li>${k('I')} is the current in the loop,</li>
                                        <li>${k('B')} is the magnitude of the magnetic field,</li>
                                        <li>${k('A')} is the area of the loop, and</li>
                                        <li>${k('\\phi')} is the angle between the normal to the loop plane and the magnetic field direction.</li>
                                    </ul>
                                    This loop is also called a magnetic dipole.
                                `
                            }, {
                                latex: '\\boldsymbol{\\tau}&=\\boldsymbol{\\mu}\\times\\mathbf{B}',
                                description: `
                                    The torque on any current-carrying loop from a uniform magnetic field, where
                                    <ul>
                                        <li>${k('\\boldsymbol{\\mu}')} is the magnetic dipole moment (described below), and</li>
                                        <li>${k('\\mathbf{B}')} is the magnetic field.</li>
                                    </ul>
                                    The magnetic dipole moment is a vector normal to the plane of the loop. The side of the plane it is on can be found using a right hand rule. With the fingers curled in the direction of the current, the thumb points in the direction of ${k('\\boldsymbol{\\mu}')}. The magnitude is the current ${k('I')} times the area of the loop ${k('A')}. (${k('\\mu=IA')})
                                    <br>
                                    This loop is also called a magnetic dipole.
                                `
                            }, {
                                latex: 'U&=-\\boldsymbol{\\mu}\\cdot\\mathbf{B}',
                                description: `
                                    The potential energy in a magnetic dipole, where
                                    <ul>
                                        <li>${k('\\boldsymbol{\\mu}')} is the magnetic dipole moment (explained in the previous equation), and</li>
                                        <li>${k('\\mathbf{B}')} is the magnetic field.</li>
                                    </ul>
                                `
                            },
                            'Chapter 28: Sources of Magnetic Field',
                            {
                                latex: '\\mathbf{B}&=\\frac{\\mu_0}{4\\pi}\\frac{q\\mathbf{v}\\times\\mathbf{\\hat r}}{r^2}',
                                description: `
                                    The magnetic field caused by a moving point charge, where
                                    <ul>
                                        <li>${k('\\mu_0')} is the permeability of vacuum,</li>
                                        <li>${k('q')} is the charge,</li>
                                        <li>${k('\\mathbf{v}')} is the velocity of the charge, and</li>
                                        <li>${k('\\mathbf{r}')} is the distance from the charge to the field point. (${k('\\mathbf{\\hat r}')} is the unit vector in this direction, and ${k('r')} is the magnitude.)</li>
                                    </ul>
                                `
                            }, {
                                latex: 'd\\mathbf{B}&=\\frac{\\mu_0}{4\\pi}\\frac{I\\,d\\mathbf{l}\\times\\mathbf{\\hat r}}{r^2}',
                                description: `
                                    The magnetic field caused by an infinitessimal current element, where
                                    <ul>
                                        <li>${k('\\mu_0')} is the permeability of vacuum,</li>
                                        <li>${k('I')} is the current,</li>
                                        <li>${k('d\\mathbf{l}')} is the length of the current element, and</li>
                                        <li>${k('\\mathbf{r}')} is the distance from the current element to the field point. (${k('\\mathbf{\\hat r}')} is the unit vector in this direction, and ${k('r')} is the magnitude.)</li>
                                    </ul>
                                `
                            }, {
                                latex: 'B&=\\frac{\\mu_0I}{2\\pi r}',
                                description: `
                                    The magnitude of magnetic field a distance ${k('r')} from an infinitely long current-carrying wire, where
                                    <ul>
                                        <li>${k('\\mu_0')} is the permeability of vacuum, and</li>
                                        <li>${k('I')} is the current in the wire.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\frac{F}{L}&=\\frac{\\mu_0II\'}{2\\pi r}',
                                description: `
                                    For two parallel, current-carrying conductors, this is the magnetic force per unit length between them.
                                    <ul>
                                        <li>${k('\\mu_0')} is the permeability of vacuum,</li>
                                        <li>${k('I')} and ${k('I\'')} are the currents through the conductors, and</li>
                                        <li>${k('r')} is the distance between them.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'B_x&=\\frac{\\mu_0Ia^2}{2(x^2+a^2)^{3/2}}',
                                description: `
                                    The magnetic field a distance ${k('x')} on the axis of a circular current-carrying loop, where
                                    <ul>
                                        <li>${k('\\mu_0')} is the permeability of vacuum,</li>
                                        <li>${k('I')} is the current through the loop, and</li>
                                        <li>${k('a')} is the radius of the loop.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'B_x&=\\frac{\\mu_0NI}{2a}',
                                description: `
                                    The magnetic field a distance ${k('x')} on the axis of a 
                                `
                            }, {
                                latex: '\\oint\\mathbf{B}\\cdot d\\mathbf{l}&=\\mu_0I',
                                description: `
                                    Ampere's law (for non-time-varying magnetic fields), where
                                    <ul>
                                        <li>${k('\\mathbf{B}')} is the magnetic field,</li>
                                        <li>${k('d\\mathbf{l}')} is an element of the line being integrated over,</li>
                                        <li>${k('\\mu_0')} is the permeability of vacuum, and</li>
                                        <li>${k('I')} is the current enclosed by the line.</li>
                                    </ul>
                                    Makes a similar statement to Gauss's law, but for magnetic fields.
                                `
                            },
                            'Chapter 29: Electromagnetic Induction',
                            {
                                latex: '\\mathcal{E}&=-\\frac{d\\Phi_B}{dt}',
                                description: `
                                    The induced emf in a closed loop is the time-derivative of the magnetic flux, ${k('\\Phi_B')}.
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
                            }, {
                                latex: 'v&=\\pu{343 m s-1}',
                                description: `The speed of sound in dry air at ${k('\\pu{20 °C}')}.`
                            }, {
                                latex: 'k&=\\pu{8.98755e9 N m2 C-2}',
                                description: 'Coulomb\'s constant.'
                            }, {
                                latex: '\\epsilon_0&=\\pu{8.85418e-12 F m-1}',
                                description: 'The permittivity of vacuum.'
                            }, {
                                latex: 'e&=\\pu{1.60218e-19 C}',
                                description: 'The charge on an electron.'
                            }, {
                                latex: '\\mu_0&=\\pu{1.25664e-6 m kg s-2 A-2}',
                                description: 'The permeability of vacuum.'
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
                            }, {
                                latex: 'K&=\\frac{1}{2}mv^2',
                                description: `
                                    Kinetic energy, where
                                    <ul>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('v')} is the velocity of the object.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: 'E&=K+U',
                                description: `
                                    Total mechanical energy, where
                                    <ul>
                                        <li>${k('K')} is the kinetic energy, and</li>
                                        <li>${k('U')} is the potential energy.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'v&=\\sqrt{\\frac{GM_\\oplus}{r}}',
                                description: `
                                    The velocity of an object in circular orbit around the Earth, where
                                    <ul>
                                        <li>${k('G')} is the gravitational constant,</li>
                                        <li>${k('M_\\oplus')} is the mass of the Earth, and</li>
                                        <li>${k('r')} is the distance between the two objects.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
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
                            }, {
                                latex: '\\Delta t&=\\gamma\\Delta t_0',
                                description: `
                                    This equation compares a proper time, ${k('\\Delta t_0')}, and that same time as observed by an observer in another frame of reference (${k('\\Delta t')}). ${k('\\gamma')} is the Lorentz factor.
                                `
                            }, {
                                latex: 'l&=\\frac{l_0}{\\gamma}',
                                description: `
                                    This equation compares a proper length, ${k('l_0')}, and that same length as observed by an observer in another frame of reference (${k('l')}). ${k('\\gamma')} is the Lorentz factor.
                                `
                            }, {
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
                            }, {
                                latex: 'v_x&=\\frac{v\'_x+u}{1+\\frac{uv\'_x}{c^2}}',
                                description: `
                                    The velocity of an object in its own frame of reference, given its apparent velocity to a &#8216;stationary&#8217; frame of reference.
                                    <ul>
                                        <li>${k('v\'_x')} is the apparent velocity to us,</li>
                                        <li>${k('u')} is the speed of the &#8216;moving&#8217; frame, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: 'p&=\\gamma mv',
                                description: `
                                    Relativistic momentum, where
                                    <ul>
                                        <li>${k('\\gamma')} is the Lorentz factor,</li>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('v')} is the speed of the object.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'F&=\\gamma^3ma',
                                description: `
                                    Relativistic force where ${k('\\bm{F}')} and ${k('\\bm{v}')} are parallel.
                                    <ul>
                                        <li>${k('\\gamma')} is the Lorentz factor,</li>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('a')} is the magnitude of acceleration of the object.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'F&=\\gamma ma',
                                description: `
                                    Relativistic force where ${k('\\bm{F}')} and ${k('\\bm{v}')} are perpendicular.
                                    <ul>
                                        <li>${k('\\gamma')} is the Lorentz factor,</li>
                                        <li>${k('m')} is the mass of the object, and</li>
                                        <li>${k('a')} is the magnitude of acceleration of the object.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'K&=mc^2(\\gamma-1)',
                                description: `
                                    Relativistic kinetic energy, where
                                    <ul>
                                        <li>${k('m')} is the mass of the object,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('\\gamma')} is the Lorentz factor.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: 'K_\\mathrm{max}&=eV_0',
                                description: `
                                    The maximum kinetic energy of a photoelectron, where
                                    <ul>
                                        <li>${k('e')} is the charge on an electron, and</li>
                                        <li>${k('V_0')} is the stopping potential, or the potential required to stop the emitted electron with highest energy.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'K_\\mathrm{max}&=hf-\\phi',
                                description: `
                                    The maximum kinetic energy of a photoelectron, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('f')} is the frequency of the wave, equal to ${k('\\frac{c}{\\lambda}')}, and</li>
                                        <li>${k('\\phi')} is the work function, or the energy required to eject the electron.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: 'K_\\mathrm{max}&=eV_\\mathrm{AC}',
                                description: `
                                    The maximum kinetic energy of a bremsstrahlung photon, where
                                    <ul>
                                        <li>${k('e')} is the charge of an electron, and</li>
                                        <li>${k('V_\\mathrm{AC}')} is the accelerating voltage for the electron.</li>
                                    </ul>
                                `
                            }, {
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
                            }, {
                                latex: '\\lambda\'-\\lambda&=\\frac{h}{m_\\mathrm{e}c}(1-\\cos\\phi)',
                                description: `
                                    The difference in wavelength between incident and scattered radiation due to the Compton effect.
                                    <ul>
                                        <li>${k('\\lambda\'')} is the wavelength of the scattered light,</li>
                                        <li>${k('\\lambda')} is the wavelength of the incident light,</li>
                                        <li>${k('h')} is Plack's constant,</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('\\phi')} is the angle at which the photon scatters.</li>
                                    </ul>
                                    The scattered wavelength will always be longer than the incident wavelength.
                                `
                            }, {
                                latex: '\\Delta x\\Delta p_x\\ge\\frac{\\hbar}{2}',
                                description: `
                                    Heisenberg's uncertainty principle for position and momentum of a particle, where
                                    <ul>
                                        <li>${k('\\Delta x')} is the uncertainty in position of the particle,</li>
                                        <li>${k('\\Delta p_x')} is the uncertainty in momentum of the particle, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
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
                            }, {
                                latex: '\\lambda&=\\frac{h}{\\sqrt{2m_\\mathrm{e}eV_\\mathrm{AC}}}',
                                description: `
                                    De Broglie wavelength of an electron from the Davisson-Germer experiment, where
                                    <ul>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of an electron,</li>
                                        <li>${k('e')} is the charge on an electron, and</li>
                                        <li>${k('V_\\mathrm{AC}')} is the voltage required to accelerate the electron to its current speed.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'd\\sin\\theta&=m\\lambda',
                                description: `
                                    The angles of maximum reflection off of a diffraction grating, where
                                    <ul>
                                        <li>${k('d')} is the spacing between slits of the grating,</li>
                                        <li>${k('\\theta')} is the angle of maximum reflection,</li>
                                        <li>${k('m\\in\\Z;m\\ge0')}, and</li>
                                        <li>${k('\\lambda')} is the wavelength of the particle.</li>
                                    </ul>
                                    With electron diffraction, the diffraction grating is the surface of a crystal, where the slits are the atoms on the surface separated by distance ${k('d')}.
                                `
                            }, {
                                latex: 'L_n=m_\\mathrm{e}v_nr_n&=n\\frac{h}{2\\pi}',
                                description: `
                                    The angular momentum of an electron in its ${k('n')}th orbit of a neutral hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron,</li>
                                        <li>${k('v_n')} is the velocity of the electron at its energy level,</li>
                                        <li>${k('r_n')} is the radius of the electron's orbit at its energy level, and</li>
                                        <li>${k('h')} is Planck's constant.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'r_n&=\\frac{\\epsilon_0n^2h^2}{\\pi m_\\mathrm{e}e^2}=n^2a_0',
                                description: `
                                    The radius of the ${k('n')}th orbit of an electron in a neutral hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron,</li>
                                        <li>${k('e')} is the magnitude of the charge on the electron, and</li>
                                        <li>${k('a_0')} is the Bohr radius, or the radius of the ${k('n=1')} orbit of the electron.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'v_n&=\\frac{e^2}{2\\epsilon_0nh}',
                                description: `
                                    The velocity of an electron in its ${k('n')}th orbit of a neutral hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('e')} is the magnitude of the charge on the electron, and</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('h')} is Planck's constant.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'K_n=\\frac{1}{2}m_\\mathrm{e}v_n^2&=\\frac{1}{2}\\frac{m_\\mathrm{e}e^4}{4\\epsilon_0^2n^2h^2}',
                                description: `
                                    The kinetic energy of an electron in its ${k('n')}th orbit of a neutral hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron,</li>
                                        <li>${k('v_n')} is the velocity of the electron at its energy level,</li>
                                        <li>${k('e')} is the magnitude of the charge on the electron,</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum, and</li>
                                        <li>${k('h')} is Planck's constant.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'U_n=-\\frac{e^2}{4\\pi\\epsilon_0r_n}&=-\\frac{m_\\mathrm{e}e^4}{4\\epsilon_0^2n^2h^2}',
                                description: `
                                    The potential energy of an electron in its ${k('n')}th orbit of a neutral hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('e')} is the magnitude of the charge on the electron,</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('r_n')} is the radius of the electron's orbit at its energy level,</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron, and</li>
                                        <li>${k('h')} is Planck's constant.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'E_n=K_n+U_n&=-\\frac{1}{2}\\frac{m_\\mathrm{e}e^4}{4\\epsilon_0^2n^2h^2}=-\\frac{hcR_\\ce{H}}{n^2}',
                                description: `
                                    The total energy of an electron in its ${k('n')}th orbit of a hydrogen atom, according to the Bohr model.
                                    <ul>
                                        <li>${k('K_n')} is the kinetic energy of the electron at its energy level,</li>
                                        <li>${k('U_n')} is the potential energy of the electron at its energy level,</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron,</li>
                                        <li>${k('e')} is the magnitude of the charge on the electron,</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('R_\\ce{H}')} is the Rydberg constant for hydrogen.</li>
                                    </ul>
                                    ${k('n')} defines the orbit and also the energy level of the electron.
                                `
                            }, {
                                latex: 'm_\\mathrm{r}&=\\frac{m_1m_2}{m_1+m_2}',
                                description: `
                                    The reduced mass of two orbiting bodies (e.g., an electron orbiting a nucleus), given the masses of both bodies. This turns a two-body problem (object ${k('A')} pulls on object ${k('B')} and vice versa) into a one-body problem (object ${k('A')} orbits a fixed point, or object ${k('B')} orbits a fixed point) by pretending that the other mass doesn't move. To compensate for the other mass not moving, we pretend that it is lighter (using this equation).
                                `
                            }, {
                                latex: 'I&=\\sigma T^4',
                                description: `
                                    The Stefan-Boltzmann law, where
                                    <ul>
                                        <li>${k('I')} is the intensity of light (power per unit area),</li>
                                        <li>${k('\\sigma')} is the Stefan-Boltzmann constant, and</li>
                                        <li>${k('T')} is the temperature of the blackbody.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\lambda_\\mathrm{max}&=\\frac{b}{T}',
                                description: `
                                    Wien's displacement law, where
                                    <ul>
                                        <li>${k('\\lambda_\\mathrm{max}')} is the wavelength of maximum spectral intensity (i.e. the maximum of ${k('I(\\lambda)')} for a given temperature),</li>
                                        <li>${k('b')} is Wien's displacement constant, and</li>
                                        <li>${k('T')} is the temperature of the blackbody.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'I(\\lambda)&=\\frac{2\\pi hc^2}{\\lambda^5(e^\\frac{hc}{\\lambda k_\\mathrm{B}T}-1)}',
                                description: `
                                    Planck's radiation law, where
                                    <ul>
                                        <li>${k('I')} is the spectral intensity at a given wavelength and temperature,</li>
                                        <li>${k('\\lambda')} is the wavelength of radiation emitted,</li>
                                        <li>${k('h')} is Planck's constant,</li>
                                        <li>${k('c')} is the speed of light in a vacuum,</li>
                                        <li>${k('k_\\mathrm{B}')} is the Boltzmann constant, and</li>
                                        <li>${k('T')} is the temperature.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta t\\Delta E&\\ge\\frac{\\hbar}{2}',
                                description: `
                                    The Heisenberg uncertainty principle for time interval and energy of a particle, where
                                    <ul>
                                        <li>${k('\\Delta t')} is the uncertainty in time interval (how long the particle has been in its current state),</li>
                                        <li>${k('\\Delta E')} is the uncertainty in energy of the particle, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                `
                            },
                            'Chapter 40: Quantum Mechanics I: Wave Functions',
                            {
                                latex: '\\hbar\\omega&=\\frac{\\hbar^2k^2}{2m}',
                                description: `
                                    The relationship between ${k('\\omega')} and ${k('k')} for a the wave describing a free particle, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave,</li>
                                        <li>${k('k')} is the wave number, and</li>
                                        <li>${k('m')} is the mass of the particle.</li>
                                    </ul>
                                    This comes from the relation
                                    ${k('E=\\frac{1}{2}mv^2=\\frac{p^2}{2m}', true)}
                                    where
                                    ${k(`
                                        \\begin{gathered}
                                            E=hf=\\frac{h}{2\\pi}2\\pi f=\\hbar\\omega \\\\
                                            p=\\frac{h}{\\lambda}=\\frac{h}{2\\pi}\\frac{2\\pi}{\\lambda}=\\hbar k
                                        \\end{gathered}
                                    `, true)}
                                    and
                                    <ul>
                                        <li>${k('E')} is the energy of a particle,</li>
                                        <li>${k('v')} is the velocity of the particle,</li>
                                        <li>${k('p')} is the momentum of the particle,</li>
                                        <li>${k('f')} is the frequency of the wave describing the particle, and</li>
                                        <li>${k('\\lambda')} is the wavelength of the wave describing the particle.</li>
                                        
                                    </ul>
                                `
                            }, {
                                latex: '-\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi(x,t)}{\\partial x^2}&=i\\hbar\\frac{\\partial\\Psi(x,t)}{\\partial t}',
                                description: `
                                    The one-dimensional Schrödinger equation for a free particle, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('\\Psi(x,t)')} is the wave function that describes the particle,</li>
                                        <li>${k('x')} is the particle's position, and</li>
                                        <li>${k('t')} is time.</li>
                                    </ul>
                                    This is the quantum-mechanical version of the classical wave equation,
                                    ${k('\\frac{\\partial^2y(x,t)}{\\partial x^2}=\\frac{1}{v^2}\\frac{\\partial y(x,t)}{\\partial t},', true)}
                                    which describes the motion of a wave in one dimension given the wave function, ${k('y(x,t')}, which describes its shape.
                                `
                            }, {
                                latex: '\\Psi(x,t)&=Ae^{i(kx-\\omega t)}',
                                description: `
                                    The wave function for a free particle with definite momentum.
                                    <ul>
                                        <li>${k('A')} is some constant,</li>
                                        <li>${k('k')} is the wave number,</li>
                                        <li>${k('x')} is the position of the particle,</li>
                                        <li>${k('\\omega')} is the angular frequency of the wave, and</li>
                                        <li>${k('t')} is the time.</li>
                                    </ul>
                                    If we recall Euler's formula,
                                    ${k('e^{i\\theta}=cos\\theta+i\\sin\\theta,', true)}
                                    this equation can be rewritten as
                                    ${k('\\Psi(x,t)=A\\cos(kx-\\omega t)+Ai\\sin(kx-\\omega t).', true)}
                                `
                            }, {
                                latex: '-\\frac{\\hbar^2}{2m}\\frac{\\partial^2\\Psi(x,t)}{\\partial x^2}+U(x)\\Psi(x,t)&=i\\hbar\\frac{\\partial\\Psi(x,t)}{\\partial t}',
                                description: `
                                    The one-dimensional Schrödinger equation for a particle with some potential energy, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('\\Psi(x,t)')} is the wave function that describes the particle,</li>
                                        <li>${k('x')} is the particle's position,</li>
                                        <li>${k('t')} is time, and</li>
                                        <li>${k('U(x)')} is the potential energy of the particle as a function of position.</li>
                                    </ul>
                                    If ${k('U(x)=0')}, this equation reduces to that of a free particle.
                                `
                            }, {
                                latex: '\\Psi(x,t)&=\\psi(x)e^{-i\\frac{Et}{\\hbar}}',
                                description: `
                                    A wave function which describes a particle with definite (unchanging) energy. Also referred to as stationary state.
                                    <ul>
                                        <li>${k('\\psi(x)')} is called the time-indepent wave function to differentiate it from ${k('\\Psi(x,t)')}, which we call the time-dependent wave function.</li>
                                        <li>${k('E')} is the energy of the particle,</li>
                                        <li>${k('t')} is time, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                    This wave can be thought of as a quantum standing wave, whose amplitude changes but does not move in space. Another way of looking at it is to look at its probability distribution function (found by multiplying ${k('\\Psi')} by its complex conjugate, ${k('\\Psi^*')}).
                                    ${k('|\\Psi(x,t)|^2=|\\psi(x)|^2', true)}
                                    Note that it doesn't depend on time. This means that the probability of finding the particle at any point in space is the same, irregardless of time.
                                    <br>
                                    For a free particle, ${k('\\psi(x)=Ae^{ikx}')}.
                                `
                            }, {
                                latex: '-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi(x)}{dx^2}+U(x)\\psi(x)&=E\\psi(x)',
                                description: `
                                    The Schrödinger equation for a time-independent (stationary-state) wave function in one dimension.
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('\\psi(x)')} is the wave function,</li>
                                        <li>${k('x')} is the position of the particle,</li>
                                        <li>${k('U(x)')} is the potential energy of the particle as a function of position, and</li>
                                        <li>${k('E')} is the total energy of the particle.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\lambda&=\\frac{2L}{n}',
                                description: `
                                    The allowed wavelengths for a particle in a box. Exactly the same as those for standing waves in PHYS 122.
                                    <ul>
                                        <li>${k('L')} is the width of the box, and</li>
                                        <li>${k('n\\in\\Z;n>0')} is the quantum number.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_n&=\\frac{p_n^2}{2m}=\\frac{n^2h^2}{8mL^2}',
                                description: `
                                    Allowed energy levels for a particle in a box, where
                                    <ul>
                                        <li>${k('n\\in\\Z;n>0')} is the quantum number,</li>
                                        <li>${k('p_n')} is the momentum of the particle,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('h')} is Planck's constant, and</li>
                                        <li>${k('L')} is the width of the box.</li>
                                    </ul>
                                    The second equation comes from the fact that ${k('p_n=\\frac{h}{\\lambda_n}=\\frac{nh}{2L}')}.
                                `
                            }, {
                                latex: '\\psi_n(x)&=\\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}',
                                description: `
                                    The stationary-state wave functions for a particle in a box, where
                                    <ul>
                                        <li>${k('n\\in\\Z;n>0')} is the quantum number,</li>
                                        <li>${k('x')} is the position of the particle, and</li>
                                        <li>${k('L')} is the width of the box.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\kappa&=\\frac{\\sqrt{2m(U_0-E)}}{\\hbar}',
                                description: `
                                    Not a useful equation on its own; it is used an an expression in other equations though.
                                    <ul>
                                        <li>${k('m')} is the mass of a particle,</li>
                                        <li>${k('U_0')} is the height of a potential well,</li>
                                        <li>${k('E')} is the total energy of the particle, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\psi(x)&=Ce^{\\kappa x}+De^{-\\kappa x}',
                                description: `
                                    The time-independent wave function for a particle outside of a square potential well.
                                    <ul>
                                        <li>${k('x')} is the position of the particle,</li>
                                        <li>${k('C')} and ${k('D')} are constants, and</li>
                                        <li>${k('\\kappa')} is an the expression defined further up on this list.</li>
                                    </ul>
                                    In this equation, ${k('D=0')} for ${k('x<0')} and ${k('C=0')} for ${k('x>L')} where ${k('L')} is the width of the well. This is because the wave function must approach 0 as ${k('x\\to\\pm\\infty')}.
                                `
                            }, {
                                latex: 'T&=16\\frac{E}{U_0}\\left(1-\\frac{E}{U_0}\\right)e^{-2\\kappa L}',
                                description: `
                                    The probability of a particle tunneling across a potential barrier, where
                                    <ul>
                                        <li>${k('E')} is the total energy of the particle,</li>
                                        <li>${k('U_0')} is the height of the potential barrier,</li>
                                        <li>${k('\\kappa')} is an the expression defined further up on this list, and</li>
                                        <li>${k('L')} is the width of the barrier.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_n&=\\left(n+\\frac{1}{2}\\right)\\hbar\\omega',
                                description: `
                                    The allowed energy levels of a quantum harmonic oscillator, where
                                    <ul>
                                        <li>${k('n\\in\\Z;n\\ge0')} is the quantum number,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('\\omega')} is the angular frequency.</li>
                                    </ul>
                                `
                            },
                            'Chapter 41: Quantum Mechanics II: Atomic Structure',
                            {
                                latex: '-\\frac{\\hbar^2}{2m}\\left(\\frac{\\partial^2\\Psi(x,y,z,t)}{\\partial x^2}+\\frac{\\partial^2\\Psi(x,y,z,t)}{\\partial y^2}+\\frac{\\partial^2\\Psi(x,y,z,t)}{\\partial z^2}\\right)+U(x,y,z)\\Psi(x,y,z,t)&=i\\hbar\\frac{\\partial\\Psi(x,y,z,t)}{\\partial t}',
                                description: `
                                    The three-dimensional Schrödinger equation, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('\\Psi(x,y,z,t)')} is the wave function that describes the particle,</li>
                                        <li>${k('x')}, ${k('y')}, and ${k('z')} describe the particle's position,</li>
                                        <li>${k('t')} is time, and</li>
                                        <li>${k('U(x,y,z)')} is the potential energy of the particle as a function of position.</li>
                                    </ul>
                                `
                            }, {
                                latex: '-\\frac{\\hbar^2}{2m}\\left(\\frac{\\partial^2\\psi(x,y,z)}{\\partial x^2}+\\frac{\\partial^2\\psi(x,y,z)}{\\partial y^2}+\\frac{\\partial^2\\psi(x,y,z)}{\\partial z^2}\\right)+U(x,y,z)\\psi(x,y,z,t)&=E\\psi(x,y,z)',
                                description: `
                                    The time-independent three-dimensional Schrödinger equation, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle,</li>
                                        <li>${k('\\psi(x,y,z)')} is the time-independent wave function that describes the particle,</li>
                                        <li>${k('x')}, ${k('y')}, and ${k('z')} describe the particle's position,</li>
                                        <li>${k('t')} is time,</li>
                                        <li>${k('U(x,y,z)')} is the potential energy of the particle as a function of position, and</li>
                                        <li>${k('E')} is the total energy of the particle.</li>
                                    </ul>
                                    ${k('\\psi(x,y,z)')} describes a particle in a stationary state&mdash;that is, with definite (unchanging) energy.
                                `
                            }, {
                                latex: 'E_{n_X,n_Y,n_Z}&=\\frac{(n_X^2+n_Y^2+n_Z^2)\\pi^2\\hbar^2}{2mL^2}',
                                description: `
                                    The allowed energy levels for a particle in a three-dimensional box, where
                                    <ul>
                                        <li>${k('n_X,n_Y,n_Z\\in\\Z;n_X,n_Y,n_Z>0')} are the quantum numbers for each dimension,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('m')} is the mass of the particle, and</li>
                                        <li>${k('L')} is the width of the box.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_n&=-\\frac{m_\\mathrm{r}e^4}{8\\epsilon_0^2n^2h^2}=-\\frac{\\pu{13.6 eV}}{n^2}',
                                description: `
                                    The allowed energy levels for an electron in a hydrogen atom, where
                                    <ul>
                                        <li>${k('m_\\mathrm{r}')} is the reduced mass of the electron,</li>
                                        <li>${k('e')} is the magnitude of charge on the electron,</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('n\\in\\Z;n>0')} is the principal quantum number, and</li>
                                        <li>${k('h')} is Planck's constant.</li>
                                    </ul>
                                    This is almost exactly the same as the allowed energy levels in Bohr's model of the hydrogen atom, but with two very minor differences:
                                    <ul>
                                        <li>${k('m_\\mathrm{r}')}, the reduced mass of the electron, is used in place of ${k('m_\\mathrm{e}')}, the rest mass of the electron. This could have been done in the Bohr model as well, though.</li>
                                        <li>${k('n')} is now referred to as the "principal quantum number" as opposed to just the "quantum number". This is since there are now other quantum numbers to deal with.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'L&=\\hbar\\sqrt{l(l+1)}',
                                description: `
                                    The allowed magnitudes for angular momentum for an electron in a hydrogen atom, where
                                    <ul>
                                        <li>${k('l\\in\\Z;0\\le l<n')} is the orbital quantum number where ${k('n')} is the principal quantum number, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'L_z&=m_l\\hbar',
                                description: `
                                    The allowed values for the ${k('z')}-component of angular momentum of an electron.
                                    <ul>
                                        <li>${k('m_l\\in\\Z;-l\\le m_l\\le l')} is the orbital magnetic quantum number where ${k('l')} is the orbital quantum number, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'P(r)\\,dr&=|\\psi(x,y,z)|^24\\pi r^2\\,dr',
                                description: `
                                    The probability of finding the electron of a hydrogen atom in a thin shell around the nucleus.
                                    <ul>
                                        <li>${k('P(r)')} is the radial probability distribution function,</li>
                                        <li>${k('r')} is the radius of the thin shell, and</li>
                                        <li>${k('\\psi(x,y,z)')} is the time-independent wave function.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'U&=-\\mu_zB=m_l\\mu_\\mathrm{B}B',
                                description: `
                                    The amount of energy that a magnetic field ${k('\\mathbf{B}')} would exert on an orbital.
                                    <ul>
                                        <li>${k('\\mu_z')} is the ${k('z')}-component of the magnetic dipole moment of the orbital</li>
                                        <li>${k('m_l')} is the magnetic quantum number of the orbital, and</li>
                                        <li>${k('\\mu_\\mathrm{B}')} is the Bohr magneton.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'S_z&=m_S\\hbar',
                                description: `
                                    The allowed values for the ${k('z')}-component of spin of an electron.
                                    <ul>
                                        <li>${k('m_S\\in\\{-\\frac{1}{2},+\\frac{1}{2}\\}')} is the spin quantum number, and</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'S&=\\sqrt{\\frac{3}{2}}\\hbar',
                                description: `
                                    The magnitude of spin of an electron, where ${k('\\hbar')} is the reduced Planck constant.
                                `
                            }, {
                                latex: '\\mu_z&=-1.00116\\frac{e}{m_\\mathrm{e}}S_z',
                                description: `
                                    The magnitude of the component of the magnetic dipole moment of an orbital in the direction of a magnetic field, with respect to spin (${k('S')}). The ${k('z')} in this equation could be replaced with ${k('x')} or ${k('y')}. It is only meant to imply that this equation calculates the magnetic dipole moment in only one direction.
                                    <ul>
                                        <li>${k('e')} is the magnitude of charge on an electron, and</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of the electron.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_{n,j}&=-\\frac{\\pu{13.6 eV}}{n^2}\\left(1+\\frac{\\alpha^2}{n^2}\\left(\\frac{n}{j+\\frac{1}{2}}-\\frac{3}{4}\\right)\\right)',
                                description: `
                                    The allowed energy levels for an electron in a hydrogen atom (taking into account fine structure), where
                                    <ul>
                                        <li>${k('n')} is the principal quantum number of the electron,</li>
                                        <li>${k('j')} is the total angular momentum of the electron (classical angular momentum + spin angular momentum), and</li>
                                        <li>${k('\\alpha')} is the fine-structure constant.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_n&=-\\pu{13.6 eV}\\frac{Z_\\mathrm{eff}^2}{n^2}',
                                description: `
                                    The energy level of an electron with screening, where
                                    <ul>
                                        <li>${k('n')} is the principal quantum number of the electron, and</li>
                                        <li>${k('Z_\\mathrm{eff}')} is the effective atomic number, equal to the actual atomic number minus the number of electrons involved in the screening.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f&=(\\pu{2.48e15 Hz})(Z-1)^2',
                                description: `
                                    Moseley's law, where
                                    <ul>
                                        <li>${k('f')} is the frequency of maximum x-ray production on a bremsstrahlung spectrum for a given element, and</li>
                                        <li>${k('Z')} is the atomic number of that element.</li>
                                    </ul>
                                `
                            },
                            'Chapter 42: Molecules and Condensed Matter',
                            {
                                latex: 'E_l&=l(l+1)\\frac{\\hbar^2}{2I}',
                                description: `
                                    The allowed rotational energy levels of a diatomic molecule, where
                                    <ul>
                                        <li>${k('l')} is the rotational quantum number,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('I')} is the moment of inertia of the molecule about its center of mass.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'I&=m_\\mathrm{r}r^2',
                                description: `
                                    The moment of inertial of a diatomic molecule about its center of mass, where
                                    <ul>
                                        <li>${k('m_\\mathrm{r}')} is the reduced mass of the atoms, and</li>
                                        <li>${k('r')} is the distance between the two atoms.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_n&=\\left(n+\\frac{1}{2}\\right)\\hbar\\omega=\\left(n+\\frac{1}{2}\\right)\\hbar\\sqrt{\\frac{k\'}{m_\\mathrm{r}}}',
                                description: `
                                    The allowed vibrational energy levels of a diatomic molecule, where
                                    <ul>
                                        <li>${k('n')} is the vibrational quantum number,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('\\omega')} is the angular frequency of the oscillation,</li>
                                        <li>${k('k\'')} is the force constant (the same as the spring constant in Hooke's law), and</li>
                                        <li>${k('m_\\mathrm{r}')} is the reduced mass of the atoms.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'g(E)&=\\frac{(2m_\\mathrm{e})^{3/2}V}{2\\pi^2\\hbar^3}\\sqrt{E}',
                                description: `
                                    The density of energy states in the free-electron model, where
                                    <ul>
                                        <li>${k('m_\\mathrm{e}')} is the mass of an electron,</li>
                                        <li>${k('V')} is the volume of the object,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('E')} is the energy of the electron.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'f(E)&=\\frac{1}{\\exp\\left(\\frac{E-E_\\mathrm{F}}{kT}\\right)+1}',
                                description: `
                                    The Fermi-Dirac distribution, where
                                    <ul>
                                        <li>${k('E')} is the energy of the state,</li>
                                        <li>${k('E_\\mathrm{F}')} is the Fermi energy,</li>
                                        <li>${k('k')} is the Boltzmann constant, and</li>
                                        <li>${k('T')} is the absolute temperature.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_\\mathrm{F}&=\\frac{(9\\pi^4\\hbar^6n^2)^{1/3}}{2m_\\mathrm{e}}',
                                description: `
                                    The Fermi energy of a state in the free-electron model, where
                                    <ul>
                                        <li>${k('\\hbar')} is the reduced Planck constant,</li>
                                        <li>${k('n')} is the electron concentration (${k('\\frac{\\text{\\# of electrons}}{\\text{volume}}')}), and</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of an electron.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_\\mathrm{av}&=\\frac{3}{5}E_\\mathrm{F}',
                                description: `
                                    The average free-electron energy, where ${k('E_\\mathrm{F}')} is the Fermi energy of the electron's energy state.
                                `
                            }, {
                                latex: 'I&=I_\\mathrm{S}\\left(\\exp\\left(\\frac{eV}{kT}\\right)-1\\right)',
                                description: `
                                    The current through a <i>p</i>-<i>n</i> junction, where
                                    <ul>
                                        <li>${k('I_\\mathrm{S}')} is the saturation current,</li>
                                        <li>${k('e')} is the magnitude of charge on an electron,</li>
                                        <li>${k('V')} is the voltage across the junction,</li>
                                        <li>${k('k')} is the Boltzmann constant, and</li>
                                        <li>${k('T')} is the absolute temperature.</li>
                                    </ul>
                                `
                            },
                            'Chapter 43: Nuclear Physics',
                            {
                                latex: 'R&=(\\pu{1.2e-15 m})A^{1/3}',
                                description: `
                                    The radius of an atomic nucleus, where ${k('A')} is the nucleon number.
                                `
                            }, {
                                latex: '|\\mu_{sz}|_\\mathrm{proton}&=2.7928\\mu_\\mathrm{n}',
                                description: `
                                    The spin magnetic moment of a proton, where ${k('\\mu_\\mathrm{n}')} is the nuclear magneton.
                                `
                            }, {
                                latex: 'E_\\mathrm{B}&=(ZM_\\ce{H}+Nm_\\mathrm{n}-{}^A_ZM)c^2',
                                description: `
                                    The binding energy of a nucleus, where
                                    <ul>
                                        <li>${k('Z')} is the atomic number,</li>
                                        <li>${k('M_\\ce{H}')} is the mass of a hydrogen atom,</li>
                                        <li>${k('N')} is the neutron number,</li>
                                        <li>${k('m_\\mathrm{n}')} is the mass of a neutron,</li>
                                        <li>${k('^A_ZM')} is the mass of the neutral atom with nucleon number ${k('A')} and atomic number ${k('Z')}, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\Delta M&=\\frac{E_\\mathrm{B}}{c^2}',
                                description: `
                                    The mass defect of a nucleus, where
                                    <ul>
                                        <li>${k('E_\\mathrm{B}')} is the binding energy of the nucleus, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_\\mathrm{B}&=C_1A-C_2A^{2/3}-C_3Z(Z-1)A^{-1/3}-C_4(A-2Z)^2A^{-1}\\pm C_5A^{-4/3}',
                                description: `
                                    The nuclear binding energy of a nucleus according to the liquid-drop model, where
                                    <ul>
                                        <li>${k('C_1=\\pu{15.75 MeV}')},</li>
                                        <li>${k('C_2=\\pu{17.80 MeV}')},</li>
                                        <li>${k('C_3=\\pu{0.7100 MeV}')},</li>
                                        <li>${k('C_4=\\pu{23.69 MeV}')},</li>
                                        <li>${k('C_5=\\pu{39 MeV}')},</li>
                                        <li>${k('A')} is the nucleon number of the nucleus, and</li>
                                        <li>${k('Z')} is the atomic number of the nucleus.</li>
                                    </ul>
                                    ${k('C_5')} is positive when both ${k('Z')} and ${k('N')} are even, negative when they are odd, and zero otherwise.
                                `
                            }, {
                                latex: '\\mathrm{n}&\\rightarrow\\mathrm{p}+\\beta^-+\\bar{\\nu}_\\mathrm{e}',
                                description: `
                                    Beta-minus decay, where
                                    <ul>
                                        <li>${k('\\mathrm{n}')} is a neutron,</li>
                                        <li>${k('\\mathrm{p}')} is a proton,</li>
                                        <li>${k('\\beta^-')} is an electron, and</li>
                                        <li>${k('\\bar{\\nu}_\\mathrm{e}')} is an electron antineutrino.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathrm{p}&\\rightarrow\\mathrm{n}+\\beta^++\\nu_\\mathrm{e}',
                                description: `
                                    Beta-plus decay, where
                                    <ul>
                                        <li>${k('\\mathrm{p}')} is a proton,</li>
                                        <li>${k('\\beta^+')} is a positron, and</li>
                                        <li>${k('\\nu_\\mathrm{e}')} is an electron neutrino.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\mathrm{p}+\\beta^-&\\rightarrow\\mathrm{n}+\\nu_\\mathrm{e}',
                                description: `
                                    Electron capture beta decay, where
                                    <ul>
                                        <li>${k('\\mathrm{p}')} is a proton,</li>
                                        <li>${k('\\beta^-')} is an electron,</li>
                                        <li>${k('\\mathrm{n}')} is a neutron, and</li>
                                        <li>${k('\\nu_\\mathrm{e}')} is an electron neutrino.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'N(t)&=N_0e^{-\\lambda t}',
                                description: `
                                    The number of remaining nuclei in a sample as a function of time ${k('t')}, where
                                    <ul>
                                        <li>${k('N_0')} is the initial number of nuclei, and</li>
                                        <li>${k('\\lambda')} is the decay constant of the sample.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'T_\\mathrm{mean}&=\\frac{1}{\\lambda}=\\frac{T_{1/2}}{\\ln 2}',
                                description: `
                                    The lifetime of an unstable nucleus, where
                                    <ul>
                                        <li>${k('\\lambda')} is the decay constant of the sample, and</li>
                                        <li>${k('T_{1/2}')} is the half life.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'Q&=(M_\\ce{A}+M_\\ce{B}-M_\\ce{C}-M_\\ce{D})c^2',
                                description: `
                                    The reaction energy of a nuclear reaction ${k('\\ce{A + B -> C + D}')}, where
                                    <ul>
                                        <li>${k('M_\\ce{X}')} is the mass of species X, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            },
                            'Chapter 44: Particle Physics and Cosmology',
                            {
                                latex: 'E_\\mathrm{a}^2&=2Mc^2E_m+(Mc^2)^2+(mc^2)^2',
                                description: `
                                    The available energy in a particle collision, where
                                    <ul>
                                        <li>${k('M')} and ${k('m')} are the masses of the two particles (mass ${k('M')} is initially at rest),</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('E_m')} is the total energy of the particle with mass ${k('m')}.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_\\mathrm{a}^2&=2mc^2(E_m+mc^2)',
                                description: `
                                    The available energy in a particle collision, where both particles have the same mass. One of the particles is initially at rest.
                                    <ul>
                                        <li>${k('m')} is the mass of each particle,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('E_m')} is the total energy of the moving particle.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'E_\\mathrm{a}&=\\sqrt{2mc^2E_m}',
                                description: `
                                    The available energy in a particle collision, where both particles have the same mass and the energy of the moving particle is much greater than its rest energy (${k('E_m\\gg mc^2')}). The other particle is initially at rest.
                                    <ul>
                                        <li>${k('m')} is the mass of each particle,</li>
                                        <li>${k('c')} is the speed of light in a vacuum, and</li>
                                        <li>${k('E_m')} is the total energy of the moving particle.</li>
                                    </ul>
                                `
                            }
                        ]
                    },
                    'constants': {
                        code: 'C',
                        content: [
                            {
                                latex: 'g&=\\pu{9.80665 m s-1}',
                                description: 'T acceleration due to gravity on Earth.'
                            }, {
                                latex: 'G&=\\pu{6.67430e-11 m3 kg-1 s-2}',
                                description: `The gravitational constant. Used as the proportionality constant in the equation ${k('F_g=\\frac{Gm_1m_2}{r^2}\\text{.}', true)}`
                            }, {
                                latex: 'R_\\oplus&=\\pu{6.3781e6 m}',
                                description: 'The radius of the Earth.'
                            }, {
                                latex: 'M_\\oplus&=\\pu{5.9722e24 kg}',
                                description: 'The mass of the Earth.'
                            }, {
                                latex: 'R_\\odot&=\\pu{6.96340e8 m}',
                                description: 'The radius of the Sun.'
                            }, {
                                latex: 'M_\\odot&=\\pu{1.9885e30 kg}',
                                description: 'The mass of the Sun.'
                            }, {
                                latex: 'c&=\\pu{2.99792e8 m s-1}',
                                description: 'The speed of light in a vacuum.'
                            }, {
                                latex: 'h&=\\pu{6.62607e-34 J s}',
                                description: 'Planck\'s constant.'
                            }, {
                                latex: 'e&=\\pu{1.60218e-19 C}',
                                description: 'The charge on an electron.'
                            }, {
                                latex: 'm_\\mathrm{e}&=\\pu{9.10938e-31 kg}',
                                description: 'The mass of a stationary electron.'
                            }, {
                                latex: '\\hbar&=\\pu{1.05457e-34 J s}',
                                description: `The reduced Planck constant, equal to ${k('\\frac{h}{2\\pi}')}.`
                            }, {
                                latex: '\\epsilon_0&=\\pu{8.85418e-12 F m-1}',
                                description: 'The permittivity of vacuum.'
                            }, {
                                latex: 'a_0&=\\pu{5.29177e-11 m}',
                                description: 'The Bohr radius. Equal to the radius of the orbit of an electron in a neutral hydrogen atom, according to the Bohr model.'
                            }, {
                                latex: 'R_\\ce{H}&=\\pu{1.09678e7 m-1}',
                                description: `
                                    The Rydberg constant for a hydrogen atom, defined as ${k('R_\\ce{H}\\approx\\frac{m_\\mathrm{e}e^4}{8\\epsilon_0^2h^3c}')} where
                                    <ul>
                                        <li>${k('m_\\mathrm{e}')} is the mass of an electron,</li>
                                        <li>${k('e')} is the magnitude of the charge on an electron,</li>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('h')} is Planck's constant, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\sigma&=\\pu{5.67037e-8 W m-2 K-4}',
                                description: 'The Stefan-Boltzmann constant, used as the constant of proportionality in the Stefan-Boltzmann law.'
                            }, {
                                latex: 'b&=\\pu{2.89777e-3 m K}',
                                description: 'Wein\'s displacement constant, used as the constant of proportionality in Wien\'s displacement law.'
                            }, {
                                latex: 'k_\\mathrm{B}&=\\pu{1.38065e-23 J K-1}',
                                description: 'The Boltzmann constant.'
                            }, {
                                latex: '\\mu_\\mathrm{B}&=\\pu{9.27401e-24 J T-1}',
                                description: `
                                    The Bohr magneton, defined as ${k('\\mu_\\mathrm{B}=\\frac{e\\hbar}{2m_\\mathrm{e}}')}, where
                                    <ul>
                                        <li>${k('e')} is the magnitude of charge on an electron,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('m_\\mathrm{e}')} is the mass of an electron.</li>
                                    </ul>
                                `
                            }, {
                                latex: '\\alpha&=\\pu{7.29735e-3}',
                                description: `
                                    The fine-structure constant, defined as ${k('\\alpha=\\frac{1}{4\\pi\\epsilon_0}\\frac{e^2}{\\hbar c}')}, where
                                    <ul>
                                        <li>${k('\\epsilon_0')} is the permittivity of vacuum,</li>
                                        <li>${k('e')} is the magnitude of charge on an electron,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('c')} is the speed of light in a vacuum.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'm_\\mathrm{p}&=\\pu{1.67262e-27 kg}',
                                description: 'The mass of a proton.'
                            }, {
                                latex: 'm_\\mathrm{n}&=\\pu{1.67493e-27 kg}',
                                description: 'The mass of a neutron.'
                            }, {
                                latex: '\\mu_\\mathrm{n}&=\\pu{5.05078e-27 J T-1}',
                                description: `
                                    The nuclear magneton, defined as ${k('\\mu_\\mathrm{n}=\\frac{e\\hbar}{2m_\\mathrm{p}}')}, where
                                    <ul>
                                        <li>${k('e')} is the magnitude of charge on an electron,</li>
                                        <li>${k('\\hbar')} is the reduced Planck constant, and</li>
                                        <li>${k('m_\\mathrm{p}')} is the mass of a proton.</li>
                                    </ul>
                                `
                            }, {
                                latex: 'M_\\ce{H}&=\\pu{1.67356e-27 kg}',
                                description: 'The mass of a hydrogen atom.'
                            }
                        ]
                    },
                    'conversions': {
                        code: 'CV',
                        content: [
                            {
                                latex: '\\pu{1 eV}&=\\pu{1.60218e-19 J}',
                                description: `
                                    eV - electronvolt
                                    <br>
                                    J - joule
                                `
                            }, {
                                latex: '\\pu{1 u}&=\\pu{1.66054e-27 kg}',
                                description: `
                                    u - unified atomic mass unit
                                    <br>
                                    kg - kilogram
                                `
                            }, {
                                latex: '\\pu{1 Bq}&=\\pu{1 s-1}',
                                description: `
                                    Bq - becquerel
                                    <br>
                                    s - second
                                    <br>
                                    Indentical to the hertz, but used only to measure the decays of atomic nuclei.
                                `
                            }, {
                                latex: '\\pu{1 Ci}&=\\pu{3.70e10 Bq}',
                                description: `
                                    Ci - curie
                                    <br>
                                    Bq - becquerel
                                `
                            }, {
                                latex: '\\pu{1 Gy}&=\\pu{1 J kg-1}',
                                description: `
                                    Gy - gray
                                    <br>
                                    J - joule
                                    <br>
                                    kg - kilogram
                                    <br>
                                    Measures joules of radiation energy absorbed per kilogram of matter.
                                `
                            }, {
                                latex: '\\pu{1 rad}&=\\pu{0.01 Gy}',
                                description: `
                                    rad - rad
                                    <br>
                                    Gy - gray
                                `
                            }, {
                                latex: 'n\\ \\pu{Sv}&=(\\mathrm{RBE}\\cdot n)\\ \\pu{Gy}',
                                description: `
                                    Sv - sievert
                                    <br>
                                    Gy - gray
                                    <br>
                                    RBE is the relative biological effectiveness of the radiation absorbed, and depends on the type of radiation.
                                `
                            }, {
                                latex: 'n\\ \\pu{rem}&=(\\mathrm{RBE}\\cdot n)\\ \\pu{rad}',
                                description: `
                                    rem - rem
                                    <br>
                                    rad - rad
                                    <br>
                                    RBE is the relative biological effectiveness of the radiation absorbed, and depends on the type of radiation.
                                `
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
