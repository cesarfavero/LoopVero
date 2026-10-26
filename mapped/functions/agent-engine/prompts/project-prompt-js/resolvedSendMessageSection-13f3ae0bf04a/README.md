# `resolvedSendMessageSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641034-641049](../../../../../../reference/runtime/host-main.cjs#L641034-L641049) | `FunctionDeclaration` | não | `sendMessageToolName, options2` |
| [evaluation:431647-431662](../../../../../../reference/runtime/sand-eval-runner.cjs#L431647-L431662) | `FunctionDeclaration` | não | `sendMessageToolName, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641034-641049](../../../../../../reference/runtime/host-main.cjs#L641034-L641049) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431647-431662](../../../../../../reference/runtime/sand-eval-runner.cjs#L431647-L431662) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641034

Chamadas escritas diretamente neste corpo: `options2.guidanceText.firstMessageRule.replaceAll`, `options2.guidanceText.sendMessageGuidance.replaceAll`, `promptOverrideOrDefault`, `sendMessageSection`.

SHA-256 do trecho: `01a9d7ebd090278c5d6e5cfc6675b06cdf2254d578ae533ccb2e9186e0d86097`.

### evaluation:431647

Chamadas escritas diretamente neste corpo: `options2.guidanceText.firstMessageRule.replaceAll`, `options2.guidanceText.sendMessageGuidance.replaceAll`, `promptOverrideOrDefault`, `sendMessageSection`.

SHA-256 do trecho: `01a9d7ebd090278c5d6e5cfc6675b06cdf2254d578ae533ccb2e9186e0d86097`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
