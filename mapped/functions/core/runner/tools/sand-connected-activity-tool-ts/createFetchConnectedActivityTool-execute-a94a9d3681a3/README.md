# `createFetchConnectedActivityTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763752-763752](../../../../../../../reference/runtime/host-main.cjs#L763752-L763752) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:556800-556800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556800-L556800) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763752-763752](../../../../../../../reference/runtime/host-main.cjs#L763752-L763752) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:763752 usa retorno implícito de arrow function.
| [evaluation:556800-556800](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556800-L556800) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:556800 usa retorno implícito de arrow function.

### host:763752

Chamadas escritas diretamente neste corpo: `deps.fetch`, `formatConnectedActivity`.

SHA-256 do trecho: `33bfb3b15b44424d5bc3ef3653b2acf79f83a4d72e3e0c41775f7c70394a2280`.

### evaluation:556800

Chamadas escritas diretamente neste corpo: `deps.fetch`, `formatConnectedActivity`.

SHA-256 do trecho: `33bfb3b15b44424d5bc3ef3653b2acf79f83a4d72e3e0c41775f7c70394a2280`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
