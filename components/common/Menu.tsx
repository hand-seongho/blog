import React from 'react'
import styled from 'styled-components'
import { BoldText } from 'components/common/Text'
import { Column } from 'components/common/Layout'
import { FiMenu } from 'react-icons/fi'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'

export const Menu: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  const router = useRouter()
  console.log(router)
  return (
    <Main>
      <FiMenu
        size={24}
        color={theme.color.white}
        style={{ cursor: 'pointer' }}
        onClick={onMenuClick}
      />
      <BoldText
        className={router.pathname === '/about' ? 'currentPage' : ''}
        onClick={() => router.push('/about')}
      >
        About
      </BoldText>
      <BoldText
        className={router.pathname === '/' ? 'currentPage' : ''}
        onClick={() => router.push('/')}
      >
        Home
      </BoldText>
    </Main>
  )
}

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px;
  }
  z-index: 100;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 40px 80px;
  align-items: end;
  opacity: 0.9;
  gap: 40px;
  animation: menuFadeIn 600ms 1 ease;
  background-color: ${(p) => p.theme.color.background2};
  span {
    font-size: 72px;
    color: ${(p) => p.theme.color.white};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .currentPage {
    color: #114d89;
  }
  @keyframes menuFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`