# `recordMemoryTruncation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-telemetry/memory-metrics.ts` · [README do módulo](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537528-537543](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537528-L537543) | `FunctionDeclaration` | não | `ctx, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537528-537543](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537528-L537543) | 1 | 2 | 0 | 0 | 0 | 1 |

### evaluation:537528

Chamadas escritas diretamente neste corpo: `Math.max`, `errorLogTag`, `facts`, `process.stderr.write`, `shown[computed].filter`, `total[computed].filter`, `truncatedPct.histogram`.

SHA-256 do trecho: `6ce2c11d521594281eff437e7ad8e0e3306dae088f46dd5e926c84c4acdb6fda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
