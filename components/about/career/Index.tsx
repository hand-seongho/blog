import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { AboutCareerContainer } from 'components/about/career/AboutCareerContainer'

const works = [
  '2022.06 초기 스타트업과 개발자의 채용을 연결해주는 채용 서비스 개발',
  '2022.05 차량 개인정보 보호와 도난 방지를 위한 차량용 서비스 개발',
  '2021.08 그룹웨어(B2B) 메신저 애플리케이션 개발',
  '2020.10 그룹웨어(B2B) 협업 지원 서비스 PC용 도구 개발',
]

const project = [
  '2023.06 바다 추천 바이럴 플랫폼 개발/매니징',
  '2023.06 사이드 프로젝트 중계 플랫폼 만들기 프로젝트 개발/매니징',
  '2023.02 개인용 포트폴리오 홈페이지 프로젝트',
  '2022.04 중고 직거래 사이트 당근마켓 웹 클론 프로젝트',
  '2022.03 숨은 고수 찾기 서비스 숨고 웹 클론 프로젝트',
  '2022.03 스타벅스 웹 클론 프로젝트',
  '2020.06 학원 정보 제공과 중계 서비스 프로젝트',
]

const techs = [
  'NextJS 효율적으로 SSR를 사용하여 검색 엔진 최적화를 높히고 애플리케이션을 모니터링합니다.',
  'TypeScript 명확한 정적 타입 사용으로 오류를 줄이고 코드의 신뢰성을 향상시킵니다.',
  'StyledComponents 캡슐화 하여 재사용성을 늘리고 JS로 스타일 관련 코드를 더욱 직관적으로 작성합니다.',
  'MobX 전역 상태 관리로 렌더링을 최소화 시키고 여러 컴포넌트간 공유하는 상태를 효율적으로 관리합니다.',
  'NodeJS 서버를 배포하고 MVC패턴을 사용하여 MySQL로 CRUD를 할 수 있습니다.',
]

export const AboutCareer: React.FC = () => {
  return (
    <Main>
      <AboutCareerContainer title='Works' data={works} />
      <Line />
      <AboutCareerContainer title='Project' data={project} />
      <Line />
      <AboutCareerContainer title='Techniques' data={techs} />
    </Main>
  )
}

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px 20px;
    gap: 40px;
  }
  padding: 100px 80px;
  gap: 100px;
`

const Line = styled.hr``
