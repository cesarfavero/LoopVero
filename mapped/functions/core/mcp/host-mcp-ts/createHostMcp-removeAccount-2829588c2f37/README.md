# `createHostMcp/removeAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701074-701078](../../../../../../reference/runtime/host-main.cjs#L701074-L701078) | `FunctionExpression` | sim | `request5` |
| [host:701301-701303](../../../../../../reference/runtime/host-main.cjs#L701301-L701303) | `FunctionExpression` | sim | `{ serverId, accountKey }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701074-701078](../../../../../../reference/runtime/host-main.cjs#L701074-L701078) | 0 | 0 | 1 | 1 | 0 | 0 |
| [host:701301-701303](../../../../../../reference/runtime/host-main.cjs#L701301-L701303) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:701074

Chamadas escritas diretamente neste corpo: `manager.removeAccount`, `serversMutated`.

SHA-256 do trecho: `9cf415e131416eb2b821cfb65691cf417929797cfe56674d579dc2ade4d37035`.

### host:701301

Chamadas escritas diretamente neste corpo: `mutations.removeAccount`, `toInstalledServers`.

SHA-256 do trecho: `505b93899f71ba9a928bbde236f94cf568150a2d49fe7a89432791dbcd5ae579`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
