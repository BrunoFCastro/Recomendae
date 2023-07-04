import BookSection from "../BooksSection/BooksSection";
import Avaliacao from "../Avaliacao/Avaliacao";
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro";

function Conteudo({pagina}){

    function controle(pagina){
        switch (pagina) {
            case "1":
                return <Avaliacao />;
            case "2":
                return <Login />;
            case "3":
                return <Cadastro />;
            default:
                return <BookSection />;
        }
    }

    return (controle(pagina))
}

export default Conteudo