# `memoryFactBytes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-telemetry/memory-metrics.ts` · [README do módulo](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754550-754552](../../../../../../../reference/runtime/host-main.cjs#L754550-L754552) | `FunctionDeclaration` | não | `fact` |
| [evaluation:537501-537503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537501-L537503) | `FunctionDeclaration` | não | `fact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754550-754552](../../../../../../../reference/runtime/host-main.cjs#L754550-L754552) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537501-537503](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537501-L537503) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754550

Chamadas escritas diretamente neste corpo: `.encode`, `new TextEncoder`.

SHA-256 do trecho: `ac4816bfd7dc13ade429bc183ac04308f5ae3290eea061e0b0a71529eb504d4c`.

### evaluation:537501

Chamadas escritas diretamente neste corpo: `.encode`, `new TextEncoder`.

SHA-256 do trecho: `ac4816bfd7dc13ade429bc183ac04308f5ae3290eea061e0b0a71529eb504d4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
