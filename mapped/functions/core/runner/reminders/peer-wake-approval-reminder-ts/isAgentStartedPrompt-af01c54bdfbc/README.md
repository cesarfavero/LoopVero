# `isAgentStartedPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/reminders/peer-wake-approval-reminder.ts` · [README do módulo](../../../../../../modules/core/runner/reminders/peer-wake-approval-reminder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529726-529732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529726-L529732) | `FunctionDeclaration` | não | `prompt, hidden` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529726-529732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L529726-L529732) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:529726

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.some`, `.trim`, `prompt.replace`, `rest.split`, `splitAgentInboundBlocks`, `startsWithHiddenPromptMarker`, `text3.split`.

SHA-256 do trecho: `4b09032e8a67a544b2f9060476acab1c817aef8dd06b94da53de6a979eaaa47d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
