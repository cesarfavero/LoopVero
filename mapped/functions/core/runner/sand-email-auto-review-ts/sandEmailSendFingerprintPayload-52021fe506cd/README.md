# `sandEmailSendFingerprintPayload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764591-764619](../../../../../../reference/runtime/host-main.cjs#L764591-L764619) | `FunctionDeclaration` | não | `target, provenance` |
| [evaluation:557959-557987](../../../../../../reference/runtime/sand-eval-runner.cjs#L557959-L557987) | `FunctionDeclaration` | não | `target, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764591-764619](../../../../../../reference/runtime/host-main.cjs#L764591-L764619) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557959-557987](../../../../../../reference/runtime/sand-eval-runner.cjs#L557959-L557987) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764591

Chamadas escritas diretamente neste corpo: `target.attachments.map`, `target.replyTo.map`.

SHA-256 do trecho: `8a1fe53493bd0c48ecd93f32f9c63e8bc5ce72bcc5eeef5e24390dc4229c86b6`.

### evaluation:557959

Chamadas escritas diretamente neste corpo: `target.attachments.map`, `target.replyTo.map`.

SHA-256 do trecho: `8a1fe53493bd0c48ecd93f32f9c63e8bc5ce72bcc5eeef5e24390dc4229c86b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
