# `SandMcpManager.getCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689664-689666](../../../../../../../reference/runtime/host-main.cjs#L689664-L689666) | `method` | sim | `getAccessToken, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689664-689666](../../../../../../../reference/runtime/host-main.cjs#L689664-L689666) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689664

Chamadas escritas diretamente neste corpo: `this.catalogFlow.getCatalog`.

SHA-256 do trecho: `22570dc5415e77bd9ab74892cc13d4b46887538454b95d7ed72682925e31760d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
