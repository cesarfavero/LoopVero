# `TracedComputerUseSpan.failIfNoOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743006-743008](../../../../../../../../reference/runtime/host-main.cjs#L743006-L743008) | `method` | não | `error64` |
| [evaluation:515857-515859](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515857-L515859) | `method` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743006-743008](../../../../../../../../reference/runtime/host-main.cjs#L743006-L743008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515857-515859](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515857-L515859) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743006

Chamadas escritas diretamente neste corpo: `computerUseSpanOutcomeOf`.

Alvos de atribuição ou incremento: `this.outcome`.

SHA-256 do trecho: `fca3be001ec8f365049892363508fe2e1a12cab640a2fc0722d070422cf326d9`.

### evaluation:515857

Chamadas escritas diretamente neste corpo: `computerUseSpanOutcomeOf`.

Alvos de atribuição ou incremento: `this.outcome`.

SHA-256 do trecho: `6606d4f71224cf2b1f3e7d1aeefa0f596d08cefa31cddcb2c3c2b298143ccea2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
