# `fingerprintSandBrowserAutoReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699740-699748](../../../../../../reference/runtime/host-main.cjs#L699740-L699748) | `FunctionDeclaration` | não | `target` |
| [evaluation:513496-513504](../../../../../../reference/runtime/sand-eval-runner.cjs#L513496-L513504) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699740-699748](../../../../../../reference/runtime/host-main.cjs#L699740-L699748) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513496-513504](../../../../../../reference/runtime/sand-eval-runner.cjs#L513496-L513504) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699740

Chamadas escritas diretamente neste corpo: `fingerprintSandAutoReviewTarget`.

SHA-256 do trecho: `baaa4bdc6d3b2a32aeb2aaf4a1869fe2b7e123db18dc280489d644b88509413e`.

### evaluation:513496

Chamadas escritas diretamente neste corpo: `fingerprintSandAutoReviewTarget`.

SHA-256 do trecho: `baaa4bdc6d3b2a32aeb2aaf4a1869fe2b7e123db18dc280489d644b88509413e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
