import * as Accordion from '@radix-ui/react-accordion';
import { IoIosArrowDown } from 'react-icons/io'


export default function SecondSectionAccordion() {
    return (
        <>
            <div className="text-[#fff] h-[45rem] max-w-2xl m-auto flex items-center">
                <Accordion.Root className="w-full" type="single" defaultValue="item-1">

                    <Accordion.Item className="radix-state-open:text-[#00FFD9] radix-state-closed:opacity-70" value="item-1">
                        <Accordion.Header className="radix-state-open:border-[#00FFD9] border-b-2 py-4 flex font-semibold md:text-xl">
                            <Accordion.Trigger className="AccordionTrigger text-left w-full flex justify-between items-center">
                                <span className="max-w-[70%] radix-state-open:text-black">Systeem integraties</span>
                                <IoIosArrowDown size={20} className="w-6 h-6 radix-state-open:text-[#00FFD9] transition-all AccordionChevron" aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="AccordionContent radix-state-open:pb-[1.5rem] radix-state-open:max-w-[95%] radix-state-open:animate-slideDown radix-state-closed:animate-slideUp overflow-hidden mt-2">Onze specialisten richten zich voor veel projecten op de integratie van systemen. Soms als onderdeel van het ontwikkelen van een op maat gemaakte applicatie, maar veelal ook puur voor het koppelen van systemen op de achtergrond van een applicatie. Dit richt zich bijvoorbeeld op systemen zoals een ERP of CRM of juist als integratie die gericht is op payments, ticketing of e-commerce.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="radix-state-open:text-[#FF8900] radix-state-closed:opacity-70" value="item-2">
                        <Accordion.Header className="radix-state-open:border-[#FF8900] border-b-2 py-4 flex font-semibold md:text-xl">
                            <Accordion.Trigger className="AccordionTrigger text-left w-full flex justify-between items-center">
                                <span className="max-w-[70%]">Maatwerk koppelingen</span>
                                <IoIosArrowDown size={20} className="w-6 h-6 radix-state-open:text-[#FF8900] transition-all AccordionChevron" aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="AccordionContent radix-state-open:pb-[1.5rem] radix-state-open:max-w-[95%] radix-state-open:animate-slideDown radix-state-closed:animate-slideUp mt-2">Onze specialisten richten zich voor veel projecten op de integratie van systemen. Soms als onderdeel van het ontwikkelen van een op maat gemaakte applicatie, maar veelal ook puur voor het koppelen van systemen op de achtergrond van een applicatie. Dit richt zich bijvoorbeeld op systemen zoals een ERP of CRM of juist als integratie die gericht is op payments, ticketing of e-commerce.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="radix-state-open:text-[#9D72FF] radix-state-closed:opacity-70" value="item-3">
                        <Accordion.Header className="radix-state-open:border-[#9D72FF] border-b-2 py-4 flex font-semibold md:text-xl">
                            <Accordion.Trigger className="AccordionTrigger text-left w-full flex justify-between items-center">
                                <span className="max-w-[70%]">Beheer en doorontwikkeling van koppelingen</span>
                                <IoIosArrowDown size={20} className="w-6 h-6 radix-state-open:text-[#9D72FF] transition-all AccordionChevron" aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="AccordionContent radix-state-open:pb-[1.5rem] radix-state-open:max-w-[95%] radix-state-open:animate-slideDown radix-state-closed:animate-slideUp mt-2">Onze specialisten richten zich voor veel projecten op de integratie van systemen. Soms als onderdeel van het ontwikkelen van een op maat gemaakte applicatie, maar veelal ook puur voor het koppelen van systemen op de achtergrond van een applicatie. Dit richt zich bijvoorbeeld op systemen zoals een ERP of CRM of juist als integratie die gericht is op payments, ticketing of e-commerce.</Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </>
    )
}