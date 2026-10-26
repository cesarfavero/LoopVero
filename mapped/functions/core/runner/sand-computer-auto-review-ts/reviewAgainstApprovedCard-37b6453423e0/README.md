# `reviewAgainstApprovedCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699538-699545](../../../../../../reference/runtime/host-main.cjs#L699538-L699545) | `FunctionDeclaration` | sim | `args, call, displayStateCapture, { approvedFingerprint, cardReason }` |
| [evaluation:513294-513301](../../../../../../reference/runtime/sand-eval-runner.cjs#L513294-L513301) | `FunctionDeclaration` | sim | `args, call, displayStateCapture, { approvedFingerprint, cardReason }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699538-699545](../../../../../../reference/runtime/host-main.cjs#L699538-L699545) | 1 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:513294-513301](../../../../../../reference/runtime/sand-eval-runner.cjs#L513294-L513301) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:699538

Chamadas escritas diretamente neste corpo: `call.fingerprint`, `runClassifier`.

SHA-256 do trecho: `0c82b19428bdf7d859235049c93c7166b489a50a8037f3cc3423005b5832bf19`.

### evaluation:513294

Chamadas escritas diretamente neste corpo: `call.fingerprint`, `runClassifier`.

SHA-256 do trecho: `0c82b19428bdf7d859235049c93c7166b489a50a8037f3cc3423005b5832bf19`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
