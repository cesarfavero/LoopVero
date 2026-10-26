# `slackAudienceLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sessions/slack-conversation-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/slack-conversation-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538280-538292](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538280-L538292) | `FunctionDeclaration` | não | `conversation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538280-538292](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538280-L538292) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:538280

Chamadas escritas diretamente neste corpo: `isDirectMessageChannel`, `privateAudience`, `sharedAudience`.

SHA-256 do trecho: `fef655131885fc3d66a45ae09794ad8613482a6f849773df8ef2fe0be03a3f18`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
