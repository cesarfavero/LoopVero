# `createMcpToolsDiscovery/_scheduleColdStartWarm`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691043-691052](../../../../../../../reference/runtime/host-main.cjs#L691043-L691052) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691043-691052](../../../../../../../reference/runtime/host-main.cjs#L691043-L691052) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:691043

Chamadas escritas diretamente neste corpo: `.finally`, `_warmToolsCache`.

Alvos de atribuição ou incremento: `toolsColdWarmScheduled`.

SHA-256 do trecho: `7bacdab4f405a81a7880332eaeb3632b2daf1dff11c73c1868642dfaaa805465`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
