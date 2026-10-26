# `parsePagerDutyTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716241-716258](../../../../../../reference/runtime/host-main.cjs#L716241-L716258) | `FunctionDeclaration` | não | `value` |
| [evaluation:527924-527941](../../../../../../reference/runtime/sand-eval-runner.cjs#L527924-L527941) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716241-716258](../../../../../../reference/runtime/host-main.cjs#L716241-L716258) | 7 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527924-527941](../../../../../../reference/runtime/sand-eval-runner.cjs#L527924-L527941) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:716241

Chamadas escritas diretamente neste corpo: `PAGERDUTY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 do trecho: `2a1128a56516c8c7e02ffe8a83f22b0c88ff9bfd3585cd1626ea9a117d0e7d07`.

### evaluation:527924

Chamadas escritas diretamente neste corpo: `PAGERDUTY_EVENT_CASES.join`, `isUnknownRecord2`, `parseStringList`, `triggerParseFailure`.

SHA-256 do trecho: `2a1128a56516c8c7e02ffe8a83f22b0c88ff9bfd3585cd1626ea9a117d0e7d07`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
