# `parseInt32McpListingServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685193-685203](../../../../../../../reference/runtime/host-main.cjs#L685193-L685203) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685193-685203](../../../../../../../reference/runtime/host-main.cjs#L685193-L685203) | 2 | 0 | 0 | 1 | 2 | 0 |

### host:685193

Chamadas escritas diretamente neste corpo: `Math.abs`, `Number`, `Number.isSafeInteger`, `isMcpListingServerId`, `new SandMcpConfigError`, `rawId.trim`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `12a863b3d71bc524500a2c1c58e5db486700859b324c18e2a085eb3256dbd4b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
