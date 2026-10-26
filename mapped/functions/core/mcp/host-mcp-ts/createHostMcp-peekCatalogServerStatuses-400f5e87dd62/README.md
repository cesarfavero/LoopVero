# `createHostMcp/peekCatalogServerStatuses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701009-701011](../../../../../../reference/runtime/host-main.cjs#L701009-L701011) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701009-701011](../../../../../../reference/runtime/host-main.cjs#L701009-L701011) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:701009 usa retorno implícito de arrow function.

### host:701009

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `deps.isCatalogServerStatusDisabled`, `discovery.peekServerStatuses`.

SHA-256 do trecho: `39047e2ee34fb25ed095f6c76530b2f0ddd580c9475955622ee7048efea80671`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
