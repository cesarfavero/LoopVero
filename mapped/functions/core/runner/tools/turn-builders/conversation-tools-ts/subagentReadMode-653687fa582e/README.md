# `subagentReadMode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769362-769372](../../../../../../../../reference/runtime/host-main.cjs#L769362-L769372) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:565009-565019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565009-L565019) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769362-769372](../../../../../../../../reference/runtime/host-main.cjs#L769362-L769372) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565009-565019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565009-L565019) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:769362

Chamadas escritas diretamente neste corpo: `agentKindOf`, `isSandSubagentHistoryKind`, `untrustedPageDriverReview`.

SHA-256 do trecho: `d6493b74c92b3a8518b94141641759f33eae82c100e7dec269c2b58c9df3dd3c`.

### evaluation:565009

Chamadas escritas diretamente neste corpo: `agentKindOf`, `isSandSubagentHistoryKind`, `untrustedPageDriverReview`.

SHA-256 do trecho: `d6493b74c92b3a8518b94141641759f33eae82c100e7dec269c2b58c9df3dd3c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
