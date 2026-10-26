# `collectReachableBlobHexIds/visitMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-gc.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22247-22288](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22247-L22288) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22247-22288](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22247-L22288) | 10 | 4 | 0 | 0 | 0 | 0 |

### state-worker:22247

Chamadas escritas diretamente neste corpo: `.map`, `Array.isArray`, `EDGES_NOT_WALKED_SO_REFERENTS_COLLECT.has`, `Object.values`, `blobFieldsByLocalName.get`, `blobIdsIn`, `fieldValue`, `getBlobReferenceMessageMetadata`, `isMessage`, `message.getType`, `messageType.fields.list`, `new Map`, `visitBlobReference`, `visitMessage`.

SHA-256 do trecho: `687e3f301a1fed21136e20b15f03c9e1002c81fdd56970c22fe1fffd458543e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
