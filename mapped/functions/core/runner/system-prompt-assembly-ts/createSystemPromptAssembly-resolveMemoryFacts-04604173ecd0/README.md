# `createSystemPromptAssembly/resolveMemoryFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552972-553009](../../../../../../reference/runtime/sand-eval-runner.cjs#L552972-L553009) | `FunctionDeclaration` | não | `live` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552972-553009](../../../../../../reference/runtime/sand-eval-runner.cjs#L552972-L553009) | 6 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552972

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.memorySnapshots`, `deps.promptSectionSnapshots`, `isMemoryFreezeEnabled`, `memoryFactsPin`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveFrozenMemoryPrompt`, `resolveFrozenPromptSection`, `snapshots.clearMemoryPromptSnapshot`, `snapshots.getMemoryPromptSnapshot`, `snapshots.setMemoryPromptSnapshot`, `withOtherAgentMemorySnapshot`.

SHA-256 do trecho: `80ebe184aa9ee26b225208fa6f0cd079890d57ad2dbcfebce56d19e136ba1dea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
