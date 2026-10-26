# `emitTtfaTrace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-latency/turn-ttfa-trace.ts` · [README do módulo](../../../../../../modules/core/runner/turn-latency/turn-ttfa-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546896-546923](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546896-L546923) | `FunctionDeclaration` | não | `{   trace: trace2,   marks,   toEpochMs,   attributes }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546896-546923](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546896-L546923) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:546896

Chamadas escritas diretamente neste corpo: `Math.max`, `classifyTtfaBucket`, `getSpan2`, `recordCompletedSpanIfParented`, `runSpan.setAttribute`, `runSpan.setAttributes`, `toEpochMs`, `trace2.phaseParentCtx.withName`, `ttfaPhaseSpans`.

SHA-256 do trecho: `a750270aaeff460841dc8940268611a46ae5131f0b90571abc022443e4213e00`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
