# `isInputTokenCountExceededMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/token-limit-error-classification.js` · [README do módulo](../../../../modules/chat-inference/token-limit-error-classification-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:294543-294545](../../../../../reference/runtime/sand-eval-runner.cjs#L294543-L294545) | `FunctionDeclaration` | não | `lowerMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294543-294545](../../../../../reference/runtime/sand-eval-runner.cjs#L294543-L294545) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294543

Chamadas escritas diretamente neste corpo: `lowerMessage.includes`.

SHA-256 do trecho: `e35e78921ecd4a7b718c8e111bfcfe2040f3783e7065de0b905ed3d246d8e32f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
