# `untilCanceled/onAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/until-canceled.ts` · [README do módulo](../../../../../modules/core/box/until-canceled-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553796-553796](../../../../../../reference/runtime/host-main.cjs#L553796-L553796) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:575565-575565](../../../../../../reference/runtime/sand-eval-runner.cjs#L575565-L575565) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553796-553796](../../../../../../reference/runtime/host-main.cjs#L553796-L553796) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:553796 usa retorno implícito de arrow function.
| [evaluation:575565-575565](../../../../../../reference/runtime/sand-eval-runner.cjs#L575565-L575565) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:575565 usa retorno implícito de arrow function.

### host:553796

Chamadas escritas diretamente neste corpo: `canceled.reject`.

SHA-256 do trecho: `2644cdb7c262fff446f151d046f8defba30023142177382b94be835dcadcc7f2`.

### evaluation:575565

Chamadas escritas diretamente neste corpo: `canceled.reject`.

SHA-256 do trecho: `2644cdb7c262fff446f151d046f8defba30023142177382b94be835dcadcc7f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
