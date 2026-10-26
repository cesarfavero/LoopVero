# `renderMemoryFolderSections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537902-537950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537902-L537950) | `FunctionDeclaration` | não | `facts, memoryTypes, stateTools2 = ALL_STATE_TOOLS, teamBot = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537902-537950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537902-L537950) | 8 | 2 | 0 | 1 | 0 | 0 |

### evaluation:537902

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `appendBudgetedFacts`, `facts.filter`, `files.has`, `files.set`, `folderMemoryTypes`, `lines2.join`, `lines2.push`, `memoryFolderAudienceNote`, `new Map`, `omittedFactsHint`, `sections.join`, `sections.push`.

SHA-256 do trecho: `8c22255c526b022cc74d4029ad2c1dfa3073d08d93a5b6246fb7e5050a741505`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
