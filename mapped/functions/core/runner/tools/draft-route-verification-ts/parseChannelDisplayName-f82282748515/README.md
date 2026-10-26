# `parseChannelDisplayName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-route-verification.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:735124-735130](../../../../../../../reference/runtime/host-main.cjs#L735124-L735130) | `FunctionDeclaration` | não | `resultText` |
| [evaluation:540698-540704](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540698-L540704) | `FunctionDeclaration` | não | `resultText` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735124-735130](../../../../../../../reference/runtime/host-main.cjs#L735124-L735130) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540698-540704](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540698-L540704) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:735124

Chamadas escritas diretamente neste corpo: `/^Channel:\s*(.+?)\s*\(([^)]+)\)/.exec`, `slackReadMessages`.

SHA-256 do trecho: `10d2494a3742b13b6c532232bb31cbe7ebab8ee6ac0bdd6114d455963b550eab`.

### evaluation:540698

Chamadas escritas diretamente neste corpo: `/^Channel:\s*(.+?)\s*\(([^)]+)\)/.exec`, `slackReadMessages`.

SHA-256 do trecho: `10d2494a3742b13b6c532232bb31cbe7ebab8ee6ac0bdd6114d455963b550eab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
