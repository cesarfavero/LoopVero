# `tagsNestReliably`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755698-755711](../../../../../../../../reference/runtime/host-main.cjs#L755698-L755711) | `FunctionDeclaration` | não | `html` |
| [evaluation:541573-541586](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541573-L541586) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755698-755711](../../../../../../../../reference/runtime/host-main.cjs#L755698-L755711) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:541573-541586](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541573-L541586) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:755698

Chamadas escritas diretamente neste corpo: `.every`, `/"[^"]*[<>]|'[^']*[<>]/.test`, `COMMENT_OR_RAW_TEXT.test`, `html.matchAll`.

SHA-256 do trecho: `117e048ab6ffb098592772b5d2d007325a3309e8f14d237e38e2963b0672c9e9`.

### evaluation:541573

Chamadas escritas diretamente neste corpo: `.every`, `/"[^"]*[<>]|'[^']*[<>]/.test`, `COMMENT_OR_RAW_TEXT.test`, `html.matchAll`.

SHA-256 do trecho: `117e048ab6ffb098592772b5d2d007325a3309e8f14d237e38e2963b0672c9e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
