# Store API REST

## Aplicación

Esta aplicación es un API REST desarrollada para una versión preliminar de una tienda online. Esta permite conectarnos a una base de datos SQLITE para la creación, edición, búsqueda por filtros y eliminación de tipos de producto.

## Tecnologías

Esta API fue construida con el framework express(Node JS, JavaScript) para conectarse mediante sqlite3 a una base de datos SQLITE. Asimismo esta sirve de fuente de información a una [aplicación](https://github.com/alxdrian/Store-app) desarrollada con React.

## Funcionalidad

La aplicación se conecta a una base de datos incluida en este repositorio. Las rutas propuestas son para modificar tipos de producto, configuradas como parte de la version 1 del API, junto a sus respectivos controladores y servicios. Las rutas obtienen respuestas programadas en los controllers, los cuales usan a los servicios para la ejecución de la lógica de cada función (como en el caso de obtener una lista de resultados y su conteo). Estos servicios son intemediarios entre los controladores y la base de datos, a la cual se conectan a través de un modelo de acceso de datos (database/ProductType) que realizará las peticiones a SQLITE.

## Desarrollo

Para desarrollar la API en local ejecute 'npm run dev'. Se ejecutará en el puerto 5000. Asimismo se recomienda ejecutarse simultáneamente con su [interfaz](https://github.com/alxdrian/Store-app) respectiva.

## Endpoints

## OBTENER TODOS LOS TIPOS DE PRODUCTOS

Nos permite obtener todos los tipos de productos, incluyendo búsqueda por nombre.

* `GET /v1/products/types`

## Parámetros

-  **name**, nombre del tipo de producto a buscar (String)

## Respuesta

- `GET /v1/products/types?limit=3&offset=0&name=a`

```json
{
    "code": 200,
    "href": "localhost:5000/api/v1/products/types?limit=3&offset=0&name=",
    "count": 5,
    "limit": 3,
    "offset": 0,
    "data": [
        {
            "id": 1,
            "name": "Sello",
            "description": "Sellos con hermosos diseños en relieve metálico.\nUna manera distinta de estampar.",
            "imageUrl": "https://cdn.shopify.com/s/files/1/2076/4473/products/Wax-Seal-Stamp-3.jpg?v=1615713462"
        },
        {
            "id": 2,
            "name": "Mango",
            "description": "Mangos especiales para sellos, de diferentes modelos y materiales. Diseños exclusivos en varios colores y tallados.",
            "imageUrl": "https://i.etsystatic.com/31847384/r/il/f32ee4/3637622315/il_fullxfull.3637622315_mw81.jpg"
        },
        {
            "id": 4,
            "name": "Cuchara",
            "description": "Cucharas especializadas para cera",
            "imageUrl": "https://ae01.alicdn.com/kf/H75cc56733efc42e2ac20327123d43411m/Wax-Lepel-Zegellak-Seal-Stempel-Kralen-Voor-Vintage-Craft-Envelop-Wedding-Wasverbinding-Oude-Zegellak-Stempel-Houten.jpg_Q90.jpg_.webp"
        }
    ],
    "next": "localhost:5000/api/v1/products/types?limit=3&offset=3&name="
}
```

## OBTENER EL TIPO DE PRODUCTO SEGÚN ID

Nos permite obtener un tipo de producto según id

* `GET /v1/products/types/:id`

## Parámetros

-  **id**, id del tipo de producto (Number)

## Respuesta

- `GET v1/products/types/1`

```json
{
    "code": 200,
    "data": {
        "id": 1,
        "name": "Sello",
        "description": "Sellos con hermosos diseños en relieve metálico.\nUna manera distinta de estampar.",
        "imageUrl": "https://cdn.shopify.com/s/files/1/2076/4473/products/Wax-Seal-Stamp-3.jpg?v=1615713462"
    }
}
```

## EDITAR EL TIPO DE PRODUCTO SEGÚN ID

Nos permite editar un tipo de producto según id

* `PUT /v1/products/types/:id`

## Parámetros

-  **id**, id del tipo de producto (Number)

## Estructura JSON del BODY de la petición.

```json
{
    "name": "Cuchara",
    "description": "Cucharas especializadas para cera de diversos modelos"
}
```

## Respuesta

- `PUT v1/products/types/3`

```json
{
    "code": 200,
    "data": {
        "result": "ok"
    }
}
```

## CREAR UN NUEVO TIPO DE PRODUCTO

Nos permite crear un nuevo tipo de producto

* `POST /v1/products/types`

## Parámetros

-  **name**, nombre del tipo de producto (String)(requerido)
-  **description**, descripción del tipo de producto (String)(requerido)
-  **imageUrl**, url de la imagen del tipo de producto (String)(opcional)

## Estructura JSON del BODY de la petición.

```json
{
    "name": "Sobres",
    "description": "Finos sobres donde estampar hermosos sellos para las mejores invitaciones"
}
```

## Respuesta

- `POST v1/products/types`

```json
{
    "code": 200,
    "data": {
        "result": "ok"
    }
}
```

## ELIMINAR UN TIPO DE PRODUCTO SEGUN ID

Nos permite eliminar un tipo de producto según id

* `DELETE /v1/products/types/id`

## Parámetros

-  **id**, id del tipo de producto (Number)

## Respuesta

```json
{
    "code": 200,
    "data": {
        "result": "ok"
    }
}
```