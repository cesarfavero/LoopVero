# `resolveRelatedConversationsPromptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sessions/related-conversations-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538437-538471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538437-L538471) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538437-538471](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538437-L538471) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538437

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `live.filter`, `live.map`, `new Set`, `renderLinkLines`, `renderRelatedConversationsPrompt`, `section`, `seenLines.map`, `stillSeen`, `withNotes`.

SHA-256 do trecho: `850db748d499c35b99685775f348ac68a6efcfe7433d154131e38e47815667c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
