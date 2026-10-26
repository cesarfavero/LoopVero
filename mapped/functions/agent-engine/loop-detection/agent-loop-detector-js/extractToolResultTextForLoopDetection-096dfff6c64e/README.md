# `extractToolResultTextForLoopDetection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310770-310808](../../../../../../reference/runtime/sand-eval-runner.cjs#L310770-L310808) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310770-310808](../../../../../../reference/runtime/sand-eval-runner.cjs#L310770-L310808) | 12 | 1 | 0 | 6 | 0 | 1 |

### evaluation:310770

Chamadas escritas diretamente neste corpo: `.slice`, `Array.isArray`, `JSON.stringify`, `String`, `data2.slice`, `imageTokens.slice`, `result.slice`, `text3.slice`.

Alvos de atribuição ou incremento: `imageTokens`, `text3`.

SHA-256 do trecho: `c1b4e805618db5fa8c9de1e880f508e1105e87e847531da4d0357d75fae88f22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
