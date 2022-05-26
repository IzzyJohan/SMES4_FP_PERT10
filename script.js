console.log("Mulai React!")

/**
 * Membuat Component Hello
 * Mencetak UI (elements    )
 */

function Hello(props) {
    // Di luar retunr adalah JavaScript biasa
    const nama = "Aufa"
    console.log(props);

    const { name } = props;

    // Di dalam return adalah JSX
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {nama} - Frontend Engineer</p>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}

// Menamping Component header
function Header(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

// Menampung Component Main/Utama
function Main(){
    return(
        <main>
            <Hello name="Tono"/>
            <Hello name="Jonas"/>
            <Hello name="Mikel"/>
            <Hello name="Martha"/>
            <Hello name="Hannah"/>
        </main>
    );
}

// Menampung Component Footer
function Footer(){
    return(
        <footer>
            <h2>Copyright</h2>
            <p>Dibuat menggunakan ReactJS</p>
        </footer>
    );
}

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

const judul = <h1>Hello React</h1>;

/**
 * Mencetak Component Hello ke div root
 */
ReactDOM.render(<App />, document.getElementById("root"));