# `slackWhereLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sessions/slack-conversation-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538261-538279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538261-L538279) | `FunctionDeclaration` | não | `conversation, gates = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538261-538279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538261-L538279) | 10 | 0 | 0 | 6 | 0 | 0 |

### evaluation:538261

Chamadas escritas diretamente neste corpo: `isDirectMessageChannel`, `speakersSentence`.

SHA-256 do trecho: `c6bdb20e5cd3a248aa7bb1feef09f4a5e61e5c0ab1372b640dcc5eaa8821e3d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
