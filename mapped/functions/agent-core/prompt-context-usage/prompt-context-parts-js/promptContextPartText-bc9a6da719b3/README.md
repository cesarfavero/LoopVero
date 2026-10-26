# `promptContextPartText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476261-476272](../../../../../../reference/runtime/host-main.cjs#L476261-L476272) | `FunctionDeclaration` | não | `part` |
| [evaluation:255571-255582](../../../../../../reference/runtime/sand-eval-runner.cjs#L255571-L255582) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476261-476272](../../../../../../reference/runtime/host-main.cjs#L476261-L476272) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:255571-255582](../../../../../../reference/runtime/sand-eval-runner.cjs#L255571-L255582) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:476261

Chamadas escritas diretamente neste corpo: `text3.slice`.

Alvos de atribuição ou incremento: `joined`.

SHA-256 do trecho: `ddb4e5e2d4d591a2c34af65ce29e7dd87036645e5403a5ff7d6fdf19602f4266`.

### evaluation:255571

Chamadas escritas diretamente neste corpo: `text3.slice`.

Alvos de atribuição ou incremento: `joined2`.

SHA-256 do trecho: `7f9226f92156f8f2f7ba76d17b2c017d923d31b9e8236cf3f193da561c46ef83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
