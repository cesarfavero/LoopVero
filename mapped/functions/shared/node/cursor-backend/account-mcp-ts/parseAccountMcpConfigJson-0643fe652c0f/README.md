# `parseAccountMcpConfigJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690283-690291](../../../../../../../reference/runtime/host-main.cjs#L690283-L690291) | `FunctionDeclaration` | não | `json3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690283-690291](../../../../../../../reference/runtime/host-main.cjs#L690283-L690291) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:690283

Chamadas escritas diretamente neste corpo: `JSON.parse`, `json3.trim`, `mcpConfigSchema2.safeParse`.

SHA-256 do trecho: `61ef0ae205c29679cb5425db89d1db67c6223b60d270a6d03eb2b39c07066c40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
