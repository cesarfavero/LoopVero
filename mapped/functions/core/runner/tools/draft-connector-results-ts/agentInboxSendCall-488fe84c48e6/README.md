# `agentInboxSendCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732791-732817](../../../../../../../reference/runtime/host-main.cjs#L732791-L732817) | `FunctionDeclaration` | não | `route, draft, sendingAddress` |
| [evaluation:540313-540339](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540313-L540339) | `FunctionDeclaration` | não | `route, draft, sendingAddress` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732791-732817](../../../../../../../reference/runtime/host-main.cjs#L732791-L732817) | 7 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540313-540339](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540313-L540339) | 7 | 0 | 0 | 1 | 0 | 0 |

### host:732791

Chamadas escritas diretamente neste corpo: `.join`, `attachments.map`, `draft.to.join`, `emailHtmlNonTextTag`, `inertDraftText`, `sameBodyText`.

SHA-256 do trecho: `375044047d834a54908c219959b531fd4b14689dfb06c3a48a53223a7958b937`.

### evaluation:540313

Chamadas escritas diretamente neste corpo: `.join`, `attachments.map`, `draft.to.join`, `emailHtmlNonTextTag`, `inertDraftText`, `sameBodyText`.

SHA-256 do trecho: `375044047d834a54908c219959b531fd4b14689dfb06c3a48a53223a7958b937`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
