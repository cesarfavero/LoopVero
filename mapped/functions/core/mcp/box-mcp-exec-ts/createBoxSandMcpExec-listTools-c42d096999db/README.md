# `createBoxSandMcpExec/listTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684924-684969](../../../../../../reference/runtime/host-main.cjs#L684924-L684969) | `FunctionExpression` | sim | `serverIdentifiers, options3` |
| [evaluation:514712-514757](../../../../../../reference/runtime/sand-eval-runner.cjs#L514712-L514757) | `FunctionExpression` | sim | `serverIdentifiers, options3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684924-684969](../../../../../../reference/runtime/host-main.cjs#L684924-L684969) | 2 | 0 | 2 | 1 | 1 | 0 |
| [evaluation:514712-514757](../../../../../../reference/runtime/sand-eval-runner.cjs#L514712-L514757) | 2 | 0 | 2 | 1 | 1 | 0 |

### host:684924

Chamadas escritas diretamente neste corpo: `.execute`, `.map`, `accessor.get`, `boxCtx.withCancel`, `boxMcpResourceAccessor`, `cancelList`, `giveUp`, `new McpStateExecArgs`, `new SandBoxMcpExecError`, `new Set`, `options3.signal.addEventListener`, `options3.signal.removeEventListener`, `result.result.value.servers.filter`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `SandBoxMcpExecError`.

SHA-256 do trecho: `2883ce6d6ff6898bb4b9791d5d6eee151361685330c8fb8d25980ea980e615a2`.

### evaluation:514712

Chamadas escritas diretamente neste corpo: `.execute`, `.map`, `accessor.get`, `boxCtx.withCancel`, `boxMcpResourceAccessor`, `cancelList`, `giveUp`, `new McpStateExecArgs`, `new SandBoxMcpExecError`, `new Set`, `options3.signal.addEventListener`, `options3.signal.removeEventListener`, `result.result.value.servers.filter`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `SandBoxMcpExecError`.

SHA-256 do trecho: `2883ce6d6ff6898bb4b9791d5d6eee151361685330c8fb8d25980ea980e615a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
