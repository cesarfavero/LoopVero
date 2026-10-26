# `recordPlaywrightBoxTiming`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743165-743203](../../../../../../../../reference/runtime/host-main.cjs#L743165-L743203) | `FunctionDeclaration` | não | `ctx, timing, window2, call` |
| [evaluation:516016-516054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516016-L516054) | `FunctionDeclaration` | não | `ctx, timing, window2, call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743165-743203](../../../../../../../../reference/runtime/host-main.cjs#L743165-L743203) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:516016-516054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516016-L516054) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:743165

Chamadas escritas diretamente neste corpo: `.setAttributes`, `Math.max`, `Object.entries`, `getSpan2`, `playwrightBoxTimingBreakdown`, `recordComputerUseSpanAt`, `recordSettle`, `recordSteps`, `round`.

Alvos de atribuição ou incremento: `attributes[computed]`.

SHA-256 do trecho: `30214fb5b0ecf227c1bab07a96f3a0f2074e786d15728abb4503a177d293d11d`.

### evaluation:516016

Chamadas escritas diretamente neste corpo: `.setAttributes`, `Math.max`, `Object.entries`, `getSpan2`, `playwrightBoxTimingBreakdown`, `recordComputerUseSpanAt`, `recordSettle`, `recordSteps`, `round`.

Alvos de atribuição ou incremento: `attributes[computed]`.

SHA-256 do trecho: `30214fb5b0ecf227c1bab07a96f3a0f2074e786d15728abb4503a177d293d11d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
