# `withMcpToolPermissionPolicy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686967-686972](../../../../../../reference/runtime/host-main.cjs#L686967-L686972) | `FunctionDeclaration` | não | `permissions, serverId, policy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686967-686972](../../../../../../reference/runtime/host-main.cjs#L686967-L686972) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686967

Chamadas escritas diretamente neste corpo: `isEmptyToolPermissionPolicy`, `mcpToolPermissionScope`.

SHA-256 do trecho: `9b24cd838aef0c32a851ae1889c03e7bdb035953506204e9a73786ecc54c3819`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
