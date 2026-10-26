# `grokSentMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755653-755661](../../../../../../../../reference/runtime/host-main.cjs#L755653-L755661) | `FunctionDeclaration` | não | `messageText, sendingAddress` |
| [evaluation:541528-541536](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541528-L541536) | `FunctionDeclaration` | não | `messageText3, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755653-755661](../../../../../../../../reference/runtime/host-main.cjs#L755653-L755661) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:541528-541536](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541528-L541536) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:755653

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `Array.isArray`, `grokGmailAddress`, `grokMessageRecord`, `grokSenderText`, `labels.includes`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `52983afcfa2c74b5e31bad8d9e19f4d6ea3bc9a9947467bb261fb2d0f69046c6`.

### evaluation:541528

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `Array.isArray`, `grokGmailAddress`, `grokMessageRecord`, `grokSenderText`, `labels.includes`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `bb09675a34b2c5adc9c52a24a6998fcae2306fc0e64a54e1b0ba12e68334ca3e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
