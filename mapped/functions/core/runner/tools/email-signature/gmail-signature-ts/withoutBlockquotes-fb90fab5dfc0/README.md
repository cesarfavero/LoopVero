# `withoutBlockquotes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755667-755677](../../../../../../../../reference/runtime/host-main.cjs#L755667-L755677) | `FunctionDeclaration` | não | `html` |
| [evaluation:541542-541552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541542-L541552) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755667-755677](../../../../../../../../reference/runtime/host-main.cjs#L755667-L755677) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:541542-541552](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541542-L541552) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:755667

Chamadas escritas diretamente neste corpo: `Math.max`, `html.matchAll`, `html.slice`.

Alvos de atribuição ou incremento: `cursor`, `depth`, `kept`.

SHA-256 do trecho: `8eea7230e0429c1646a9ffb757c50785a544ddb3a825c607f9b846a6eb11d2e6`.

### evaluation:541542

Chamadas escritas diretamente neste corpo: `Math.max`, `html.matchAll`, `html.slice`.

Alvos de atribuição ou incremento: `cursor`, `depth`, `kept`.

SHA-256 do trecho: `8eea7230e0429c1646a9ffb757c50785a544ddb3a825c607f9b846a6eb11d2e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
