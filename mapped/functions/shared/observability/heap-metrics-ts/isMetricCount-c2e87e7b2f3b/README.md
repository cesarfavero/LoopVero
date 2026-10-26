# `isMetricCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/heap-metrics.ts` · [README do módulo](../../../../../modules/shared/observability/heap-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487540-487542](../../../../../../reference/runtime/host-main.cjs#L487540-L487542) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487540-487542](../../../../../../reference/runtime/host-main.cjs#L487540-L487542) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487540

Chamadas escritas diretamente neste corpo: `Number.isInteger`.

SHA-256 do trecho: `856c0053425364c4e10024874b8b9dab906c5015d752d9b3d1344b216efe1fc5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
