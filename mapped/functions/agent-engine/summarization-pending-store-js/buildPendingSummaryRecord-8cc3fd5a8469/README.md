# `buildPendingSummaryRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-pending-store.js` · [README do módulo](../../../../modules/agent-engine/summarization-pending-store-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:647808-647869](../../../../../reference/runtime/host-main.cjs#L647808-L647869) | `FunctionDeclaration` | sim | `args` |
| [evaluation:439465-439526](../../../../../reference/runtime/sand-eval-runner.cjs#L439465-L439526) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647808-647869](../../../../../reference/runtime/host-main.cjs#L647808-L647869) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:439465-439526](../../../../../reference/runtime/sand-eval-runner.cjs#L439465-L439526) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:647808

Chamadas escritas diretamente neste corpo: `Date.now`, `args.messagesSummarized.forEach`, `args.result.preservedOriginalTailMessages.map`, `args.result.summary.summary.unwrap`, `createRedactedCoreMessageSerde`, `fullReplacementMessages.indexOf`, `fullReplacementMessages.map`, `hashMessagesPrefix`, `new Error`, `new Map`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `69f992fa96756cbc9919ed52b4c93d65cca5765ceedd277939a03e85d92c16b8`.

### evaluation:439465

Chamadas escritas diretamente neste corpo: `Date.now`, `args.messagesSummarized.forEach`, `args.result.preservedOriginalTailMessages.map`, `args.result.summary.summary.unwrap`, `createRedactedCoreMessageSerde`, `fullReplacementMessages.indexOf`, `fullReplacementMessages.map`, `hashMessagesPrefix`, `new Error`, `new Map`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `69f992fa96756cbc9919ed52b4c93d65cca5765ceedd277939a03e85d92c16b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
