# `collectReachableBlobHexIds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-gc.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-gc-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22219-22291](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22219-L22291) | `FunctionDeclaration` | não | `{   rootBytes,   getBlobByHexId,   onBlobReference }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22219-22291](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22219-L22291) | 0 | 0 | 0 | 1 | 0 | 0 |

### state-worker:22219

Chamadas escritas diretamente neste corpo: `ConversationStateStructure.fromBinary`, `new Map`, `visitMessage`.

SHA-256 do trecho: `85e439d82bf90c2180a5173d0da0d2475b66ea1a481e30de4493b1b35f9430f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
