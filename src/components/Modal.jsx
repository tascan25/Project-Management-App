import { useRef,useImperativeHandle,forwardRef } from "react"
const Modal = forwardRef(function Modal({children,buttonCaption},ref){
    const dialog = useRef()
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
    return(
        <dialog ref={dialog} className="backdrop:bg-stone-950/90 p-4 rounded-md relative mx-auto mt-[15em]">
            {children}
            <form method="dialog" className="w-full flex justify-end">
                <button className="bg-stone-700 text-stone-200 py-1 px-2 rounded-md self-center ">{buttonCaption}</button>
            </form>
        </dialog>
    )
})
export default Modal