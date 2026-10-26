# `recordMemoryRecall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-telemetry/memory-metrics.ts` · [README do módulo](../../../../../../modules/core/runner/memory-telemetry/memory-metrics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754580-754590](../../../../../../../reference/runtime/host-main.cjs#L754580-L754590) | `FunctionDeclaration` | não | `ctx, report` |
| [evaluation:537548-537558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537548-L537558) | `FunctionDeclaration` | não | `ctx, report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754580-754590](../../../../../../../reference/runtime/host-main.cjs#L754580-L754590) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:537548-537558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537548-L537558) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:754580

Chamadas escritas diretamente neste corpo: `String`, `errorLogTag`, `process.stderr.write`, `recall.increment`.

SHA-256 do trecho: `dd82cb798d17ff17a0a6c583d15e719981cc60c315362635971033eb5bcc7997`.

### evaluation:537548

Chamadas escritas diretamente neste corpo: `String`, `errorLogTag`, `process.stderr.write`, `recall.increment`.

SHA-256 do trecho: `994847c620d62991b475c732ba6a44d85a286653a2d7507c87290739a45a93bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
