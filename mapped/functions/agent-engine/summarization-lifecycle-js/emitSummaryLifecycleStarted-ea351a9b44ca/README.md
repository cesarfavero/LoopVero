# `emitSummaryLifecycleStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-lifecycle.js` · [README do módulo](../../../../modules/agent-engine/summarization-lifecycle-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647480-647490](../../../../../reference/runtime/host-main.cjs#L647480-L647490) | `FunctionDeclaration` | não | `ctx, source` |
| [evaluation:439143-439153](../../../../../reference/runtime/sand-eval-runner.cjs#L439143-L439153) | `FunctionDeclaration` | não | `ctx, source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647480-647490](../../../../../reference/runtime/host-main.cjs#L647480-L647490) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439143-439153](../../../../../reference/runtime/sand-eval-runner.cjs#L439143-L439153) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647480

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `0a5852a19d61e9d924532ca4b67117cc4fd3da390a8d16e00747399f4a3587a9`.

### evaluation:439143

Chamadas escritas diretamente neste corpo: `.trackSummaryLifecycle`, `eventBase`, `getAgentEventTracker`, `liveLifecycle`.

Alvos de atribuição ou incremento: `lifecycle2.status`.

SHA-256 do trecho: `0a5852a19d61e9d924532ca4b67117cc4fd3da390a8d16e00747399f4a3587a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
