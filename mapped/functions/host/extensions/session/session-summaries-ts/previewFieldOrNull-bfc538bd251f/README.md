# `previewFieldOrNull`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722585-722599](../../../../../../../reference/runtime/host-main.cjs#L722585-L722599) | `FunctionDeclaration` | não | `agentId, derive` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722585-722599](../../../../../../../reference/runtime/host-main.cjs#L722585-L722599) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:722585

Chamadas escritas diretamente neste corpo: `derive`, `errorLogTag`, `reportHostDiagnostic`, `reportedPreviewDegradations.add`, `reportedPreviewDegradations.has`.

SHA-256 do trecho: `56814459e8509888d814d5658a2a9ada9ad0e33d78c8fc28ee868c3174b57e8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
