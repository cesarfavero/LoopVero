# `createErrorFreeStepTracker/settle2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/error-free-step/error-free-step.ts` · [README do módulo](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:589035-589040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589035-L589040) | `FunctionDeclaration` | não | `turn, verdict` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589035-589040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589035-L589040) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:589035

Chamadas escritas diretamente neste corpo: `emit`, `turn.timer.dispose`.

Alvos de atribuição ou incremento: `pending`, `turn.settled`.

SHA-256 do trecho: `d35f4f599cfaef7b330bf869264c2cccbb1ee6efad1edcaf61ec6b01f7d330da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
