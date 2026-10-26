# `ttfaPhaseSpans`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-latency/turn-ttfa-trace.ts` · [README do módulo](../../../../../../modules/core/runner/turn-latency/turn-ttfa-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546865-546895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546865-L546895) | `FunctionDeclaration` | não | `marks` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546865-546895](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546865-L546895) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:546865

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `known.slice`, `phases2.push`, `points.filter`.

Alvos de atribuição ou incremento: `previousAt`.

SHA-256 do trecho: `419a371b37822577dc3b84a33d4aa813d4261aedcbdf998aee659600b5a9c7cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
