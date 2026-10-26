# `createTurnRunShell/discoverTurnStartMcpTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591376-591414](../../../../../../reference/runtime/sand-eval-runner.cjs#L591376-L591414) | `FunctionDeclaration` | sim | `ctx, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591376-591414](../../../../../../reference/runtime/sand-eval-runner.cjs#L591376-L591414) | 2 | 0 | 1 | 3 | 0 | 1 |

### evaluation:591376

Chamadas escritas diretamente neste corpo: `host.mcp`, `host.noteMcpToolDiscoveryFailed`, `host.setMcpConfigJsonForTurn`, `host.setMcpDiscoveryUnavailableForTurn`, `mcp.refreshAccountConfig`, `traceSendPhase`.

Alvos de atribuição ou incremento: `tools`.

SHA-256 do trecho: `f7b724f9fe44ceee753acd531bdd5e5b5db11be94147c4a4c49be3f98651e36e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
