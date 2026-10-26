# `SandMcpManager.readInstallRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689837-689848](../../../../../../../reference/runtime/host-main.cjs#L689837-L689848) | `method` | sim | `pluginId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689837-689848](../../../../../../../reference/runtime/host-main.cjs#L689837-L689848) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:689837

Chamadas escritas diretamente neste corpo: `effective.some`, `reportMcpHostEdgeFailure`, `this.effectivePluginsProvider`.

SHA-256 do trecho: `4d2ce2de37f655d3d564a98e490e64718ba5df8003b94d4af284de0a96a7ce43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
