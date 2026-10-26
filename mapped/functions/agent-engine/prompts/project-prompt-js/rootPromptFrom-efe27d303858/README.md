# `rootPromptFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641168-641173](../../../../../../reference/runtime/host-main.cjs#L641168-L641173) | `FunctionDeclaration` | não | `body, options2` |
| [evaluation:431781-431786](../../../../../../reference/runtime/sand-eval-runner.cjs#L431781-L431786) | `FunctionDeclaration` | não | `body, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641168-641173](../../../../../../reference/runtime/host-main.cjs#L641168-L641173) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431781-431786](../../../../../../reference/runtime/sand-eval-runner.cjs#L431781-L431786) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:641168

Chamadas escritas diretamente neste corpo: `.join`, `capabilitySections`.

SHA-256 do trecho: `5045763f1d910591bd41fc25f48b0db61c75c1eb30509486e5ee31e68f8c3465`.

### evaluation:431781

Chamadas escritas diretamente neste corpo: `.join`, `capabilitySections`.

SHA-256 do trecho: `5045763f1d910591bd41fc25f48b0db61c75c1eb30509486e5ee31e68f8c3465`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
