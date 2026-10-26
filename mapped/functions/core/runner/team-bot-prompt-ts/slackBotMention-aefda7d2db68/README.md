# `slackBotMention`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/team-bot-prompt.ts` · [README do módulo](../../../../../modules/core/runner/team-bot-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538564-538569](../../../../../../reference/runtime/sand-eval-runner.cjs#L538564-L538569) | `FunctionDeclaration` | não | `slack` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538564-538569](../../../../../../reference/runtime/sand-eval-runner.cjs#L538564-L538569) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538564

Chamadas escritas diretamente neste corpo: `slack.botName.trim`, `slack.botUserId.trim`.

SHA-256 do trecho: `6fd8de58bbfee68eafa580d59fa5fc318aa1d59c6724ef2039a115bb1ce1799b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
