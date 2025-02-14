'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import * as S from './footer.styles'

export function Footer() {
  return (
    <S.Container>
      <S.BackgroundImage>
        <Image
          src="/background-lines.png"
          alt="Background lines"
          fill
          quality={100}
        />
      </S.BackgroundImage>
      <S.Content>
        <S.Grid>
          <S.NewsletterContainer>
            <Image
              src="/mail-fast.svg"
              alt="Mail fast"
              width={32}
              height={28}
            />
            <S.Title>Fique por dentro das novidades</S.Title>
            <S.Description>
              Cadastre seu e-mail para receber conteúdo
            </S.Description>
            <S.Form>
              <S.Input
                type="email"
                placeholder="Insira seu melhor e-mail"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Por favor, insira um e-mail válido"
                required
              />
              <S.Button type="submit">
                Receber Novidades
              </S.Button>
            </S.Form>
          </S.NewsletterContainer>
          <S.ContainerLinks>
            <S.LinksContainer>
              <S.LinksTitle>Quero ser cliente</S.LinksTitle>
              <S.LinksList direction='column'>
                <S.LinkItem>
                  <Link href="#">Acessar conta</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <Link href="#">Dúvidas</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <Link href="#">Termos e condições</Link>
                </S.LinkItem>
                <S.LinkItem>
                  <Link href="#">Fale conosco</Link>
                </S.LinkItem>
              </S.LinksList>
            </S.LinksContainer>

            <S.SocialContainer>
              <S.SocialTitle>Acompanha nas redes</S.SocialTitle>
              <S.LinksList>
                <S.LinkItem hiddenMobile>
                  <Image
                    src="/x.svg"
                    alt="X"
                    width={32}
                    height={32}
                  />
                  <Link href="#">Twitter</Link>
                </S.LinkItem>
                <S.LinkItem hiddenMobile>
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin"
                    width={32}
                    height={32}
                  />
                  <Link href="#">Linkedin</Link>
                </S.LinkItem>
                <S.LinkItem hiddenMobile>
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                  <Link href="#">Instagram</Link>
                </S.LinkItem>
                <S.LinkItem hiddenMobile>
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                  <Link href="#">Facebook</Link>
                </S.LinkItem>
              </S.LinksList>
            </S.SocialContainer>
          </S.ContainerLinks>
        </S.Grid>

        <S.Copyright>
          <Image
            src="/logo-smartmoney.png"
            alt="SmartMoney"
            width={231}
            height={36}
          />
          <S.CopyrightText>
            © 2022 SmartBusiness. Todos os direitos reservados
          </S.CopyrightText>

            <S.LanguageSelector>
              <Globe size={20} />
              Português
            </S.LanguageSelector>

            <S.CopyrightText>
              Desenvolvido por{' '}
              <Link href="#" className="hover:text-white">
                Insany Design
              </Link>
            </S.CopyrightText>
        </S.Copyright>
      </S.Content>
    </S.Container>
  )
}
