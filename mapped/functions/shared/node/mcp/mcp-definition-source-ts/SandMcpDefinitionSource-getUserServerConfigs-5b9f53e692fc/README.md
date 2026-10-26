# `SandMcpDefinitionSource.getUserServerConfigs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-definition-source.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686748-686757](../../../../../../../reference/runtime/host-main.cjs#L686748-L686757) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686748-686757](../../../../../../../reference/runtime/host-main.cjs#L686748-L686757) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:686748

Chamadas escritas diretamente neste corpo: `BUILTIN_MCP_SERVER_NAMES.has`, `Object.entries`.

Alvos de atribuição ou incremento: `servers[computed]`.

SHA-256 do trecho: `bb907011cc0c97fb6aa6d4de4a720901edca8913e018acae97770ebe458dd3d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
