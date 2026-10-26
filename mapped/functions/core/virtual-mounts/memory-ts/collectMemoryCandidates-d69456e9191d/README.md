# `collectMemoryCandidates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769546-769577](../../../../../../reference/runtime/host-main.cjs#L769546-L769577) | `FunctionDeclaration` | não | `deps, scopes` |
| [evaluation:565215-565246](../../../../../../reference/runtime/sand-eval-runner.cjs#L565215-L565246) | `FunctionDeclaration` | não | `deps, scopes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769546-769577](../../../../../../reference/runtime/host-main.cjs#L769546-L769577) | 6 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:565215-565246](../../../../../../reference/runtime/sand-eval-runner.cjs#L565215-L565246) | 6 | 3 | 0 | 1 | 0 | 0 |

### host:769546

Chamadas escritas diretamente neste corpo: `.map`, `candidates.push`, `deps.memoryFolders`, `deps.memoryStore`, `deps.userMemory`, `memoryFolderFactsOf`, `scopes.includes`, `store.listMemories`, `userBot.listMemories`, `userMemory.listAll`.

SHA-256 do trecho: `f3441fe3e57caf8d7264e734724582243b653c761bb457dbb3cfd1d70adf7040`.

### evaluation:565215

Chamadas escritas diretamente neste corpo: `.map`, `candidates.push`, `deps.memoryFolders`, `deps.memoryStore`, `deps.userMemory`, `memoryFolderFactsOf`, `scopes.includes`, `store.listMemories`, `userBot.listMemories`, `userMemory.listAll`.

SHA-256 do trecho: `0601279b3661cb54bb48bebb451fbb780a6fd62cb4263fbed1a033b022518fd7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
