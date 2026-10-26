# `scanOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/captcha/captcha-telemetry.ts` · [README do módulo](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489623-489644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489623-L489644) | `FunctionDeclaration` | não | `outcome, rawChallenges, rawTokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489623-489644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489623-L489644) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:489623

Chamadas escritas diretamente neste corpo: `Array.isArray`, `challenges.push`, `isOneOf3`, `isUnknownRecord2`, `new Set`, `seenChallenges.add`, `seenChallenges.has`, `tokenEntries.filter`.

SHA-256 do trecho: `37e2b74da6b6e08867ae020e925da16cd2516de9ec2721fd4fccfccc8bfff745`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
