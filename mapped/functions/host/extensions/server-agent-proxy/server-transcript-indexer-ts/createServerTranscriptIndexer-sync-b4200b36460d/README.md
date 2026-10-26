# `createServerTranscriptIndexer/sync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/server-agent-proxy/server-transcript-indexer.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/server-transcript-indexer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714310-714333](../../../../../../../reference/runtime/host-main.cjs#L714310-L714333) | `ArrowFunctionExpression` | sim | `agentId, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714310-714333](../../../../../../../reference/runtime/host-main.cjs#L714310-L714333) | 5 | 1 | 5 | 3 | 1 | 0 |

### host:714310

Chamadas escritas diretamente neste corpo: `deps.mirror.applyRange`, `deps.requiredAgents.has`, `new ServerTranscriptIndexUnavailableError`, `readCursor`, `readServerRange`, `readTopRange`, `signal.throwIfAborted`.

Alvos de atribuição ou incremento: `page`.

Alvos de lançamento explícito: `ServerTranscriptIndexUnavailableError`.

SHA-256 do trecho: `6592084b10d5d6fc2135696a070b9a0a7422d4822663f42b0ee54a86cc2947f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
