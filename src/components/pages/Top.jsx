import styled from "styled-components";
import { SeconderyButton } from "../atoms/button/SeconderyButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SConponent>
      <h2>TOPページです</h2>
      <SeconderyButton onClick={onClickAdmin}>管理者ユーザー</SeconderyButton>
      <br />
      <br />
      <SeconderyButton onClick={onClickGeneral}>一般ユーザー</SeconderyButton>
    </SConponent>
  );
};

const SConponent = styled.div`
  text-align: center;
`;
