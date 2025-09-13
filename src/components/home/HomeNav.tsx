import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './HomeNav.module.scss'

type HomeNavProps = {} & Omit<ComponentPropsWithoutRef<'nav'>, 'children'>

export default function HomeNav({ className, ...props }: HomeNavProps) {
  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <ul>
        <li>
          <a href="#/games">Games & Pokédexes</a>
        </li>
      </ul>
    </nav>
  )
}
