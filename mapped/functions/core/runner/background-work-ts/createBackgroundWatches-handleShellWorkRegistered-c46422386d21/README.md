# `createBackgroundWatches/handleShellWorkRegistered`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490520-490533](../../../../../../reference/runtime/sand-eval-runner.cjs#L490520-L490533) | `ArrowFunctionExpression` | não | `record4, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490520-490533](../../../../../../reference/runtime/sand-eval-runner.cjs#L490520-L490533) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490520

Chamadas escritas diretamente neste corpo: `asyncTaskFallbackLabel`, `cancelShellRewatch`, `decodeBackgroundWorkMetadata`, `definedProvenance`, `host.getConversationId`, `host.pendingWakeArmedHandler`.

SHA-256 do trecho: `ea9e8b59afdbe6fb8c33e14ea4d773a08fd6d5dd13a17ce7b829c4fbe5085f15`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
