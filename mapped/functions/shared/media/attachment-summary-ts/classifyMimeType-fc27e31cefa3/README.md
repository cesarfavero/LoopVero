# `classifyMimeType`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `shared/media/attachment-summary.ts` · [README do módulo](../../../../../modules/shared/media/attachment-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541855-541868](../../../../../../reference/runtime/host-main.cjs#L541855-L541868) | `FunctionDeclaration` | não | `rawMimeType` |
| [evaluation:480871-480884](../../../../../../reference/runtime/sand-eval-runner.cjs#L480871-L480884) | `FunctionDeclaration` | não | `rawMimeType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541855-541868](../../../../../../reference/runtime/host-main.cjs#L541855-L541868) | 10 | 0 | 0 | 11 | 0 | 0 |
| [evaluation:480871-480884](../../../../../../reference/runtime/sand-eval-runner.cjs#L480871-L480884) | 10 | 0 | 0 | 11 | 0 | 0 |

### host:541855

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.trim`, `ARCHIVE_MIME_TYPES.has`, `DOCUMENT_MIME_TYPES.has`, `TABLE_MIME_TYPES.has`, `mime2.endsWith`, `mime2.startsWith`, `rawMimeType.split`.

SHA-256 do trecho: `3f4cb60895ee38cebe5c335dca55e9d86dbc06a5f0516ade8f4877e98c86e650`.

### evaluation:480871

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.trim`, `ARCHIVE_MIME_TYPES.has`, `DOCUMENT_MIME_TYPES.has`, `TABLE_MIME_TYPES.has`, `mime2.endsWith`, `mime2.startsWith`, `rawMimeType.split`.

SHA-256 do trecho: `3f4cb60895ee38cebe5c335dca55e9d86dbc06a5f0516ade8f4877e98c86e650`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
