# `TracedComputerUseSpan.setOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743002-743005](../../../../../../../../reference/runtime/host-main.cjs#L743002-L743005) | `method` | não | `outcome, options2` |
| [evaluation:515853-515856](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515853-L515856) | `method` | não | `outcome, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743002-743005](../../../../../../../../reference/runtime/host-main.cjs#L743002-L743005) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515853-515856](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515853-L515856) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743002

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.outcome`, `this.timedOut`.

SHA-256 do trecho: `a02f22eca468f6966044a48bd5a4701b09860b35b6b1eea03dfabbd3ee304f33`.

### evaluation:515853

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.outcome`, `this.timedOut`.

SHA-256 do trecho: `a02f22eca468f6966044a48bd5a4701b09860b35b6b1eea03dfabbd3ee304f33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
