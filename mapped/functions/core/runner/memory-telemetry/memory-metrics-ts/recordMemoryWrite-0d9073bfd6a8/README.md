# `recordMemoryWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-telemetry/memory-metrics.ts` · [README do módulo](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754553-754571](../../../../../../../reference/runtime/host-main.cjs#L754553-L754571) | `FunctionDeclaration` | não | `metrics2, telemetry, report` |
| [evaluation:537504-537522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537504-L537522) | `FunctionDeclaration` | não | `metrics2, telemetry, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754553-754571](../../../../../../../reference/runtime/host-main.cjs#L754553-L754571) | 1 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:537504-537522](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537504-L537522) | 1 | 0 | 0 | 0 | 0 | 1 |

### host:754553

Chamadas escritas diretamente neste corpo: `errorLogTag`, `process.stderr.write`, `telemetry.reportMemoryWrite`, `write3.increment`, `writeBytes.histogram`.

SHA-256 do trecho: `0a473e361cbbce28478252fece72ddc29e33218cfdc65a8dae248c557780616a`.

### evaluation:537504

Chamadas escritas diretamente neste corpo: `errorLogTag`, `process.stderr.write`, `telemetry.reportMemoryWrite`, `write.increment`, `writeBytes.histogram`.

SHA-256 do trecho: `a77170115ad66547994e7917d0778da833c7c2c28d6893aa1fd0cc4a8b3ad718`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
