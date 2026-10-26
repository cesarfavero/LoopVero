# `resolveAgentInboxDraft`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755332-755362](../../../../../../../reference/runtime/host-main.cjs#L755332-L755362) | `FunctionDeclaration` | sim | `agentInbox, draft, attachments` |
| [evaluation:541212-541242](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541212-L541242) | `FunctionDeclaration` | sim | `agentInbox, draft, attachments` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755332-755362](../../../../../../../reference/runtime/host-main.cjs#L755332-L755362) | 3 | 0 | 1 | 1 | 2 | 0 |
| [evaluation:541212-541242](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541212-L541242) | 3 | 0 | 1 | 1 | 2 | 0 |

### host:755332

Chamadas escritas diretamente neste corpo: `agentInbox.getAgentDir`, `invariant`, `new DraftRefusedError`, `nonEmpty4`, `resolution.reason.replace`, `verifyAgentInboxDraft`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `7baf74c83157b11627fe45a6a5da025be68a71eca4e58bb14fc6461b19d2ec0b`.

### evaluation:541212

Chamadas escritas diretamente neste corpo: `agentInbox.getAgentDir`, `invariant`, `new DraftRefusedError`, `nonEmpty2`, `resolution.reason.replace`, `verifyAgentInboxDraft`.

Alvos de lançamento explícito: `DraftRefusedError`.

SHA-256 do trecho: `50592654c286cd2984772c450e0cc4b2b70bd39e671d8fcf691fe9f5df5c3d0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
