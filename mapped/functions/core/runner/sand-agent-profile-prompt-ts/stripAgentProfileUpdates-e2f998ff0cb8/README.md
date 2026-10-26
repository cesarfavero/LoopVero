# `stripAgentProfileUpdates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-agent-profile-prompt.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717287-717294](../../../../../../reference/runtime/host-main.cjs#L717287-L717294) | `FunctionDeclaration` | não | `text3` |
| [evaluation:529821-529828](../../../../../../reference/runtime/sand-eval-runner.cjs#L529821-L529828) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717287-717294](../../../../../../reference/runtime/host-main.cjs#L717287-L717294) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:529821-529828](../../../../../../reference/runtime/sand-eval-runner.cjs#L529821-L529828) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:717287

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `includesAgentProfileUpdateMarker`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 do trecho: `b5dd95f93a02bca2fdec3422222a06726cdcb9e1468f60d36f555d75a8c3fe42`.

### evaluation:529821

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `includesAgentProfileUpdateMarker`, `stripped.replace`, `text3.includes`, `text3.replace`.

SHA-256 do trecho: `b5dd95f93a02bca2fdec3422222a06726cdcb9e1468f60d36f555d75a8c3fe42`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
