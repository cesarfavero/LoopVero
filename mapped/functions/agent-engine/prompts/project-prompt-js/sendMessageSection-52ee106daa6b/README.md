# `sendMessageSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641018-641033](../../../../../../reference/runtime/host-main.cjs#L641018-L641033) | `FunctionDeclaration` | não | `sendMessageToolName, { askQuestionAvailable, sendFirstRule, progressBullet }` |
| [evaluation:431631-431646](../../../../../../reference/runtime/sand-eval-runner.cjs#L431631-L431646) | `FunctionDeclaration` | não | `sendMessageToolName, { askQuestionAvailable, sendFirstRule, progressBullet }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641018-641033](../../../../../../reference/runtime/host-main.cjs#L641018-L641033) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431631-431646](../../../../../../reference/runtime/sand-eval-runner.cjs#L431631-L431646) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:641018

Chamadas escritas diretamente neste corpo: `.join`, `askThroughSendMessageBullet`, `paragraphs.filter`.

SHA-256 do trecho: `01f8a31fa24310757f2aee8313d814dda92ca3eefd87ada081f407aab9a49a98`.

### evaluation:431631

Chamadas escritas diretamente neste corpo: `.join`, `askThroughSendMessageBullet`, `paragraphs.filter`.

SHA-256 do trecho: `01f8a31fa24310757f2aee8313d814dda92ca3eefd87ada081f407aab9a49a98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
