# `normalizeSchedule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682290-682292](../../../../../../reference/runtime/host-main.cjs#L682290-L682292) | `FunctionDeclaration` | não | `raw` |
| [evaluation:526504-526506](../../../../../../reference/runtime/sand-eval-runner.cjs#L526504-L526506) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682290-682292](../../../../../../reference/runtime/host-main.cjs#L682290-L682292) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526504-526506](../../../../../../reference/runtime/sand-eval-runner.cjs#L526504-L526506) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682290

Chamadas escritas diretamente neste corpo: `.replace`, `raw.trim`.

SHA-256 do trecho: `2824112704df76f0f3397eb0d17cce92caa8f3ad060e9cf067fa25698d1f59cb`.

### evaluation:526504

Chamadas escritas diretamente neste corpo: `.replace`, `raw.trim`.

SHA-256 do trecho: `2824112704df76f0f3397eb0d17cce92caa8f3ad060e9cf067fa25698d1f59cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
