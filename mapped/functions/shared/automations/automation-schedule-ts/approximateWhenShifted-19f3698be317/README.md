# `approximateWhenShifted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automation-schedule.ts` · [README do módulo](../../../../../modules/shared/automations/automation-schedule-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682927-682929](../../../../../../reference/runtime/host-main.cjs#L682927-L682929) | `FunctionDeclaration` | não | `trigger2, sentence` |
| [evaluation:527151-527153](../../../../../../reference/runtime/sand-eval-runner.cjs#L527151-L527153) | `FunctionDeclaration` | não | `trigger, sentence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682927-682929](../../../../../../reference/runtime/host-main.cjs#L682927-L682929) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527151-527153](../../../../../../reference/runtime/sand-eval-runner.cjs#L527151-L527153) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:682927

Chamadas escritas diretamente neste corpo: `isApproximateCronTrigger`, `sentence.replace`.

SHA-256 do trecho: `54c9de9f78a0930ae27f76fe21d903fe08c3d78b9cff63be01207f25a02edaa0`.

### evaluation:527151

Chamadas escritas diretamente neste corpo: `isApproximateCronTrigger`, `sentence.replace`.

SHA-256 do trecho: `3dd0658129c5b4305a9dd3d8605f1585e59e1657b002a3e7fa61551596273b64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
