# `SandSearchIndexService.recreateIndexFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-service.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542404-542411](../../../../../../../reference/runtime/host-main.cjs#L542404-L542411) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542404-542411](../../../../../../../reference/runtime/host-main.cjs#L542404-L542411) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:542404

Chamadas escritas diretamente neste corpo: `ensureSearchIndexSchema`, `listener`, `openSearchIndexDb`, `stampSearchIndexSchemaVersion`, `this.removeIndexFiles`.

SHA-256 do trecho: `9da99d06c9c4f3fc37d2aa7683b760a6bfd1771b1dc4bb4de7371a76ffdc0b0c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
