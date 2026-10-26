# `emitSummaryLifecycleCompleted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-lifecycle.js` · [README do módulo](../../../../modules/agent-engine/summarization-lifecycle-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647491-647502](../../../../../reference/runtime/host-main.cjs#L647491-L647502) | `FunctionDeclaration` | não | `ctx, source, outcome` |
| [evaluation:439154-439165](../../../../../reference/runtime/sand-eval-runner.cjs#L439154-L439165) | `FunctionDeclaration` | não | `ctx, source, outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647491-647502](../../../../../reference/runtime/host-main.cjs#L647491-L647502) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439154-439165](../../../../../reference/runtime/sand-eval-runner.cjs#L439154-L439165) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647491

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `fe23bf2c834890cca2d7d1544a379ff90e8f360035610000e867b00aa187fa7a`.

### evaluation:439154

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `fe23bf2c834890cca2d7d1544a379ff90e8f360035610000e867b00aa187fa7a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
