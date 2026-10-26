# `createMcpManagementTools/refusedDuplicateAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780295-780305](../../../../../../../reference/runtime/host-main.cjs#L780295-L780305) | `ArrowFunctionExpression` | sim | `ctx, listInstalled, resolution, accountKey` |
| [evaluation:580540-580550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580540-L580550) | `ArrowFunctionExpression` | sim | `ctx, listInstalled, resolution, accountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780295-780305](../../../../../../../reference/runtime/host-main.cjs#L780295-L780305) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580540-580550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580540-L580550) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:780295

Chamadas escritas diretamente neste corpo: `listInstalled`, `normalizeMcpAccountLabel`, `refuseDuplicateAccountSignIn`.

SHA-256 do trecho: `5e3dc1b36a3236de476532fda9721bff9aec1e596cc11777e4e71ee869cef84d`.

### evaluation:580540

Chamadas escritas diretamente neste corpo: `listInstalled`, `normalizeMcpAccountLabel`, `refuseDuplicateAccountSignIn`.

SHA-256 do trecho: `5e3dc1b36a3236de476532fda9721bff9aec1e596cc11777e4e71ee869cef84d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
