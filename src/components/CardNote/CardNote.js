import { showFormattedDate } from "../../api/noteApi";
import { ButtonWrapper, ErrorButton, SuccessButton } from "../Button/Button";
import styles from "./CardNote.module.css";

const CardNote = ({
  title,
  body,
  archived,
  createdAt,
  onDelete,
  onArchive,
}) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.time}>{showFormattedDate(createdAt)}</h4>
      <p className={styles.body}>{body}</p>
      <ButtonWrapper>
        <ErrorButton onClick={onDelete}>Delete</ErrorButton>
        <SuccessButton onClick={onArchive}>
          {archived ? "Unarchive" : "Archive"}
        </SuccessButton>
      </ButtonWrapper>
    </article>
  );
};

export default CardNote;
