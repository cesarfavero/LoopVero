# `attachmentUrlLooksLikeAudio`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741193-741195](../../../../../../../reference/runtime/host-main.cjs#L741193-L741195) | `FunctionDeclaration` | não | `url2` |
| [evaluation:482140-482142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482140-L482142) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741193-741195](../../../../../../../reference/runtime/host-main.cjs#L741193-L741195) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482140-482142](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482140-L482142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:741193

Chamadas escritas diretamente neste corpo: `AUDIO_ATTACHMENT_PATH_PATTERN.test`.

SHA-256 do trecho: `e7715ed685b0774f1706c37d1fcc2438c1cac01bb7ab3e9fbd61a46676944a69`.

### evaluation:482140

Chamadas escritas diretamente neste corpo: `AUDIO_ATTACHMENT_PATH_PATTERN.test`.

SHA-256 do trecho: `e7715ed685b0774f1706c37d1fcc2438c1cac01bb7ab3e9fbd61a46676944a69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
