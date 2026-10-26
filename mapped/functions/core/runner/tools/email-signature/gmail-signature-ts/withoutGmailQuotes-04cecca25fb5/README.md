# `withoutGmailQuotes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755718-755730](../../../../../../../../reference/runtime/host-main.cjs#L755718-L755730) | `FunctionDeclaration` | não | `html, readBelowQuotes` |
| [evaluation:541593-541605](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541593-L541605) | `FunctionDeclaration` | não | `html, readBelowQuotes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755718-755730](../../../../../../../../reference/runtime/host-main.cjs#L755718-L755730) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:541593-541605](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541593-L541605) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:755718

Chamadas escritas diretamente neste corpo: `GMAIL_QUOTE_OPEN.exec`, `closingDiv`, `isGmailQuoteContainer`, `ownSignatureBelowQuote`, `rest.slice`.

Alvos de atribuição ou incremento: `kept`, `open13`, `rest`.

SHA-256 do trecho: `194ada0890c45c83a114974a74aff86e79bd5de66ecf7a40367d92251c5de6de`.

### evaluation:541593

Chamadas escritas diretamente neste corpo: `GMAIL_QUOTE_OPEN.exec`, `closingDiv`, `isGmailQuoteContainer`, `ownSignatureBelowQuote`, `rest.slice`.

Alvos de atribuição ou incremento: `kept`, `open4`, `rest`.

SHA-256 do trecho: `1ecd68bd5c7a9883fde5aebd42a37a072b47b6a62b3f0b9900eb12fbf175a17c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
