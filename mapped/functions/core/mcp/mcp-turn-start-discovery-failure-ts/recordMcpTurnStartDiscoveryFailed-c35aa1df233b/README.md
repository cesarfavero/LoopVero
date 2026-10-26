# `recordMcpTurnStartDiscoveryFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-turn-start-discovery-failure.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-turn-start-discovery-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588944-588962](../../../../../../reference/runtime/sand-eval-runner.cjs#L588944-L588962) | `FunctionDeclaration` | não | `ctx, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588944-588962](../../../../../../reference/runtime/sand-eval-runner.cjs#L588944-L588962) | 2 | 1 | 0 | 0 | 0 | 0 |

### evaluation:588944

Chamadas escritas diretamente neste corpo: `diagnosticForWait`, `errorLogTag`, `failures.increment`, `metricApi`, `metricCause`, `reportHostDiagnosticOrStderr`, `snapshotMcpTurnStartDiscoveryWaits`.

SHA-256 do trecho: `fb578c2f6216937fff7649268e7fb8e36cf688b609ae3435043219aa2245a5d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
