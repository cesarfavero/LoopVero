# `getThreadTranscriptEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/transcript.ts` · [README do módulo](../../../../../modules/shared/transcript/transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485217-485242](../../../../../../reference/runtime/host-main.cjs#L485217-L485242) | `FunctionDeclaration` | não | `entries, rootId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485217-485242](../../../../../../reference/runtime/host-main.cjs#L485217-L485242) | 6 | 3 | 0 | 2 | 0 | 0 |

### host:485217

Chamadas escritas diretamente neste corpo: `bucket.push`, `byId.get`, `byId.has`, `childrenByParent.get`, `childrenByParent.set`, `entries.filter`, `entries.map`, `getEntryReplyTo`, `isBranchedEntry`, `new Map`, `new Set`, `queue.push`, `queue.shift`, `thread.add`, `thread.has`.

SHA-256 do trecho: `edd7512f201afec227c0be047881ccfa1e5dce0df91844b7b396304c2edbe43f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
