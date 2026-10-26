# `SandMcpManager.classifyRemoveOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689790-689800](../../../../../../../reference/runtime/host-main.cjs#L689790-L689800) | `method` | não | `serverId, state` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689790-689800](../../../../../../../reference/runtime/host-main.cjs#L689790-L689800) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:689790

Chamadas escritas diretamente neste corpo: `state.servers.find`.

SHA-256 do trecho: `1aa5625c6513bd043982e1895ca012f4a46c13d6ff3f0c2ec12749f039afd8e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
