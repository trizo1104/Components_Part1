import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContexts'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li><a style={!dark ? { color: 'black' } : { color: 'white' }} className='active' href='#home'>Home</a></li>
                    <li><a style={!dark ? { color: 'black' } : { color: 'white' }} href='#news'>News</a></li>
                    <li><a style={!dark ? { color: 'black' } : { color: 'white' }} href='#about'>About</a></li>
                    <li><a style={!dark ? { color: 'black' } : { color: 'white' }} href='#contact'>Contact</a></li>
                </ul>
                <span style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none',
                            marginLeft: '80%',
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </span>
            </nav>
        </div>
    )
}