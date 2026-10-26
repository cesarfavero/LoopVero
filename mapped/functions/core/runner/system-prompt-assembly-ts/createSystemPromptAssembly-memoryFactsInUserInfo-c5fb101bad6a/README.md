# `createSystemPromptAssembly/memoryFactsInUserInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552947-552952](../../../../../../reference/runtime/sand-eval-runner.cjs#L552947-L552952) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552947-552952](../../../../../../reference/runtime/sand-eval-runner.cjs#L552947-L552952) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552947

Chamadas escritas diretamente neste corpo: `.getMemoryPromptSnapshot`, `deps.compactionEpoch`, `deps.gates.memoryFactsInUserInfo`, `deps.isBoxScopedSubagent`, `deps.memorySnapshots`, `deps.promptSectionSnapshots`, `memoryControlPinShape`, `promptSnapshots.getPromptSectionSnapshot`.

SHA-256 do trecho: `3586bfbf72b552848db2db0af819e4ae37d7e22e31d8cc0f81b39dac9a2be4b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
