# `createMcpManagementTools/resolveServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780258-780276](../../../../../../../reference/runtime/host-main.cjs#L780258-L780276) | `ArrowFunctionExpression` | sim | `deps, token` |
| [evaluation:580503-580521](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580503-L580521) | `ArrowFunctionExpression` | sim | `deps, token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780258-780276](../../../../../../../reference/runtime/host-main.cjs#L780258-L780276) | 5 | 0 | 1 | 4 | 0 | 0 |
| [evaluation:580503-580521](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580503-L580521) | 5 | 0 | 1 | 4 | 0 | 0 |

### host:780258

Chamadas escritas diretamente neste corpo: `isMcpServerId`, `readMcpInstalledListing`, `resolveMcpServerRowByIdentifierOrLegacyId`, `stdioSignInOf`, `token.trim`.

SHA-256 do trecho: `8733af4e8d6cf6213ef3ce1f39bac8b66d1c9648730ca3687fc97dd16253d1e2`.

### evaluation:580503

Chamadas escritas diretamente neste corpo: `isMcpServerId`, `readMcpInstalledListing`, `resolveMcpServerRowByIdentifierOrLegacyId`, `stdioSignInOf`, `token.trim`.

SHA-256 do trecho: `8733af4e8d6cf6213ef3ce1f39bac8b66d1c9648730ca3687fc97dd16253d1e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
