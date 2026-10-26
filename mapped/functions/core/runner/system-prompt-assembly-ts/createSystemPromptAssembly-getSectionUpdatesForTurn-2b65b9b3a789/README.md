# `createSystemPromptAssembly/getSectionUpdatesForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553165-553207](../../../../../../reference/runtime/sand-eval-runner.cjs#L553165-L553207) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553165-553207](../../../../../../reference/runtime/sand-eval-runner.cjs#L553165-L553207) | 6 | 1 | 0 | 3 | 0 | 0 |

### evaluation:553165

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `liveFrozenSection`, `memoryFactsInUserInfo`, `pinnedSection`, `renderFrozenPromptSectionUpdates`, `renderMemoryLive`, `renderOtherAssistantMemoryUpdate`, `resolveFrozenPromptSectionUpdate`, `resolveOtherAgentMemoryPromptUpdate`, `resolveRelatedConversationsSection`, `updates.push`.

Alvos de atribuição ou incremento: `memorySnapshotToPersist`, `peerMemoryUpdateText`.

SHA-256 do trecho: `c8443d1a929c56c1118e29dbd6dfc3edc48dc92c6e2cc8fd5ccc076229c799a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
