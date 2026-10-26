# `endSpan`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742977-742983](../../../../../../../../reference/runtime/host-main.cjs#L742977-L742983) | `FunctionDeclaration` | não | `span, outcome, timedOut, endTime` |
| [evaluation:515828-515834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515828-L515834) | `FunctionDeclaration` | não | `span, outcome, timedOut, endTime` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742977-742983](../../../../../../../../reference/runtime/host-main.cjs#L742977-L742983) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515828-515834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515828-L515834) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742977

Chamadas escritas diretamente neste corpo: `span.end`, `span.setAttributes`, `span.setStatus`.

SHA-256 do trecho: `e38fa250e598d9133141c71e04eba083a13dc563d46a5928b5fb1bbc232db009`.

### evaluation:515828

Chamadas escritas diretamente neste corpo: `span.end`, `span.setAttributes`, `span.setStatus`.

SHA-256 do trecho: `e38fa250e598d9133141c71e04eba083a13dc563d46a5928b5fb1bbc232db009`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
