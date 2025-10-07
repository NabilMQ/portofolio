export default function Footer() {
  return (
    <div className="flex flex-row space-x-8 pb-3 items-center">
      <div className="h-0.5 w-full bg-light-inverse-surface dark:bg-dark-inverse-surface rounded-full"></div>
      <div className="flex flex-col text-center">
        <p className="w-max mx-auto md-typescale-body-small line-clamp-1 text-light-inverse-surface dark:text-dark-inverse-surface">
          Nabil Mutawakkil Qisthi
        </p>
        <p className="w-max mx-auto md-typescale-body-small line-clamp-1 text-light-inverse-surface dark:text-dark-inverse-surface">
          All rights reserved.
        </p>
      </div>
      <div className="h-0.5 w-full bg-light-inverse-surface dark:bg-dark-inverse-surface rounded-full"></div>
    </div>
  );
}