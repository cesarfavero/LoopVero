# `pluginRemoveResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689053-689065](../../../../../../../reference/runtime/host-main.cjs#L689053-L689065) | `FunctionDeclaration` | não | `pluginId, state, installRecord` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689053-689065](../../../../../../../reference/runtime/host-main.cjs#L689053-L689065) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:689053

Chamadas escritas diretamente neste corpo: `remainingRows.some`, `state.servers.filter`.

SHA-256 do trecho: `abb4862c113edc25bf6b2a7527229be185bacd6aa5fa341fcbd1fd7303dc856d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
