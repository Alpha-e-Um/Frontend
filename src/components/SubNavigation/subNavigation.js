import MenuButton from "./menuButton";

const SubNavigation = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "80px" }}>
        <MenuButton imgUrl="/icons/gatherTeam.svg" description="팀 구하기" />
        <MenuButton imgUrl="/icons/alert.svg" description="팀원 구하기" />
        <MenuButton imgUrl="/icons/alert.svg" description="대외 활동" />
        <MenuButton imgUrl="/icons/alert.svg" description="지원 현황" />
        <MenuButton
          imgUrl="/icons/manageResume.svg"
          description="이력서 관리"
        />
      </div>
    </div>
  );
};

export default SubNavigation;
