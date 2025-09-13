import config from '@/config'
import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './AppFooter.module.scss'
import { DeprecationNotice } from './DeprecationNotice'

type AppFooterProps = {} & ComponentPropsWithoutRef<'div'>

export default function AppFooter({ className, ...props }: AppFooterProps) {
  return (
    <>
      <DeprecationNotice />
      <footer className={cn(styles.footer, className)} {...props}>
        <section>
          <p>
            <i>
              <b>{config.title} </b>
              <span>v{config.version}</span>
            </i>
          </p>
          <p>&copy; 2025 Javier Aguilar, pokepc.net</p>
        </section>
        <section>
          <small>This is a fan site and is not affiliated with The Pokémon Company, Game Freak or © Nintendo.</small>
        </section>
      </footer>
    </>
  )
}
