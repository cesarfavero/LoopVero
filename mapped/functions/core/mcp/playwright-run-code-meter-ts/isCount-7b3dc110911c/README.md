# `isCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-meter.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479673-479675](../../../../../../reference/runtime/sand-eval-runner.cjs#L479673-L479675) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479673-479675](../../../../../../reference/runtime/sand-eval-runner.cjs#L479673-L479675) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479673

Chamadas escritas diretamente neste corpo: `Number.isSafeInteger`.

SHA-256 do trecho: `cd3754636e384bea8afec26953e2bd74509c1c5e08903037ae759d79ac82ba4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
