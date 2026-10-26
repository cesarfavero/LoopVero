# `readTranscriptTail`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/session/agent-db-transcript-pages.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-transcript-pages-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718161-718191](../../../../../../../reference/runtime/host-main.cjs#L718161-L718191) | `FunctionDeclaration` | não | `statements, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718161-718191](../../../../../../../reference/runtime/host-main.cjs#L718161-L718191) | 10 | 1 | 0 | 1 | 0 | 0 |

### host:718161

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Number.isFinite`, `Number.isInteger`, `alignTranscriptWindowStart`, `isUnreadBoundary`, `new Map`, `parseTranscriptEntry`, `parsed2.push`, `readCloudAgentPeerIds`, `readUnreadAnchor`, `rows.toReversed`, `seqByEntry.get`, `seqByEntry.set`, `statements.listTranscriptTail.all`.

SHA-256 do trecho: `777a9c0d4841f2e10108f3960bdbd815ae6aede44d8e21810e2df118f5f6fbe9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
