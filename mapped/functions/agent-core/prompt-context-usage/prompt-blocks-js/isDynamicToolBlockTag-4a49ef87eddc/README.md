# `isDynamicToolBlockTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476147-476149](../../../../../../reference/runtime/host-main.cjs#L476147-L476149) | `FunctionDeclaration` | não | `tagName2` |
| [evaluation:255457-255459](../../../../../../reference/runtime/sand-eval-runner.cjs#L255457-L255459) | `FunctionDeclaration` | não | `tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476147-476149](../../../../../../reference/runtime/host-main.cjs#L476147-L476149) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255457-255459](../../../../../../reference/runtime/sand-eval-runner.cjs#L255457-L255459) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476147

Chamadas escritas diretamente neste corpo: `tagName2.startsWith`.

SHA-256 do trecho: `d7994c08da08649f7899d9acb54ad36c8f90e6bbb5a1e9d27863956550deef6c`.

### evaluation:255457

Chamadas escritas diretamente neste corpo: `tagName.startsWith`.

SHA-256 do trecho: `676a239bbda1d9374591e27dd0b9820a89fb968f2311db8dd5d9bbfb15482f28`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
