# `jobFailureClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700151-700166](../../../../../../reference/runtime/host-main.cjs#L700151-L700166) | `FunctionDeclaration` | não | `message` |
| [evaluation:513929-513944](../../../../../../reference/runtime/sand-eval-runner.cjs#L513929-L513944) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700151-700166](../../../../../../reference/runtime/host-main.cjs#L700151-L700166) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:513929-513944](../../../../../../reference/runtime/sand-eval-runner.cjs#L513929-L513944) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:700151

Chamadas escritas diretamente neste corpo: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `PLAYWRIGHT_TIMEOUT_DETAIL.test`, `RUN_CODE_DEADLINE.test`, `SCRIPT_ERROR_DETAIL.exec`, `SCRIPT_ERROR_NAMES.has`, `isLocatorFailure`, `playwrightErrorHead`.

SHA-256 do trecho: `99ee5c20a49b5aa2e3672e93c6d036d4d1e2081dfe8c69043fe9035a51a4de45`.

### evaluation:513929

Chamadas escritas diretamente neste corpo: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `PLAYWRIGHT_TIMEOUT_DETAIL.test`, `RUN_CODE_DEADLINE.test`, `SCRIPT_ERROR_DETAIL.exec`, `SCRIPT_ERROR_NAMES.has`, `isLocatorFailure`, `playwrightErrorHead`.

SHA-256 do trecho: `99ee5c20a49b5aa2e3672e93c6d036d4d1e2081dfe8c69043fe9035a51a4de45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
