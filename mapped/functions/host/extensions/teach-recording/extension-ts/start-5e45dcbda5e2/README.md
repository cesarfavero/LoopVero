# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729647-729701](../../../../../../../reference/runtime/host-main.cjs#L729647-L729701) | `ArrowFunctionExpression` | sim | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729647-729701](../../../../../../../reference/runtime/host-main.cjs#L729647-L729701) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729647

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createDebouncePolicy`, `createLearningPromptSender`, `createSandCursorBackendClient`, `createTeachRecordingService`, `new AbortController`, `schedulePendingRecovery`.

SHA-256 do trecho: `8b342d141588fc6d3e9b2e87dcffb567539c9d6973693a13a7b5bcb07bfc1f98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
