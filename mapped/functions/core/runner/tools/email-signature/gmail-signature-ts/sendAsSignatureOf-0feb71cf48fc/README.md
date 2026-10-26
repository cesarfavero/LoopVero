# `sendAsSignatureOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755799-755803](../../../../../../../../reference/runtime/host-main.cjs#L755799-L755803) | `FunctionDeclaration` | não | `entries, sendingAddress` |
| [evaluation:541674-541678](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541674-L541678) | `FunctionDeclaration` | não | `entries, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755799-755803](../../../../../../../../reference/runtime/host-main.cjs#L755799-L755803) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541674-541678](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541674-L541678) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755799

Chamadas escritas diretamente neste corpo: `entries.find`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `cf60d5bd9f9513af33167644acee2878342a589bac7890d7bf0d0185817369ec`.

### evaluation:541674

Chamadas escritas diretamente neste corpo: `entries.find`, `sendingAddress.toLowerCase`.

SHA-256 do trecho: `cf60d5bd9f9513af33167644acee2878342a589bac7890d7bf0d0185817369ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
