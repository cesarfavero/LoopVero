# `createBackgroundWatches/handleShellCompletionItem`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490534-490550](../../../../../../reference/runtime/sand-eval-runner.cjs#L490534-L490550) | `ArrowFunctionExpression` | não | `item, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490534-490550](../../../../../../reference/runtime/sand-eval-runner.cjs#L490534-L490550) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490534

Chamadas escritas diretamente neste corpo: `definedProvenance`, `handler`, `host.backgroundShellSettledHandler`, `host.getConversationId`, `notifyShellWorkChanged`.

SHA-256 do trecho: `74c1afe917fbc73797caba01e8213921dcced6dc842de7d863ed2d580fe9a58c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
