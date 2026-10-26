# `statsigBootstrapChange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/statsig-bootstrap.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552372-552380](../../../../../../../reference/runtime/host-main.cjs#L552372-L552380) | `FunctionDeclaration` | não | `previous, next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552372-552380](../../../../../../../reference/runtime/host-main.cjs#L552372-L552380) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:552372

Chamadas escritas diretamente neste corpo: `areJsonValuesEqual`, `isUnknownRecord2`.

SHA-256 do trecho: `f1900b213941084c2b82cdb6f43b03968c2415a9f5ac855d87b04cb6ec6fc1d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
