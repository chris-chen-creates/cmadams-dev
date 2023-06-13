import React from 'react'
import type { ReactNode } from 'react'
import { Menu } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  target: string
  children: ReactNode
}

export default function DropdownMenuItem({ href, target, children }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          target={target}
          className={classNames(
            active ? 'bg-zinc-200 dark:bg-slate-600' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
