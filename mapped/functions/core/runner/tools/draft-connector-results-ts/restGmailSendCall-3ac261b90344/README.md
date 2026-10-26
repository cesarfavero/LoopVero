# `restGmailSendCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732837-732854](../../../../../../../reference/runtime/host-main.cjs#L732837-L732854) | `FunctionDeclaration` | não | `route, draft, { recipients, sendingAddress }` |
| [evaluation:540359-540376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540359-L540376) | `FunctionDeclaration` | não | `route, draft, { recipients, sendingAddress }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732837-732854](../../../../../../../reference/runtime/host-main.cjs#L732837-L732854) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540359-540376](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540359-L540376) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:732837

Chamadas escritas diretamente neste corpo: `draft.cc.join`, `draft.to.join`, `inertDraftText`, `signedGmailBodies`.

SHA-256 do trecho: `e066bde2e12bfd0fdf51c98978e7463dae85b1d59237a97a47957decb2c2a672`.

### evaluation:540359

Chamadas escritas diretamente neste corpo: `draft.cc.join`, `draft.to.join`, `inertDraftText`, `signedGmailBodies`.

SHA-256 do trecho: `e066bde2e12bfd0fdf51c98978e7463dae85b1d59237a97a47957decb2c2a672`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
