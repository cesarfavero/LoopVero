# `nextLogShipDelayMs/backoff2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/log-ship-cadence.ts` · [README do módulo](../../../../../modules/shared/observability/log-ship-cadence-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452656-452656](../../../../../../reference/runtime/host-main.cjs#L452656-L452656) | `ArrowFunctionExpression` | não | `capMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452656-452656](../../../../../../reference/runtime/host-main.cjs#L452656-L452656) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:452656 usa retorno implícito de arrow function.

### host:452656

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`.

SHA-256 do trecho: `0069c67b7d8cfd5ffac9fed2bac4cad20dbd3b1e448fe4ee495d7cf92d2e279c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
