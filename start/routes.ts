/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .delete('/', () => {
    return 'work_delete'
  })
  .as('problematic-route')

router
  .get('/', () => {
    return 'work_get'
  })
  .as('home')

router
  .post('/', () => {
    return 'work_post'
  })
  .as('home_with_post')
