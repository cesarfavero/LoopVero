# `renderRelatedConversationsPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sessions/related-conversations-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/sessions/related-conversations-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538432-538436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538432-L538436) | `FunctionDeclaration` | não | `links` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538432-538436](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538432-L538436) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538432

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `links.slice`, `renderLinkLines`.

SHA-256 do trecho: `f7b963b1d4f1b44701f8a58be9023a76fc30d7586b9428f3cfa9c941b82df637`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
