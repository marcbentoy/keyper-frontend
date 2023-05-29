import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Does it need internet access?</AccordionTrigger>
        <AccordionContent>
          No. It does not need internet access, you only need to connect to the
          Keyper WiFi network.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Can I borrow key if I don't have or I don't bring my student ID?
        </AccordionTrigger>
        <AccordionContent>
          No, you can't. Your school ID is what we use to gather information to
          be logged on our database.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How about returning a key, do I need to tap my school ID on the
          device?
        </AccordionTrigger>
        <AccordionContent>
          No, it is optional when returning a key. If you do not tap your ID
          onto the device, the borrower of the key will be recorded as the
          returnee, but if you tap your ID and you are not the one who borrowed
          the key, your name will be the one recorded as the returnee of the
          key.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
