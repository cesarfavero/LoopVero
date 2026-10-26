# `countPlaywrightRunCodeRefusals/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-run-code-refusals.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-run-code-refusals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776156-776163](../../../../../../../../reference/runtime/host-main.cjs#L776156-L776163) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, args, meta3` |
| [evaluation:575812-575819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575812-L575819) | `ArrowFunctionExpression` | sim | `ctx, interactionHandler, args, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776156-776163](../../../../../../../../reference/runtime/host-main.cjs#L776156-L776163) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:575812-575819](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575812-L575819) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:776156

Chamadas escritas diretamente neste corpo: `offer.recordRefusal`, `tool.execute`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `9f5d68fa81360b7641127fbb67e59b905af2f58f7f0cf08715b1815daa2d9432`.

### evaluation:575812

Chamadas escritas diretamente neste corpo: `offer.recordRefusal`, `tool.execute`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `5742dd37c63a87443886a9bb47bbd1d25724717d44fb42cf2f086dc74e3b8773`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
