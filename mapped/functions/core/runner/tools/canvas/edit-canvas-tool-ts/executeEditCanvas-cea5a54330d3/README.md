# `executeEditCanvas`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775639-775689](../../../../../../../../reference/runtime/host-main.cjs#L775639-L775689) | `FunctionDeclaration` | sim | `port, args` |
| [evaluation:575283-575333](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575283-L575333) | `FunctionDeclaration` | sim | `port, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775639-775689](../../../../../../../../reference/runtime/host-main.cjs#L775639-L775689) | 11 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:575283-575333](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575283-L575333) | 11 | 0 | 3 | 6 | 0 | 0 |

### host:775639

Chamadas escritas diretamente neste corpo: `.join`, `applyExactStringEdit`, `describeReadFailure`, `describeWriteFailure2`, `lines2.join`, `occurrenceLines`, `port.read`, `port.write`, `settleWriteFailure`.

Alvos de atribuição ou incremento: `written`.

SHA-256 do trecho: `c770837fec933fb273d038259a463aa16bc56410420eba88d27aff326132b2b3`.

### evaluation:575283

Chamadas escritas diretamente neste corpo: `.join`, `applyExactStringEdit`, `describeReadFailure`, `describeWriteFailure2`, `lines2.join`, `occurrenceLines`, `port.read`, `port.write`, `settleWriteFailure`.

Alvos de atribuição ou incremento: `written`.

SHA-256 do trecho: `c770837fec933fb273d038259a463aa16bc56410420eba88d27aff326132b2b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
