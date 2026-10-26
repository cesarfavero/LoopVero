# `plannedDraftVerificationReads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735286-735315](../../../../../../../reference/runtime/host-main.cjs#L735286-L735315) | `FunctionDeclaration` | não | `route` |
| [evaluation:540851-540880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540851-L540880) | `FunctionDeclaration` | não | `route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735286-735315](../../../../../../../reference/runtime/host-main.cjs#L735286-L735315) | 7 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540851-540880](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540851-L540880) | 7 | 0 | 0 | 3 | 0 | 0 |

### host:735286

Chamadas escritas diretamente neste corpo: `SLACK_USER_ID.test`, `emailSenderRead`, `sender.replyRead`.

SHA-256 do trecho: `18cbdd434ddbd1a97ea253a43afd648382ef34c73ae7cdb1ce2b630b1e8da44c`.

### evaluation:540851

Chamadas escritas diretamente neste corpo: `SLACK_USER_ID.test`, `emailSenderRead`, `sender.replyRead`.

SHA-256 do trecho: `18cbdd434ddbd1a97ea253a43afd648382ef34c73ae7cdb1ce2b630b1e8da44c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
