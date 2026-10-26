# `createNeedsAuthCards/liveNeedsAuthNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/needs-auth-cards.ts` · [README do módulo](../../../../../modules/core/mcp/needs-auth-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585016-585030](../../../../../../reference/runtime/sand-eval-runner.cjs#L585016-L585030) | `ArrowFunctionExpression` | sim | `providerIdentifier, result, probes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585016-585030](../../../../../../reference/runtime/sand-eval-runner.cjs#L585016-L585030) | 3 | 0 | 1 | 4 | 0 | 0 |

### evaluation:585016

Chamadas escritas diretamente neste corpo: `connectCardEmittedForServer.get`, `connectCardWait`, `cursorScmProviderForMcpServerIdentifier`, `describeCard`, `followUpGateFor`, `mcp.resolveNeedsAuthSlot`, `probes.openedAfterMs`.

SHA-256 do trecho: `59711c7ac80b577d2524bcb1884f5d95115035ad272213edbd0da904e4d34ca3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
