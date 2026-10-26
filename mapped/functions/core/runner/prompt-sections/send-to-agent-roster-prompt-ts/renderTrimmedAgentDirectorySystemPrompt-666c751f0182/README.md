# `renderTrimmedAgentDirectorySystemPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537090-537104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537090-L537104) | `FunctionDeclaration` | não | `unorderedOthers, unorderedGroups, agentsRootDir, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537090-537104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537090-L537104) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:537090

Chamadas escritas diretamente neste corpo: `.join`, `groupChatHistoryLine`, `lines2.join`, `lines2.push`, `rosterLines`, `sortedDirectory`.

SHA-256 do trecho: `d91abf8bc46d61f440361fb493df6641162061c406493da7e32fefd4775ab196`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
