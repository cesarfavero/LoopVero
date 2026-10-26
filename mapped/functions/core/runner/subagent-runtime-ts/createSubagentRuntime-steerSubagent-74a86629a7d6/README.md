# `createSubagentRuntime/steerSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535526-535546](../../../../../../reference/runtime/sand-eval-runner.cjs#L535526-L535546) | `FunctionDeclaration` | não | `subagentAgentId, message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535526-535546](../../../../../../reference/runtime/sand-eval-runner.cjs#L535526-L535546) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:535526

Chamadas escritas diretamente neste corpo: `abortingSubagents.has`, `backgroundSubagentRuns.has`, `host.connectorScopeForTurn`, `narrowestConnectorScope`, `pendingSubagentSteers.set`, `runner.interrupt`, `subagentMeta.get`, `subagentMeta.set`, `subagentRegistry.get`, `subagentSessions.get`.

SHA-256 do trecho: `dcba116dde405430ae71d853a2f2731eb5b3d17ffae74f17dc9124a806c09ed4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
