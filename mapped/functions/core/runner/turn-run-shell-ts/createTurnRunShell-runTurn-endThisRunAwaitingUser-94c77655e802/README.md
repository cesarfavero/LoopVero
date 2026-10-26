# `createTurnRunShell/runTurn/endThisRunAwaitingUser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-run-shell.ts` · [README do módulo](../../../../../modules/core/runner/turn-run-shell-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:591865-591874](../../../../../../reference/runtime/sand-eval-runner.cjs#L591865-L591874) | `ArrowFunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591865-591874](../../../../../../reference/runtime/sand-eval-runner.cjs#L591865-L591874) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:591865

Chamadas escritas diretamente neste corpo: `cancelRun`, `new SandRunAbortError`.

Alvos de atribuição ou incremento: `stopRequest`.

SHA-256 do trecho: `3e2626cb3eb8a02f31c7b4439631325064bad74f26e5c20102dea6510da2151b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
