# `carriedText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-usage-nodes.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-usage-nodes-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476435-476444](../../../../../../reference/runtime/host-main.cjs#L476435-L476444) | `FunctionDeclaration` | não | `carrier, text3` |
| [evaluation:255742-255751](../../../../../../reference/runtime/sand-eval-runner.cjs#L255742-L255751) | `FunctionDeclaration` | não | `carrier, text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476435-476444](../../../../../../reference/runtime/host-main.cjs#L476435-L476444) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:255742-255751](../../../../../../reference/runtime/sand-eval-runner.cjs#L255742-L255751) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:476435

Chamadas escritas diretamente neste corpo: `text3.slice`.

SHA-256 do trecho: `c86cf7295725940b761e430d3f5e87ecfcc6ff563fba91b03e02b6f31caf167c`.

### evaluation:255742

Chamadas escritas diretamente neste corpo: `text3.slice`.

SHA-256 do trecho: `c86cf7295725940b761e430d3f5e87ecfcc6ff563fba91b03e02b6f31caf167c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
