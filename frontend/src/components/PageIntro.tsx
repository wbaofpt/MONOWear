export default function PageIntro({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{kicker}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}
