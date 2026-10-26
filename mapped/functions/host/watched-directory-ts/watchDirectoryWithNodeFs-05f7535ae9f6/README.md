# `watchDirectoryWithNodeFs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/watched-directory.ts` · [README do módulo](../../../../modules/host/watched-directory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684348-684350](../../../../../reference/runtime/host-main.cjs#L684348-L684350) | `ArrowFunctionExpression` | não | `directory, onEvent` |
| [evaluation:627672-627674](../../../../../reference/runtime/sand-eval-runner.cjs#L627672-L627674) | `ArrowFunctionExpression` | não | `directory, onEvent` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684348-684350](../../../../../reference/runtime/host-main.cjs#L684348-L684350) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:684348 usa retorno implícito de arrow function.
| [evaluation:627672-627674](../../../../../reference/runtime/sand-eval-runner.cjs#L627672-L627674) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:627672 usa retorno implícito de arrow function.

### host:684348

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `470705abcaab5e4c89176c90e6790c2bd213498bfbdee21cf6636950f9ba3d3d`.

### evaluation:627672

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `f016de9fd993db734b79cb375045be4b1083ec87955bf432410bbaf611755b91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
