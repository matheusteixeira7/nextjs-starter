import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('deve mostrar a logo e o formulário', async ({ page }) => {
    await expect(
      page.locator('text=Insira teus dados abaixo para acessar a plataforma'),
    ).toBeVisible()
    await expect(page.locator('input#email')).toBeVisible()
    await expect(page.locator('input#password')).toBeVisible()
    await expect(page.locator('text=Entrar')).toBeVisible()
    await expect(page.locator('text=Esqueceu sua senha?')).toBeVisible()
  })

  test('deve mostrar mensagem de erro caso o email inserido seja um email inválido', async ({
    page,
  }) => {
    await page.fill('input#email', 'invalid-email@invalid')
    await page.fill('input#password', '12345678')
    await page.click('text=Entrar')
    await expect(
      page.locator('text=Por favor, insira um email válido.'),
    ).toBeVisible()
  })

  test('deve mostrar mensagem de erro caso as credenciais sejam inválidas', async ({
    page,
  }) => {
    await page.fill('input#email', 'm@wehandle.com.br')
    await page.fill('input#password', 'invalid-password')
    await page.click('text=Entrar')
    await expect(page.locator('text=Credenciais inválidas.')).toBeVisible()
  })

  test('deve redirecionar para /dashboard quando o login for feito corretamente', async ({
    page,
  }) => {
    await page.fill('input#email', 'm@wehandle.com.br')
    await page.fill('input#password', '12345678')
    await page.click('text=Entrar')
    await expect(page).toHaveURL('/dashboard')
  })

  test('deve desabilitar o botão de loading quando clicar em Entrar', async ({
    page,
  }) => {
    await page.fill('input#email', 'm@wehandle.com.br')
    await page.fill('input#password', '12345678')
    await page.click('text=Entrar')
    await expect(page.locator('text=Carregando')).toBeVisible()
    await expect(page.locator('text=Entrar')).not.toBeVisible()
  })
})
