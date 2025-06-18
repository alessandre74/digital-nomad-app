import { Icon, IconName } from '@/src/components/Icon'
import { useAppTheme } from '@/src/theme/useAppTheme'
import { Tabs } from 'expo-router'

type IconTabProp = {
  [key: string]: {
    title: string
    active: IconName
    inactive: IconName
  }
}

const icons: IconTabProp = {
  index: {
    title: 'Início',
    active: 'Home-fill',
    inactive: 'Home-outline',
  },
  explore: {
    title: 'Explore',
    active: 'Explore',
    inactive: 'Explore',
  },
  profile: {
    title: 'Perfil',
    active: 'Person-fill',
    inactive: 'Person-outline',
  },
}
export default function TabLayout() {
  const { colors } = useAppTheme()
  return (
    <Tabs
      screenOptions={({ route }) => {
        const { title, active, inactive } = icons[route.name]

        return {
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray2,
          tabBarStyle: {
            backgroundColor: colors.background,
            paddingTop: 10,
            height: 90,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontFamily: 'PoppinsRegular',
            fontSize: 12,
            color: colors.text,
          },
          title: `${title}`,
          tabBarIcon: ({ focused }) => {
            return <Icon name={focused ? active : inactive} color={focused ? 'primary' : 'gray2'} />
          },
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={
          {
            // title: 'Início',
            // tabBarIcon: ({ focused }) => {
            //   return <Icon name={focused ? 'Home-fill' : 'Home-outline'} color={focused ? 'primary' : 'gray2'} />
            // },
          }
        }
      />
      <Tabs.Screen
        name="explore"
        options={
          {
            // title: 'Explore',
            // tabBarIcon: ({ focused }) => {
            //   return <Icon name="Explore" color={focused ? 'primary' : 'gray2'} />
            // },
          }
        }
      />
      <Tabs.Screen
        name="profile"
        options={
          {
            // title: 'Perfil',
            // tabBarIcon: ({ focused }) => {
            //   return <Icon name={focused ? 'Person-fill' : 'Person-outline'} color={focused ? 'primary' : 'gray2'} />
            // },
          }
        }
      />
    </Tabs>
  )
}
