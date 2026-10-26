# `parseSentryTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716222-716240](../../../../../../reference/runtime/host-main.cjs#L716222-L716240) | `FunctionDeclaration` | não | `value` |
| [evaluation:527905-527923](../../../../../../reference/runtime/sand-eval-runner.cjs#L527905-L527923) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716222-716240](../../../../../../reference/runtime/host-main.cjs#L716222-L716240) | 8 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527905-527923](../../../../../../reference/runtime/sand-eval-runner.cjs#L527905-L527923) | 8 | 0 | 0 | 3 | 0 | 0 |

### host:716222

Chamadas escritas diretamente neste corpo: `SENTRY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 do trecho: `5beef7e6e29e41bfe63b1413ada2f7a561fea521e4b6e333539dc8d085f4874d`.

### evaluation:527905

Chamadas escritas diretamente neste corpo: `SENTRY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 do trecho: `5beef7e6e29e41bfe63b1413ada2f7a561fea521e4b6e333539dc8d085f4874d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
