# `buildUnansweredQuestionsNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529210-529315](../../../../../../reference/runtime/sand-eval-runner.cjs#L529210-L529315) | `FunctionDeclaration` | não | `prompts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529210-529315](../../../../../../reference/runtime/sand-eval-runner.cjs#L529210-L529315) | 19 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529210

Chamadas escritas diretamente neste corpo: `.flatMap`, `.join`, `clean`, `discardedDrafts.map`, `dismissed.map`, `hiddenPromptMarker`, `sections.join`, `sections.push`, `skippedQuestionsSection`, `unconfirmedDrafts.map`, `unseenCardChoices.map`, `unseenCloudAgentReports.map`, `unseenPostedLines.map`, `unseenWakeOutcomes.map`.

SHA-256 do trecho: `f71f4d53e87b328184460caa19cf579f025ccf03ed08e1202380998a7706abb3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
