# `scoreRootCandidate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-isolation/conversation-blob-store.ts` · [README do módulo](../../../../../modules/host/agent-isolation/conversation-blob-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [state-worker:22312-22330](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22312-L22330) | `FunctionDeclaration` | não | `data, presentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [state-worker:22312-22330](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L22312-L22330) | 3 | 1 | 0 | 5 | 0 | 1 |

### state-worker:22312

Chamadas escritas diretamente neste corpo: `ConversationStateStructure.fromBinary`, `presentIds.has`, `toHex2`.

Alvos de atribuição ou incremento: `structure`.

SHA-256 do trecho: `6f815c1acc1a067871280e47f79794ed7dc2788efd26abe7077da9a167af6ece`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
