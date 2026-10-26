# `isInputTokenLimitErrorMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294607-294610](../../../../../reference/runtime/sand-eval-runner.cjs#L294607-L294610) | `FunctionDeclaration` | não | `errorMessage4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294607-294610](../../../../../reference/runtime/sand-eval-runner.cjs#L294607-L294610) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294607

Chamadas escritas diretamente neste corpo: `errorMessage4.toLowerCase`, `isObservedInputTokenLimitMessage`.

SHA-256 do trecho: `d3b27947459280fb819db5ce933250d512434399e4a9016137555a4fa5778047`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
