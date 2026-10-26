# `reviewedDraftReads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755841-755846](../../../../../../reference/runtime/host-main.cjs#L755841-L755846) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |
| [evaluation:541716-541721](../../../../../../reference/runtime/sand-eval-runner.cjs#L541716-L541721) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755841-755846](../../../../../../reference/runtime/host-main.cjs#L755841-L755846) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541716-541721](../../../../../../reference/runtime/sand-eval-runner.cjs#L541716-L541721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755841

Chamadas escritas diretamente neste corpo: `plannedDraftVerificationReads`, `plannedEmailSignatureReads`.

SHA-256 do trecho: `07729e6efc3c18a43422a6fce74a2acbf1d2f7c076e5bbd535db1fa3a1bc766e`.

### evaluation:541716

Chamadas escritas diretamente neste corpo: `plannedDraftVerificationReads`, `plannedEmailSignatureReads`.

SHA-256 do trecho: `07729e6efc3c18a43422a6fce74a2acbf1d2f7c076e5bbd535db1fa3a1bc766e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
