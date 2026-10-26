# `createSystemPromptAssembly/getMemorySections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553064-553099](../../../../../../reference/runtime/sand-eval-runner.cjs#L553064-L553099) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553064-553099](../../../../../../reference/runtime/sand-eval-runner.cjs#L553064-L553099) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:553064

Chamadas escritas diretamente neste corpo: `deps.memoryFactsResolved`, `memoryFactsInUserInfo`, `renderMemoryContextBlock`, `renderMemoryLive`, `resolveMemoryControl`, `resolveMemoryFacts`, `resolveSpeakerPinnedUserBotNotes`, `withUserBotNotes`.

SHA-256 do trecho: `4638ec0d089ef42400f001eb6be784f82979a630f51ef7c87586f59233cfc2f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
