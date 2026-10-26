# `isMcpListingServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225981-225983](../../../../../../reference/runtime/host-main.cjs#L225981-L225983) | `FunctionDeclaration` | não | `rawId` |
| [evaluation:495205-495207](../../../../../../reference/runtime/sand-eval-runner.cjs#L495205-L495207) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225981-225983](../../../../../../reference/runtime/host-main.cjs#L225981-L225983) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495205-495207](../../../../../../reference/runtime/sand-eval-runner.cjs#L495205-L495207) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225981

Chamadas escritas diretamente neste corpo: `MCP_LISTING_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 do trecho: `6b44ef1f457fd24d480b6704d3c141c2b69c56d358572c028461a4884acac7bb`.

### evaluation:495205

Chamadas escritas diretamente neste corpo: `MCP_LISTING_SERVER_ID_PATTERN.test`, `rawId.trim`.

SHA-256 do trecho: `6b44ef1f457fd24d480b6704d3c141c2b69c56d358572c028461a4884acac7bb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
