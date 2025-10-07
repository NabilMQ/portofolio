export default function CustomHeaderWithLine({text} : {text: string}) {
  return (
    <div className="flex flex-row space-x-8 items-center">
      <div className="h-0.5 w-full bg-light-inverse-surface dark:bg-dark-inverse-surface rounded-full"></div>
      <h2 className="md-typescale-headline-medium !font-medium text-light-inverse-surface dark:text-dark-inverse-surface">
        {text}
      </h2>
      <div className="h-0.5 w-full bg-light-inverse-surface dark:bg-dark-inverse-surface rounded-full"></div>
    </div>
  );
}