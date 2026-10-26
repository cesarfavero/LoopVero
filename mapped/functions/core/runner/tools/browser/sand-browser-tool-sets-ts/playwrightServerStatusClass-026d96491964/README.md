# `playwrightServerStatusClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/sand-browser-tool-sets.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/sand-browser-tool-sets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751506-751519](../../../../../../../../reference/runtime/host-main.cjs#L751506-L751519) | `FunctionDeclaration` | não | `server` |
| [evaluation:524357-524370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524357-L524370) | `FunctionDeclaration` | não | `server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751506-751519](../../../../../../../../reference/runtime/host-main.cjs#L751506-L751519) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:524357-524370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L524357-L524370) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:751506

Chamadas escritas diretamente neste corpo: `/MCP server is closed/.test`, `/connection closed/i.test`, `/setup_failed:([a-z_]+)/.exec`, `/timed out/i.test`, `PLAYWRIGHT_SERVER_STATUSES.has`, `PLAYWRIGHT_SETUP_FAILURES.has`, `boxStdioStatusClassOf`.

SHA-256 do trecho: `4711672251e810260d9ea6474f6d45114df2a0ec675ba3d9846a5a12a4397d4b`.

### evaluation:524357

Chamadas escritas diretamente neste corpo: `/MCP server is closed/.test`, `/connection closed/i.test`, `/setup_failed:([a-z_]+)/.exec`, `/timed out/i.test`, `PLAYWRIGHT_SERVER_STATUSES.has`, `PLAYWRIGHT_SETUP_FAILURES.has`, `boxStdioStatusClassOf`.

SHA-256 do trecho: `4711672251e810260d9ea6474f6d45114df2a0ec675ba3d9846a5a12a4397d4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
