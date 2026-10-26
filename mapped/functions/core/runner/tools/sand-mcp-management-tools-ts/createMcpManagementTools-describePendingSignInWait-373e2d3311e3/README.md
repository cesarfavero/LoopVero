# `createMcpManagementTools/describePendingSignInWait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780313-780330](../../../../../../../reference/runtime/host-main.cjs#L780313-L780330) | `ArrowFunctionExpression` | sim | `listInstalled, resolution, taskId` |
| [evaluation:580558-580575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580558-L580575) | `ArrowFunctionExpression` | sim | `listInstalled, resolution, taskId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780313-780330](../../../../../../../reference/runtime/host-main.cjs#L780313-L780330) | 5 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:580558-580575](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580558-L580575) | 5 | 0 | 2 | 2 | 0 | 0 |

### host:780313

Chamadas escritas diretamente neste corpo: `describeStdioSignInWait`, `emitConnectorCard`, `listInstalled`, `listing.servers.find`, `stdioSignInOf`.

Alvos de atribuição ou incremento: `signIn`.

SHA-256 do trecho: `3319b857a5154a42582a7d714472e8c0ee436a4e0241db2b28251a87542a4361`.

### evaluation:580558

Chamadas escritas diretamente neste corpo: `describeStdioSignInWait`, `emitConnectorCard`, `listInstalled`, `listing.servers.find`, `stdioSignInOf`.

Alvos de atribuição ou incremento: `signIn`.

SHA-256 do trecho: `3319b857a5154a42582a7d714472e8c0ee436a4e0241db2b28251a87542a4361`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
