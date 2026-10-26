# `isInt32McpServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685183-685185](../../../../../../../reference/runtime/host-main.cjs#L685183-L685185) | `FunctionDeclaration` | não | `parsed2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685183-685185](../../../../../../../reference/runtime/host-main.cjs#L685183-L685185) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:685183

Chamadas escritas diretamente neste corpo: `Number.isSafeInteger`.

SHA-256 do trecho: `558e40435a70f4ff4f2023016237e065bbc4e04afbe0c9c71f8ce407034dd571`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
