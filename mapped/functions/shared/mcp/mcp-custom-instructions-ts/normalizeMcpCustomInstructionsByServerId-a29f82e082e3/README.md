# `normalizeMcpCustomInstructionsByServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-custom-instructions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687281-687288](../../../../../../reference/runtime/host-main.cjs#L687281-L687288) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687281-687288](../../../../../../reference/runtime/host-main.cjs#L687281-L687288) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:687281

Chamadas escritas diretamente neste corpo: `MCP_DISPLAY_SERVER_ID_KEY.test`, `Object.entries`, `clampMcpCustomInstruction`.

Alvos de atribuição ou incremento: `normalized[computed]`.

SHA-256 do trecho: `1805548e76efb381930482e3e374242be0f25b82d84fb515d860ce18d9101c1b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
