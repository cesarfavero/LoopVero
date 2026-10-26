# `summarizeVerificationReads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-draft-verification-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755870-755873](../../../../../../reference/runtime/host-main.cjs#L755870-L755873) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |
| [evaluation:541745-541748](../../../../../../reference/runtime/sand-eval-runner.cjs#L541745-L541748) | `FunctionDeclaration` | não | `route, hostedSendAs = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755870-755873](../../../../../../reference/runtime/host-main.cjs#L755870-L755873) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541745-541748](../../../../../../reference/runtime/sand-eval-runner.cjs#L541745-L541748) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755870

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `reviewedDraftReads`.

SHA-256 do trecho: `f0009ab2525baa2ac9cf2399189b08a4b9fe7f891973a24bba25273872e696b4`.

### evaluation:541745

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `reviewedDraftReads`.

SHA-256 do trecho: `f0009ab2525baa2ac9cf2399189b08a4b9fe7f891973a24bba25273872e696b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
