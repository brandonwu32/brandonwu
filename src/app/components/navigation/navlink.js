'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import './navlink.css';

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        {
            name: 'About',
            href: '/'
        },
        {
            name: 'Projects',
            href:'/projects'
        },
        {
            name: 'Courses',
            href:'/courses'
        }
    ]

    function underlinePageOption(href) {
        if (pathname === href) {
            return {
                width: '100px',
                height: '4vh',
                textAlign: 'center',
                backgroundSize: '100% 0.05em',
                backgroundPositionY: '100%',
                backgroundPositionX: '0%',
                backgroundRepeat: 'no-repeat',
                transition: 'background-size 0.2s ease-in-out',
                textDecoration: 'none',
                backgroundImage: 'linear-gradient(white, white)',
            }
        }
    }

    return (
      <div className='nav-options'>
        {links.map((link) => {
          return (
            <div className='nav-item' key={link.name} >
                <div className='nav-button' style={underlinePageOption(link.href)}>
                    <Link
                        href={link.href}
                        >
                        <h3>{link.name}</h3>
                    </Link>
                </div>
            </div>
          );
        })}
      </div>
    );
  }