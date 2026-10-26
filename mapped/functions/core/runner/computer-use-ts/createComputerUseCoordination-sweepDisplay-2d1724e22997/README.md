# `createComputerUseCoordination/sweepDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525334-525350](../../../../../../reference/runtime/sand-eval-runner.cjs#L525334-L525350) | `ArrowFunctionExpression` | sim | `ctx, connection, display` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525334-525350](../../../../../../reference/runtime/sand-eval-runner.cjs#L525334-L525350) | 1 | 0 | 2 | 0 | 0 | 0 |

### evaluation:525334

Chamadas escritas diretamente neste corpo: `.execute`, `String`, `buildHostShellArgs`, `connection.remoteAccessor.get`, `deps.resolveBoxId`, `reportHostDiagnostic`, `shellFailure`, `tabSweepCommand`, `uploadDriver`.

SHA-256 do trecho: `bb204d0a05c6df883d188e0c1b0765c937a9eab7c4f0fc1529d8a97f14e7b876`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
