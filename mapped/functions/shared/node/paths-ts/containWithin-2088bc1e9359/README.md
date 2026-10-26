# `containWithin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/paths.ts` · [README do módulo](../../../../../modules/shared/node/paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430805-430815](../../../../../../reference/runtime/host-main.cjs#L430805-L430815) | `FunctionDeclaration` | sim | `roots, p2` |
| [evaluation:530415-530425](../../../../../../reference/runtime/sand-eval-runner.cjs#L530415-L530425) | `FunctionDeclaration` | sim | `roots, p2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430805-430815](../../../../../../reference/runtime/host-main.cjs#L430805-L430815) | 3 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:530415-530425](../../../../../../reference/runtime/sand-eval-runner.cjs#L530415-L530425) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:430805

Chamadas escritas diretamente neste corpo: `Promise.all`, `realRoots.some`, `realpathNearestExisting`, `roots.map`, `roots.some`.

SHA-256 do trecho: `40282aa1fa7396ce8cac93ca0f0636f12e624c349f8dc14f206680269470444b`.

### evaluation:530415

Chamadas escritas diretamente neste corpo: `Promise.all`, `realRoots.some`, `realpathNearestExisting`, `roots.map`, `roots.some`.

SHA-256 do trecho: `0b0cc340b083ca6dbc98cb3f4df9caffa87476ceb147cb317b3ccef703baa5d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
