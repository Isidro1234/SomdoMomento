import React from 'react'
import { Portal, Select, createListCollection } from "@chakra-ui/react"

const SelectItem = ({select}) => {
  return (
    <Select.Root onSelect={(e)=>select(e.value)} collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Control  >
        <Select.Trigger>
          <Select.ValueText placeholder="Qual tipo de noticia" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content  >
            {frameworks.items.map((framework) => (
              <Select.Item  item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "principal", value: "principal" },
    { label: "complementar", value: "complementar" },
  ],
})

export default React.memo(SelectItem)