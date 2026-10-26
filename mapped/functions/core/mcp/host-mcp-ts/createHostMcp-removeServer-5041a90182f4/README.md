# `createHostMcp/removeServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701031-701035](../../../../../../reference/runtime/host-main.cjs#L701031-L701035) | `FunctionExpression` | sim | `serverId` |
| [host:701267-701274](../../../../../../reference/runtime/host-main.cjs#L701267-L701274) | `FunctionExpression` | sim | `serverId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701031-701035](../../../../../../reference/runtime/host-main.cjs#L701031-L701035) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701267-701274](../../../../../../reference/runtime/host-main.cjs#L701267-L701274) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701031

Chamadas escritas diretamente neste corpo: `manager.removeServer`, `serversMutated`.

SHA-256 do trecho: `3f1f82365051d22ae1d78e46e9fa342c270e8edf80da08867e562c11be403981`.

### host:701267

Chamadas escritas diretamente neste corpo: `mutations.removeServer`, `toInstalledServers`.

SHA-256 do trecho: `5e4abda70b19a8663bc1987457fe2a9b47acde5c786dc9985e200975b3cce331`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
