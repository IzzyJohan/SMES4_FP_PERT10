/**
 * Membuat Component Hello
 * Mencetak UI (elements    )
 */

 function Hello(props) {
    // Di luar retunr adalah JavaScript biasa
    console.log(props);

    const { name } = props;

    // Di dalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}

export default Hello;