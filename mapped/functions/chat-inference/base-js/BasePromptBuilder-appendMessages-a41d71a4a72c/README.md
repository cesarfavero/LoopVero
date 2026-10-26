# `BasePromptBuilder.appendMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/base.js` · [README do módulo](../../../../modules/chat-inference/base-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:285996-286000](../../../../../reference/runtime/sand-eval-runner.cjs#L285996-L286000) | `method` | não | `newMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285996-286000](../../../../../reference/runtime/sand-eval-runner.cjs#L285996-L286000) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:285996

Chamadas escritas diretamente neste corpo: `Array.isArray`, `this.messages.push`.

SHA-256 do trecho: `0ae79b51d8a791ed369570e66de62632882b423d73145394a2e160712fe39530`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
