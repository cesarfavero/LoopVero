# `createBoxSandMcpExec/executeTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684970-684993](../../../../../../reference/runtime/host-main.cjs#L684970-L684993) | `FunctionExpression` | sim | `ctx, args, options3` |
| [evaluation:514758-514781](../../../../../../reference/runtime/sand-eval-runner.cjs#L514758-L514781) | `FunctionExpression` | sim | `ctx, args, options3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684970-684993](../../../../../../reference/runtime/host-main.cjs#L684970-L684993) | 5 | 0 | 5 | 3 | 1 | 2 |
| [evaluation:514758-514781](../../../../../../reference/runtime/sand-eval-runner.cjs#L514758-L514781) | 5 | 0 | 5 | 3 | 1 | 2 |

### host:684970

Chamadas escritas diretamente neste corpo: `boxAgentMcpHost`, `boxLoadMcpServers`, `configOfServer`, `errorLabel2`, `errorResult3`, `execute`, `recordMcpExecErrorClass`, `repushOwnServerEntryBefore`, `reregister`, `stdioServerProcessExited`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ccda28efb2b90b12d3d78a46e3eee6c3c0e3057e49f66e52323d9f140fb8cdbd`.

### evaluation:514758

Chamadas escritas diretamente neste corpo: `boxAgentMcpHost`, `boxLoadMcpServers`, `configOfServer`, `errorLabel`, `errorResult2`, `execute`, `recordMcpExecErrorClass`, `repushOwnServerEntryBefore`, `reregister`, `stdioServerProcessExited`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `b7411a514be5df6acf46991f83f120922a2d7a3294a619636ba65a58799ba74d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
