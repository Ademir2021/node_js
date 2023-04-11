const Client = require('pg').Client
const PdfPrinter = require('pdfmake')
const user_db = require('./.env.json')
const client = new Client(user_db)
const PDFPrinter = require('pdfmake')
const fs = require('fs')
getUsers()

async function getUsers() {
    try {
        await client.connect()
        const res_nota = await client.query("SELECT  *FROM nota WHERE nota = 3")
        // console.log(res_nota.rows)
        const nota = res_nota.rows
        /** */
        const res_itens_nota = await client.query("SELECT  *FROM itens_nota WHERE id_venda = 3")
        console.log(res_itens_nota)
        const fonts = {
            Helvetica: {
                normal: 'Helvetica',
                bold: 'Helvetica-Bold',
                italics: 'Helvetica-Oblique',
                bolditalics: 'Helvetica-BoldOblique'
            },
        };

        const printer = new PDFPrinter(fonts)

        const itens = res_itens_nota.rows

        const body = [];

        const columnsTitle = [
            {text:"Nota", style:"columnsNota"},
            {text:"Descrição", style:"columnsTitle"},
            {text:"Marca", style:"columnsTitle"}, 
            {text:"Quant", style:"columnsTitle"},
            {text:"valor", style:"columnsTitle"},
            {text:"Total", style:"columnsTitle"},
        ]

        const columnsBody = new Array();

        columnsTitle.forEach(column => columnsBody.push(column));
        body.push(columnsBody)

        for (let item of itens){
            const rows = new Array();
            rows.push(item.id_venda)
            rows.push(item.descricao)
            rows.push(item.marca)
            rows.push(item.quant)
            rows.push(`R$ ${item.valor}`)
            rows.push(`R$ ${item.total}`)

            body.push(rows)
        }

        const docDefinitions = {
            defaultStyle: { font: "Helvetica" },
            content: [
                {
                    columns: [
                        { text: "Relatorio de Vendas", style: "header"},
                        { text: "11/04/2023\n\n", style: "header" }
                    ],
                },
                {
                    table: {
                        heights:function(row){
                            return 30;
                        },
                        widths: ["auto", 250, "auto", "auto", 60, 80,],
                        body
                    },
                },
            ],
            styles:{
                columnsNota:{
                    alignment:"center",
                    color:"blue"
                },
                header:{
                    fontSize:13,
                    bold:true,
                    alignment:"center"
                },
                columnsTitle:{
                    fontSize:18,
                    bold:true,
                    fillColor:"#7159c1",
                    color:"white",
                    margin: 4
                }
            }
        };

        const pdfDoc = printer.createPdfKitDocument(docDefinitions)

        pdfDoc.pipe(fs.createWriteStream("Relatorio.pdf"))

        const chunks = [];

        pdfDoc.on("data", (chunk) => {
            chunks.push(chunk)
        })

        pdfDoc.end();

        pdfDoc.on("end", () => {
            const result = Buffer.concat(chunks)
            // response.end(result)
            console.log(result)
        })

        console.log("Relatório concluido");
    }
    catch (err) {
        console.log("Ocorreu erro", + err)
    }
    finally {
        await client.end()
        console.log("\nCliente desconectado")
    }
}
