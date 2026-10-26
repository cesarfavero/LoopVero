# `ComputerOperationObservation.caught`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-operation-observation.ts` · [README do módulo](../../../../../../modules/core/runner/tools/computer-operation-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776250-776271](../../../../../../../reference/runtime/host-main.cjs#L776250-L776271) | `method` | não | `error64` |
| [evaluation:575904-575925](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575904-L575925) | `method` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776250-776271](../../../../../../../reference/runtime/host-main.cjs#L776250-L776271) | 11 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:575904-575925](../../../../../../../reference/runtime/sand-eval-runner.cjs#L575904-L575925) | 11 | 0 | 0 | 0 | 0 | 0 |

### host:776250

Chamadas escritas diretamente neste corpo: `isTimeout`, `this.fail`.

Alvos de atribuição ou incremento: `code`.

SHA-256 do trecho: `f230b0c96ce4074263f2bfd26e807340b727cd0ee4e9ccf1163cf8547b0a49a0`.

### evaluation:575904

Chamadas escritas diretamente neste corpo: `isTimeout`, `this.fail`.

Alvos de atribuição ou incremento: `code`.

SHA-256 do trecho: `4dc02347394ee678d06d8c51cce671bd23cc72ad4dc1e7a1cf8d33dd5438dfc8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
