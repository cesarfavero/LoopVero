# `createComputerUseCoordination/sweepTabs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525549-525568](../../../../../../reference/runtime/sand-eval-runner.cjs#L525549-L525568) | `FunctionExpression` | não | `ctx, connection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525549-525568](../../../../../../reference/runtime/sand-eval-runner.cjs#L525549-L525568) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525549

Chamadas escritas diretamente neste corpo: `ctx.withDetached`, `displaysOwedAnotherSweep.add`, `runningSweepByDisplay.get`, `runningSweepByDisplay.set`.

SHA-256 do trecho: `3de10d48ea7717c28771e46adc6845e02dc5799b2a8dd7e4d4406aeeb3057a43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
