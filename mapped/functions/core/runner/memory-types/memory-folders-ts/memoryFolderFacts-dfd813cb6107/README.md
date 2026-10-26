# `memoryFolderFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-folders.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754693-754713](../../../../../../../reference/runtime/host-main.cjs#L754693-L754713) | `FunctionDeclaration` | não | `folders, memoryTypes` |
| [evaluation:537660-537680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537660-L537680) | `FunctionDeclaration` | não | `folders, memoryTypes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754693-754713](../../../../../../../reference/runtime/host-main.cjs#L754693-L754713) | 2 | 2 | 0 | 2 | 0 | 0 |
| [evaluation:537660-537680](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537660-L537680) | 2 | 2 | 0 | 2 | 0 | 0 |

### host:754693

Chamadas escritas diretamente neste corpo: `.map`, `byName3.get`, `facts.push`, `facts.sort`, `folderMemoryTypes`, `memoryFolderModelPath`, `memoryJsonlFolderMemories`, `new Map`, `parsedTime`.

SHA-256 do trecho: `c673bee863950bbfe3f503f76f5aa2604f6d4f06be0cd11e66b73e6505c3c23c`.

### evaluation:537660

Chamadas escritas diretamente neste corpo: `.map`, `byName2.get`, `facts.push`, `facts.sort`, `folderMemoryTypes`, `memoryFolderModelPath`, `memoryJsonlFolderMemories`, `new Map`, `parsedTime`.

SHA-256 do trecho: `73fc9b8182328cd62e03bff3da3e911642eaf020bd087abf0ffea94c316c5e6b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
