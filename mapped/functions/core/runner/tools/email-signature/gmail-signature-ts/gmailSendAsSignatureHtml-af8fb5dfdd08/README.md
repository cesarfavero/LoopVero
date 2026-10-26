# `gmailSendAsSignatureHtml`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755808-755810](../../../../../../../../reference/runtime/host-main.cjs#L755808-L755810) | `FunctionDeclaration` | não | `entries, sendingAddress` |
| [evaluation:541683-541685](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541683-L541685) | `FunctionDeclaration` | não | `entries, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755808-755810](../../../../../../../../reference/runtime/host-main.cjs#L755808-L755810) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541683-541685](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541683-L541685) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755808

Chamadas escritas diretamente neste corpo: `finishedSignature`, `sendAsSignatureOf`.

SHA-256 do trecho: `ddddc41bbc7c23b65daadd0978a2add79a88a765086a326ae33f64f27b8e9c06`.

### evaluation:541683

Chamadas escritas diretamente neste corpo: `finishedSignature`, `sendAsSignatureOf`.

SHA-256 do trecho: `ddddc41bbc7c23b65daadd0978a2add79a88a765086a326ae33f64f27b8e9c06`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
