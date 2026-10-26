# `computeServerPacedDelayMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590087-590091](../../../../../../reference/runtime/sand-eval-runner.cjs#L590087-L590091) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590087-590091](../../../../../../reference/runtime/sand-eval-runner.cjs#L590087-L590091) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590087

Chamadas escritas diretamente neste corpo: `Math.min`, `Math.round`, `random2`.

SHA-256 do trecho: `b005c9a8fa9c944ea1a0bbc3f5489d6163c7f65eab67956a1098c169300e73e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
