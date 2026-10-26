# `untrustedPageDriverReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769359-769361](../../../../../../../../reference/runtime/host-main.cjs#L769359-L769361) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:565006-565008](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565006-L565008) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769359-769361](../../../../../../../../reference/runtime/host-main.cjs#L769359-L769361) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565006-565008](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565006-L565008) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:769359

Chamadas escritas diretamente neste corpo: `agentKindOf`, `sandHistoryReadReviewer`.

SHA-256 do trecho: `ec996dd0448521382321ac24b9bb5aafcb4a4b4216a06ef44ac0118d018e0afa`.

### evaluation:565006

Chamadas escritas diretamente neste corpo: `agentKindOf`, `sandHistoryReadReviewer`.

SHA-256 do trecho: `ec996dd0448521382321ac24b9bb5aafcb4a4b4216a06ef44ac0118d018e0afa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
