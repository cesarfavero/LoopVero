# `renderTeamBotPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/team-bot-prompt.ts` · [README do módulo](../../../../../modules/core/runner/team-bot-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538599-538613](../../../../../../reference/runtime/sand-eval-runner.cjs#L538599-L538613) | `FunctionDeclaration` | não | `identity2, gates = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538599-538613](../../../../../../reference/runtime/sand-eval-runner.cjs#L538599-L538613) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538599

Chamadas escritas diretamente neste corpo: `.join`, `slackLine`, `teamOpeningLine`, `teamsEnabledLine`.

SHA-256 do trecho: `ad383ed96c403b54763880dcb43ab46e227f7273e0ac177915e21214cd36c746`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
