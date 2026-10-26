# `recordSettle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743238-743257](../../../../../../../../reference/runtime/host-main.cjs#L743238-L743257) | `FunctionDeclaration` | não | `ctx, timing, runtimeStart, call` |
| [evaluation:516089-516108](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516089-L516108) | `FunctionDeclaration` | não | `ctx, timing, runtimeStart, call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743238-743257](../../../../../../../../reference/runtime/host-main.cjs#L743238-L743257) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516089-516108](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516089-L516108) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:743238

Chamadas escritas diretamente neste corpo: `playwrightSettleOf`, `playwrightToolMaySettle`, `recordComputerUseSpanAt`, `timing.steps.at`.

SHA-256 do trecho: `42daebec02b98af77bc08b4d27bd1fe0e95dfc8239cdd46a6d1a7aeb463c344c`.

### evaluation:516089

Chamadas escritas diretamente neste corpo: `playwrightSettleOf`, `playwrightToolMaySettle`, `recordComputerUseSpanAt`, `timing.steps.at`.

SHA-256 do trecho: `7be19565cab170d4654bb13572a713e77faa01353fbe227979d4de1c1b1c4222`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
