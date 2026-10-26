# `createPlaywrightBrowserTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751446-751471](../../../../../../../reference/runtime/host-main.cjs#L751446-L751471) | `FunctionDeclaration` | não | `deps` |
| [evaluation:524297-524322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524297-L524322) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751446-751471](../../../../../../../reference/runtime/host-main.cjs#L751446-L751471) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524297-524322](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524297-L524322) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:751446

Chamadas escritas diretamente neste corpo: `.map`, `.settle`, `PLAYWRIGHT_BROWSER_ROWS.filter`, `PLAYWRIGHT_BROWSER_TOOL_NAMES.filter`, `createPlaywrightRunCodeOffer`, `deps.runCodeAdmission`, `deps.runCodeOfferAdmission`, `exposed.has`, `new Map`, `new Set`.

SHA-256 do trecho: `dbed6256c02866ef9710ce08cf762f20b4701ec6daba3984e13b193206eadfb1`.

### evaluation:524297

Chamadas escritas diretamente neste corpo: `.map`, `.settle`, `PLAYWRIGHT_BROWSER_ROWS.filter`, `PLAYWRIGHT_BROWSER_TOOL_NAMES.filter`, `createPlaywrightRunCodeOffer`, `deps.runCodeAdmission`, `deps.runCodeOfferAdmission`, `exposed.has`, `new Map`, `new Set`.

SHA-256 do trecho: `dbed6256c02866ef9710ce08cf762f20b4701ec6daba3984e13b193206eadfb1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
