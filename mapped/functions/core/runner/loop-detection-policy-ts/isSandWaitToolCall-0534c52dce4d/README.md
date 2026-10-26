# `isSandWaitToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483297-483307](../../../../../../reference/runtime/sand-eval-runner.cjs#L483297-L483307) | `FunctionDeclaration` | não | `toolName, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483297-483307](../../../../../../reference/runtime/sand-eval-runner.cjs#L483297-L483307) | 5 | 0 | 0 | 5 | 0 | 0 |

### evaluation:483297

Chamadas escritas diretamente neste corpo: `SHELL_SLEEP_PATTERN.test`, `isWaitComputerAction`, `resolveEffectiveToolCall`.

SHA-256 do trecho: `6768089ce5778f866328fbb05a71b6c82a6034a650184a0624ee3d1f6d2ee81e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
