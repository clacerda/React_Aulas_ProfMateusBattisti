const TemplateExpressions = () => {


    const name = "claudio"
    const data = {
        age: 31,
        job: "Developer"
    }
    return (
        <div>
            <h1> Olá {name}, tudo bem? </h1>
            <p> Eu sou um {data.job} e tenho {data.age} anos de idade.</p>
            <p>{4 + 4}</p>
            <p>{console.log("Curso de React <3")}</p>
        </div>
    )

}

export default TemplateExpressions