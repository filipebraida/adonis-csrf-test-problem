import { test } from '@japa/runner'

test.group('spoofing test', () => {
  test('method with get', async ({ client, route }) => {
    const response = await client.get(route('home'))

    response.assertTextIncludes('work_get')
  })

  test('method with post', async ({ client, route }) => {
    const response = await client.get(route('home_with_post')).withCsrfToken()

    response.assertTextIncludes('work_post')
  })

  test('method with delete', async ({ client, route }) => {
    const response = await client.delete(route('problematic-route')).withCsrfToken()

    response.assertTextIncludes('work_delete')
  })

  test('method with delete using post', async ({ client, route }) => {
    const response = await client.post(route('home_with_post')).withCsrfToken()
    console.log(response)

    response.assertTextIncludes('work_post')
  })
})
