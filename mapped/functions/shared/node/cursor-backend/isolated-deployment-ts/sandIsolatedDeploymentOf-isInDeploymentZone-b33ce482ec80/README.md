# `sandIsolatedDeploymentOf/isInDeploymentZone`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451616-451616](../../../../../../../reference/runtime/host-main.cjs#L451616-L451616) | `ArrowFunctionExpression` | não | `url2` |
| [evaluation:597162-597162](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597162-L597162) | `ArrowFunctionExpression` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451616-451616](../../../../../../../reference/runtime/host-main.cjs#L451616-L451616) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:451616 usa retorno implícito de arrow function.
| [evaluation:597162-597162](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597162-L597162) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:597162 usa retorno implícito de arrow function.

### host:451616

Chamadas escritas diretamente neste corpo: `.endsWith`, `httpProtocolOf`, `normalizedHostname`.

SHA-256 do trecho: `7cafac6d085118c43e45ae74f7d2d38abe69d490f6d272a9f512e463298cb831`.

### evaluation:597162

Chamadas escritas diretamente neste corpo: `.endsWith`, `httpProtocolOf`, `normalizedHostname2`.

SHA-256 do trecho: `843c40248e98d8ec5ba8f3ec526384a6beb4fc22251f20c9325edd64da1f7437`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
