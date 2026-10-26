# `renderTeammatesUserInfoBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/send-to-agent-roster-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/send-to-agent-roster-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537129-537139](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537129-L537139) | `FunctionDeclaration` | não | `unorderedOthers, unorderedGroups, agentsRootDir, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537129-537139](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537129-L537139) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537129

Chamadas escritas diretamente neste corpo: `groupChatHistoryLine`, `lines2.join`, `lines2.push`, `rosterLines`, `sortedDirectory`.

SHA-256 do trecho: `86ec7931456da7091c4914f196b4cf4be3fe8124b4c0034d3beb43abb328097e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
