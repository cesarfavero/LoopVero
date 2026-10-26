# `regExpLiteral`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/canvas/canvas-source-path.ts` · [README do módulo](../../../../../modules/shared/canvas/canvas-source-path-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770038-770038](../../../../../../reference/runtime/host-main.cjs#L770038-L770038) | `ArrowFunctionExpression` | não | `value` |
| [evaluation:566748-566748](../../../../../../reference/runtime/sand-eval-runner.cjs#L566748-L566748) | `ArrowFunctionExpression` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770038-770038](../../../../../../reference/runtime/host-main.cjs#L770038-L770038) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:770038 usa retorno implícito de arrow function.
| [evaluation:566748-566748](../../../../../../reference/runtime/sand-eval-runner.cjs#L566748-L566748) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:566748 usa retorno implícito de arrow function.

### host:770038

Chamadas escritas diretamente neste corpo: `value.replace`.

SHA-256 do trecho: `1bc7904008f0d4c1c4e07a9b6f78b9af9d4bdc6a5bd30e9f2d7e11941b155a24`.

### evaluation:566748

Chamadas escritas diretamente neste corpo: `value.replace`.

SHA-256 do trecho: `1bc7904008f0d4c1c4e07a9b6f78b9af9d4bdc6a5bd30e9f2d7e11941b155a24`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
