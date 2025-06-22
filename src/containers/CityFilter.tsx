import { useState } from 'react'
import { View } from 'react-native'
import { SearchInput } from '../components/SearchInput'

export function CityFilter() {
  const [name, setName] = useState('')
  return (
    <View>
      <SearchInput value={name} onChangeText={setName} placeholder="Qual o seu destino?" />
    </View>
  )
}
