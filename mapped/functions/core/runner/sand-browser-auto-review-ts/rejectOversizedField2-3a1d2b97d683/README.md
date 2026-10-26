# `rejectOversizedField2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699697-699702](../../../../../../reference/runtime/host-main.cjs#L699697-L699702) | `FunctionDeclaration` | não | `field, maxChars` |
| [evaluation:513453-513458](../../../../../../reference/runtime/sand-eval-runner.cjs#L513453-L513458) | `FunctionDeclaration` | não | `field, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699697-699702](../../../../../../reference/runtime/host-main.cjs#L699697-L699702) | 0 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:513453-513458](../../../../../../reference/runtime/sand-eval-runner.cjs#L513453-L513458) | 0 | 0 | 0 | 0 | 1 | 0 |

### host:699697

Chamadas escritas diretamente neste corpo: `new SandBrowserAutoReviewBlockedError`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `7929b87dc56fbeff6526962506473de3adcb1cf50cabd93ccfe92873eb788f17`.

### evaluation:513453

Chamadas escritas diretamente neste corpo: `new SandBrowserAutoReviewBlockedError`.

Alvos de lançamento explícito: `SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `7929b87dc56fbeff6526962506473de3adcb1cf50cabd93ccfe92873eb788f17`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
