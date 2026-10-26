# `isGmailQuoteContainer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-signature/gmail-signature.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755712-755717](../../../../../../../../reference/runtime/host-main.cjs#L755712-L755717) | `FunctionDeclaration` | não | `openTag` |
| [evaluation:541587-541592](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541587-L541592) | `FunctionDeclaration` | não | `openTag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755712-755717](../../../../../../../../reference/runtime/host-main.cjs#L755712-L755717) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541587-541592](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541587-L541592) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755712

Chamadas escritas diretamente neste corpo: `.find`, `.includes`, `.split`, `Array.from`, `openTag.matchAll`.

SHA-256 do trecho: `2478a21195828d122627d9543419741bcde1e73ec3553c5d48023c6a69f19824`.

### evaluation:541587

Chamadas escritas diretamente neste corpo: `.find`, `.includes`, `.split`, `Array.from`, `openTag.matchAll`.

SHA-256 do trecho: `2478a21195828d122627d9543419741bcde1e73ec3553c5d48023c6a69f19824`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
