import { Stack } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MainBaseButton from "../../../../components/Button/MainBaseButton/MainBaseButton";
import { useUpdateStatusAnnouncementMutation } from "../../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";
import { useUpdateStatusProductMutation } from "../../../../redux/store/rtk-api/product-rtk/productEndpoints";
import { Status } from "../../../../types/Enums";

interface Props {
  id: number;
  confirm: boolean;
}

const AnnounceHeader: FC<Props> = ({ id, confirm }) => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/app/announcement/list");
  };

  const [updateStatus] = useUpdateStatusProductMutation();

  const handleAccept = () => {
    updateStatus(id);
  };

  const handleDenied = () => {
    // updateStatus({ id: id, body: { status: Status.DENIED } });
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <MainBaseButton
        onClick={handleNavigateBack}
        bgcolor={"#fff"}
        sx={{ color: "#000", maxWidth: "150px" }}
      >
        Назад
      </MainBaseButton>

      <Stack direction="row" spacing={3}>
        <Stack
          justifyContent={"center"}
          alignItems="center"
          sx={{
            backgroundColor: confirm ? "#2DC36A" : "red",
            borderRadius: "12px",
            padding: "12px",
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {confirm ? "Подтвержден" : "Отклонен"}
        </Stack>

        <MainBaseButton
          onClick={handleAccept}
          sx={{
            backgroundColor: "#2DC36A",
            width: "200px",
            color: "#fff",
          }}
        >
          Подтвердить
        </MainBaseButton>
      </Stack>
    </Stack>
  );
};

export default AnnounceHeader;
