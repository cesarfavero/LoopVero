# `SandMcpListingSummaries.countEnabledTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688835-688841](../../../../../../../reference/runtime/host-main.cjs#L688835-L688841) | `method` | não | `serverId, tools` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688835-688841](../../../../../../../reference/runtime/host-main.cjs#L688835-L688841) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688835

Chamadas escritas diretamente neste corpo: `.getMcpDisabledToolsByServerId`, `this.deps.settingsStore`, `tools.filter`.

SHA-256 do trecho: `1d4b1ae125ef4ac85b08bc76484c12f19321c356d93b0b687d3e700067849f79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
