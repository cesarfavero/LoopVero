# `int32McpServerIdOrNull`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685204-685211](../../../../../../../reference/runtime/host-main.cjs#L685204-L685211) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685204-685211](../../../../../../../reference/runtime/host-main.cjs#L685204-L685211) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:685204

Chamadas escritas diretamente neste corpo: `Number`, `isInt32McpServerId`, `isMcpServerId`, `rawId.trim`.

SHA-256 do trecho: `15c1b00ccf7b02b108e1407ce597e9b34aa08ffabf3b347f3c47f8c2a0a2aba0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
