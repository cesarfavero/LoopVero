# `boundedActionString`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699312-699315](../../../../../../reference/runtime/host-main.cjs#L699312-L699315) | `FunctionDeclaration` | não | `value, maxChars` |
| [evaluation:513068-513071](../../../../../../reference/runtime/sand-eval-runner.cjs#L513068-L513071) | `FunctionDeclaration` | não | `value, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699312-699315](../../../../../../reference/runtime/host-main.cjs#L699312-L699315) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:513068-513071](../../../../../../reference/runtime/sand-eval-runner.cjs#L513068-L513071) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:699312

Chamadas escritas diretamente neste corpo: `value.slice`.

SHA-256 do trecho: `98aad33bad1b070a2489ecdb29a8effc73796cb7f15f489ff4da232f2137d27e`.

### evaluation:513068

Chamadas escritas diretamente neste corpo: `value.slice`.

SHA-256 do trecho: `98aad33bad1b070a2489ecdb29a8effc73796cb7f15f489ff4da232f2137d27e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
