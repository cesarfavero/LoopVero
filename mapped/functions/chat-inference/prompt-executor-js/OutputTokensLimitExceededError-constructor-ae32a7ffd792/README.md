# `OutputTokensLimitExceededError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/prompt-executor.js` · [README do módulo](../../../../modules/chat-inference/prompt-executor-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:618009-618012](../../../../../reference/runtime/host-main.cjs#L618009-L618012) | `method` | não | `message = "Provider exceeded max output tokens"` |
| [evaluation:287380-287383](../../../../../reference/runtime/sand-eval-runner.cjs#L287380-L287383) | `method` | não | `message = "Provider exceeded max output tokens"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:618009-618012](../../../../../reference/runtime/host-main.cjs#L618009-L618012) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:287380-287383](../../../../../reference/runtime/sand-eval-runner.cjs#L287380-L287383) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:618009

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `dc21a40c4f7e1e3d8726215c07e06a4a4be435e2329c8b5b969ed62ceb60edac`.

### evaluation:287380

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `dc21a40c4f7e1e3d8726215c07e06a4a4be435e2329c8b5b969ed62ceb60edac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
