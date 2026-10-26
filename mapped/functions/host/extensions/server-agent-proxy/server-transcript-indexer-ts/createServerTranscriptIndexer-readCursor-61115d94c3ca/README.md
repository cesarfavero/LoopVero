# `createServerTranscriptIndexer/readCursor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714264-714270](../../../../../../../reference/runtime/host-main.cjs#L714264-L714270) | `ArrowFunctionExpression` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714264-714270](../../../../../../../reference/runtime/host-main.cjs#L714264-L714270) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:714264

Chamadas escritas diretamente neste corpo: `deps.mirror.cursor`, `new ServerTranscriptIndexUnavailableError`.

Alvos de lançamento explícito: `ServerTranscriptIndexUnavailableError`.

SHA-256 do trecho: `9d9d93d6658f02618a2f66d3cc38034cd01c1c6ec641c1105fc5312d89d5a95a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
