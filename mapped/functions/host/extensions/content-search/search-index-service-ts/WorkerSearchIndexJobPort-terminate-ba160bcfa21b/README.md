# `WorkerSearchIndexJobPort.terminate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/content-search/search-index-service.ts` · [README do módulo](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:542171-542173](../../../../../../../reference/runtime/host-main.cjs#L542171-L542173) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542171-542173](../../../../../../../reference/runtime/host-main.cjs#L542171-L542173) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542171

Chamadas escritas diretamente neste corpo: `this.channel.terminate`.

SHA-256 do trecho: `b2f3f5e1a98a9535cfe7f6a0d5de8a4f009d2588c59d37bd0a9d76ef5585b746`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
