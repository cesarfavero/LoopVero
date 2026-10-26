# `createTurnMcpExecutorEntries/describeShopifyStoreSwitch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/turn-composition/mcp-executor.ts` · [README do módulo](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586006-586023](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586006-L586023) | `ArrowFunctionExpression` | sim | `result, providerIdentifier, toolName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586006-586023](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586006-L586023) | 3 | 0 | 1 | 4 | 0 | 1 |

### evaluation:586006

Chamadas escritas diretamente neste corpo: `errorLogTag`, `isShopifyStoreSwitch`, `new McpError`, `reportHostDiagnostic`, `resolveServerHost`, `surfaceNeedsAuthCard`, `turnToolHost.gates.shopifyStoreSwitchCard`.

SHA-256 do trecho: `bc46a4615dc20bb821c898d1e59390c675c554d5a72c4d46f194ac0ea007b08f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
