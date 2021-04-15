import React from 'react'
import { styled } from '../ui'

import { Content, Box, Img } from './Box'
import { Link, UnderlinedHeading, ExtraHeading } from './Text'
import { Socials } from './Socials'

import logo from '../assets/ambition_round_gradient_clean.svg'

export const StyledFooter = styled('footer', {
  background: '$mirage',
})

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Box
          align="centerX"
          justify="spaceBetweenX"
          css={{
            display: 'flex',
            '@initial': { flexDirection: 'column' },
            '@sm': { flexDirection: 'row' },
          }}
        >
          <Box
            direction="v"
            css={{
              // display: 'flex',
              '@initial': { justifyContent: 'center' },
              '@sm': {},
            }}
          >
            <UnderlinedHeading id="where-the-fuck">
              Where the fuck<ExtraHeading> (Socials)</ExtraHeading>
            </UnderlinedHeading>
            <Socials />
          </Box>
          <Box>
            <Link href="http://ambition.wtf" target="_blank">
              <Img
                src={logo}
                alt="Ambition logo"
                css={{ py: '$12', height: '$48' }}
              />
            </Link>
          </Box>
        </Box>
      </Content>
    </StyledFooter>
  )
}