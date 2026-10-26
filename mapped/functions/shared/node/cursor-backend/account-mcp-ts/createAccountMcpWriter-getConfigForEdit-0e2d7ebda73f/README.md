# `createAccountMcpWriter/getConfigForEdit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690579-690588](../../../../../../../reference/runtime/host-main.cjs#L690579-L690588) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690579-690588](../../../../../../../reference/runtime/host-main.cjs#L690579-L690588) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:690579

Chamadas escritas diretamente neste corpo: `.getMcpConfig`, `makeClient`, `new GetMcpConfigRequest`, `parseAccountMcpConfigJson`, `serverIdsByNameFromMetadata`.

SHA-256 do trecho: `e1cd8322c6628c5d7c97cf4408054b588fd2e5bec9012c60dd19db2dd92487af`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
