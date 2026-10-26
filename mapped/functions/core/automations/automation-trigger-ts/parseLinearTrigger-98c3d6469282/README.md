# `parseLinearTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716192-716221](../../../../../../reference/runtime/host-main.cjs#L716192-L716221) | `FunctionDeclaration` | não | `value` |
| [evaluation:527875-527904](../../../../../../reference/runtime/sand-eval-runner.cjs#L527875-L527904) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716192-716221](../../../../../../reference/runtime/host-main.cjs#L716192-L716221) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527875-527904](../../../../../../reference/runtime/sand-eval-runner.cjs#L527875-L527904) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:716192

Chamadas escritas diretamente neste corpo: `LINEAR_EVENT_CASES.join`, `isSandLinearEventCase`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `event`.

SHA-256 do trecho: `743bebb7fe8188a106b5318c0b0386b214d9fc0f0e341f361ae06117929e79df`.

### evaluation:527875

Chamadas escritas diretamente neste corpo: `LINEAR_EVENT_CASES.join`, `isSandLinearEventCase`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

Alvos de atribuição ou incremento: `event`.

SHA-256 do trecho: `743bebb7fe8188a106b5318c0b0386b214d9fc0f0e341f361ae06117929e79df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
