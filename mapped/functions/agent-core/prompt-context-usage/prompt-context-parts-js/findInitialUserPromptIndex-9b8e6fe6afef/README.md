# `findInitialUserPromptIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476273-476281](../../../../../../reference/runtime/host-main.cjs#L476273-L476281) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:255583-255591](../../../../../../reference/runtime/sand-eval-runner.cjs#L255583-L255591) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476273-476281](../../../../../../reference/runtime/host-main.cjs#L476273-L476281) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255583-255591](../../../../../../reference/runtime/sand-eval-runner.cjs#L255583-L255591) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:476273

Chamadas escritas diretamente neste corpo: `settlesInitialUserPrompt`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `465e83552c9ad9e0a6822f55137e102cf4f7da7442eb04b3efef649e117c4960`.

### evaluation:255583

Chamadas escritas diretamente neste corpo: `settlesInitialUserPrompt`.

Alvos de atribuição ou incremento: `index`.

SHA-256 do trecho: `27412c8bfadab43868498bb74cfabd0cf52ab7308efa2f3113c4be29f7afebb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
