# `createServerTranscriptIndexer/stop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714349-714360](../../../../../../../reference/runtime/host-main.cjs#L714349-L714360) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714349-714360](../../../../../../../reference/runtime/host-main.cjs#L714349-L714360) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:714349

Chamadas escritas diretamente neste corpo: `current2.agents.values`, `current2.controller.abort`, `current2.unsubscribe`, `state.hint.dispose`.

Alvos de atribuição ou incremento: `current2.ready.length`, `lifetime`, `state.hint`.

SHA-256 do trecho: `0c4faa8de35bd91ec4c4b25c7ca709111d019c61e3bd336fc69dfd1fdc25c861`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
