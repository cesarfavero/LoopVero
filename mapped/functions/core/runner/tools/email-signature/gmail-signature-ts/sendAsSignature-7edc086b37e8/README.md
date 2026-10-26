# `sendAsSignature`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755811-755819](../../../../../../../../reference/runtime/host-main.cjs#L755811-L755819) | `FunctionDeclaration` | sim | `execute, route, sendingAddress` |
| [evaluation:541686-541694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541686-L541694) | `FunctionDeclaration` | sim | `execute, route, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755811-755819](../../../../../../../../reference/runtime/host-main.cjs#L755811-L755819) | 2 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:541686-541694](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541686-L541694) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:755811

Chamadas escritas diretamente neste corpo: `execute`, `parseDraftConnectorRecord`, `restSendAsSchema.safeParse`, `sendAsSignatureOf`.

SHA-256 do trecho: `ec7815648c0403cf2e86a9cac75bfba31fcf082d4fdc0007587500cea881f5b2`.

### evaluation:541686

Chamadas escritas diretamente neste corpo: `execute`, `parseDraftConnectorRecord`, `restSendAsSchema.safeParse`, `sendAsSignatureOf`.

SHA-256 do trecho: `741c8928ab4b935be3f2f62ad39659ce83564687000f3f10f6a48bf762cb7a83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
