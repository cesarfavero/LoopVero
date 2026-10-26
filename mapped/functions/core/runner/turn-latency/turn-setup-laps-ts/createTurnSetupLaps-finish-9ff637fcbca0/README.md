# `createTurnSetupLaps/finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-latency/turn-setup-laps.ts` · [README do módulo](../../../../../../modules/core/runner/turn-latency/turn-setup-laps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591245-591260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591245-L591260) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591245-591260](../../../../../../../reference/runtime/sand-eval-runner.cjs#L591245-L591260) | 1 | 1 | 0 | 1 | 0 | 1 |

### evaluation:591245

Chamadas escritas diretamente neste corpo: `errorLogTag`, `logger108.warn`, `setupLapMs.histogram`, `setupLapsTotalMs.histogram`, `timer2.finish`.

SHA-256 do trecho: `2196e58b4711e5294bcf01228630d3ddc790ef3756d7cfffb4fb274beb51646a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
