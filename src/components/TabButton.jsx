export default function TabButton({children, onSelect}) {

    /**
     * 이벤트를 여기에다가 작성하는 경우
     */
    // function handleClick() {
    //     console.log('Hello World!');

    // }

    // return (
    //     <li>
    //         <button onClick={handleClick}>{children}</button>
    //     </li>
    // );




    /**
     * 이벤트 함수를 매개변수로 받는 경우
     */
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}