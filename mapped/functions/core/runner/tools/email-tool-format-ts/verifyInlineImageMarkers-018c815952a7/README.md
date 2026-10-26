# `verifyInlineImageMarkers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/email-tool-format.ts` · [README do módulo](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764154-764165](../../../../../../../reference/runtime/host-main.cjs#L764154-L764165) | `FunctionDeclaration` | não | `body, attachments` |
| [evaluation:557525-557536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557525-L557536) | `FunctionDeclaration` | não | `body, attachments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764154-764165](../../../../../../../reference/runtime/host-main.cjs#L764154-L764165) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:557525-557536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557525-L557536) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:764154

Chamadas escritas diretamente neste corpo: `body.replace`, `isInlineEmailAttachment`, `new Set`, `real.add`.

SHA-256 do trecho: `813398aa9ab2d0d99d46e84e64a30aab051b1660947962bdd72b5a9965606451`.

### evaluation:557525

Chamadas escritas diretamente neste corpo: `body.replace`, `isInlineEmailAttachment`, `new Set`, `real.add`.

SHA-256 do trecho: `813398aa9ab2d0d99d46e84e64a30aab051b1660947962bdd72b5a9965606451`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
