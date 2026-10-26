# `clampWakeEvents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/prompt-sections/automations-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528580-528582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528580-L528582) | `FunctionDeclaration` | não | `events` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528580-528582](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528580-L528582) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528580

Chamadas escritas diretamente neste corpo: `events.slice`.

SHA-256 do trecho: `1191b939305670b0ae6ea9ea0dd6f912dd162170d4c3e5d00a31892a98ca9dfe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
