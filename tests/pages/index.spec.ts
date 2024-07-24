import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the logo and form elements', async ({ page }) => {
    await expect(
      page.locator('text=Insira teus dados abaixo para acessar a plataforma'),
    ).toBeVisible()
    await expect(page.locator('input#email')).toBeVisible()
    await expect(page.locator('input#password')).toBeVisible()
    await expect(page.locator('text=Entrar')).toBeVisible()
    await expect(page.locator('text=Esqueceu sua senha?')).toBeVisible()
  })

  test('should show error messages for invalid inputs', async ({ page }) => {
    await page.fill('input#email', 'invalid-email@invalid')
    await page.fill('input#password', 'curto')
    await page.click('text=Entrar')
    await expect(
      page.locator('text=Por favor, preencha um email válido'),
    ).toBeVisible()
    await expect(
      page.locator('text=A senha precisa ter ao menos 8 caracteres'),
    ).toBeVisible()
  })

  test('should navigate to dashboard on valid input', async ({ page }) => {
    await page.fill('input#email', 'm@wehandle.com.br')
    await page.fill('input#password', 'validpassword#123')
    await page.click('text=Entrar')
    await expect(page).toHaveURL('/dashboard')
  })

  // test('should disable the submit button when loading', async ({ page }) => {
  //   await page.fill('input#email', 'valid@example.com')
  //   await page.fill('input#password', 'validpassword')
  //   await page.click('text=Entrar')
  //   await expect(page.locator('text=Carregando')).toBeVisible()
  //   await expect(page.locator('text=Entrar')).toBeDisabled()
  // })

  // test('should navigate to forgot password page', async ({ page }) => {
  //   await page.click('text=Esqueceu sua senha?')
  //   await expect(page).toHaveURL('/forgot-password')
  // })
})
