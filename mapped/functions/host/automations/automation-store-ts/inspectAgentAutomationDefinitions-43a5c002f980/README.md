# `inspectAgentAutomationDefinitions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720437-720483](../../../../../../reference/runtime/host-main.cjs#L720437-L720483) | `FunctionDeclaration` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720437-720483](../../../../../../reference/runtime/host-main.cjs#L720437-L720483) | 5 | 1 | 0 | 5 | 0 | 4 |

### host:720437

Chamadas escritas diretamente neste corpo: `.isDirectory`, `Date.now`, `Math.floor`, `entry.isDirectory`, `getAgentAutomationsDir`, `isSafeFolderId`, `parseStoredConfig`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `candidateCount`, `entries`, `fallbackCreatedAt`, `raw`, `validDefinitionCount`.

SHA-256 do trecho: `e91dc219cae77adfd9f13e07a92f44949266849ffae18eb4dfc60ae76eeaa724`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
