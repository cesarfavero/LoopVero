# `recordPlaywrightRunCodeMeterMismatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-review-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-review-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742696-742707](../../../../../../reference/runtime/host-main.cjs#L742696-L742707) | `FunctionDeclaration` | não | `ctx, args` |
| [evaluation:515358-515369](../../../../../../reference/runtime/sand-eval-runner.cjs#L515358-L515369) | `FunctionDeclaration` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742696-742707](../../../../../../reference/runtime/host-main.cjs#L742696-L742707) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515358-515369](../../../../../../reference/runtime/sand-eval-runner.cjs#L515358-L515369) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:742696

Chamadas escritas diretamente neste corpo: `Math.min`, `String`, `codeModeLabel`, `logger118.warn`, `servedModelLabel`.

SHA-256 do trecho: `2556d3e3815cdfe79df760c8adb4af99ea1fdc549012b82672a4d16de90b6303`.

### evaluation:515358

Chamadas escritas diretamente neste corpo: `Math.min`, `String`, `codeModeLabel2`, `logger91.warn`, `servedModelLabel`.

SHA-256 do trecho: `af4825df357325baeac0ac5b025b71166e0b8b26c9187171f66a4b646921a0cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
