# `parseHeapMetricsReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/heap-metrics.ts` · [README do módulo](../../../../../modules/shared/observability/heap-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487543-487573](../../../../../../reference/runtime/host-main.cjs#L487543-L487573) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487543-487573](../../../../../../reference/runtime/host-main.cjs#L487543-L487573) | 8 | 0 | 0 | 6 | 0 | 1 |

### host:487543

Chamadas escritas diretamente neste corpo: `Number.isFinite`, `Object.getPrototypeOf`, `isMetricCount`, `ownDataValue`.

SHA-256 do trecho: `cf5e2c1d63fe4ff0c336e26f1ec5eb6d26b4fe62c1a2f5eeec3bb8af6aa19542`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
