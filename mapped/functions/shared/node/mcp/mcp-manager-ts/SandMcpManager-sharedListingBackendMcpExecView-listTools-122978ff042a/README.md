# `SandMcpManager.sharedListingBackendMcpExecView/listTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689334-689341](../../../../../../../reference/runtime/host-main.cjs#L689334-L689341) | `ArrowFunctionExpression` | sim | `serverIdentifiers, mcpConfigJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689334-689341](../../../../../../../reference/runtime/host-main.cjs#L689334-L689341) | 2 | 0 | 2 | 2 | 1 | 0 |

### host:689334

Chamadas escritas diretamente neste corpo: `this.backendMcpExec.listTools`, `this.listingCache.joinBackend`.

Alvos de lançamento explícito: `outcome.error`.

SHA-256 do trecho: `b7fb770894547d75eaf0abe54e77245ea00120a2c2c4694672cd3cbd826e85a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
