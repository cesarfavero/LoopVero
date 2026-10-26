# `TracedComputerUseSpan.end`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743012-743017](../../../../../../../../reference/runtime/host-main.cjs#L743012-L743017) | `method` | não | `outcome` |
| [evaluation:515863-515868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515863-L515868) | `method` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743012-743017](../../../../../../../../reference/runtime/host-main.cjs#L743012-L743017) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515863-515868](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515863-L515868) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:743012

Chamadas escritas diretamente neste corpo: `endSpan`, `this.ctx.signal.removeEventListener`.

Alvos de atribuição ou incremento: `this.ended`.

SHA-256 do trecho: `71d26d2b7ec2b1402e8e5d549f4ec56fb64d5a591e01d506b770d44daf98f845`.

### evaluation:515863

Chamadas escritas diretamente neste corpo: `endSpan`, `this.ctx.signal.removeEventListener`.

Alvos de atribuição ou incremento: `this.ended`.

SHA-256 do trecho: `71d26d2b7ec2b1402e8e5d549f4ec56fb64d5a591e01d506b770d44daf98f845`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
