# `expandAlias`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682299-682302](../../../../../../reference/runtime/host-main.cjs#L682299-L682302) | `FunctionDeclaration` | não | `schedule` |
| [evaluation:526513-526516](../../../../../../reference/runtime/sand-eval-runner.cjs#L526513-L526516) | `FunctionDeclaration` | não | `schedule` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682299-682302](../../../../../../reference/runtime/host-main.cjs#L682299-L682302) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526513-526516](../../../../../../reference/runtime/sand-eval-runner.cjs#L526513-L526516) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682299

Chamadas escritas diretamente neste corpo: `schedule.toLowerCase`.

SHA-256 do trecho: `bfddaf3e7c9def4796f7c0ed66e4e9cd44201aa441513ed408738025698e51d7`.

### evaluation:526513

Chamadas escritas diretamente neste corpo: `schedule.toLowerCase`.

SHA-256 do trecho: `bfddaf3e7c9def4796f7c0ed66e4e9cd44201aa441513ed408738025698e51d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
