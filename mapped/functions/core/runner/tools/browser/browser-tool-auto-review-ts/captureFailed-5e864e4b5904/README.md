# `captureFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/tools/browser/browser-tool-auto-review.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/browser-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743395-743400](../../../../../../../../reference/runtime/host-main.cjs#L743395-L743400) | `FunctionDeclaration` | não | `timedOut` |
| [evaluation:516246-516251](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516246-L516251) | `FunctionDeclaration` | não | `timedOut` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743395-743400](../../../../../../../../reference/runtime/host-main.cjs#L743395-L743400) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516246-516251](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516246-L516251) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:743395

Chamadas escritas diretamente neste corpo: `new SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `ecc652aac789dc902b5e9ca6cf5819b4d51132d8cea1e2bd19a80a61185c7c46`.

### evaluation:516246

Chamadas escritas diretamente neste corpo: `new SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `ecc652aac789dc902b5e9ca6cf5819b4d51132d8cea1e2bd19a80a61185c7c46`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
