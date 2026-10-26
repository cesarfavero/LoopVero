# `PlaywrightTreeRewrite.rewrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751067-751070](../../../../../../../reference/runtime/host-main.cjs#L751067-L751070) | `ArrowFunctionExpression` | não | `text3` |
| [evaluation:523918-523921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523918-L523921) | `ArrowFunctionExpression` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751067-751070](../../../../../../../reference/runtime/host-main.cjs#L751067-L751070) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523918-523921](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523918-L523921) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751067

Chamadas escritas diretamente neste corpo: `formatPlaywrightResultText`.

Alvos de atribuição ou incremento: `this.applied`.

SHA-256 do trecho: `6f7208d10c371d25a303acf51b8ce98827e5c0742e3b9541ea916e443605c686`.

### evaluation:523918

Chamadas escritas diretamente neste corpo: `formatPlaywrightResultText`.

Alvos de atribuição ou incremento: `this.applied`.

SHA-256 do trecho: `6f7208d10c371d25a303acf51b8ce98827e5c0742e3b9541ea916e443605c686`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
