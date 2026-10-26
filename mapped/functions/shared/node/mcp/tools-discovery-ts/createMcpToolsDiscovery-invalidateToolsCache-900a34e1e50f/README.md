# `createMcpToolsDiscovery/_invalidateToolsCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691101-691107](../../../../../../../reference/runtime/host-main.cjs#L691101-L691107) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691101-691107](../../../../../../../reference/runtime/host-main.cjs#L691101-L691107) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:691101

Chamadas escritas diretamente neste corpo: `.catch`, `_warmToolsCache`, `firstCallReported.clear`.

Alvos de atribuição ou incremento: `toolsCacheEntry`, `toolsCacheEpoch`.

SHA-256 do trecho: `95ecbe22d85db8e8d2f22857f51d0b5269f4b2683186d3b181c279e49a19bc11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
