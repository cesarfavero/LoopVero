# `createMcpToolsDiscovery/_reportFirstCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690774-690790](../../../../../../../reference/runtime/host-main.cjs#L690774-L690790) | `FunctionDeclaration` | não | `providerIdentifier, ok` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690774-690790](../../../../../../../reference/runtime/host-main.cjs#L690774-L690790) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:690774

Chamadas escritas diretamente neste corpo: `_displayRowForIdentifier`, `deps.onConnectorAuth`, `firstCallReported.get`, `firstCallReported.set`.

Alvos de atribuição ou incremento: `entry.failed`, `entry.ok`.

SHA-256 do trecho: `d760f8bf50de8f7dcd5ccb63a1fff3b0984022f406faf6a36e6f7f546d6fd42a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
