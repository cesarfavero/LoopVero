# `haveSameRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-display-listing.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-display-listing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686791-686795](../../../../../../../reference/runtime/host-main.cjs#L686791-L686795) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686791-686795](../../../../../../../reference/runtime/host-main.cjs#L686791-L686795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686791

Chamadas escritas diretamente neste corpo: `.every`, `left.servers.map`, `new Set`, `right.servers.map`.

SHA-256 do trecho: `ac4595cdf969ccdbbda86297ca46c9fc86a3042833aba5b833bf548a7fc77889`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
