# `nextEntryId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-entry-ids.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-entry-ids-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734324-734351](../../../../../../../reference/runtime/host-main.cjs#L734324-L734351) | `FunctionDeclaration` | não | `entries, kind, storedIds = getTranscriptStoredIds(entries)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734324-734351](../../../../../../../reference/runtime/host-main.cjs#L734324-L734351) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:734324

Chamadas escritas diretamente neste corpo: `countTrailingAssistantMessages`, `countTrailingSendMessages`, `countTrailingUserAttachments`, `countUserMessages`, `entries.map`, `existingIds.add`, `firstUnusedId`, `new Set`.

SHA-256 do trecho: `0e839979a56fa47f8530ca5170440508f2f260bac57c5da5fdc83efd5bf7d6f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
