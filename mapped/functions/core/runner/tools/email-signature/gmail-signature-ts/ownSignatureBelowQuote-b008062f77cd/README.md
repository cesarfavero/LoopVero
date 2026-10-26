# `ownSignatureBelowQuote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755692-755697](../../../../../../../../reference/runtime/host-main.cjs#L755692-L755697) | `FunctionDeclaration` | não | `afterQuote` |
| [evaluation:541567-541572](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541567-L541572) | `FunctionDeclaration` | não | `afterQuote` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755692-755697](../../../../../../../../reference/runtime/host-main.cjs#L755692-L755697) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541567-541572](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541567-L541572) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:755692

Chamadas escritas diretamente neste corpo: `/^[\s-]*$/.test`, `GMAIL_QUOTE_OPEN.test`, `GMAIL_SIGNATURE_OPEN.exec`, `afterQuote.slice`, `plainText`.

SHA-256 do trecho: `f51e29f0d8fd8abc932f11aa53c04cc66b1024b51adcc36b5f0ff68e36bbefd3`.

### evaluation:541567

Chamadas escritas diretamente neste corpo: `/^[\s-]*$/.test`, `GMAIL_QUOTE_OPEN.test`, `GMAIL_SIGNATURE_OPEN.exec`, `afterQuote.slice`, `plainText`.

SHA-256 do trecho: `033815edf5945abe4203eea2f2f0c6335091ba821774f12edacdfe8b1c99a683`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
