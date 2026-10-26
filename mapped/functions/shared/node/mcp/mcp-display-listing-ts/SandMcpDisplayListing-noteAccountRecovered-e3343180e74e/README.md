# `SandMcpDisplayListing.noteAccountRecovered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-display-listing.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-display-listing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686886-686892](../../../../../../../reference/runtime/host-main.cjs#L686886-L686892) | `method` | não | `recovered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686886-686892](../../../../../../../reference/runtime/host-main.cjs#L686886-L686892) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:686886

Chamadas escritas diretamente neste corpo: `haveSameRows`, `recovered`, `this.emit`.

Alvos de atribuição ou incremento: `this.shownFromDegradedAccountRead`.

SHA-256 do trecho: `ad36b935c69aef18347cd2c08522bb69598a850a5782e7cee1411728165c1caf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
