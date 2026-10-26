# `resolveSandStreamTuning`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/stream-tuning.ts` · [README do módulo](../../../../../modules/core/runner/stream-tuning-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494049-494068](../../../../../../reference/runtime/host-main.cjs#L494049-L494068) | `FunctionDeclaration` | não | `env, base = SAND_DEFAULT_STREAM_TUNING` |
| [evaluation:596975-596994](../../../../../../reference/runtime/sand-eval-runner.cjs#L596975-L596994) | `FunctionDeclaration` | não | `env, base = SAND_DEFAULT_STREAM_TUNING` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494049-494068](../../../../../../reference/runtime/host-main.cjs#L494049-L494068) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:596975-596994](../../../../../../reference/runtime/sand-eval-runner.cjs#L596975-L596994) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494049

Chamadas escritas diretamente neste corpo: `readIntEnv`.

SHA-256 do trecho: `7128b497553c21dc8b56775a00f9475ea3a79690a1727001f8c283fcbb1587e9`.

### evaluation:596975

Chamadas escritas diretamente neste corpo: `readIntEnv`.

SHA-256 do trecho: `7128b497553c21dc8b56775a00f9475ea3a79690a1727001f8c283fcbb1587e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
