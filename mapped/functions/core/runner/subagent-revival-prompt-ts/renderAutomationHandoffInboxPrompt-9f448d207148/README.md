# `renderAutomationHandoffInboxPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-revival-prompt.ts` · [README do módulo](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583972-583992](../../../../../../reference/runtime/sand-eval-runner.cjs#L583972-L583992) | `FunctionDeclaration` | não | `text3, heldForMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583972-583992](../../../../../../reference/runtime/sand-eval-runner.cjs#L583972-L583992) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583972

Chamadas escritas diretamente neste corpo: `.join`, `describeHeldNote`, `revivalIntro`.

SHA-256 do trecho: `1774fba6c3e415ffc9d46ca33ea12288bc38679ae1c4cba77e4bd1c91242eebc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
