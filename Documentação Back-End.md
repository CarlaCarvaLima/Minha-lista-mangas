# Documentação Back-End

### Model - Mangá

| Atributo | Tipo      |
| -------- | --------- |
| id       | [PK] Long |
| titulo   | String    |
| volume   | long      |
| autor    | String    |
| foto     | String    |

A tabela possuirá os atributos **ID** referente ao código de cada mangá. **Titulo** onde iremos inserir o nome do mangá. **Volume** para informar qual o volume do mangá. **Autor** do mangá. E **Foto** para mostrar a capa do mangá. Optei por colocar a foto como string, pois vou utilizar o meu computador pessoal para armazenar os dados, e o armazenamento de imagens consome muita memória. Assim, na hora de cadastrar um mangá, informo o link do endereço da imagem, ao invés de fazer o upload.

### CRUD

| Métodos | End-points              | Descrição                              |
| ------- | ----------------------- | -------------------------------------- |
| Get     | /mangas                 | Listar todos os mangás existentes      |
| Get     | /mangas/{id}            | Listar um mangá específico pelo ID     |
| Get     | /mangas/titulo/{titulo} | Listar um mangá específico pelo título |
| Post    | /mangas                 | Cadastrar um mangá                     |
| Put     | /mangas                 | Editar um mangá                        |
| Delete  | /mangas/{id}            | Excluir algum mangá pelo ID            |

A tabela possui os end-points básicos (get, post, put e delete) e mais dois métodos específicos, que buscam pelo id e pelo título.

### Json

```
{   
    "id": 1,
    "titulo": "Naruto",
    "volume": 1,
    "autor": "Masashi Kishimoto",
    "foto": "https://m.media-amazon.com/images/I/51SD7kBZ8hL._SY346_.jpg"
       
}
{   
    "id": 2,
    "titulo": "Naruto",
    "volume": 2,
    "autor": "Masashi Kishimoto",
    "foto": "https://http2.mlstatic.com/D_NQ_NP_750643-MLB43371045491_092020-O.jpg"
}
```



### 



## Descrição Deploy Back-End

| Implementações                  |
| ------------------------------- |
| docker-compose.yml              |
| Dockerfile  |
| Dockerfile (na pasta da api)    |

Realizei o deploy do back-end da minha aplicação através do Docker e mantive os conteiners na minha máquina de uso pessoal.
