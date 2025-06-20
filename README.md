# 6월 프론트엔드 파트별 네트워킹(2) 과제

## Purpose

본 과제는 React 환경에서 DropBox 컴포넌트를 구현하는 것을 목표로 합니다. DropBox 컴포넌트의 option list가 표시되거나 사라질 때, CSS를 활용해 slide 효과를 적용함으로써 애니메이션 동작에 대한 이해하는것을 목표로 합니다.

- 제출 기한 : 6월 27일 00시 00분
- commit은 본인의 작업 과정이 기록될 수 있도록 가능한 최소의 단위로 작성
  - ex)
  - chore: tailwind css 설정
  - feat: drop box 퍼블리싱
  - feat: option list 퍼블리싱
  - feat: isOpen state을 통한 option list의 상태 제어
  - fix: option list 위치가 drop box에 가려지는 이슈 해결
  - ...
- 과제와 관련한 문의 사항은 프론트엔드 파트장 또는 출제자에게 문의

## Requirements

- TypeScript, React를 기반으로 과제를 진행
- **제공된 프로젝트의 구조를 변경하지 않을 것 (App 컴포넌트, 상수, 인터페이스, DropBox 컴포넌트 props)**
- 추가 컴포넌트, 커스텀 훅 정의는 허용
- **애니메이션 관련 라이브러리 사용 금지 (framer-motion, react-spring)**
- CSS 라이브러리는 사용 가능 (tailwind CSS, styled-components)
- package manager는 npm을 사용
- drop box 디자인은 통합 네트워킹 피그마 프로젝트의 "6월 네트워킹(2)" 페이지 참고
- drop box 기본 상태는 close 상태
- drop box 클릭하면 open 상태로 전환이 가능해야 함
- drop box open 상태인 경우 다음과 같은 상황에서 close 상태로 전환되어야 함
  - drop box 또는 option list 외부를 클릭한 경우
  - option list의 item을 선택한 경우
- **drop box의 open, close 상태가 전환되는 경우 slide-in, slide-out 애니메이션이 부과되어야 함** (open시 option list가 아래로 확장되고, close시 option list가 위로 축소되는 애니메이션)
- option list의 item을 선택하면 drop box의 item으로 설정
- drop box의 기본 item은 본인 이름으로 하드코딩하여 설정하거나, placeholder를 자유롭게 구현
- **drop box가 close 상태인 경우 option list는 DOM에서 제거되어야 함**
- 그 외 추가로 구현한 내용은 Pull Request 작성시 '추가 구현 항목'에 명시

## Git Usage

- **본 과제는 해당 repository를 fork하는 방식이 아닌 clone을 통해 진행**
- **본 repository를 clone한 이후 본인 핸들명으로 branch를 생성 후 작업 (예시: git checkout -b WONYOUNG-HC)**
- 과제 구현 이후 본 repository의 main branch를 target으로 본인 핸들을 포함하여 Pull Request 작성
  - `${본인 핸들 명}: 6월 네트워킹 과제 제출합니다.`
  - 예시: WONYONG-HC: 6월 네트워킹 과제 제출합니다.
