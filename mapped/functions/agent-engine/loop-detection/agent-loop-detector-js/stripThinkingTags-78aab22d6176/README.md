# `stripThinkingTags`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624625-624636](../../../../../../reference/runtime/host-main.cjs#L624625-L624636) | `FunctionDeclaration` | não | `text3` |
| [evaluation:310757-310768](../../../../../../reference/runtime/sand-eval-runner.cjs#L310757-L310768) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624625-624636](../../../../../../reference/runtime/host-main.cjs#L624625-L624636) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:310757-310768](../../../../../../reference/runtime/sand-eval-runner.cjs#L310757-L310768) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:624625

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.slice`.

Alvos de atribuição ou incremento: `startIndex`, `text3`.

SHA-256 do trecho: `8c84ebb4725f81cb7ad1f8ed60d47ffac5896ff3e09bf5d60c0b94f58324ca1c`.

### evaluation:310757

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.slice`.

Alvos de atribuição ou incremento: `startIndex`, `text3`.

SHA-256 do trecho: `8c84ebb4725f81cb7ad1f8ed60d47ffac5896ff3e09bf5d60c0b94f58324ca1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
