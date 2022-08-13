import CardNote from "../CardNote/CardNote";
import styles from "./NoteSection.module.css";

const NoteSection = ({ notes, onDelete, onArchive }) => {
  const archivedNotes = notes.filter((note) => {
    return note.archived;
  });
  const unArchivedNotes = notes.filter((note) => {
    return !note.archived;
  });

  return (
    <section className={styles.noteSection}>
      <h1>~Active Notes~</h1>
      <div className={styles.container}>
        {unArchivedNotes.length > 0 ? unArchivedNotes.map((note) => {
          return (
            <CardNote
              key={note.id}
              {...note}
              onArchive={() => onArchive(note.id)}
              onDelete={() => onDelete(note.id)}
            />
          );
        }) : <h3 className={styles.empty}>Active Notes Is Empty!</h3>}
      </div>
      <h1>~Archived Notes~</h1>
      <div className={styles.container}>
        {archivedNotes.length > 0 ? archivedNotes.map((note) => {
          return (
            <CardNote
              key={note.id}
              {...note}
              onArchive={() => onArchive(note.id)}
              onDelete={() => onDelete(note.id)}
            />
          );
        }) : <h3 className={styles.empty}>Archive Notes Is Empty! </h3>}
      </div>
    </section>
  );
};

export default NoteSection;
