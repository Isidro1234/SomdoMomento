import React from 'react'
import { Portal, Select, createListCollection } from "@chakra-ui/react"

const SelectPromotion = ({select}) => {
  return (
    <Select.Root onSelect={(e)=>select(e.value)} collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Control  >
        <Select.Trigger>
          <Select.ValueText placeholder="Pagina" />
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
    { label: "Pagina Principal", value: "Home" },
    { label: "Pagina de Noticias", value: "Noticias" },
    { label: "Pagina de Destaques", value: "Destaques" },
    { label: "Pagina de Musicas", value: "Musicas" },
  ],
})

export default React.memo(SelectPromotion)