# `createHostMcp/renameAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701065-701073](../../../../../../reference/runtime/host-main.cjs#L701065-L701073) | `FunctionExpression` | sim | `request5` |
| [host:701296-701300](../../../../../../reference/runtime/host-main.cjs#L701296-L701300) | `FunctionExpression` | sim | `{ serverId, accountKey, newAccountKey }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701065-701073](../../../../../../reference/runtime/host-main.cjs#L701065-L701073) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701296-701300](../../../../../../reference/runtime/host-main.cjs#L701296-L701300) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701065

Chamadas escritas diretamente neste corpo: `manager.renameAccount`, `serversMutated`.

SHA-256 do trecho: `86e2c6739f9c41ded43c9e325394990bff50be063b21aefd68db40d8ee55984a`.

### host:701296

Chamadas escritas diretamente neste corpo: `mutations.renameAccount`, `toInstalledServers`.

SHA-256 do trecho: `14497337ca9c317f409edb93f0a902b1b569a00bc073b7594ee395d714dde2ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
