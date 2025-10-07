export default function CustomButton({onTap, children, style} : {onTap: VoidFunction; children:React.ReactNode; style: string}) {

  return (
    <button onClick={() => {onTap()}} className={`rounded-[20px] border-t-[1px] border-l-[1px] border-b-[5px] border-r-[5px] border-light-inverse-surface dark:border-dark-inverse-surface py-2 px-3 hover:cursor-pointer hover:bg-light-surface-dim/35 box-border dark:hover:bg-dark-surface-dim/35 ${style}`}>
      {children}
    </button>
  );
}