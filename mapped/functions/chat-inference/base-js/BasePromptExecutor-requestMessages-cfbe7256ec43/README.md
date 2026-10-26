# `BasePromptExecutor.requestMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/base.js` · [README do módulo](../../../../modules/chat-inference/base-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:286036-286040](../../../../../reference/runtime/sand-eval-runner.cjs#L286036-L286040) | `method` | não | `{ nativeStepScopedSystemMessages = false } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:286036-286040](../../../../../reference/runtime/sand-eval-runner.cjs#L286036-L286040) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:286036

Chamadas escritas diretamente neste corpo: `.map`, `renderStepScopedSystemMessages`, `this.builder.getMessages`.

SHA-256 do trecho: `0c2f608a8d5b856ee47eb5ae57e97e3a2c6f7875d13a26776a4337e2200764b3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
