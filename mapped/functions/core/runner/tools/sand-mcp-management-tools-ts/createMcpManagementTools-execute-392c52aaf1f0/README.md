# `createMcpManagementTools/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780352-780359](../../../../../../../reference/runtime/host-main.cjs#L780352-L780359) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [host:780366-780375](../../../../../../../reference/runtime/host-main.cjs#L780366-L780375) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [host:780559-780571](../../../../../../../reference/runtime/host-main.cjs#L780559-L780571) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [evaluation:580597-580604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580597-L580604) | `ArrowFunctionExpression` | sim | `ctx, args, deps` |
| [evaluation:580611-580620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580611-L580620) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |
| [evaluation:580804-580816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580804-L580816) | `ArrowFunctionExpression` | sim | `_ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780352-780359](../../../../../../../reference/runtime/host-main.cjs#L780352-L780359) | 1 | 0 | 2 | 1 | 0 | 0 |
| [host:780366-780375](../../../../../../../reference/runtime/host-main.cjs#L780366-L780375) | 1 | 0 | 1 | 2 | 0 | 0 |
| [host:780559-780571](../../../../../../../reference/runtime/host-main.cjs#L780559-L780571) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:580597-580604](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580597-L580604) | 1 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:580611-580620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580611-L580620) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580804-580816](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580804-L580816) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:780352

Chamadas escritas diretamente neste corpo: `.trim`, `deps.listPlugins`, `describeSearch`, `rankPluginsLexically`, `reportMarketplaceSearch`, `searchRecall`.

SHA-256 do trecho: `2c1f8af961891ea5219448298ca166881e2e6e3d7f8bb6cf5ae66967610dd935`.

### host:780366

Chamadas escritas diretamente neste corpo: `deps.getPlugin`, `describePluginDetail`.

SHA-256 do trecho: `1e610edb52c187b326cd3340945906446be547cfb383d0c2cb068fa622ff79c8`.

### host:780559

Chamadas escritas diretamente neste corpo: `.join`, `args.server_id.trim`, `deps.listInstalled`, `describeInstalledList`, `resolveMcpServerRowsByIdentifierOrLegacyId`, `rows.map`.

SHA-256 do trecho: `3915aa2982bd00915833506c7d3104fa1da1ce49688aad98dc19dc9d3423df8f`.

### evaluation:580597

Chamadas escritas diretamente neste corpo: `.trim`, `deps.listPlugins`, `describeSearch`, `rankPluginsLexically`, `reportMarketplaceSearch`, `searchRecall`.

SHA-256 do trecho: `2c1f8af961891ea5219448298ca166881e2e6e3d7f8bb6cf5ae66967610dd935`.

### evaluation:580611

Chamadas escritas diretamente neste corpo: `deps.getPlugin`, `describePluginDetail`.

SHA-256 do trecho: `1e610edb52c187b326cd3340945906446be547cfb383d0c2cb068fa622ff79c8`.

### evaluation:580804

Chamadas escritas diretamente neste corpo: `.join`, `args.server_id.trim`, `deps.listInstalled`, `describeInstalledList`, `resolveMcpServerRowsByIdentifierOrLegacyId`, `rows.map`.

SHA-256 do trecho: `3915aa2982bd00915833506c7d3104fa1da1ce49688aad98dc19dc9d3423df8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
