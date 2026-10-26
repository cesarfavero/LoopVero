# `realpathNearestExisting`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/paths.ts` · [README do módulo](../../../../../modules/shared/node/paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430816-430831](../../../../../../reference/runtime/host-main.cjs#L430816-L430831) | `FunctionDeclaration` | sim | `p2` |
| [evaluation:530426-530441](../../../../../../reference/runtime/sand-eval-runner.cjs#L530426-L530441) | `FunctionDeclaration` | sim | `p2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430816-430831](../../../../../../reference/runtime/host-main.cjs#L430816-L430831) | 3 | 1 | 1 | 2 | 1 | 1 |
| [evaluation:530426-530441](../../../../../../reference/runtime/sand-eval-runner.cjs#L530426-L530441) | 3 | 1 | 1 | 2 | 1 | 1 |

### host:430816

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `missing.push`, `missing.reverse`.

Alvos de atribuição ou incremento: `current2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `54505a323689630b6cec1cc77775f996d9d2468717855ba36ec994be183d7e47`.

### evaluation:530426

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `missing.push`, `missing.reverse`.

Alvos de atribuição ou incremento: `current2`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `522d15de1bcdba941240df99b99d9ab58bfd091db045414842a2ab092023459e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
