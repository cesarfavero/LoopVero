# `SandRunAbortError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/run-abort-reason.ts` · [README do módulo](../../../../../modules/core/runner/run-abort-reason-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:554067-554077](../../../../../../reference/runtime/sand-eval-runner.cjs#L554067-L554077) | `method` | não | `{     intentional,     reason,     completedToolCallId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554067-554077](../../../../../../reference/runtime/sand-eval-runner.cjs#L554067-L554077) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:554067

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.completedToolCallId`, `this.intentional`, `this.name`, `this.reason`.

SHA-256 do trecho: `f70b509705eb80bfc10808bf74fad84469cfd235dd220bdf578caaee37376468`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
