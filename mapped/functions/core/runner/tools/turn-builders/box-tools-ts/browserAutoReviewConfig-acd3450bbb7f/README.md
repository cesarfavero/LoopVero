# `browserAutoReviewConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778887-778907](../../../../../../../../reference/runtime/host-main.cjs#L778887-L778907) | `FunctionDeclaration` | não | `{   host,   turn,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |
| [evaluation:578621-578641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578621-L578641) | `FunctionDeclaration` | não | `{   host,   turn,   resolveAgentDisplay,   extractAutoReviewConversationContext: extractAutoReviewConversationContext3 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778887-778907](../../../../../../../../reference/runtime/host-main.cjs#L778887-L778907) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578621-578641](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578621-L578641) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:778887

Chamadas escritas diretamente neste corpo: `host.getAutoReviewInstructions`, `host.getConversationId`, `host.resolveBoxId`, `resolveAgentDisplay`.

SHA-256 do trecho: `a255b8043bde9005a043b6416482882f7051bd4d3e6a8c06ad8debba66437e98`.

### evaluation:578621

Chamadas escritas diretamente neste corpo: `host.getAutoReviewInstructions`, `host.getConversationId`, `host.resolveBoxId`, `resolveAgentDisplay`.

SHA-256 do trecho: `a255b8043bde9005a043b6416482882f7051bd4d3e6a8c06ad8debba66437e98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
