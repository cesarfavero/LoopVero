# `createTurnObservation/beginMcpExecObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588590-588669](../../../../../../reference/runtime/sand-eval-runner.cjs#L588590-L588669) | `FunctionDeclaration` | não | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588590-588669](../../../../../../reference/runtime/sand-eval-runner.cjs#L588590-L588669) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588590

Chamadas escritas diretamente neste corpo: `.catch`, `Promise.resolve`, `call.resolveRoute`, `call.resolveTransport`, `clock.monotonicNow`, `mcpExecStallExpiry.arm`, `mcpExecToolCallIds.add`.

SHA-256 do trecho: `917bbb2aac78ada533ce8b3a0a49213d2e7ad25eb12fa270d0a4750903e2cd79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
