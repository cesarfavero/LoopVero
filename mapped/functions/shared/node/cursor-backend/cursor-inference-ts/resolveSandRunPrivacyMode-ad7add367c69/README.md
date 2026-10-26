# `resolveSandRunPrivacyMode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/inference/README.md).

**Módulo:** `shared/node/cursor-backend/cursor-inference.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512007-512046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512007-L512046) | `FunctionDeclaration` | sim | `options2, fetchPrivacyMode = fetchSandPrivacyMode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512007-512046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L512007-L512046) | 9 | 0 | 3 | 4 | 0 | 1 |

### evaluation:512007

Chamadas escritas diretamente neste corpo: `Promise.all`, `accountScopeOfToken`, `options2.getAccessToken`, `options2.getMachineId`, `options2.getTeamId`, `resolveCachedSandPrivacyMode`, `sandRunPrivacyModeFallback`.

SHA-256 do trecho: `4fbde7587c841758703c3595a3490e066d005c034feecbb2c8cd08b56dd4494e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
