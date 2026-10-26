# `collectReachableBlobHexIds/visitBlobReference`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-gc.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22226-22246](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22226-L22246) | `FunctionDeclaration` | não | `blobId, blobReferenceType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22226-22246](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22226-L22246) | 4 | 0 | 0 | 5 | 0 | 1 |

### state-worker:22226

Chamadas escritas diretamente neste corpo: `BLOB_REFERENCE_MESSAGE_TYPE_BY_NAME[computed].fromBinary`, `blobTypeByHexId.has`, `blobTypeByHexId.set`, `getBlobByHexId`, `isProtoBlobReferenceTypeName`, `onBlobReference`, `toHexId`, `visitMessage`.

Alvos de atribuição ou incremento: `child`, `unresolvedProtoRefs`.

SHA-256 do trecho: `21e635f9c2628b3916941cb769cc3ec67e5c58a71ca84d3c4773c0e76b24167c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
