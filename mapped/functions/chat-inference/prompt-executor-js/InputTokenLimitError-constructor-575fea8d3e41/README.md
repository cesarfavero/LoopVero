# `InputTokenLimitError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/prompt-executor.js` · [README do módulo](../../../../modules/chat-inference/prompt-executor-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:618015-618018](../../../../../reference/runtime/host-main.cjs#L618015-L618018) | `method` | não | `message = "Input token limit exceeded"` |
| [evaluation:287386-287389](../../../../../reference/runtime/sand-eval-runner.cjs#L287386-L287389) | `method` | não | `message = "Input token limit exceeded"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618015-618018](../../../../../reference/runtime/host-main.cjs#L618015-L618018) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:287386-287389](../../../../../reference/runtime/sand-eval-runner.cjs#L287386-L287389) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:618015

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `b3628b39f14ea50444fd5193f5ef1f1e7b205572285e0f4bcb28dc7035c8ebeb`.

### evaluation:287386

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `b3628b39f14ea50444fd5193f5ef1f1e7b205572285e0f4bcb28dc7035c8ebeb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
