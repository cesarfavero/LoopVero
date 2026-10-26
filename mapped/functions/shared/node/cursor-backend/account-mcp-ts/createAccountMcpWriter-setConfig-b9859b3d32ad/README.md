# `createAccountMcpWriter/setConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690589-690597](../../../../../../../reference/runtime/host-main.cjs#L690589-L690597) | `FunctionExpression` | sim | `config2, serverIdsByName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690589-690597](../../../../../../../reference/runtime/host-main.cjs#L690589-L690597) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:690589

Chamadas escritas diretamente neste corpo: `.setMcpConfig`, `JSON.stringify`, `makeClient`, `new SetMcpConfigRequest`.

SHA-256 do trecho: `cd437625a120ba50926f5ccc2092d2cae192ea77a492c7d72bfcc9e62fe100fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
