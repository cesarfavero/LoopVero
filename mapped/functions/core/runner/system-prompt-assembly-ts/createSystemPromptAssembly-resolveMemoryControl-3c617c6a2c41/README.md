# `createSystemPromptAssembly/resolveMemoryControl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553010-553045](../../../../../../reference/runtime/sand-eval-runner.cjs#L553010-L553045) | `FunctionDeclaration` | não | `live` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553010-553045](../../../../../../reference/runtime/sand-eval-runner.cjs#L553010-L553045) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:553010

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.memorySnapshots`, `deps.promptSectionSnapshots`, `isMemoryFreezeEnabled`, `memoryControlPin`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveFrozenMemoryPrompt`, `resolveFrozenPromptSection`, `snapshots.clearMemoryPromptSnapshot`, `snapshots.getMemoryPromptSnapshot`, `snapshots.setMemoryPromptSnapshot`, `withOtherAgentMemorySnapshot`.

SHA-256 do trecho: `ffe973ab433e6cde4306d0e7ddf2b318d73d52d0cec772fdc694b331caea9a1b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
