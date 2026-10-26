# `SandSearchIndexService.terminateWorker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-service.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542345-542349](../../../../../../../reference/runtime/host-main.cjs#L542345-L542349) | `method` | sim | `port, stage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542345-542349](../../../../../../../reference/runtime/host-main.cjs#L542345-L542349) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:542345

Chamadas escritas diretamente neste corpo: `.catch`, `port.terminate`.

SHA-256 do trecho: `c2865395487649fbc71009d1bb2a83406064c95e61907f103b92df4893f4134b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
