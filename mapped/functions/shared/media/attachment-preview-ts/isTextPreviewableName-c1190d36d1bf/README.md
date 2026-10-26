# `isTextPreviewableName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/attachment-preview.ts` · [README do módulo](../../../../../modules/shared/media/attachment-preview-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497178-497181](../../../../../../reference/runtime/host-main.cjs#L497178-L497181) | `FunctionDeclaration` | não | `nameOrPath` |
| [evaluation:480715-480718](../../../../../../reference/runtime/sand-eval-runner.cjs#L480715-L480718) | `FunctionDeclaration` | não | `nameOrPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497178-497181](../../../../../../reference/runtime/host-main.cjs#L497178-L497181) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480715-480718](../../../../../../reference/runtime/sand-eval-runner.cjs#L480715-L480718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497178

Chamadas escritas diretamente neste corpo: `TEXT_PREVIEWABLE_EXTENSIONS.has`, `attachmentExtension`.

SHA-256 do trecho: `345f66589aa4c041f3f7ce16ad9369ec91a6568288ee700f1199fbd84babf0d6`.

### evaluation:480715

Chamadas escritas diretamente neste corpo: `TEXT_PREVIEWABLE_EXTENSIONS.has`, `attachmentExtension`.

SHA-256 do trecho: `345f66589aa4c041f3f7ce16ad9369ec91a6568288ee700f1199fbd84babf0d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
