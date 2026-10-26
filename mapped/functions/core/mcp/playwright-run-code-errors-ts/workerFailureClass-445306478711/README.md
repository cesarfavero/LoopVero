# `workerFailureClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-errors.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700167-700177](../../../../../../reference/runtime/host-main.cjs#L700167-L700177) | `FunctionDeclaration` | não | `message` |
| [evaluation:513945-513955](../../../../../../reference/runtime/sand-eval-runner.cjs#L513945-L513955) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700167-700177](../../../../../../reference/runtime/host-main.cjs#L700167-L700177) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:513945-513955](../../../../../../reference/runtime/sand-eval-runner.cjs#L513945-L513955) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:700167

Chamadas escritas diretamente neste corpo: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `RUN_CODE_WORKER_ABORTED.test`, `message.slice`, `message.startsWith`, `playwrightErrorHead`.

SHA-256 do trecho: `1531ab4700ca4a2ea91de9a95f4fe3f73ebf90a9036a18398818c1dde13d2515`.

### evaluation:513945

Chamadas escritas diretamente neste corpo: `PAGE_CLOSED_DETAIL.test`, `PAGE_CRASHED_DETAIL.test`, `RUN_CODE_WORKER_ABORTED.test`, `message.slice`, `message.startsWith`, `playwrightErrorHead`.

SHA-256 do trecho: `1531ab4700ca4a2ea91de9a95f4fe3f73ebf90a9036a18398818c1dde13d2515`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
