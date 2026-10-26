# `ownPart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755731-755737](../../../../../../../../reference/runtime/host-main.cjs#L755731-L755737) | `FunctionDeclaration` | não | `messageHtml` |
| [evaluation:541606-541612](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541606-L541612) | `FunctionDeclaration` | não | `messageHtml` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755731-755737](../../../../../../../../reference/runtime/host-main.cjs#L755731-L755737) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541606-541612](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541606-L541612) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755731

Chamadas escritas diretamente neste corpo: `QUOTE_START.exec`, `tagsNestReliably`, `unquoted.slice`, `withoutBlockquotes`, `withoutGmailQuotes`.

SHA-256 do trecho: `7ee4f602d53474e6919870ddc7c4f8723699d23f96057dacfaeb040975a2bdd6`.

### evaluation:541606

Chamadas escritas diretamente neste corpo: `QUOTE_START.exec`, `tagsNestReliably`, `unquoted.slice`, `withoutBlockquotes`, `withoutGmailQuotes`.

SHA-256 do trecho: `7ee4f602d53474e6919870ddc7c4f8723699d23f96057dacfaeb040975a2bdd6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
