import React from 'react'

/**
 * Generate callback to go navigate back.
 *
 * @param {object} navigation - React Navigation
 *
 * @returns {Function} callback - Callback to navigate back.
 */
export const generateBack = ({ navigation }) => {
  return () => navigation.goBack()
}

/**
 * goToRoute - Generates callback to navigate to a route.
 *
 * @param {object} navigation - React Navigation
 * @param {string} routeName - Route name from AppWithNavigation
 *
 * @returns {Function} callback - Callback to navigate to a route.
 */
export const generateGoToRoute = ({ navigation, params, routeName, stack }) => {
  const goTo = stack ? navigation.push : navigation.navigate
  return () => goTo(routeName, params || {})
}

export function generateStackScreen ({
  component,
  index,
  name,
  options,
  params,
  Stack
}) {
  return (
    <Stack.Screen
      name={name}
      component={component}
      key={`${name}-${index}`}
      initialParams={params}
      options={options}
    />
  )
}
