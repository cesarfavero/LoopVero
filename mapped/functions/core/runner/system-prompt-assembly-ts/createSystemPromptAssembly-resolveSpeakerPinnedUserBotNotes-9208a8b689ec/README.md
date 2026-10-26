# `createSystemPromptAssembly/resolveSpeakerPinnedUserBotNotes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553046-553059](../../../../../../reference/runtime/sand-eval-runner.cjs#L553046-L553059) | `FunctionDeclaration` | não | `live` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553046-553059](../../../../../../reference/runtime/sand-eval-runner.cjs#L553046-L553059) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553046

Chamadas escritas diretamente neste corpo: `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `promptSnapshots.getPromptSectionSnapshot`, `promptSnapshots.setPromptSectionSnapshot`, `resolveUserBotNotesPrompt`.

SHA-256 do trecho: `0da4b4d7c8db7d322a1569d360a3564bcf04c45f8601a6148a6ebc00e8b7f528`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
